/**
 * CORE ANIMATIONS & SCROLL TRIGGER CONFIGURATION - COSMIC PORTFOLIO PROJECT
 * 
 * Lắp ráp và cấu hình toàn bộ hoạt cảnh GSAP cốt lõi:
 * - Preloader: Vòng tròn tiến trình tải boot-up Hyperdrive.
 * - Hero Timeline Pin: Ghim màn hình buồng lái và kích hoạt nhật ký cuộn.
 * - Planet Parallax: Di chuyển tinh cầu đa chiều ở đáy trang.
 * - Hexagonal Skill Dash: Nạp dung lượng năng lực SVG lục giác khi nhìn thấy.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from './portfolioData.js';
import { initTypewriter } from './text-fx.js';

// Đăng ký Plugin ScrollTrigger bắt buộc với GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * 1. HOẠT CẢNH BOOT-UP CỦA BỘ TẢI TRANG PRELOADER
 */
/**
 * Loại bỏ nền đen của ảnh bằng canvas để tạo ảnh trong suốt (PNG alpha) thực sự
 * Tránh lỗi viền hộp đen phát sáng do bộ lọc drop-shadow
 */
function removeBlackBackground(imgEl, threshold = 35) {
  if (!imgEl) return;

  const processImage = () => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = imgEl.naturalWidth;
      canvas.height = imgEl.naturalHeight;
      ctx.drawImage(imgEl, 0, 0);
      
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const maxVal = Math.max(r, g, b);
        
        if (maxVal < threshold) {
          data[i + 3] = 0;
        } else if (maxVal < threshold * 2.5) {
          const ratio = (maxVal - threshold) / (threshold * 1.5);
          data[i + 3] = Math.round(data[i + 3] * ratio);
        }
      }
      ctx.putImageData(imgData, 0, 0);
      imgEl.removeEventListener('load', processImage);
      imgEl.src = canvas.toDataURL('image/png');
    } catch (e) {
      console.warn("Không thể xóa nền ảnh trong preloader:", e);
    }
  };

  if (imgEl.complete && imgEl.naturalWidth > 0) {
    processImage();
  } else {
    imgEl.addEventListener('load', processImage);
  }
}

export function initPreloader(onCompleteCallback) {
  // Bật chế độ phục hồi cuộn trang thủ công để tránh giật lag nhảy vị trí khi reload
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Khóa cuộn trang và đưa về đầu trang ngay từ lúc tải
  document.body.classList.add('loading-lock');
  window.scrollTo(0, 0);

  const preloader = document.getElementById('preloader');
  const fill = document.getElementById('preloader-fill');
  const ship = document.getElementById('preloader-ship-indicator');
  const pctText = document.getElementById('preloader-pct');
  const statusText = document.querySelector('.preloader-status');
  
  if (!preloader || !fill || !ship || !pctText) {
    document.body.classList.remove('loading-lock');
    if (onCompleteCallback) onCompleteCallback();
    return;
  }

  // Lọc bỏ nền đen của ảnh phi thuyền trong bộ tải để đảm bảo đổ bóng đúng hình dáng phi thuyền
  const shipImg = ship.querySelector('img');
  if (shipImg) {
    removeBlackBackground(shipImg, 35);
  }

  // Khởi tạo tiến trình ảo
  const progressObj = { value: 0 };

  // Dịch trạng thái nạp năng lượng tương ứng theo tiến trình %
  const getStatusText = (pct) => {
    if (pct < 15) return '// INITIALIZING HYPERDRIVE ENGINES...';
    if (pct < 35) return '// ROUTING INTERSTELLAR NAV-VECTORS...';
    if (pct < 60) return '// CHARGING DEEP-SPACE PLASMA CORES...';
    if (pct < 85) return '// SYNCING COCKPIT HOLOGRAPHIC HUD...';
    if (pct < 98) return '// SECURING QUANTUM SHIELDS...';
    return '// WARP SPEED CHRONOMETER READY. ENGAGE!';
  };

  gsap.to(progressObj, {
    value: 100,
    duration: 2.6, // Thời gian chạy mô phỏng tải trang mượt mà
    ease: 'power2.out',
    onUpdate: () => {
      const pct = Math.floor(progressObj.value);
      pctText.textContent = `${pct}%`;

      // Cập nhật thanh trượt tiến trình và vị trí phi thuyền bay qua
      fill.style.width = `${pct}%`;
      ship.style.left = `${pct}%`;

      // Cập nhật dòng chữ trạng thái nạp hệ thống
      if (statusText) {
        statusText.textContent = getStatusText(pct);
      }
    },
    onComplete: () => {
      // Nháy nhẹ màn hình khi Hyperdrive khởi chạy xong
      gsap.timeline()
        .to(preloader, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            preloader.classList.add('hidden');
            // Mở khóa cuộn trang và định vị bắt buộc ở trang chính
            document.body.classList.remove('loading-lock');
            window.scrollTo(0, 0);

            // Làm mới ScrollTrigger để cập nhật lại toàn bộ tọa độ cuộn chính xác sau khi mở khóa
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 100);

            if (onCompleteCallback) onCompleteCallback();
          }
        });
    }
  });
}

