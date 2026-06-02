/**
 * MAIN ENTRY POINT - COSMIC PORTFOLIO PROJECT
 * 
 * Trung tâm điều khiển chính của trang web. Chịu trách nhiệm nạp dữ liệu Việt hóa,
 * chạy bộ tải Preloader, kích hoạt nền động WebGL Three.js, cài đặt GSAP ScrollTrigger
 * và toàn bộ kịch bản tương tác đặc biệt.
 */

import { portfolioData } from './modules/portfolioData.js';
import { initThreeBackground } from './modules/background.js';
import { initPreloader, initScrollAnimations, triggerHeroEntranceAnimation } from './modules/core-anim.js';
import { init3dTilt, initPlasmaCursor, initCardExpandCollapse, initClickFlipCards } from './modules/interactions.js';
import { initCoordinateGenerator, TextScrambler, initTypewriter } from './modules/text-fx.js';

// Khởi chạy hệ thống sau khi DOM đã được nạp đầy đủ
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. CHẠY BỘ TẢI TRANG BOOT-UP HỆ WARP DRIVE
  initPreloader(() => {
    // Gọi hàm khởi tạo toàn bộ buồng lái phi thuyền sau khi Preloader kết thúc
    initializeCosmicCockpit();
  });

});

/**
 * Khởi tạo buồng lái phi thuyền (Cockpit Initialization)
 */
function initializeCosmicCockpit() {
  // A. KÍCH HOẠT HÌNH NỀN ĐỘNG WebGL (THREE.JS 10.000 STARFIELD)
  let destroyWebGL;
  try {
    destroyWebGL = initThreeBackground('bg-canvas');
  } catch (error) {
    console.error("Three.js starfield failed to load:", error);
  }

  // B. NẠP DỮ LIỆU PHẦN 1: GIỚI THIỆU PHI CÔNG Nguyễn Kim Lê Long
  renderPilotInfo();

  // D. NẠP KHO BÀI TẬP LỚN (MISSION ARCHIVE GRID)
  renderExercisesGrid();

  // E. NẠP TỔNG KẾT HÀNH TRÌNH (REFLECTION & DISCUSSIONS)
  renderReflectionLogs();

  // F. KÍCH HOẠT HIỆU ỨNG 3D TILT
  init3dTilt('.hologram-card');

  // G. KÍCH HOẠT HIỆU ỨNG MỞ THẺ BÀI TẬP BẰNG GSAP
  initCardExpandCollapse('.project-card');

  // H. KÍCH HOẠT SỰ KIỆN CLICK LẬT THẺ PHẢN HỒI (FLIP CARDS)
  initClickFlipCards('.flip-card');

  // H. CHẠY BỘ SỐ TỌA ĐỘ GIẢ ĐỊNH Ở CHÂN TRANG FOOTER
  const destroyCoords = initCoordinateGenerator('hud-coordinates');

  // I. KÍCH HOẠT HOẠC CẢNH CUỘN TRANG GSAP SCROLLTRIGGER
  initScrollAnimations();

  // KÍCH HOẠT HOẠT CẢNH MỞ MÀN HERO COCKPIT CỦA GSAP VỚI CALLBACK KHỞI CHẠY TYPEWRITER
  triggerHeroEntranceAnimation(startHeroTypewriter);

  // K. THIẾT LẬP NÚT BẬT TẮT FX QUÉT DÒNG (SCANLINES TOGGLE)
  setupFxToggle();

  // L. THIẾT LẬP LIÊN KẾT THANH ĐIỀU HƯỚNG TỚI CÁC PHÂN VÙNG
  setupNavigation();
}

/**
 * Nạp thông tin phi công vào buồng lái
 */
function renderPilotInfo() {
  const pilotInfo = portfolioData.pilotInfo || portfolioData.personalInfo || {};

  // 1. Nạp thẻ thông tin trường lớp dưới dạng các HUD Info Badges
  const subtitleEl = document.getElementById('pilot-subtitle');
  if (subtitleEl) {
    subtitleEl.innerHTML = '';
    if (Array.isArray(pilotInfo.title)) {
      pilotInfo.title.forEach(tagText => {
        subtitleEl.innerHTML += `<span class="info-badge">${tagText}</span>`;
      });
    } else {
      // Trường hợp dự phòng nếu mảng không được định nghĩa
      const classVal = pilotInfo.class || "";
      const majorVal = pilotInfo.major || "";
      const schoolVal = pilotInfo.school || "";
      
      const defaultTags = [classVal, majorVal, schoolVal].filter(Boolean);
      defaultTags.forEach(tagText => {
        subtitleEl.innerHTML += `<span class="info-badge">${tagText}</span>`;
      });
    }
  }

  // 2. Chuẩn bị các khung chứa chữ (xóa nội dung để chuẩn bị chạy Typewriter sau)
  const aboutEl = document.getElementById('pilot-about');
  if (aboutEl) {
    aboutEl.innerHTML = '';
  }

  const goalsEl = document.getElementById('pilot-goals');
  if (goalsEl && pilotInfo.learningGoals) {
    goalsEl.innerHTML = '';
    pilotInfo.learningGoals.forEach((goal, index) => {
      goalsEl.innerHTML += `<li id="pilot-goal-${index}"></li>`;
    });
  }

  const purposeEl = document.getElementById('pilot-purpose');
  if (purposeEl) {
    purposeEl.innerHTML = '';
  }
}

/**
 * Bắt đầu chạy hiệu ứng gõ chữ và scramble cho các phần tử Hero Section đồng bộ
 */
