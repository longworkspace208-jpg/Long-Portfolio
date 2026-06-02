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
  const preloader = document.getElementById('preloader');
  const ringProgress = document.querySelector('.preloader-ring-progress');
  const pctText = document.querySelector('.preloader-pct');
  
  if (!preloader || !ringProgress || !pctText) {
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

  // B. PARALLAX PLANET (TINH CẦU ĐÁY TRANG)
  // Tạo sự dịch chuyển đa chiều của tinh cầu trang trí khi cuộn
  gsap.to('.planet-parallax-container', {
    y: -220,
    scale: 1.2,
    rotation: 45,
    scrollTrigger: {
      trigger: '#summary',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.8
    }
  });

  // Tự động tính toán lại vị trí ScrollTrigger sau khi dữ liệu DOM động đã được vẽ xong và ổn định chiều cao
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 350);
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
  .from('.hologram-card', {
    y: 40,
    opacity: 0,
    stagger: 0, // Synchronous fade-in for all cards
    duration: 1.0,
    ease: 'power3.out',
    onStart: () => {
      if (onCardsReveal) onCardsReveal();
    }
  }, '-=0.4');

  // Đảm bảo tuyệt đối Section 2 & 3 luôn hiển thị rõ ràng, không bao giờ bị ẩn
  gsap.set('.project-card, #projects .section-title-wrapper, #summary .section-title-wrapper, .skills-hexagon-area, .reflection-block', {
    opacity: 1,
    y: 0,
    clearProps: 'transform'
  });
}
