"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleNetwork({ idClassName, opacity = 0.3 }: { idClassName: string, opacity?: number }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false, zIndex: 0 },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: { grab: { distance: 150, links: { opacity: opacity * 1.5 } } },
      },
      particles: {
        color: { value: "#0EA5E9" },
        links: {
          color: "#0EA5E9",
          distance: 150,
          enable: true,
          opacity: opacity,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.bounce },
          random: false,
          speed: 0.3,
          straight: false,
        },
        number: { density: { enable: true, width: 800, height: 800 }, value: 50 },
        opacity: { value: opacity * 0.8 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    }),
    [opacity],
  );

  if (!init) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-100 transition-opacity duration-1000">
      <Particles id={`tsparticles-${idClassName}`} options={options} className="w-full h-full pointer-events-auto" />
    </div>
  );
}
