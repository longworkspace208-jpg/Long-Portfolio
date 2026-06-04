/**
 * INTERACTION HANDLERS - COSMIC PORTFOLIO PROJECT
 * 
 * Điều khiển các tương tác cao cấp trong game:
 * - 3D Tilt: Nghiêng thẻ Hologram theo hướng di chuyển của chuột.
 * - Plasma Cursor Trail: Tạo con trỏ chuột tùy chỉnh lơ lửng và đuôi hạt plasma.
 * - Card Expand/Collapse: Bung mở chi tiết bài tập bằng GSAP mượt mà.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * 1. HIỆU ỨNG NGHIÊNG THẺ 3D TILT MATHEMATICAL MOUSE-TRACKING
 * 
 * Lưu ý đặc biệt cho Flip Cards:
 * Với các thẻ .flip-card, hiệu ứng tilt KHÔNG được áp dụng trực tiếp lên 
 * các mặt trước/sau (vì sẽ ghi đè rotateY(180deg) của mặt sau).
 * Thay vào đó, tilt được áp dụng lên chính .flip-card wrapper (perspective container),
 * giữ nguyên transform chain bên trong .flip-card-inner.
 */
export function init3dTilt(cardSelector) {
  // Gỡ bỏ hoàn toàn hiệu ứng nghiêng 3D theo yêu cầu
  return;
  const cards = document.querySelectorAll(cardSelector);
  if (!cards || cards.length === 0) return;

  cards.forEach(card => {
    const isFlipCard = card.classList.contains('flip-card');

    card.addEventListener('mousemove', (e) => {
      // Không áp dụng tilt khi flip card đang lật (tránh xung đột transform)
      if (isFlipCard && card.classList.contains('flipped')) return;

      const rect = card.getBoundingClientRect();
      
      // Tính toán vị trí chuột so với tâm của thẻ (từ -0.5 đến 0.5)
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Quy đổi góc xoay (giới hạn tối đa nhỏ để tạo cảm giác nhẹ nhàng, dễ chịu)
      const rotateX = -(y / rect.height) * 4;
      const rotateY = (x / rect.width) * 4;

      // Áp dụng góc xoay bằng CSS Perspective kết hợp tỷ lệ phóng to nhẹ
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.01,
        duration: 0.2,
        ease: 'power1.out',
        transformPerspective: 1000,
        // Bắt buộc preserve-3d để flip card bên trong hoạt động đúng
        transformStyle: 'preserve-3d'
      });
    });

    // Trả về vị trí cân bằng khi chuột rời khỏi thẻ
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        transformStyle: 'preserve-3d'
      });
    });
  });
}

export function initPlasmaCursor() {
  // Đã gỡ bỏ hiệu ứng con trỏ chuột tùy chỉnh theo yêu cầu của người dùng để sử dụng con trỏ mặc định.
}

/**
 * 3. ĐIỀU KHIỂN BUNG MỞ / THU GỌN THẺ BÀI TẬP BẰNG GSAP (HEIGHT AUTO TWEEN)
 */
export function initCardExpandCollapse(cardSelector) {
  const cards = document.querySelectorAll(cardSelector);
  if (!cards || cards.length === 0) return;

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Tránh kích hoạt lại khi bấm vào liên kết sản phẩm bên trong thẻ
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.project-detail-expand')) {
        return;
      }

      const isExpanded = card.classList.contains('expanded');
      const detailContainer = card.querySelector('.project-detail-expand');
      if (!detailContainer) return;

      // Đóng tất cả các thẻ khác đang mở để giữ bố cục sạch sẽ gọn gàng
      cards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('expanded')) {
          otherCard.classList.remove('expanded');
          const otherDetail = otherCard.querySelector('.project-detail-expand');
          if (otherDetail) {
            gsap.to(otherDetail, { 
              height: 0, 
              duration: 0.4, 
              ease: 'power2.inOut',
              onUpdate: () => ScrollTrigger.refresh(),
              onComplete: () => ScrollTrigger.refresh()
            });
          }
        }
      });

      // Bật/tắt trạng thái thẻ hiện tại
      if (isExpanded) {
        card.classList.remove('expanded');
        gsap.to(detailContainer, { 
          height: 0, 
          duration: 0.4, 
          ease: 'power2.inOut',
          onUpdate: () => ScrollTrigger.refresh(),
          onComplete: () => ScrollTrigger.refresh()
        });
      } else {
        card.classList.add('expanded');
        // Bung mở mượt mà chiều cao về tự động (Vite / GSAP hỗ trợ trực tiếp)
        gsap.to(detailContainer, {
          height: 'auto',
          duration: 0.5,
          ease: 'power2.out',
          onUpdate: () => ScrollTrigger.refresh(),
          onComplete: () => {
            ScrollTrigger.refresh();
            // Đảm bảo cuộn nhẹ trang web đến đúng vị trí thẻ vừa bung mở để dễ quan sát
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        });
      }
    });
  });
}

/**
 * 4. ĐIỀU KHIỂN LẬT THẺ TỔNG KẾT BẰNG CLICK SỰ KIỆN (CLICK-TO-FLIP CARDS)
 * 
 * Khi lật thẻ, reset tilt 3D về vị trí trung tâm để tránh tilt cũ 
 * gây xung đột với rotateY(180deg) của .flip-card-inner.
 */
export function initClickFlipCards(selector) {
  const cards = document.querySelectorAll(selector);
  if (!cards || cards.length === 0) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Reset mọi 3D tilt về vị trí trung tâm trước khi lật
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        transformStyle: 'preserve-3d'
      });

      card.classList.toggle('flipped');
    });
  });
}
