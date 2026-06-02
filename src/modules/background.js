/**
 * THREE.JS STARFIELD BACKGROUND - COSMIC PORTFOLIO PROJECT
 * 
 * Vẽ 10.000 điểm tinh tú 3D chuyển động chậm trên nền không gian sâu thẳm,
 * tự động thích ứng với chuyển động chuột và co giãn màn hình.
 */

import * as THREE from 'three';

export function initThreeBackground(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // 1. KHỞI TẠO SCENE, CAMERA, RENDERER
  const scene = new THREE.Scene();
  
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.z = 500;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,         // Giữ nền trong suốt để phối màu với CSS
    antialias: false      // Tắt antialias để tăng mạnh hiệu năng GPU
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 2. SINH TEXTURE HẠT SÁNG ĐỘNG (DYNAMICAL CANVAS GLOW TEXTURE)
  // Tạo texture phát sáng hình tròn trực tiếp từ mã nguồn để tránh lỗi đường dẫn ảnh
  function createParticleGlowTexture() {
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const ctx = pCanvas.getContext('2d');

    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(0, 245, 255, 0.8)');   // Xanh Neon ở giữa
    gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.25)'); // Viền tím Nebula
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    
    return new THREE.CanvasTexture(pCanvas);
  }

  const starTexture = createParticleGlowTexture();

  // 3. TẠO HÌNH HỌC CHO 10.000 ĐIỂM TINH TÚ (10,000 STAR POINTS)
  const starCount = 5000;
  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);

  const colorOptions = [
    new THREE.Color('#00f5ff'), // Cyan
    new THREE.Color('#ff6b35'), // Cam
    new THREE.Color('#7c3aed'), // Tím
    new THREE.Color('#ffffff')  // Trắng
  ];

  for (let i = 0; i < starCount; i++) {
    // Phân bố các hạt sao ngẫu nhiên trong khối cầu bán kính 1000
    const r = 1000 * Math.pow(Math.random(), 0.5);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);     // X
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // Y
    positions[i * 3 + 2] = r * Math.cos(phi);                   // Z

    // Chọn màu ngẫu nhiên cho từng sao để tạo chiều sâu tinh vân
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    colors[i * 3] = randomColor.r;
    colors[i * 3 + 1] = randomColor.g;
    colors[i * 3 + 2] = randomColor.b;
  }

  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // 4. CHẤT LIỆU CHO HẠT SAO
  const starMaterial = new THREE.PointsMaterial({
    size: 4,
    sizeAttenuation: true, // Hạt sao to nhỏ theo khoảng cách camera
    transparent: true,
    opacity: 0.85,
    vertexColors: true,     // Sử dụng mảng màu đã định nghĩa
    map: starTexture,
    blending: THREE.AdditiveBlending, // Cộng sáng cho hiệu ứng lung linh
    depthWrite: false
  });

  const starfield = new THREE.Points(starGeometry, starMaterial);
  scene.add(starfield);

  // 5. TƯƠNG TÁC CHUỘT (MOUSE PARALLAX)
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  window.addEventListener('mousemove', (event) => {
    // Chuẩn hóa tọa độ chuột từ -1 đến 1
    targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
    targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  // 6. XỬ LÝ CO GIÃN CỬA SỔ
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // 7. VÒNG LẶP HOẠT CẢNH (ANIMATION LOOP)
  let animationFrameId;
  const clock = new THREE.Clock();

  function animate() {
    animationFrameId = requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Xoay sao chậm chạp vô hạn trên trục Y
    starfield.rotation.y = elapsedTime * 0.02;

    // Hiệu ứng Parallax di chuyển chuột mềm mại (LERP)
    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    // Nghiêng nhẹ cụm tinh tú theo chuột
    starfield.rotation.x = currentMouseY * 0.15;
    starfield.rotation.z = currentMouseX * 0.08;

    renderer.render(scene, camera);
  }

  animate();

  // Trả về hàm hủy để dọn dẹp WebGL khi chuyển trang hoặc hủy chạy
  return () => {
    cancelAnimationFrame(animationFrameId);
    starGeometry.dispose();
    starMaterial.dispose();
    starTexture.dispose();
    renderer.dispose();
  };
}
