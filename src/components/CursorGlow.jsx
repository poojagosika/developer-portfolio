import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const glow = glowRef.current;
    let mouseX = -500;
    let mouseY = -500;
    let currentX = -500;
    let currentY = -500;
    let animationId;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleLeave = () => {
      mouseX = -1500;
      mouseY = -1500;
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      glow.style.background = `
        radial-gradient(600px circle at ${currentX}px ${currentY}px,
          rgba(255, 255, 255, 0.04) 0%,
          rgba(255, 255, 255, 0.015) 25%,
          rgba(255, 255, 255, 0) 60%
        )
      `;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={glowRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
}
