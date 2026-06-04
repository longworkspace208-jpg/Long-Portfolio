/**
 * THREE.JS STARFIELD BACKGROUND - COSMIC PORTFOLIO PROJECT
 * 
 * Vẽ bầu trời sao đa tầng 3D với 3 lớp chiều sâu khác nhau,
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

  // 2. SINH TEXTURE HẠT SÁNG ĐỘNG — 3 loại texture cho sự đa dạng
  function createGlowTexture(coreColor, midColor) {
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const ctx = pCanvas.getContext('2d');

    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.25, coreColor);
    gradient.addColorStop(0.55, midColor);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    
    return new THREE.CanvasTexture(pCanvas);
  }

  // Texture xanh cyan cho sao lạnh (tiền cảnh)
  const textureCool = createGlowTexture(
    'rgba(0, 245, 255, 0.8)',
    'rgba(124, 58, 237, 0.2)'
  );
  // Texture cam ấm cho sao nóng (trung cảnh)
  const textureWarm = createGlowTexture(
    'rgba(255, 180, 100, 0.7)',
    'rgba(255, 107, 53, 0.15)'
  );
  // Texture trắng tinh cho sao nhỏ xa (hậu cảnh)
  const textureDim = createGlowTexture(
    'rgba(200, 210, 255, 0.5)',
    'rgba(100, 120, 180, 0.1)'
  );

  // 3. BẢNG MÀU ĐA DẠNG CHO CÁC LỚP SAO
  const coolColors = [
    new THREE.Color('#00f5ff'), // Cyan sáng
    new THREE.Color('#7c3aed'), // Tím nebula
    new THREE.Color('#4fc3f7'), // Xanh dương nhạt
    new THREE.Color('#b388ff'), // Tím lavender
    new THREE.Color('#ffffff'), // Trắng tinh
    new THREE.Color('#e0f7fa'), // Xanh băng
  ];

  const warmColors = [
    new THREE.Color('#ff6b35'), // Cam plasma
    new THREE.Color('#ffab40'), // Cam vàng
    new THREE.Color('#ffd54f'), // Vàng sao
    new THREE.Color('#ff8a65'), // Cam san hô
    new THREE.Color('#ffffff'), // Trắng
    new THREE.Color('#ffe0b2'), // Kem ấm
  ];

  const dimColors = [
    new THREE.Color('#b0bec5'), // Xám bạc
    new THREE.Color('#cfd8dc'), // Xám sáng
    new THREE.Color('#e1f5fe'), // Xanh rất nhạt
    new THREE.Color('#f3e5f5'), // Tím rất nhạt
    new THREE.Color('#ffffff'), // Trắng
    new THREE.Color('#e8eaf6'), // Xanh tím nhạt
  ];

  // Hàm tạo 1 lớp sao với các tham số riêng biệt
  function createStarLayer(count, radius, colorPalette, texture, size, opacity) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = radius * Math.pow(Math.random(), 0.5);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3]     = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: size,
      sizeAttenuation: true,
      transparent: true,
      opacity: opacity,
      vertexColors: true,
      map: texture,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    return { points, geometry, material };
  }

  // 4. TẠO 3 LỚP SAO ĐA TẦNG (MULTI-LAYER STARFIELD)
  //    Lớp 1: Sao sáng gần — ít, to, rõ (tiền cảnh)
  const layer1 = createStarLayer(300, 800, coolColors, textureCool, 5, 1.0);
  //    Lớp 2: Sao trung bình — tông ấm, kích thước vừa
  const layer2 = createStarLayer(600, 1000, warmColors, textureWarm, 3.2, 0.85);
  //    Lớp 3: Sao xa mờ — rất nhiều, rất nhỏ, tạo chiều sâu vũ trụ (hậu cảnh)
  const layer3 = createStarLayer(1200, 1200, dimColors, textureDim, 1.8, 0.55);

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

    // Mỗi lớp sao xoay với tốc độ khác nhau tạo hiệu ứng parallax chiều sâu
    layer1.points.rotation.y = elapsedTime * 0.015;
    layer2.points.rotation.y = elapsedTime * 0.008;
    layer3.points.rotation.y = elapsedTime * 0.004;

    renderer.render(scene, camera);
  }

  animate();

  // Trả về hàm hủy để dọn dẹp WebGL khi chuyển trang hoặc hủy chạy
  return () => {
    cancelAnimationFrame(animationFrameId);
    [layer1, layer2, layer3].forEach(layer => {
      layer.geometry.dispose();
      layer.material.dispose();
    });
    textureCool.dispose();
    textureWarm.dispose();
    textureDim.dispose();
    renderer.dispose();
  };
}
