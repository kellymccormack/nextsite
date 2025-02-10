"use client";

// https://github.com/ismamz/next-transition-router?tab=readme-ov-file#minimal-example-using-gsap

import { TransitionRouter } from "next-transition-router";

import gsap from "gsap";

// export function Providers({ children }: { children: React.ReactNode }) {
export default function Providers({ children }) {
  return (
    <TransitionRouter
        auto={true}
        leave={(next) => {
            const tween = gsap.fromTo("main", { x: 0, autoAlpha: 1 }, { x: '100%', autoAlpha: 0, onComplete: next });
            return () => tween.kill();
        }}
        enter={(next) => {
          // const tween = gsap.fromTo("main", { x: '-100%', autoAlpha: 0 }, { x: 0, autoAlpha: 1, onComplete: next });
            const tween = gsap.fromTo("main", { autoAlpha: 0 }, { autoAlpha: 1, onComplete: next });
            return () => tween.kill();
        }}
    > 
      {children}
    </TransitionRouter>
  );
}