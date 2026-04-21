import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [completed, setCompleted] = useState(false);
  const scrollProgress = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000814);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 15, 25);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xF7B538, 60);
    spotLight.position.set(0, 20, 0);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    spotLight.decay = 2;
    spotLight.distance = 100;
    scene.add(spotLight);

    const blueRim = new THREE.PointLight(0x005f73, 10, 50);
    blueRim.position.set(-15, 5, -10);
    scene.add(blueRim);

    const redRim = new THREE.PointLight(0x9b2226, 10, 50);
    redRim.position.set(15, 5, 10);
    scene.add(redRim);

    // Arena floor - Octagon
    const floorGeometry = new THREE.CylinderGeometry(30, 30, 0.5, 8);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.7,
      metalness: 0.4,
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.y = Math.PI / 8;
    floor.position.y = -10;
    scene.add(floor);

    // Ring lines
    const ringGeometry = new THREE.RingGeometry(8, 8.3, 8);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xF7B538,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = -Math.PI / 2;
    ring.rotation.z = Math.PI / 8;
    ring.position.y = -9.7;
    scene.add(ring);

    // Simplified cage - just top and bottom rings
    const cageRingGeo = new THREE.TorusGeometry(12, 0.03, 4, 32);
    const cageRingMat = new THREE.MeshBasicMaterial({
      color: 0x444444,
      transparent: true,
      opacity: 0.3,
    });
    const topRing = new THREE.Mesh(cageRingGeo, cageRingMat);
    topRing.rotation.x = Math.PI / 2;
    topRing.position.y = 5;
    scene.add(topRing);

    // Volumetric particles - reduced count
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 800;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        size: 0.08,
        color: 0xF7B538,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(particlesMesh);

    // Timeline
    const timeline = gsap.timeline({
      paused: true,
      onComplete: () => {
        setCompleted(true);
      },
    });

    timeline.to(floor.position, { y: 0, duration: 1, ease: 'power2.inOut' }, 0);
    timeline.to(camera.position, { y: 8, duration: 1, ease: 'power2.inOut' }, 0);
    timeline.to(camera.position, { z: 10, duration: 1, ease: 'power2.inOut' }, 0);
    timeline.to(camera.position, { x: 0, y: 5, z: 4, duration: 0.8, ease: 'power2.inOut' }, 0.7);

    // Scroll handler
    const handleWheel = (e: WheelEvent) => {
      if (completed) return;
      e.preventDefault();
      scrollProgress.current += e.deltaY * 0.0008;
      scrollProgress.current = Math.max(0, Math.min(scrollProgress.current, 1));
      timeline.progress(scrollProgress.current);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, [completed]);

  return (
    <div className="relative w-full" style={{ height: '100vh' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />

      {/* Hero Text Overlay */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center transition-opacity duration-1000 ${
          completed ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white text-center leading-none tracking-wider">
          DESCEND INTO
          <br />
          <span className="text-[#F7B538]">THE RING</span>
        </h1>
        <p className="mt-6 text-sm sm:text-base text-[#C5C3C6] tracking-[0.3em] uppercase">
          Премиальная спортивная экипировка
        </p>
        <div className="mt-8 flex items-center gap-2 text-[#5C677D] text-xs tracking-widest animate-pulse">
          <div className="w-4 h-4 border border-[#5C677D] rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-[#5C677D] rounded-full" />
          </div>
          ПРОКРУТИТЕ ВНИЗ
        </div>
      </div>

      {/* Fade overlay after completion */}
      {completed && (
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#000814]/50 to-[#000814] pointer-events-none" />
      )}
    </div>
  );
}
