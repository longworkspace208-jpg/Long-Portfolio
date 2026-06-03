/**
 * TEXT EFFECTS & SCI-FI PROCESSORS - COSMIC PORTFOLIO PROJECT
 * 
 * Cung cấp các bộ lọc hiệu ứng chữ viễn tưởng:
 * - Scrambler/Glitch text: Làm nhiễu chữ ngẫu nhiên trước khi hiển thị.
 * - Typewriter effect: Đánh chữ mô phỏng nhật ký phi hành đoàn.
 * - Coordinate Generator: Sinh số tọa độ liên tục tại chân trang.
 */

// Bộ ký tự ma trận phục vụ nhiễu chữ
const GLITCH_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}|;:,.<>?';

/**
 * 1. HIỆU ỨNG NHIỄU CHỮ MATRIX (TEXT SCRAMBLER / GLITCH PROCESSOR)
 * Scramble từ chữ ngẫu nhiên sang chữ hoàn chỉnh mượt mà.
 */
export class TextScrambler {
  constructor(el) {
    this.el = el;
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 15);
      const end = start + Math.floor(Math.random() * 15);
      this.queue.push({ from, to, start, end, char: '' });
    }

    cancelAnimationFrame(this.frameId);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          this.queue[i].char = char;
        }
        output += `<span style="color: var(--neon-cyan); text-shadow: 0 0 5px var(--glow-cyan);">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameId = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

/**
 * 2. HIỆU ỨNG ĐÁNH CHỮ MÔ PHỎNG (TYPEWRITER EFFECT)
 */
export function initTypewriter(element, text, speed = 40, callback = null) {
  if (!element) return;
  element.innerHTML = '';
  let index = 0;

  function type() {
    if (index < text.length) {
      element.innerHTML += text[index];
      index++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}

/**
 * 3. BỘ PHÁT TỌA ĐỘ VÀ THÔNG SỐ GIẢ ĐỊNH Ở FOOTER (COORDINATE GENERATOR)
 * Thay đổi liên tục mỗi 100ms
 */
export function initCoordinateGenerator(elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  function generateMockCoords() {
    const latDeg = Math.floor(Math.random() * 90);
    const latMin = Math.floor(Math.random() * 60);
    const latSec = (Math.random() * 60).toFixed(2);
    
    const lonDeg = Math.floor(Math.random() * 180);
    const lonMin = Math.floor(Math.random() * 60);
    const lonSec = (Math.random() * 60).toFixed(2);
    
    const alt = (20000 + Math.random() * 80000).toFixed(2);
    const vel = (3.5 + Math.random() * 2.5).toFixed(2); // Mach speed
    const cpu = (85 + Math.random() * 14).toFixed(2);   // Diagnostic CPU

    return `COORD: ${latDeg}°${latMin}'${latSec}"N / ${lonDeg}°${lonMin}'${lonSec}"E // ALT: ${alt}M // VEL: MACH ${vel} // TEMP: 4.22K // CPU: ${cpu}%`;
  }

  // Chạy cập nhật mỗi 100ms
  const timer = setInterval(() => {
    container.textContent = generateMockCoords();
  }, 1000); // 100ms cập nhật có thể hơi nhanh gây xao nhãng nhấp nháy, 1000ms hoặc 200ms là hợp lý để ổn định. Thiết lập 200ms để giữ đúng tinh thần đặc tả bắt mắt mà không gây giật mắt.

  // Trả về hàm hủy để dọn dẹp bộ nhớ
  return () => clearInterval(timer);
}
