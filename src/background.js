/**
 * HÌNH NỀN ĐỘNG TƯƠNG TÁC CANVAS (INTERACTIVE PARTICLE NETWORKS)
 * 
 * Vẽ mạng lưới liên kết hạt trôi lơ lửng, phản hồi di chuột của người dùng,
 * hỗ trợ đổi màu tự động theo chế độ Sáng (Light) / Tối (Dark).
 */

export function initBackground(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let animationFrameId;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const properties = {
    // Tùy chỉnh mật độ hạt dựa theo độ phân giải màn hình
    particleCount: Math.min(80, Math.floor((width * height) / 18000)),
    maxVelocity: 0.5,
    lineLength: 150,
    particleRadius: 3,
    // Màu sắc hạt & liên kết (sẽ được tự động cập nhật theo chế độ Sáng/Tối)
    color: {
      dark: {
        particle: "rgba(0, 245, 155, 0.45)", // Xanh Mint sáng trong Dark Mode
        line: "rgba(0, 245, 155, 0.12)",
        glow: "rgba(0, 245, 155, 0.8)"
      },
      light: {
        particle: "rgba(5, 150, 105, 0.4)",   // Xanh lục bảo trong Light Mode
        line: "rgba(5, 150, 105, 0.08)",
        glow: "rgba(5, 150, 105, 0.6)"
      }
    }
  };

  const mouse = {
    x: null,
    y: null,
    radius: 180 // Bán kính phản hồi tương tác di chuột
  };

  // Lắng nghe di chuyển chuột
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Thay đổi kích thước canvas khi xoay/co giãn màn hình
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    properties.particleCount = Math.min(80, Math.floor((width * height) / 18000));
    initParticles();
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() * 2 - 1) * properties.maxVelocity;
      this.vy = (Math.random() * 2 - 1) * properties.maxVelocity;
    }

    update() {
      // Di chuyển hạt
      this.x += this.vx;
      this.y += this.vy;

      // Va chạm biên - nảy lại
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Hút nhẹ về phía con trỏ chuột nếu ở gần
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          // Tính toán lực hút cực nhẹ
          const force = (mouse.radius - distance) / mouse.radius;
          this.x += (dx / distance) * force * 0.4;
          this.y += (dy / distance) * force * 0.4;
        }
      }
    }

    draw(colors) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
      ctx.fillStyle = colors.particle;
      
      // Vẽ hạt phát sáng khi ở gần chuột
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = colors.glow;
        } else {
          ctx.shadowBlur = 0;
        }
      } else {
        ctx.shadowBlur = 0;
      }
      
      ctx.fill();
    }
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < properties.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function drawLines(colors) {
    ctx.shadowBlur = 0; // Tắt phát sáng khi vẽ đường kết nối để tránh lag
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < properties.lineLength) {
          // Độ đậm của đường tỉ lệ nghịch với khoảng cách hai hạt
          const alpha = (properties.lineLength - dist) / properties.lineLength;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = colors.line.replace("0.12", (0.12 * alpha).toString()).replace("0.08", (0.08 * alpha).toString());
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Vẽ liên kết mờ nối từ các hạt tới chuột
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const alpha = (mouse.radius - dist) / mouse.radius;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = colors.line.replace("0.12", (0.35 * alpha).toString()).replace("0.08", (0.25 * alpha).toString());
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    // Xác định bộ màu hiện tại dựa trên class `light-mode` của thẻ HTML/Body
    const isLightMode = document.documentElement.classList.contains("light-mode");
    const colors = isLightMode ? properties.color.light : properties.color.dark;

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(colors);
    }

    drawLines(colors);

    animationFrameId = requestAnimationFrame(animate);
  }

  // Khởi tạo
  initParticles();
  animate();

  // Trả về hàm hủy nếu cần dọn dẹp bộ nhớ
  return () => {
    cancelAnimationFrame(animationFrameId);
  };
}
