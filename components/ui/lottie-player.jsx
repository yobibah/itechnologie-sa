"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottiePlayer({
  animationData,
  loop = true,
  autoplay = true,
  className,
  style,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !animationData) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData,
    });

    return () => anim.destroy();
  }, [animationData, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
    />
  );
}