/**
 * 2. CẤU HÌNH CÁC HOẠT CẢNH CUỘN TRANG GSAP SCROLLTRIGGER
 */
export function initScrollAnimations() {

  // A. HERO CARDS EXIT — ĐÃ BỎ HIỆU ỨNG THOÁT RA THEO YÊU CẦU CỦA NGƯỜI DÙNG

  // B. UNIFIED SCROLL ANIMATIONS FOR BOTH DESKTOP & MOBILE
  // Đã chuyển sang Intersection Observer và CSS Transitions cho project-card-wrapper và Section 3 blocks để đạt độ ổn định 100%

  // C. PARALLAX PLANET (TINH CẦU ĐÁY TRANG)
  gsap.to('.planet-parallax-container', {
    y: -250,
    scale: 1.2,
    rotation: 45,
    scrollTrigger: {
      trigger: '#summary',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0.8
    }
  });

  // Tự động tính toán lại vị trí ScrollTrigger sau khi dữ liệu DOM động đã được vẽ xong và ổn định chiều cao
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 450);
}

/**
 * 3. HOẠT CẢNH MỞ MÀN HERO COCKPIT (ENTRANCE ANIMATIONS)
 * CHỈ hoạt cảnh các phần tử Hero Section 1 đang hiển thị trên màn hình.
 * KHÔNG chạm vào Section 2 và Section 3 — chúng đã được render trực tiếp bởi JS
 * và phải luôn hiển thị sẵn sàng khi người dùng cuộn tới.
 */
export function triggerHeroEntranceAnimation(onCardsReveal) {
  const tl = gsap.timeline();
  
  tl.from('.hero-main-title p', {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  })
  .from('#pilot-name', {
    scale: 0.8,
    opacity: 0,
    duration: 1.0,
    ease: 'back.out(1.5)'
  }, '-=0.6')
  .from('#hero .hologram-card', {
    y: 40,
    opacity: 0,
    stagger: 0, // Synchronous fade-in for all cards
    duration: 1.0,
    ease: 'power3.out',
    onStart: () => {
      if (onCardsReveal) onCardsReveal();
    }
  }, '-=0.4');

  // Đảm bảo tuyệt đối tiêu đề và các phần khác luôn hiển thị rõ ràng
  gsap.set('#projects .section-title-wrapper, #summary .section-title-wrapper, .skills-hexagon-area', {
    opacity: 1,
    y: 0,
    clearProps: 'transform'
  });
}

/**
 * 4. HOẠT CẢNH CUỘN TRANG BẰNG NATIVE INTERSECTION OBSERVER
 * Tự động kích hoạt hiển thị cho các phần tử có lớp .scroll-reveal khi đi vào khung nhìn.
 * Đạt độ tin cậy tuyệt đối 100%, không bị ảnh hưởng bởi lỗi kẹt tọa độ của ScrollTrigger.
 */
export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length === 0) return;

  // Hỗ trợ dự phòng (fallback) nếu trình duyệt cũ không có Intersection Observer
  if (!window.IntersectionObserver) {
    revealElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Chỉ kích hoạt hoạt cảnh 1 lần duy nhất (tương đương once: true)
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -5% 0px', // Kích hoạt khi cách đáy màn hình 5%
    threshold: 0.05
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });
}
