import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleCanvasProps {
    shapes: string[][];
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ shapes }) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
    const isInitialized = useRef(false);

    useEffect(() => {
        if (!mountRef.current) return;

        let renderer: THREE.WebGLRenderer;
        let scene: THREE.Scene;
        let camera: THREE.PerspectiveCamera;
        let geometry: THREE.BufferGeometry;
        let material: THREE.ShaderMaterial;
        let animationFrameId: number;

        const VOL_DEPTH = 100;
        const SAMPLE_RES = 600;
        const PARTICLE_COUNT = 8000;

        const init = (width: number, height: number) => {
            if (isInitialized.current) return;
            isInitialized.current = true;

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(50, width / height, 1, 5000);
            camera.position.z = 1200;
            camera.lookAt(0, 0, 0);

            renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true,
                powerPreference: "high-performance"
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);

            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.0;

            mountRef.current?.appendChild(renderer.domElement);

            const generateMultiTarget = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d', { willReadFrequently: true });
                if (!ctx) return [];

                canvas.width = SAMPLE_RES;
                canvas.height = SAMPLE_RES;

                const contentWidth = 4010;
                const contentHeight = 3180;
                const s = Math.min(SAMPLE_RES / contentWidth, SAMPLE_RES / contentHeight) * 0.75;

                ctx.translate(SAMPLE_RES / 2, SAMPLE_RES / 2);
                ctx.scale(s, -s);
                ctx.translate(-contentWidth / 2, -contentHeight / 2);
                ctx.strokeStyle = "white";
                ctx.lineWidth = 25;

                const getPointsFromPaths = (paths: string[]) => {
                    ctx.clearRect(-10000, -10000, 20000, 20000);
                    paths.forEach(pathData => {
                        const dMatch = pathData.match(/d="([^"]+)"/);
                        if (dMatch) ctx.stroke(new Path2D(dMatch[1]));
                    });

                    const imageData = ctx.getImageData(0, 0, SAMPLE_RES, SAMPLE_RES).data;
                    const pts = [];
                    for (let y = 0; y < SAMPLE_RES; y += 3) {
                        for (let x = 0; x < SAMPLE_RES; x += 3) {
                            const idx = (y * SAMPLE_RES + x) * 4;
                            if (imageData[idx + 3] > 40) {
                                pts.push({
                                    x: (x - SAMPLE_RES / 2) * 1.5,
                                    y: (SAMPLE_RES / 2 - y) * 1.5 - 50,
                                    z: (Math.random() - 0.5) * VOL_DEPTH
                                });
                            }
                        }
                    }
                    return pts;
                };

                // Sample all available shapes
                const shapePoints = shapes.map(paths => getPointsFromPaths(paths));

                // Fallback for second shape if only one provided
                if (shapePoints.length < 2) {
                    const pts2 = [];
                    for (let i = 0; i < (shapePoints[0]?.length || 0); i++) {
                        const angle = Math.random() * Math.PI * 2;
                        const radius = 250 + Math.random() * 50;
                        pts2.push({
                            x: Math.cos(angle) * radius,
                            y: Math.sin(angle) * radius - 50,
                            z: (Math.random() - 0.5) * 150
                        });
                    }
                    shapePoints.push(pts2);
                }

                const allParticles = [];
                const logoCount = 4000;

                for (let i = 0; i < logoCount; i++) {
                    const p1 = shapePoints[0][i % shapePoints[0].length];
                    const p2 = shapePoints[1][i % shapePoints[1].length];
                    allParticles.push({
                        x1: p1.x, y1: p1.y, z1: p1.z,
                        x2: p2.x, y2: p2.y, z2: p2.z,
                        size: 2.5 + Math.random() * 4.5,
                        alpha: 0.8 + Math.random() * 0.2,
                        phase: Math.random() * Math.PI * 2,
                        type: 0
                    });
                }

                for (let i = 0; i < 4000; i++) {
                    const px = (Math.random() - 0.5) * 2500;
                    const py = (Math.random() - 0.5) * 2000;
                    const pz = (Math.random() - 0.5) * 1200;
                    allParticles.push({
                        x1: px, y1: py, z1: pz,
                        x2: px * 1.1, y2: py * 1.1, z2: pz,
                        size: 1.5 + Math.random() * 4.0,
                        alpha: 0.3 + Math.random() * 0.4,
                        phase: Math.random() * Math.PI * 2,
                        type: 1
                    });
                }

                return allParticles;
            };

            const sampledData = generateMultiTarget();
            if (sampledData.length === 0) return;

            geometry = new THREE.BufferGeometry();
            const count = sampledData.length;
            const posAttr = new Float32Array(count * 3);
            const targetPos1Attr = new Float32Array(count * 3);
            const targetPos2Attr = new Float32Array(count * 3);
            const sizeAttr = new Float32Array(count);
            const alphaAttr = new Float32Array(count);
            const phaseAttr = new Float32Array(count);
            const typeAttr = new Float32Array(count);

            sampledData.forEach((p, i) => {
                posAttr[i * 3] = p.x1; posAttr[i * 3 + 1] = p.y1; posAttr[i * 3 + 2] = p.z1;
                targetPos1Attr[i * 3] = p.x1; targetPos1Attr[i * 3 + 1] = p.y1; targetPos1Attr[i * 3 + 2] = p.z1;
                targetPos2Attr[i * 3] = p.x2; targetPos2Attr[i * 3 + 1] = p.y2; targetPos2Attr[i * 3 + 2] = p.z2;
                sizeAttr[i] = p.size;
                alphaAttr[i] = p.alpha;
                phaseAttr[i] = p.phase;
                typeAttr[i] = p.type;
            });

            geometry.setAttribute('position', new THREE.BufferAttribute(posAttr, 3));
            geometry.setAttribute('targetPos1', new THREE.BufferAttribute(targetPos1Attr, 3));
            geometry.setAttribute('targetPos2', new THREE.BufferAttribute(targetPos2Attr, 3));
            geometry.setAttribute('size', new THREE.BufferAttribute(sizeAttr, 1));
            geometry.setAttribute('alpha', new THREE.BufferAttribute(alphaAttr, 1));
            geometry.setAttribute('phase', new THREE.BufferAttribute(phaseAttr, 1));
            geometry.setAttribute('pType', new THREE.BufferAttribute(typeAttr, 1));

            material = new THREE.ShaderMaterial({
                transparent: true,
                depthTest: true,
                depthWrite: true,
                blending: THREE.NormalBlending,
                uniforms: {
                    uTime: { value: 0 },
                    uMouse: { value: new THREE.Vector2(0, 0) },
                    uVolDepth: { value: VOL_DEPTH },
                    uMorphProgress: { value: 0.0 }
                },
                vertexShader: `
                    attribute vec3 targetPos1;
                    attribute vec3 targetPos2;
                    attribute float size;
                    attribute float alpha;
                    attribute float phase;
                    attribute float pType;
                    varying float vAlpha;
                    varying float vDist;
                    varying float vType;
                    varying float vZDepth;
                    varying float vMorphProgress;
                    varying vec3 vPosition;
                    uniform float uTime;
                    uniform vec2 uMouse;
                    uniform float uVolDepth;
                    uniform float uMorphProgress;

                    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                    float snoise(vec2 v){
                      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                      vec2 i = floor(v + dot(v, C.yy) );
                      vec2 x0 = v - i + dot(i, C.xx);
                      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                      vec4 x12 = x0.xyxy + C.xxzz;
                      x12.xy -= i1;
                      i = mod(i, 289.0);
                      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                      m = m*m; m = m*m;
                      vec3 x = 2.0 * fract(p * C.www) - 1.0;
                      vec3 h = abs(x) - 0.5;
                      vec3 ox = floor(x + 0.5);
                      vec3 a0 = x - ox;
                      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                      vec3 g;
                      g.x = a0.x * x0.x + h.x * x0.y;
                      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                      return 130.0 * dot(m, g);
                    }

                    void main() {
                        vAlpha = alpha;
                        vType = pType;
                        vMorphProgress = uMorphProgress;

                        vec3 basePos = mix(targetPos1, targetPos2, uMorphProgress);
                        vZDepth = basePos.z;
                        vPosition = basePos;

                        vec3 pos = basePos;
                        
                        // Reduced organic movement for stability
                        float nScale = pType > 0.5 ? 0.001 : 0.003;
                        float nFreq = pType > 0.5 ? 0.02 : 0.08;  // Reduced from 0.05/0.2
                        float nx = snoise(vec2(basePos.x * nScale + uTime * nFreq, basePos.y * nScale));
                        float ny = snoise(vec2(basePos.y * nScale + uTime * nFreq, basePos.x * nScale));
                        
                        pos.x += nx * (pType > 0.5 ? 12.0 : 4.0);  // Reduced from 30/10
                        pos.y += ny * (pType > 0.5 ? 12.0 : 4.0);  // Reduced from 30/10
                        pos.z += snoise(vec2(basePos.z * nScale, uTime * 0.2)) * 5.0;  // Reduced from 15

                        pos.x += cos(uTime * (pType > 0.5 ? 0.2 : 0.6) + phase) * 1.5;  // Reduced from 4.0
                        pos.y += sin(uTime * (pType > 0.5 ? 0.2 : 0.6) + phase) * 1.5;  // Reduced from 4.0

                        // Enhanced mouse interaction with scaling
                        float dist = distance(uMouse, pos.xy);
                        vDist = dist;
                        float iRad = pType > 0.5 ? 280.0 : 180.0;
                        float particleScale = 1.0;
                        
                        if(dist < iRad) {
                            float force = pow(1.0 - dist / iRad, 3.0);
                            vec2 dir = normalize(pos.xy - uMouse);
                            pos.xy += dir * force * 60.0;
                            
                            // Scale particles near cursor (hover effect)
                            particleScale = 1.0 + force * 0.8;
                        }

                        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                        gl_PointSize = size * particleScale * (1500.0 / -mvPosition.z);
                        gl_Position = projectionMatrix * mvPosition;
                    }
                `,
                fragmentShader: `
                    varying float vAlpha;
                    varying float vDist;
                    varying float vType;
                    varying float vZDepth;
                    varying float vMorphProgress;
                    varying vec3 vPosition;
                    uniform float uTime;
                    uniform float uVolDepth;

                    void main() {
                        float r = distance(gl_PointCoord, vec2(0.5));
                        if (r > 0.5) discard;

                        // Soft glow with enhanced falloff
                        float strength = pow(1.0 - (r * 2.0), 1.8);
                        float glow = pow(1.0 - (r * 2.0), 0.6) * 0.4;
                        
                        // Color gradient based on morph progress
                        // Champagne Pink #E6D4C7 (0.902, 0.831, 0.780)
                        // Cyan/Teal #9AE4CB (0.604, 0.894, 0.796)
                        vec3 colorChampagne = vec3(0.902, 0.831, 0.780);
                        vec3 colorCyan = vec3(0.604, 0.894, 0.796);
                        
                        // Smooth color transition during morphing
                        float colorMix = smoothstep(0.2, 0.8, vMorphProgress);
                        vec3 baseColor = mix(colorChampagne, colorCyan, colorMix);
                        
                        // Add variation based on position for depth
                        float positionHue = sin(vPosition.x * 0.005 + vPosition.y * 0.005) * 0.1;
                        baseColor += vec3(positionHue * 0.2, positionHue * 0.3, positionHue * 0.2);
                        
                        // Subtle glow during transitions (very gentle)
                        float transitionGlow = 0.0;
                        if(vMorphProgress > 0.2 && vMorphProgress < 0.35) {
                            transitionGlow = sin((vMorphProgress - 0.2) * 6.28 / 0.15) * 0.15;
                        } else if(vMorphProgress > 0.65 && vMorphProgress < 0.8) {
                            transitionGlow = sin((vMorphProgress - 0.65) * 6.28 / 0.15) * 0.15;
                        }
                        
                        // Enhanced glow near cursor
                        float cursorGlow = 0.0;
                        if(vDist < 300.0) {
                            cursorGlow = (1.0 - vDist / 300.0) * 0.4;
                        }

                        // Pulse effect with depth variation
                        float pulse = 0.85 + 0.15 * sin(uTime * 2.5 + vZDepth * 0.01);
                        
                        // Combine all effects
                        float finalStrength = strength + glow + transitionGlow + cursorGlow;
                        float finalAlpha = vAlpha * finalStrength * pulse;
                        
                        // Reduce ambient particle visibility
                        if(vType > 0.5) {
                            finalAlpha *= 0.4;
                        }

                        // Boost brightness during transitions
                        vec3 finalColor = baseColor * (1.0 + transitionGlow * 0.8 + cursorGlow);

                        gl_FragColor = vec4(finalColor, finalAlpha);
                    }
                `
            });

            const points = new THREE.Points(geometry, material);
            scene.add(points);
        };

        const handleResize = (entries: ResizeObserverEntry[]) => {
            const entry = entries[0];
            const { width, height } = entry.contentRect;
            if (width > 0 && height > 0) {
                if (!isInitialized.current) {
                    init(width, height);
                } else if (renderer && camera) {
                    renderer.setSize(width, height);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                }
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(mountRef.current);

        const handleMouseMove = (event: MouseEvent) => {
            if (!mountRef.current) return;
            const rect = mountRef.current.getBoundingClientRect();
            mouse.current.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.current.targetY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

            const aspect = rect.width / rect.height;
            const viewSizeAtDepth = 1200;
            mouse.current.x = mouse.current.targetX * (viewSizeAtDepth * aspect / 2);
            mouse.current.y = mouse.current.targetY * (viewSizeAtDepth / 2);
        };
        window.addEventListener('mousemove', handleMouseMove);

        const animate = (time: number) => {
            if (!material || !renderer || !scene || !camera) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }

            const t = time * 0.001;
            material.uniforms.uTime.value = t;
            material.uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);

            const cycle = 14;
            const tInCycle = t % cycle;
            let targetMorph = 0;

            if (tInCycle > 5 && tInCycle <= 7) {
                targetMorph = (tInCycle - 5) / 2;
            } else if (tInCycle > 7 && tInCycle <= 12) {
                targetMorph = 1;
            } else if (tInCycle > 12 && tInCycle <= 14) {
                targetMorph = 1 - (tInCycle - 12) / 2;
            }

            material.uniforms.uMorphProgress.value += (targetMorph - material.uniforms.uMorphProgress.value) * 0.05;

            camera.position.x += (mouse.current.targetX * 150 - camera.position.x) * 0.05;
            camera.position.y += (mouse.current.targetY * 150 - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            if (renderer && mountRef.current) mountRef.current.removeChild(renderer.domElement);
            if (geometry) geometry.dispose();
            if (material) material.dispose();
            if (renderer) renderer.dispose();
            isInitialized.current = false;
        };
    }, [shapes]);

    return (
        <div ref={mountRef} className="w-full h-full relative overflow-hidden" />
    );
};

export default ParticleCanvas;
