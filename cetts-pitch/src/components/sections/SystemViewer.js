"use client";
import { useEffect, useRef } from "react";

export default function SystemViewer() {
  const viewerRef = useRef(null);

  useEffect(() => {
    let animId;
    async function init() {
      const THREE = await import("three");
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");

      const container = viewerRef.current;
      if (!container) return;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0c14);
      scene.fog = new THREE.FogExp2(0x0a0c14, 0.04);

      const camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 200);
      camera.position.set(7, 4.5, 8);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      // Re-add badge
      const badge = document.createElement("div");
      badge.className = "viewer-badge";
      badge.innerHTML = '<i class="fas fa-cube"></i>  Interactive 3D — Drag to rotate';
      container.appendChild(badge);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 1.2, 0);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.maxPolarAngle = Math.PI / 2.05;
      controls.minDistance = 4;
      controls.maxDistance = 16;

      // Lighting
      scene.add(new THREE.AmbientLight(0x6080a0, 0.5));
      const sunLight = new THREE.DirectionalLight(0xfff5e6, 2.0);
      sunLight.position.set(8, 12, 6);
      sunLight.castShadow = true;
      sunLight.shadow.mapSize.set(2048, 2048);
      sunLight.shadow.camera.near = 0.5;
      sunLight.shadow.camera.far = 30;
      sunLight.shadow.camera.left = -8;
      sunLight.shadow.camera.right = 8;
      sunLight.shadow.camera.top = 8;
      sunLight.shadow.camera.bottom = -8;
      sunLight.shadow.bias = -0.001;
      scene.add(sunLight);

      const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.4);
      rimLight.position.set(-5, 3, -4);
      scene.add(rimLight);

      const underGlow = new THREE.PointLight(0x38bdf8, 0.6, 8);
      underGlow.position.set(0, 0.3, 0);
      scene.add(underGlow);

      // Ground
      const concrete = new THREE.Mesh(
        new THREE.PlaneGeometry(40, 40),
        new THREE.MeshStandardMaterial({ color: 0x2a2d35, roughness: 0.95, metalness: 0.05 })
      );
      concrete.rotation.x = -Math.PI / 2;
      concrete.receiveShadow = true;
      scene.add(concrete);

      // Yellow safety lines
      const yellowMat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.8 });
      for (const side of [-1, 1]) {
        const line = new THREE.Mesh(new THREE.BoxGeometry(6, 0.005, 0.08), yellowMat);
        line.position.set(0, 0.002, side * 1.6);
        scene.add(line);
      }

      // Materials
      const steelFrame = new THREE.MeshStandardMaterial({ color: 0x5c6370, metalness: 0.85, roughness: 0.35 });
      const heavySteel = new THREE.MeshStandardMaterial({ color: 0x3d4450, metalness: 0.8, roughness: 0.4 });
      const paintedBlue = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, metalness: 0.15, roughness: 0.6 });
      const paintedGreen = new THREE.MeshStandardMaterial({ color: 0x15803d, metalness: 0.15, roughness: 0.6 });
      const paintedWhite = new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.1, roughness: 0.7 });
      const copperBus = new THREE.MeshStandardMaterial({ color: 0xc87533, metalness: 0.95, roughness: 0.15 });
      const stainlessPipe = new THREE.MeshStandardMaterial({ color: 0x8a9199, metalness: 0.75, roughness: 0.25 });
      const darkPipe = new THREE.MeshStandardMaterial({ color: 0x4b5563, metalness: 0.6, roughness: 0.35 });
      const rubberBlack = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.0, roughness: 0.9 });
      const panelGrey = new THREE.MeshStandardMaterial({ color: 0x374151, metalness: 0.4, roughness: 0.5 });
      const safetyYellow = new THREE.MeshStandardMaterial({ color: 0xeab308, metalness: 0.1, roughness: 0.7 });
      const safetyRed = new THREE.MeshStandardMaterial({ color: 0xdc2626, metalness: 0.1, roughness: 0.6 });
      const glowBlue = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x38bdf8, emissiveIntensity: 0.4, metalness: 0.3, roughness: 0.4 });
      const containerPaint = new THREE.MeshStandardMaterial({ color: 0x1e3a5f, metalness: 0.2, roughness: 0.65 });

      const skid = new THREE.Group();
      const CL = 6.0, CW = 2.4, CH = 2.6;

      // Container floor
      const floor = new THREE.Mesh(new THREE.BoxGeometry(CL, 0.15, CW), heavySteel);
      floor.position.y = 0.075;
      floor.castShadow = true;
      floor.receiveShadow = true;
      skid.add(floor);

      // Corner castings
      const castingGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
      const castingMat = new THREE.MeshStandardMaterial({ color: 0x2d3748, metalness: 0.9, roughness: 0.3 });
      const castingPositions = [
        [-CL/2+0.09, 0.15+0.09, -CW/2+0.09], [CL/2-0.09, 0.15+0.09, -CW/2+0.09],
        [-CL/2+0.09, 0.15+0.09, CW/2-0.09], [CL/2-0.09, 0.15+0.09, CW/2-0.09],
        [-CL/2+0.09, CH+0.06, -CW/2+0.09], [CL/2-0.09, CH+0.06, -CW/2+0.09],
        [-CL/2+0.09, CH+0.06, CW/2-0.09], [CL/2-0.09, CH+0.06, CW/2-0.09],
      ];
      castingPositions.forEach(([x,y,z]) => {
        const c = new THREE.Mesh(castingGeo, castingMat);
        c.position.set(x,y,z);
        c.castShadow = true;
        skid.add(c);
      });

      // Corner posts
      const postH = CH - 0.15;
      [[-CL/2+0.05, -CW/2+0.05], [CL/2-0.05, -CW/2+0.05], [-CL/2+0.05, CW/2-0.05], [CL/2-0.05, CW/2-0.05]].forEach(([x,z]) => {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.1, postH, 0.1), steelFrame);
        post.position.set(x, 0.15 + postH/2, z);
        post.castShadow = true;
        skid.add(post);
      });

      // Top frame rails
      const topY = CH;
      for (const z of [-CW/2+0.05, CW/2-0.05]) {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(CL-0.1, 0.08, 0.08), steelFrame);
        rail.position.set(0, topY, z);
        skid.add(rail);
      }
      for (const x of [-CL/2+0.05, CL/2-0.05]) {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, CW-0.1), steelFrame);
        rail.position.set(x, topY, 0);
        skid.add(rail);
      }

      // Back wall
      const backWall = new THREE.Mesh(new THREE.BoxGeometry(0.04, postH, CW-0.2), containerPaint);
      backWall.position.set(-CL/2+0.02, 0.15+postH/2, 0);
      backWall.castShadow = true;
      skid.add(backWall);
      for (let j = 0; j < 12; j++) {
        const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.015, postH-0.2, 0.03), containerPaint);
        ridge.position.set(-CL/2+0.05, 0.15+postH/2, -CW/2+0.3+j*0.16);
        skid.add(ridge);
      }

      // Side walls (partial)
      for (const zSide of [-1, 1]) {
        const wallH = postH * 0.45;
        const sideWall = new THREE.Mesh(new THREE.BoxGeometry(CL-0.2, wallH, 0.03), containerPaint);
        sideWall.position.set(0, 0.15+wallH/2, zSide*(CW/2-0.015));
        sideWall.castShadow = true;
        skid.add(sideWall);
        for (let j = 0; j < 28; j++) {
          const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.03, wallH-0.1, 0.012), containerPaint);
          ridge.position.set(-CL/2+0.3+j*0.2, 0.15+wallH/2, zSide*(CW/2-0.035));
          skid.add(ridge);
        }
        const meshH = postH * 0.5;
        const meshWall = new THREE.Mesh(
          new THREE.BoxGeometry(CL-0.2, meshH, 0.01),
          new THREE.MeshStandardMaterial({ color: 0x4a5568, metalness: 0.6, roughness: 0.4, wireframe: true, transparent: true, opacity: 0.4 })
        );
        meshWall.position.set(0, 0.15+wallH+meshH/2, zSide*(CW/2-0.02));
        skid.add(meshWall);
      }

      // Floor cross-members
      for (let i = -2; i <= 2; i++) {
        const xBeam = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.12, CW-0.2), heavySteel);
        xBeam.position.set(i * 1.2, 0.075, 0);
        skid.add(xBeam);
      }

      // Diamond plate walkway
      const walkSurface = new THREE.Mesh(
        new THREE.BoxGeometry(CL-0.3, 0.02, CW-0.3),
        new THREE.MeshStandardMaterial({ color: 0x4b5563, metalness: 0.7, roughness: 0.5 })
      );
      walkSurface.position.y = 0.16;
      walkSurface.receiveShadow = true;
      skid.add(walkSurface);

      // ── FEED TANK ──
      const feedR = 0.45, feedH = 1.6;
      const feedTank = new THREE.Mesh(new THREE.CylinderGeometry(feedR, feedR, feedH, 48), paintedBlue);
      feedTank.position.set(-2.0, 0.16+feedH/2, -0.4);
      feedTank.castShadow = true;
      skid.add(feedTank);
      const feedTop = new THREE.Mesh(new THREE.SphereGeometry(feedR, 48, 24, 0, Math.PI*2, 0, Math.PI/3), paintedBlue);
      feedTop.position.set(-2.0, 0.16+feedH+0.05, -0.4);
      skid.add(feedTop);
      for (const bh of [0.4, 0.8, 1.2]) {
        const band = new THREE.Mesh(new THREE.TorusGeometry(feedR+0.01, 0.015, 8, 48), steelFrame);
        band.rotation.x = Math.PI/2;
        band.position.set(-2.0, 0.16+bh, -0.4);
        skid.add(band);
      }
      for (const nz of [0.3, 0.8, 1.3]) {
        const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.12, 16), stainlessPipe);
        nozzle.rotation.z = Math.PI/2;
        nozzle.position.set(-2.0+feedR+0.06, 0.16+nz, -0.4);
        skid.add(nozzle);
        const flange = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 16), steelFrame);
        flange.rotation.z = Math.PI/2;
        flange.position.set(-2.0+feedR+0.12, 0.16+nz, -0.4);
        skid.add(flange);
      }
      const sightGlass = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.0, 8),
        new THREE.MeshStandardMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.5, metalness: 0.3 }));
      sightGlass.position.set(-2.0-feedR-0.05, 0.16+0.7, -0.4);
      skid.add(sightGlass);

      // ── NEUTRALIZATION TANK ──
      const neutR = 0.38, neutH = 1.4;
      const neutTank = new THREE.Mesh(new THREE.CylinderGeometry(neutR, neutR, neutH, 48), paintedGreen);
      neutTank.position.set(-2.0, 0.16+neutH/2, 0.5);
      neutTank.castShadow = true;
      skid.add(neutTank);
      const neutTop = new THREE.Mesh(new THREE.SphereGeometry(neutR, 48, 24, 0, Math.PI*2, 0, Math.PI/3), paintedGreen);
      neutTop.position.set(-2.0, 0.16+neutH+0.03, 0.5);
      skid.add(neutTop);
      for (const bh of [0.35, 0.7, 1.05]) {
        const band = new THREE.Mesh(new THREE.TorusGeometry(neutR+0.01, 0.012, 8, 48), steelFrame);
        band.rotation.x = Math.PI/2;
        band.position.set(-2.0, 0.16+bh, 0.5);
        skid.add(band);
      }
      const agMotor = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.18, 24), heavySteel);
      agMotor.position.set(-2.0, 0.16+neutH+0.35, 0.5);
      skid.add(agMotor);
      const agCoupling = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.12, 16), steelFrame);
      agCoupling.position.set(-2.0, 0.16+neutH+0.2, 0.5);
      skid.add(agCoupling);
      const agitator = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, neutH+0.1, 12), stainlessPipe);
      agitator.position.set(-2.0, 0.16+neutH/2+0.05, 0.5);
      skid.add(agitator);
      const impellers = [];
      for (let b = 0; b < 4; b++) {
        const blade = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.015), stainlessPipe);
        blade.position.set(-2.0, 0.16+0.4, 0.5);
        blade.rotation.y = b * Math.PI/2;
        blade.userData.isImpeller = true;
        skid.add(blade);
        impellers.push(blade);
      }

      // ── EC CELL STACK ──
      const cellStack = new THREE.Group();
      const numCells = 12;
      const cellSpacing = 0.055;
      const stackWidth = numCells * cellSpacing;

      for (const end of [-1, 1]) {
        const endPlate = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.0, 0.06), heavySteel);
        endPlate.position.z = end * (stackWidth/2 + 0.03);
        cellStack.add(endPlate);
      }
      for (const tx of [-0.35, 0.35]) {
        for (const ty of [-0.4, 0.4]) {
          const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, stackWidth+0.2, 8), stainlessPipe);
          rod.rotation.x = Math.PI/2;
          rod.position.set(tx, ty, 0);
          cellStack.add(rod);
          for (const ne of [-1, 1]) {
            const nut = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.015, 6), steelFrame);
            nut.rotation.x = Math.PI/2;
            nut.position.set(tx, ty, ne*(stackWidth/2+0.1));
            cellStack.add(nut);
          }
        }
      }
      const membranes = [];
      for (let i = 0; i < numCells; i++) {
        const plate = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.9, 0.02),
          i % 2 === 0
            ? new THREE.MeshStandardMaterial({ color: 0x4a5568, metalness: 0.85, roughness: 0.25 })
            : new THREE.MeshStandardMaterial({ color: 0x6b7280, metalness: 0.8, roughness: 0.3 }));
        plate.position.z = -stackWidth/2 + i * cellSpacing + 0.01;
        cellStack.add(plate);
        if (i < numCells - 1) {
          const membrane = new THREE.Mesh(
            new THREE.BoxGeometry(0.65, 0.85, 0.005),
            new THREE.MeshStandardMaterial({
              color: 0x38bdf8, transparent: true, opacity: 0.25,
              emissive: 0x38bdf8, emissiveIntensity: 0.3,
              side: THREE.DoubleSide,
            })
          );
          membrane.position.z = -stackWidth/2 + i * cellSpacing + cellSpacing/2;
          membrane.userData.isMembrane = true;
          cellStack.add(membrane);
          membranes.push(membrane);
        }
      }
      for (const bx of [-0.42, 0.42]) {
        const bus = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, stackWidth+0.15), copperBus);
        bus.position.set(bx, 0.35, 0);
        cellStack.add(bus);
        for (const ne of [-1, 1]) {
          const lug = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), copperBus);
          lug.position.set(bx, 0.35, ne*(stackWidth/2+0.08));
          cellStack.add(lug);
        }
      }
      for (const my of [-0.38, 0.38]) {
        const manifold = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, stackWidth+0.1, 16), stainlessPipe);
        manifold.rotation.x = Math.PI/2;
        manifold.position.set(0, my, 0);
        cellStack.add(manifold);
      }
      cellStack.position.set(0.3, 0.16+0.65, 0);
      cellStack.castShadow = true;
      skid.add(cellStack);

      // ── PSU ──
      const psuW = 0.7, psuH = 1.2, psuD = 0.5;
      const psu = new THREE.Mesh(new THREE.BoxGeometry(psuW, psuH, psuD), panelGrey);
      psu.position.set(2.0, 0.16+psuH/2, -0.5);
      psu.castShadow = true;
      skid.add(psu);
      for (let lv = 0; lv < 6; lv++) {
        const louver = new THREE.Mesh(new THREE.BoxGeometry(psuW-0.1, 0.008, 0.03), steelFrame);
        louver.position.set(2.0, 0.16+0.3+lv*0.1, -0.5-psuD/2-0.015);
        louver.rotation.x = 0.3;
        skid.add(louver);
      }
      const display = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.01),
        new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x22d3ee, emissiveIntensity: 0.7 }));
      display.position.set(2.0, 0.16+psuH-0.2, -0.5+psuD/2+0.005);
      skid.add(display);
      const leds = [];
      const ledData = [{c:0x22c55e}, {c:0xf59e0b}, {c:0xef4444}];
      ledData.forEach((ld, i) => {
        const led = new THREE.Mesh(new THREE.SphereGeometry(0.015, 12, 12),
          new THREE.MeshStandardMaterial({ color: ld.c, emissive: ld.c, emissiveIntensity: 1.0 }));
        led.position.set(1.8+i*0.1, 0.16+psuH-0.05, -0.5+psuD/2+0.005);
        skid.add(led);
        leds.push(led);
      });
      for (let ti = 0; ti < 2; ti++) {
        const terminal = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.06, 12),
          ti === 0 ? safetyRed : new THREE.MeshStandardMaterial({ color: 0x1e40af }));
        terminal.position.set(2.0-0.12+ti*0.24, 0.16+psuH+0.03, -0.5);
        skid.add(terminal);
      }

      // ── HMI CABINET ──
      const hmiW = 0.5, hmiH = 1.4, hmiD = 0.35;
      const hmiCab = new THREE.Mesh(new THREE.BoxGeometry(hmiW, hmiH, hmiD), paintedWhite);
      hmiCab.position.set(2.2, 0.16+hmiH/2, 0.6);
      hmiCab.castShadow = true;
      skid.add(hmiCab);
      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.12, 0.02), steelFrame);
      handle.position.set(2.2+hmiW/2-0.06, 0.16+hmiH/2, 0.6+hmiD/2+0.01);
      skid.add(handle);
      const hmiScreen = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.2, 0.015),
        new THREE.MeshStandardMaterial({ color: 0x0ea5e9, emissive: 0x0ea5e9, emissiveIntensity: 0.5 }));
      hmiScreen.position.set(2.2, 0.16+hmiH-0.25, 0.6+hmiD/2+0.008);
      skid.add(hmiScreen);
      const eStop = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.02, 16), safetyRed);
      eStop.rotation.x = Math.PI/2;
      eStop.position.set(2.2, 0.16+hmiH/2-0.3, 0.6+hmiD/2+0.01);
      skid.add(eStop);
      const eStopRing = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.005, 8, 16), safetyYellow);
      eStopRing.rotation.x = Math.PI/2;
      eStopRing.position.set(2.2, 0.16+hmiH/2-0.3, 0.6+hmiD/2+0.015);
      skid.add(eStopRing);

      // ── PUMPS ──
      function buildPump(px, pz) {
        const pumpGroup = new THREE.Group();
        const volute = new THREE.Mesh(new THREE.SphereGeometry(0.12, 24, 24), paintedBlue);
        volute.scale.set(1, 0.7, 1);
        pumpGroup.add(volute);
        const suction = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.15, 16), stainlessPipe);
        suction.rotation.z = Math.PI/2;
        suction.position.set(-0.18, 0, 0);
        pumpGroup.add(suction);
        const discharge = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.12, 16), stainlessPipe);
        discharge.position.set(0, 0.12, 0);
        pumpGroup.add(discharge);
        const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.25, 24), heavySteel);
        motor.rotation.z = Math.PI/2;
        motor.position.set(0.2, 0, 0);
        pumpGroup.add(motor);
        for (let f = 0; f < 8; f++) {
          const fin = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.16, 0.22), heavySteel);
          fin.position.set(0.12+f*0.02, 0, 0);
          pumpGroup.add(fin);
        }
        const guard = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.06, 16), safetyYellow);
        guard.rotation.z = Math.PI/2;
        guard.position.set(0.06, 0, 0);
        pumpGroup.add(guard);
        const base = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, 0.2), heavySteel);
        base.position.y = -0.1;
        pumpGroup.add(base);
        pumpGroup.position.set(px, 0.16+0.22, pz);
        pumpGroup.castShadow = true;
        skid.add(pumpGroup);
      }
      buildPump(0.9, -0.6);
      buildPump(0.9, 0.5);

      // ── PIPING HELPERS ──
      function addPipe(x1,y1,z1, x2,y2,z2, mat, radius) {
        const r = radius || 0.03;
        const dir = new THREE.Vector3(x2-x1,y2-y1,z2-z1);
        const len = dir.length();
        if (len < 0.01) return;
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 12), mat || stainlessPipe);
        pipe.position.set((x1+x2)/2,(y1+y2)/2,(z1+z2)/2);
        dir.normalize();
        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0), dir);
        pipe.quaternion.copy(quat);
        pipe.castShadow = true;
        skid.add(pipe);
      }
      function addElbow(x,y,z, mat) {
        const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 12), mat || stainlessPipe);
        elbow.position.set(x,y,z);
        skid.add(elbow);
      }
      function addFlange(x,y,z, rotAxis, mat) {
        const flange = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 16), mat || steelFrame);
        if (rotAxis === "x") flange.rotation.x = Math.PI/2;
        else if (rotAxis === "z") flange.rotation.z = Math.PI/2;
        flange.position.set(x,y,z);
        skid.add(flange);
      }

      // Piping network
      const pipeY1 = 0.5;
      addPipe(-2.0+feedR+0.12, pipeY1, -0.4, -0.5, pipeY1, -0.4);
      addElbow(-0.5, pipeY1, -0.4);
      addPipe(-0.5, pipeY1, -0.4, -0.5, pipeY1, -0.6);
      addPipe(-0.5, pipeY1, -0.6, 0.7, pipeY1, -0.6);
      addFlange(0.7, pipeY1, -0.6, "z");
      addPipe(0.9, 0.55, -0.6, 0.9, 0.9, -0.6);
      addElbow(0.9, 0.9, -0.6);
      addPipe(0.9, 0.9, -0.6, 0.9, 0.9, -0.33);
      addElbow(0.9, 0.9, -0.33);
      addPipe(0.9, 0.9, -0.33, 0.3, 0.9, -0.33, glowBlue);
      addFlange(0.3, 0.9, -0.33, "z", glowBlue);
      addPipe(0.3, 0.5, 0.33, -0.5, 0.5, 0.33);
      addElbow(-0.5, 0.5, 0.33);
      addPipe(-0.5, 0.5, 0.33, -0.5, 0.5, 0.5);
      addPipe(-0.5, 0.5, 0.5, -2.0+0.38+0.12, 0.5, 0.5);
      addFlange(-2.0+0.38+0.12, 0.5, 0.5, "z");
      addPipe(-2.0+0.38+0.12, 0.85, 0.5, -0.3, 0.85, 0.5);
      addElbow(-0.3, 0.85, 0.5);
      addPipe(-0.3, 0.85, 0.5, 0.7, 0.85, 0.5);
      addFlange(0.7, 0.85, 0.5, "z");
      addPipe(2.0, 0.16+psuH+0.03, -0.5, 2.0, 1.8, -0.5, copperBus, 0.02);
      addElbow(2.0, 1.8, -0.5, copperBus);
      addPipe(2.0, 1.8, -0.5, 0.72, 1.8, -0.5, copperBus, 0.02);
      addElbow(0.72, 1.8, -0.5, copperBus);
      addPipe(0.72, 1.8, -0.5, 0.72, 1.0, 0, copperBus, 0.02);
      addPipe(-2.0, 0.3, -0.4, -2.0, 0.3, 0.5, darkPipe, 0.025);

      // ── GATE VALVES ──
      function addGateValve(x,y,z) {
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 0.06), heavySteel);
        body.position.set(x,y,z);
        skid.add(body);
        const bonnet = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.1, 12), steelFrame);
        bonnet.position.set(x, y+0.09, z);
        skid.add(bonnet);
        const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.005, 8, 24), safetyRed);
        wheel.position.set(x, y+0.15, z);
        skid.add(wheel);
        for (let s = 0; s < 4; s++) {
          const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.065, 6), safetyRed);
          spoke.rotation.z = Math.PI/2;
          spoke.rotation.y = s * Math.PI/4;
          spoke.position.set(x, y+0.15, z);
          skid.add(spoke);
        }
        for (const side of [-1, 1]) {
          const vFlange = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.015, 16), steelFrame);
          vFlange.rotation.z = Math.PI/2;
          vFlange.position.set(x + side*0.04, y, z);
          skid.add(vFlange);
        }
      }
      addGateValve(-0.5, pipeY1, -0.5);
      addGateValve(0.2, 0.9, -0.33);
      addGateValve(-0.9, 0.5, 0.42);
      addGateValve(-0.3, 0.85, 0.5);

      // ── PRESSURE GAUGES ──
      function addPressureGauge(x, y, z) {
        const face = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.015, 24), paintedWhite);
        face.rotation.x = Math.PI/2;
        face.position.set(x, y, z);
        skid.add(face);
        const rim = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.004, 8, 24), steelFrame);
        rim.rotation.x = Math.PI/2;
        rim.position.set(x, y, z+0.008);
        skid.add(rim);
        const needle = new THREE.Mesh(new THREE.BoxGeometry(0.002, 0.025, 0.002), safetyRed);
        needle.position.set(x, y+0.005, z+0.01);
        needle.rotation.z = -0.4 + Math.random() * 0.8;
        skid.add(needle);
        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.06, 8), stainlessPipe);
        stem.position.set(x, y-0.05, z);
        skid.add(stem);
      }
      addPressureGauge(-0.5, 0.65, -0.4);
      addPressureGauge(0.9, 1.05, -0.6);
      addPressureGauge(-0.9, 0.65, 0.5);
      addPressureGauge(0.3, 1.15, 0.33);

      // ── CABLE TRAY ──
      const trayY = CH - 0.15;
      const tray = new THREE.Mesh(new THREE.BoxGeometry(CL-0.6, 0.03, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x4b5563, metalness: 0.6, roughness: 0.4 }));
      tray.position.set(0, trayY, -CW/2+0.25);
      skid.add(tray);
      for (const ts of [-0.1, 0.1]) {
        const tRail = new THREE.Mesh(new THREE.BoxGeometry(CL-0.6, 0.06, 0.015), steelFrame);
        tRail.position.set(0, trayY+0.03, -CW/2+0.25+ts);
        skid.add(tRail);
      }
      const cableColors = [0xdc2626, 0x2563eb, 0x16a34a, 0xeab308, 0x7c3aed, 0x000000];
      cableColors.forEach((cc, i) => {
        const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, CL-0.8, 8),
          new THREE.MeshStandardMaterial({ color: cc, roughness: 0.8 }));
        cable.rotation.z = Math.PI/2;
        cable.position.set(0, trayY+0.04, -CW/2+0.2+i*0.025);
        skid.add(cable);
      });
      const conduitMat = new THREE.MeshStandardMaterial({ color: 0x6b7280, metalness: 0.5, roughness: 0.4 });
      addPipe(1.8, trayY, -CW/2+0.25, 1.8, 0.16+psuH, -0.5, conduitMat, 0.015);
      addPipe(2.0, trayY, -CW/2+0.25, 2.0, 0.16+hmiH, 0.6, conduitMat, 0.015);
      addPipe(0.3, trayY, -CW/2+0.25, 0.3, 1.6, 0, conduitMat, 0.015);

      // ── DRIP TRAY ──
      const dripTray = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.04, 1.0),
        new THREE.MeshStandardMaterial({ color: 0x374151, metalness: 0.5, roughness: 0.5 }));
      dripTray.position.set(0.3, 0.17, 0);
      skid.add(dripTray);
      for (const dx of [-0.6, 0.6]) {
        const lip = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.06, 1.0), heavySteel);
        lip.position.set(0.3+dx, 0.2, 0);
        skid.add(lip);
      }
      for (const dz of [-0.5, 0.5]) {
        const lip = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.06, 0.02), heavySteel);
        lip.position.set(0.3, 0.2, dz);
        skid.add(lip);
      }
      addPipe(0.3, 0.17, 0.5, 0.3, 0.17, CW/2+0.3, darkPipe, 0.02);

      // ── NAMEPLATE ──
      const namePlate = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.005),
        new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 0.9, roughness: 0.2 }));
      namePlate.position.set(CL/2-0.25, 1.2, CW/2-0.01);
      skid.add(namePlate);

      // ── SAFETY SIGNAGE ──
      const hazSign = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 0.005), safetyYellow);
      hazSign.position.set(-CL/2+0.06, 1.5, 0);
      hazSign.rotation.z = Math.PI/4;
      skid.add(hazSign);
      const hvSign = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.005), safetyRed);
      hvSign.position.set(2.0, 0.16+psuH+0.15, -0.5+psuD/2+0.005);
      skid.add(hvSign);

      // ── FORKLIFT POCKETS ──
      for (const fz of [-0.6, 0.6]) {
        const pocket = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.5), heavySteel);
        pocket.position.set(-CL/2+0.1, 0.05, fz);
        skid.add(pocket);
        const pocket2 = pocket.clone();
        pocket2.position.x = CL/2-0.1;
        skid.add(pocket2);
      }

      // ── BOLLARDS ──
      const bollardMat = new THREE.MeshStandardMaterial({ color: 0xeab308, metalness: 0.2, roughness: 0.6 });
      const bollardPositions = [
        [-CL/2-0.5, 0, -CW/2-0.5], [CL/2+0.5, 0, -CW/2-0.5],
        [-CL/2-0.5, 0, CW/2+0.5], [CL/2+0.5, 0, CW/2+0.5],
        [0, 0, -CW/2-0.5], [0, 0, CW/2+0.5],
      ];
      bollardPositions.forEach(([bx, , bz]) => {
        const bollard = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.8, 16), bollardMat);
        bollard.position.set(bx, 0.4, bz);
        bollard.castShadow = true;
        scene.add(bollard);
        const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.062, 0.08, 16), rubberBlack);
        stripe.position.set(bx, 0.65, bz);
        scene.add(stripe);
      });

      // ── GRAVEL ──
      const gravelGeo = new THREE.BufferGeometry();
      const gravelCount = 800;
      const gravelPos = new Float32Array(gravelCount * 3);
      for (let i = 0; i < gravelCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 3 + Math.random() * 12;
        gravelPos[i*3] = Math.cos(angle) * dist;
        gravelPos[i*3+1] = Math.random() * 0.02;
        gravelPos[i*3+2] = Math.sin(angle) * dist;
      }
      gravelGeo.setAttribute("position", new THREE.BufferAttribute(gravelPos, 3));
      scene.add(new THREE.Points(gravelGeo, new THREE.PointsMaterial({ color: 0x4a4a4a, size: 0.06 })));

      // ── INTERIOR LIGHTS ──
      const workLight = new THREE.PointLight(0xfff0d0, 0.8, 5);
      workLight.position.set(0, CH-0.2, 0);
      skid.add(workLight);
      const cellGlow = new THREE.PointLight(0x38bdf8, 0.6, 3);
      cellGlow.position.set(0.3, 1.0, 0);
      skid.add(cellGlow);
      const hmiGlow = new THREE.PointLight(0x22d3ee, 0.3, 2);
      hmiGlow.position.set(2.2, 1.2, 0.6);
      skid.add(hmiGlow);

      // Instrument air line
      addPipe(-CL/2+0.3, trayY-0.1, CW/2-0.15, CL/2-0.3, trayY-0.1, CW/2-0.15, safetyYellow, 0.012);

      scene.add(skid);

      // ── ANIMATION ──
      const clock = new THREE.Clock();

      function animate() {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        membranes.forEach((m, i) => {
          m.material.emissiveIntensity = 0.2 + Math.sin(t * 1.5 + i * 0.4) * 0.25;
          m.material.opacity = 0.2 + Math.sin(t * 1.5 + i * 0.4) * 0.1;
        });
        cellGlow.intensity = 0.4 + Math.sin(t * 1.5) * 0.3;
        leds.forEach((led, i) => {
          if (i === 0) led.material.emissiveIntensity = 0.8 + Math.sin(t * 2) * 0.2;
          else if (i === 1) led.material.emissiveIntensity = 0.05;
          else led.material.emissiveIntensity = 0.02;
        });
        hmiScreen.material.emissiveIntensity = 0.45 + Math.sin(t * 8) * 0.05;
        display.material.emissiveIntensity = 0.6 + Math.sin(t * 3) * 0.1;
        agitator.rotation.y = t * 1.5;
        impellers.forEach((imp) => { imp.rotation.y = t * 1.5; });
        workLight.intensity = 0.75 + Math.sin(t * 12) * 0.05;

        controls.update();
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
    return () => {
      cleanup.then?.((fn) => fn?.());
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="section" id="system">
      <div className="section-label">The System</div>
      <div className="section-title">
        CETTS — <strong>Containerized. Modular. Deployable.</strong>
      </div>
      <div className="section-desc">
        Feed tailings in. Recover metals and clean water out. Zero discharge. Fits in a shipping container.
      </div>
      <div className="viewer-container" id="mainViewer" ref={viewerRef}>
        <div className="viewer-badge">
          <i className="fas fa-cube"></i>&nbsp; Interactive 3D — Drag to rotate
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "1rem", marginTop: "2rem" }}>
        {[
          { val: "20ft", label: "Container Footprint" },
          { val: "Continuous", label: "Operation Mode" },
          { val: "Zero", label: "Waste Discharge" },
          { val: "SCADA", label: "Ready Integration" },
        ].map((item, i) => (
          <div className="proof-card" key={i} style={{ borderColor: "rgba(56,189,248,0.15)" }}>
            <div className="proof-val" style={{ fontSize: "1.5rem" }}>{item.val}</div>
            <div className="proof-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
