(function () {
  // Check WebGL availability
  function isWebGLAvailable() {
    try {
      var canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  if (!isWebGLAvailable()) {
    console.log("⚠️ WebGL not supported. Skipping interactive 3D background.");
    return;
  }

  console.log("🚀 Initializing RBC 3D WebGL Background Engine...");

  var canvas, scene, camera, renderer, points, clock;
  var targetX = 0, targetY = 0;
  var mouseX = 0, mouseY = 0;

  function init() {
    canvas = document.getElementById('webgl-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'webgl-canvas';
      document.body.insertBefore(canvas, document.body.firstChild);
    }

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30; // Start at normal depth for main content

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Clock for time-based animation
    clock = new THREE.Clock();

    // Create glowing dot texture dynamically
    function createParticleTexture() {
      var pCanvas = document.createElement('canvas');
      pCanvas.width = 32;
      pCanvas.height = 32;
      var ctx = pCanvas.getContext('2d');

      var gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(0, 229, 255, 0.85)'); // Glowing cyan
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.35)'); // Soft blue
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);

      var texture = new THREE.CanvasTexture(pCanvas);
      return texture;
    }

    // Geometry setup (dense particle field)
    var geometry = new THREE.BufferGeometry();
    var particleCount = 8000;
    var positions = new Float32Array(particleCount * 3);
    var colors = new Float32Array(particleCount * 3);

    var colorPalette = [
      new THREE.Color(0x00e5ff), // Cyan
      new THREE.Color(0x3b82f6), // Blue
      new THREE.Color(0xdb2777), // Pink/Magenta
      new THREE.Color(0x8b5cf6), // Violet
    ];

    for (var i = 0; i < particleCount; i++) {
      // Distribute in a cylinder-like field to create a space tunnel effect
      var radius = 15 + Math.random() * 65;
      var theta = Math.random() * Math.PI * 2;
      var z = (Math.random() - 0.5) * 300; // spread along Z axis

      var x = Math.cos(theta) * radius;
      var y = Math.sin(theta) * radius;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Assign dynamic color
      var colorIdx = Math.floor(Math.random() * colorPalette.length);
      var c = colorPalette[colorIdx];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material with additive blending
    var material = new THREE.PointsMaterial({
      size: 1.1,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
      opacity: 0.85
    });

    // Points mesh
    points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse Move and Resize listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);

    // Setup ScrollTrigger synchronisation
    setupScrollTrigger();

    // Start Loop
    animate();
  }

  function onMouseMove(event) {
    targetX = (event.clientX - window.innerWidth / 2) * 0.03;
    targetY = (event.clientY - window.innerHeight / 2) * 0.03;
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function setupScrollTrigger() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.log("⚠️ GSAP/ScrollTrigger not loaded. Scroll integration skipped.");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Camera movement as user scrolls down the page
    gsap.to(camera.position, {
      z: -90,
      scrollTrigger: {
        trigger: '.zigzag-container',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1.5
      }
    });

    // Tunnel rotation as user scrolls down the page
    gsap.to(points.rotation, {
      z: Math.PI * 3.0,
      scrollTrigger: {
        trigger: '.zigzag-container',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 2.0
      }
    });
  }

  function animate() {
    requestAnimationFrame(animate);

    var time = clock.getElapsedTime();

    // LERP mouse coordinates for smooth lag
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    // Shift camera slightly based on LERP'd mouse coordinates
    camera.position.x = mouseX;
    camera.position.y = -mouseY;
    camera.lookAt(0, 0, camera.position.z - 30); // Look ahead in the tunnel

    // Slow orbital rotation
    points.rotation.y = time * 0.015;

    // Soft organic undulating waves
    var positionAttribute = points.geometry.getAttribute('position');
    var positions = positionAttribute.array;

    for (var i = 0; i < positions.length / 3; i++) {
      var z = positions[i * 3 + 2];
      // Wave motion on y axis based on time & z position
      positions[i * 3 + 1] += Math.sin(time * 0.8 + z * 0.02) * 0.008;
    }
    positionAttribute.needsUpdate = true;

    renderer.render(scene, camera);
  }

  // Run init when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();