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
export function initPreloader(onCompleteCallback) {
  // Bật chế độ phục hồi cuộn trang thủ công để tránh giật lag nhảy vị trí khi reload
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Khóa cuộn trang và đưa về đầu trang ngay từ lúc tải
  document.body.classList.add('loading-lock');
  window.scrollTo(0, 0);

  const preloader = document.getElementById('preloader');
  const ringProgress = document.querySelector('.preloader-ring-progress');
  const pctText = document.querySelector('.preloader-pct');
  
  if (!preloader || !ringProgress || !pctText) {
    document.body.classList.remove('loading-lock');
    if (onCompleteCallback) onCompleteCallback();
    return;
  }

  // Khởi tạo vòng tiến trình ảo
  const progressObj = { value: 0 };
  const circumference = 283; // 2 * Math.PI * 45 (chu vi vòng)

  gsap.to(progressObj, {
    value: 100,
    duration: 2.2, // Thời gian chạy tải mô phỏng đẹp mắt
    ease: 'power2.out',
    onUpdate: () => {
      const pct = Math.floor(progressObj.value);
      pctText.textContent = `${pct}%`;

      // Cập nhật vị trí viền vòng tròn
      const offset = circumference - (circumference * pct) / 100;
      ringProgress.style.strokeDashoffset = offset;
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
    rootMargin: '0px 0px -8% 0px', // Kích hoạt khi cách đáy màn hình 8%
    threshold: 0.01
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });

  // DỰ PHÒNG TUYỆT ĐỐI: Sau 2 giây, ép hiển thị tất cả phần tử scroll-reveal còn ẩn
  setTimeout(() => {
    revealElements.forEach(el => {
      if (!el.classList.contains('visible')) {
        el.classList.add('visible');
      }
    });
  }, 2000);
}
