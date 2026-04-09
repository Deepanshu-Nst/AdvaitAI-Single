"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.8 } }
      }
    },
    particles: {
      color: { value: ["#ffffff", "#3B5BDB", "#7048E8"] },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        outModes: { default: "out" as const },
        speed: 1,
      },
      number: { density: { enable: true, area: 1000 }, value: 50 },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), []);

  return (
    <section className="relative w-full h-[100svh] bg-[#0A0A1A] overflow-hidden flex items-center">
      {/* Particles Background with interaction */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0 mix-blend-screen"
        />
      )}

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex w-full h-full items-center justify-between">
        
        {/* Left Content */}
        <div className="max-w-[900px] w-full flex flex-col items-start justify-center pt-24 z-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="text-white text-[10px] md:text-[12px] font-bold tracking-[0.3em] mb-10 uppercase flex items-center gap-4 opacity-70"
          >
            <span className="w-12 h-[1px] bg-brand-primary"></span>
            Intelligence Applied
          </motion.div>

          <div className="overflow-hidden mb-8 py-2">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
              className="text-white text-[50px] md:text-[70px] lg:text-[86px] font-bold leading-[1.05] tracking-tight pointer-events-auto"
            >
              Where AI Moves <br />
              <span className="text-white">from Prototype to Impact.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
            className="text-[18px] md:text-[22px] font-light text-[#E5E7EB] max-w-[600px] leading-[1.7] border-l border-brand-primary pl-6 ml-1 mt-4 pointer-events-auto"
          >
            We don't build experiments. We architect enterprise-grade intelligence systems that reduce friction, scale operations, and deliver undeniable strategic leverage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-6 mt-16 items-center pointer-events-auto"
          >
            <Link
              href="/#what-we-do"
              className="bg-brand-primary text-white px-10 py-5 text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A0A1A] transition-colors duration-500 flex items-center justify-center gap-4 w-full sm:w-auto overflow-hidden group"
            >
              Explore Capabilities 
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Abstract Refined Shape (Desktop Only) */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] z-0 pointer-events-none opacity-[0.9]">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={2} color="#3B5BDB" />
            <directionalLight position={[-2, -2, -2]} intensity={1} color="#7048E8" />
            
            <Sphere args={[1.6, 64, 64]} scale={1.2}>
              <MeshDistortMaterial
                color="#3B5BDB"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                wireframe={true}
                transparent={true}
                opacity={0.6}
              />
            </Sphere>
          </Canvas>
          {/* Edge gradient fade to blend 3D */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A0A1A] z-10" />
        </div>
      </div>
    </section>
  );
}
