/**
 * MAIN ENTRY POINT - COSMIC PORTFOLIO PROJECT
 * 
 * Trung tâm điều khiển chính của trang web. Chịu trách nhiệm nạp dữ liệu Việt hóa,
 * chạy bộ tải Preloader, kích hoạt nền động WebGL Three.js, cài đặt GSAP ScrollTrigger
 * và toàn bộ kịch bản tương tác đặc biệt.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { portfolioData } from './modules/portfolioData.js';
import { initThreeBackground } from './modules/background.js';
import { initPreloader, initScrollAnimations, triggerHeroEntranceAnimation, initScrollReveal } from './modules/core-anim.js';
import { init3dTilt, initPlasmaCursor, initCardExpandCollapse, initClickFlipCards } from './modules/interactions.js';
import { TextScrambler, initTypewriter } from './modules/text-fx.js';

gsap.registerPlugin(ScrollTrigger);

let lenis; // Đối tượng cuộn mượt Lenis toàn cục

// Khởi chạy hệ thống sau khi DOM đã được nạp đầy đủ
document.addEventListener('DOMContentLoaded', () => {
  initializeCosmicCockpit();
});

/**
 * Khởi tạo buồng lái phi thuyền (Cockpit Initialization)
 */
function initializeCosmicCockpit() {
  // 0. KHỞI TẠO BỘ CUỘN MƯỢT LENIS ĐỒNG BỘ GSAP
  initLenisSmoothScroll();

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

  // F. KÍCH HOẠT HIỆU ỨNG 3D TILT CHO HÀNG LOẠT THẺ HOLOGRAM (ĐÃ GỠ BỎ THEO YÊU CẦU NGƯỜI DÙNG)
  // init3dTilt('.hologram-card, .reflection-journey-block, .flip-card, .closing-cinematic');

  // G. HIỆU ỨNG MỞ THẺ BÀI TẬP ĐÃ ĐƯỢC GỠ BỎ — TẤT CẢ 6 THẺ LUÔN MỞ RỘNG SẴN

  // H. KÍCH HOẠT SỰ KIỆN CLICK LẬT THẺ PHẢN HỒI (FLIP CARDS)
  initClickFlipCards('.flip-card');



  // I. KÍCH HOẠT HOẠC CẢNH CUỘN TRANG GSAP SCROLLTRIGGER
  initScrollAnimations();

  // I2. KÍCH HOẠT HOẠC CẢNH CUỘN TRANG BẰNG NATIVE INTERSECTION OBSERVER (FAIL-SAFE)
  initScrollReveal();

  // KÍCH HOẠT HOẠC CẢNH MỞ MÀN HERO COCKPIT CỦA GSAP VỚI CALLBACK KHỞI CHẠY TYPEWRITER
  triggerHeroEntranceAnimation(startHeroTypewriter);

  // K. THIẾT LẬP NÚT BẬT TẮT FX QUÉT DÒNG (SCANLINES TOGGLE)
  setupFxToggle();

  // L. THIẾT LẬP LIÊN KẾT THANH ĐIỀU HƯỚNG TỚI CÁC PHÂN VÙNG
  setupNavigation();

  // N. KÍCH HOẠT ẢNH TRANG TRÍ LƠ LỬNG THEO CUỘN TRANG
  initFloatingDecorations();

  // M. HỆ THỐNG DỰ PHÒNG AN TOÀN (FAIL-SAFE FALLBACK)
  // Sau 25 giây, ép hiển thị tất cả các phần tử scroll-reveal còn ẩn (chỉ dành cho edge case cực hiếm)
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.visible)').forEach(el => {
      el.classList.add('visible');
    });
  }, 25000);
}

/**
 * Khởi tạo bộ cuộn mượt Lenis Scroll và đồng bộ hóa với GSAP ScrollTrigger
 */
