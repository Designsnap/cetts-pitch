"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animId;
    async function init() {
      const THREE = await import("three");
      const container = canvasRef.current;
      if (!container) return;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x050508, 0.15);

      const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
      camera.position.set(0, 0, 4);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x050508, 1);
      container.appendChild(renderer.domElement);

      // Particle field
      const particleCount = 1500;
      const positions = new Float32Array(particleCount * 3);
      const velocities = [];
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        velocities.push({
          x: (Math.random() - 0.5) * 0.002,
          y: (Math.random() - 0.5) * 0.002,
          z: (Math.random() - 0.5) * 0.002,
        });
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x38bdf8, size: 0.03, transparent: true, opacity: 0.6,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // Central orb
      const orbGeo = new THREE.SphereGeometry(0.5, 64, 64);
      const orbMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.15 });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      scene.add(orb);

      // Orb rings
      const rings = [];
      for (let i = 0; i < 3; i++) {
        const ringGeo = new THREE.TorusGeometry(0.7 + i * 0.25, 0.005, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.2 - i * 0.05 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2 + i * 0.3;
        ring.rotation.y = i * 0.5;
        ring.userData = { speed: 0.002 + i * 0.001 };
        scene.add(ring);
        rings.push(ring);
      }

      scene.add(new THREE.AmbientLight(0x38bdf8, 0.3));

      const clock = new THREE.Clock();

      function animate() {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        const pos = particleGeo.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3] += velocities[i].x;
          pos[i * 3 + 1] += velocities[i].y;
          pos[i * 3 + 2] += velocities[i].z;
          if (Math.abs(pos[i * 3]) > 10) pos[i * 3] *= -0.9;
          if (Math.abs(pos[i * 3 + 1]) > 10) pos[i * 3 + 1] *= -0.9;
          if (Math.abs(pos[i * 3 + 2]) > 10) pos[i * 3 + 2] *= -0.9;
        }
        particleGeo.attributes.position.needsUpdate = true;

        orb.scale.setScalar(1 + Math.sin(t * 0.8) * 0.1);
        orbMat.opacity = 0.1 + Math.sin(t * 1.2) * 0.05;

        rings.forEach((ring) => {
          ring.rotation.z += ring.userData.speed || 0.002;
          ring.rotation.x += (ring.userData.speed || 0.002) * 0.5;
        });

        particles.rotation.y += 0.0003;
        renderer.render(scene, camera);
      }
      animate();

      const onResize = () => {
        const w = container.clientWidth, h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animId);
        renderer.dispose();
      };
    }
    const cleanup = init();
    return () => { cleanup.then?.((fn) => fn?.()); cancelAnimationFrame(animId); };
  }, []);

  return (
    <section id="hero">
      <div id="heroCanvas" ref={canvasRef}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="eyebrow">Classified Technology Brief</div>
        <h1>
          What if mining&apos;s greatest <strong>liability</strong> became its greatest <strong>asset?</strong>
        </h1>
        <p className="hero-sub">A paradigm shift in tailings management. By invitation only.</p>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to begin</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