export function startHeroTypewriter() {
  const pilotInfo = portfolioData.pilotInfo || portfolioData.personalInfo || {};
  const fullName = pilotInfo.fullName || "Nguyễn Kim Lê Long";

  // 1. Chạy hiệu ứng Scramble nhiễu chữ ma trận cho họ tên phi công Nguyễn Kim Lê Long
  const nameEl = document.getElementById('pilot-name');
  if (nameEl) {
    const scrambler = new TextScrambler(nameEl);
    scrambler.setText(fullName);
  }

  // 2. Chạy typewriter nhẹ nhàng cho Pilot Profile
  const aboutEl = document.getElementById('pilot-about');
  if (aboutEl) {
    const aboutMe = pilotInfo.aboutMe || "";
    initTypewriter(aboutEl, aboutMe, 25);
  }

  // 3. Chạy typewriter đồng thời cho từng dòng định hướng Flight Vector
  if (pilotInfo.learningGoals) {
    pilotInfo.learningGoals.forEach((goal, index) => {
      const goalItem = document.getElementById(`pilot-goal-${index}`);
      if (goalItem) {
        initTypewriter(goalItem, `✦ ${goal}`, 25);
      }
    });
  }

  // 4. Chạy typewriter cho Mission Briefing
  const purposeEl = document.getElementById('pilot-purpose');
  if (purposeEl) {
    const purposeText = pilotInfo.portfolioPurpose || "";
    initTypewriter(purposeEl, purposeText, 25);
  }
}

/**
 * Nạp danh sách 6 bài tập lớn dạng Lưới lục giác viễn tưởng (Mission Archive)
 */
function renderExercisesGrid() {
  const { exercises } = portfolioData;
  const gridContainer = document.getElementById('projects-grid');
  if (!gridContainer || !exercises) return;

  gridContainer.innerHTML = '';

  exercises.forEach(item => {
    const card = document.createElement('div');
    card.className = 'project-card hex-clip hologram-card';

    // Cấu hình hiển thị preview mục tiêu ngắn gọn
    const goalText = item.goal || "";
    const shortGoal = goalText ? goalText.substring(0, 85) + '...' : 'Đang giải mã dữ liệu mục tiêu...';

    // Đảm bảo an toàn cho cấu trúc product
    const product = item.product || {};
    const productType = product.type || 'link';
    const productUrl = product.url || '#';
    const productLabel = product.label || 'Mở khóa tài liệu';
    const productIcon = getProductIconSvg(productType);

    card.innerHTML = `
      <div class="project-card-header">
        <span class="project-card-num">${item.code || '[BT]'}</span>
        <span class="badge-status" style="padding: 2px 10px; font-size: 9px; border-color: rgba(0,245,255,0.25);">ENCRYPTED</span>
      </div>
      <div class="project-card-title">
        <h3>${item.title || 'Bài tập chưa định danh'}</h3>
      </div>
      <p class="project-card-excerpt">${shortGoal}</p>
      
      <!-- KHU VỰC CHI TIẾT BỊ ẨN (GSAP SẼ BUNG MỞ CHIỀU CAO KHI CLICK THẺ) -->
      <div class="project-detail-expand">
        <div class="project-detail-grid">
          <!-- Cột trái: Mục tiêu và tiến trình -->
          <div class="project-detail-info">
            <h4>🎯 MỤC TIÊU BÀI HỌC</h4>
            <p>${goalText || 'Đang cập nhật mục tiêu...'}</p>
            <h4>🛠️ QUÁ TRÌNH THỰC HIỆN</h4>
            <p>${item.process || 'Đang cập nhật tiến trình...'}</p>
          </div>
          <!-- Cột phải: Sản phẩm -->
          <div class="project-detail-product">
            <div class="product-icon-area" style="color: var(--neon-cyan);">${productIcon}</div>
            <div class="project-product-label">${productLabel}</div>
            <a href="${productUrl}" target="_blank" class="project-product-btn">
              MỞ KHÓA TÀI LIỆU
            </a>
          </div>
        </div>
      </div>
    `;

    gridContainer.appendChild(card);
  });
}

/**
 * Trả về Icon tương ứng với loại tài liệu
 */
function getProductIconSvg(type) {
  switch (type) {
    case 'pdf':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line></svg>`;
    case 'image':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;
    case 'video':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
  }
}

/**
 * Nạp thông tin phần tổng kết cảm nhận
 */
function renderReflectionLogs() {
  const { reflection } = portfolioData;
  if (!reflection) return;

  const expEl = document.getElementById('reflection-exp');
  const highEl = document.getElementById('reflection-high');
  const chalEl = document.getElementById('reflection-chal');

  if (expEl) expEl.textContent = reflection.experience;
  if (highEl) highEl.textContent = reflection.highlights;
  if (chalEl) chalEl.textContent = reflection.challenges;
}

/**
 * Thiết lập nút bật tắt hiệu ứng quét dòng Scanline (FX Toggle)
 */
function setupFxToggle() {
  const btn = document.getElementById('fx-toggle-btn');
  const overlay = document.querySelector('.scanlines-overlay');
  
  if (!btn || !overlay) return;

  btn.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
    btn.classList.toggle('active');
  });
}

/**
 * Thiết lập menu cuộn trang liên kết
 */
function setupNavigation() {
  const navButtons = document.querySelectorAll('.hud-btn');
  const sections = document.querySelectorAll('.section, section');

  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = btn.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        // Cuộn trang mượt mà
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Cập nhật lớp active cho nút bấm điều hướng
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });

  // Tự động kích hoạt nút điều hướng tương ứng khi người dùng cuộn chuột qua từng phần
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSectionId = `#${section.getAttribute('id')}`;
      }
    });

    if (currentSectionId) {
      navButtons.forEach(btn => {
        if (btn.getAttribute('href') === currentSectionId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  });
}