function initLenisSmoothScroll() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExponential
    smoothWheel: true,
    smoothTouch: false, // Giữ cuộn gốc trên màn hình cảm ứng để tăng hiệu năng
  });

  // Đồng bộ hóa sự kiện cuộn của Lenis sang GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Đồng bộ hóa khung hình requestAnimationFrame của Lenis với GSAP ticker
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Tắt tính năng làm trễ lagSmoothing của GSAP để tránh trôi lệch vị trí
  gsap.ticker.lagSmoothing(0);
}

/**
 * Nạp thông tin phi công vào buồng lái
 */
function renderPilotInfo() {
  const pilotInfo = portfolioData.pilotInfo || portfolioData.personalInfo || {};

  // 0. Nạp ảnh đại diện phi công HUD
  const avatarImgEl = document.getElementById('pilot-avatar-img');
  if (avatarImgEl) {
    if (pilotInfo.avatar) {
      avatarImgEl.src = pilotInfo.avatar;
    } else {
      avatarImgEl.src = '/src/assets/hero.png';
    }
  }

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

  const hobbiesContainer = document.getElementById('pilot-hobbies-container');
  const hobbiesGrid = document.getElementById('pilot-hobbies-grid');
  if (hobbiesContainer && hobbiesGrid && pilotInfo.hobbies) {
    hobbiesGrid.innerHTML = '';
    pilotInfo.hobbies.forEach(hobby => {
      hobbiesGrid.innerHTML += `
        <span class="hobby-item">
          <span class="hobby-icon">${hobby.icon}</span>
          <span class="hobby-name">${hobby.name}</span>
        </span>
      `;
    });
    hobbiesContainer.style.display = 'none';
    hobbiesContainer.style.opacity = '0';
    gsap.set(hobbiesContainer, { y: 12 });
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
  const hobbiesContainer = document.getElementById('pilot-hobbies-container');
  if (aboutEl) {
    const aboutMe = pilotInfo.aboutMe || "";
    initTypewriter(aboutEl, aboutMe, 8, () => {
      // Khi gõ chữ giới thiệu xong, hiện phần sở thích mượt mà bằng GSAP
      if (hobbiesContainer && pilotInfo.hobbies) {
        hobbiesContainer.style.display = 'block';
        gsap.to(hobbiesContainer, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
      }
    });
  }

  // 3. Chạy typewriter đồng thời cho từng dòng định hướng Flight Vector
  if (pilotInfo.learningGoals) {
    pilotInfo.learningGoals.forEach((goal, index) => {
      const goalItem = document.getElementById(`pilot-goal-${index}`);
      if (goalItem) {
        initTypewriter(goalItem, `✦ ${goal}`, 8);
      }
    });
  }

  // 4. Chạy typewriter cho Mission Briefing
  const purposeEl = document.getElementById('pilot-purpose');
  if (purposeEl) {
    const purposeText = pilotInfo.portfolioPurpose || "";
    initTypewriter(purposeEl, purposeText, 8);
  }
}

/**
 * Nạp danh sách 6 bài tập lớn dạng Lưới lục giác viễn tưởng (Mission Archive)
 */
function renderExercisesGrid() {
  const gridContainer = document.getElementById('projects-grid');
  if (!gridContainer) {
    console.error("HUD Error: Element #projects-grid not found in DOM.");
    return;
  }

  try {
    const { exercises } = portfolioData;
    if (!exercises) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 24px; border: 1px dashed var(--plasma-orange); background: rgba(255,107,53,0.05); color: var(--plasma-orange); border-radius: 8px; font-family: monospace; font-size: 13px; text-align: center;">
          ⚠️ DIAGNOSTIC: portfolioData.exercises is undefined.<br>
          Available keys in portfolioData: ${Object.keys(portfolioData || {}).join(', ') || 'None'}
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = '';

    exercises.forEach((item, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'project-card-wrapper scroll-reveal';
      wrapper.style.perspective = '1000px';
      wrapper.style.setProperty('--reveal-delay', `${index * 0.15}s`);

      const floatWrapper = document.createElement('div');
      floatWrapper.className = 'project-card-float';
      floatWrapper.style.animationDelay = `${index * 0.4}s`;

      const card = document.createElement('div');
      card.className = 'project-card hex-clip hologram-card expanded';

      const goalText = item.goal || "";

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

        
        <!-- KHU VỰC CHI TIẾT BỊ ẨN (GSAP SẼ BUNG MỞ CHIỀU CAO KHI CLICK THẺ) -->
        <div class="project-detail-expand">
          <div class="project-detail-grid">
            <!-- Cột trái: Mục tiêu và tiến trình -->
            <div class="project-detail-info">
              <h4>🎯 MỤC TIÊU BÀI HỌC</h4>
              <p>${goalText || 'Đang cập nhật mục tiêu...'}</p>
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

      floatWrapper.appendChild(card);
      wrapper.appendChild(floatWrapper);
      gridContainer.appendChild(wrapper);
    });
  } catch (error) {
    console.error("HUD Error in renderExercisesGrid:", error);
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 24px; border: 1px dashed var(--plasma-orange); background: rgba(255,107,53,0.05); color: var(--plasma-orange); border-radius: 8px; font-family: monospace; font-size: 13px; text-align: center;">
        ⚠️ SYSTEM ERROR: Failed to render exercises grid.<br>
        Message: ${error.message}<br>
        Stack: ${error.stack ? error.stack.split('\n')[0] : ''}
      </div>
    `;
  }
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
 * Nạp thông tin phần tổng kết cảm nhận — 5 khu vực
 */
function renderReflectionLogs() {
  const { reflection } = portfolioData;
  if (!reflection) return;

  // 1. Tổng quan hành trình
  const overviewEl = document.getElementById('reflection-overview');
  if (overviewEl) overviewEl.textContent = reflection.overview;

  // 2. Trải nghiệm và cảm nhận
  const expEl = document.getElementById('reflection-exp');
  if (expEl) expEl.textContent = reflection.experience;

  // 3. Điểm tâm đắc nhất (danh sách)
  const highListEl = document.getElementById('reflection-high-list');
  if (highListEl && Array.isArray(reflection.highlights)) {
    highListEl.innerHTML = reflection.highlights.map(item => `
      <li>
        <strong>${item.title}</strong>
        <span>${item.desc}</span>
      </li>
    `).join('');
  }

  // 4. Thách thức đã gặp phải (danh sách)
  const chalListEl = document.getElementById('reflection-chal-list');
  if (chalListEl && Array.isArray(reflection.challenges)) {
    chalListEl.innerHTML = reflection.challenges.map(item => `
      <li>
        <strong>${item.title}</strong>
        <span>${item.desc}</span>
      </li>
    `).join('');
  }

  // 5. Lời kết — Cinematic Final Transmission
  const closingEl = document.getElementById('reflection-closing');
  if (closingEl && reflection.closing) {
    closingEl.textContent = '';
    // Sử dụng typewriter để lời kết hiện ra từng chữ, tạo cảm giác "truyền tải"
    initTypewriter(closingEl, reflection.closing, 12);
  }

  // Chữ ký — Tự động điền ngày tháng hiện tại dạng tọa độ thời gian
  const dateEl = document.getElementById('closing-date');
  if (dateEl) {
    const now = new Date();
    const monthNames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    dateEl.textContent = `STARDATE ${now.getFullYear()}.${monthNames[now.getMonth()]}.${String(now.getDate()).padStart(2, '0')}`;
  }

  // Tên tác giả từ dữ liệu
  const authorEl = document.getElementById('closing-author');
  const pilotInfo = portfolioData.pilotInfo || portfolioData.personalInfo || {};
  if (authorEl && pilotInfo.fullName) {
    authorEl.textContent = `— ${pilotInfo.fullName}`;
  }
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
        // Cuộn trang mượt mà bằng Lenis nếu khả dụng, nếu không dùng scrollIntoView thô
        if (lenis) {
          lenis.scrollTo(targetSection, {
            offset: -100, // Bù trừ chiều cao thanh Navbar HUD
            duration: 1.2
          });
        } else {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
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

/**
 * Loại bỏ nền đen của ảnh bằng canvas để tạo ảnh trong suốt (PNG alpha) thực sự
 * Giúp giải quyết triệt để vấn đề bóng đổ (drop-shadow) bị bao khung hình chữ nhật đen
 */
function removeBlackBackground(imgEl, threshold = 35) {
  if (!imgEl) return;

  const processImage = () => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = imgEl.naturalWidth;
      canvas.height = imgEl.naturalHeight;
      
      // Vẽ ảnh gốc lên canvas
      ctx.drawImage(imgEl, 0, 0);
      
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      // Quét qua các điểm ảnh (mỗi điểm gồm 4 phần tử: R, G, B, A)
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Độ sáng tối đa của pixel
        const maxVal = Math.max(r, g, b);
        
        if (maxVal < threshold) {
          data[i + 3] = 0; // Chuyển thành trong suốt hoàn toàn
        } else if (maxVal < threshold * 2.5) {
          // Làm mềm cạnh (feathering) để tránh răng cưa ở các vùng tối chuyển tiếp
          const ratio = (maxVal - threshold) / (threshold * 1.5);
          data[i + 3] = Math.round(data[i + 3] * ratio);
        }
      }
      
      ctx.putImageData(imgData, 0, 0);
      
      // Hủy lắng nghe trước khi gán src mới để tránh vòng lặp vô hạn
      imgEl.removeEventListener('load', processImage);
      imgEl.src = canvas.toDataURL('image/png');
    } catch (e) {
      console.warn("Không thể xóa nền ảnh do hạn chế CORS hoặc Canvas:", e);
    }
  };

  if (imgEl.complete && imgEl.naturalWidth > 0) {
    processImage();
  } else {
    imgEl.addEventListener('load', processImage);
  }
}

/**
 * Khởi tạo hệ thống vật thể vũ trụ lơ lửng xung quanh màn hình (Floating Cosmic Decorations)
 * Hiển thị đồng thời: Phi thuyền, Phi hành gia (tiền cảnh) và Lõi năng lượng vũ trụ (hậu cảnh làm mờ)
 * Mỗi vật thể có tốc độ Parallax khác nhau để tạo chiều sâu không gian (depth effect)
 * và được tự động lọc nền đen bằng Canvas.
 */
function initFloatingDecorations() {
  const ship = document.getElementById('floating-ship');
  const astro = document.getElementById('floating-astronaut');
  const bgCrystal = document.getElementById('bg-crystal');
  
  if (!ship || !astro) return;

  // Lọc nền đen cho cả 3 ảnh (gồm cả ảnh nền)
  const shipImg = ship.querySelector('img');
  const astroImg = astro.querySelector('img');

  if (shipImg) removeBlackBackground(shipImg, 35);
  if (astroImg) removeBlackBackground(astroImg, 35);

  if (bgCrystal) {
    const crystalImg = bgCrystal.querySelector('img');
    if (crystalImg) removeBlackBackground(crystalImg, 35);
  }

  // Kích hoạt hiện các vật thể lơ lửng so le nhau sau khi preloader kết thúc
  setTimeout(() => {
    ship.classList.add('active');
  }, 500);
  
  setTimeout(() => {
    astro.classList.add('active');
  }, 750);

  // Parallax scroll sử dụng GSAP ScrollTrigger tạo hiệu ứng trượt êm ái, trễ nhịp (scrub) siêu mượt
  if (bgCrystal) {
    gsap.to(bgCrystal, {
      y: () => -window.innerHeight * 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2.2
      }
    });
  }
}