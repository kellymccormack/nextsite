"use client";

// https://github.com/ismamz/next-transition-router?tab=readme-ov-file#minimal-example-using-gsap
// AUTO overrides Next default Link

import { TransitionRouter } from "next-transition-router";

// import { gsap } from "gsap";
// import { motion } from "motion/react"
import { animate } from "motion/react"
import { useRef } from "react"

export default function Providers({ children }) {
  const wrapperRef = useRef();

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        animate(
          wrapperRef.current,
          { opacity: [1, 0], x: [0, '100%'] },
          // { opacity: [1, 0], scale: [1, 0], y: [0, -100] },
          { duration: 0.5, onComplete: next }
        );
      }}
      enter={(next) => {
        animate(
          wrapperRef.current,
          { opacity: [0, 1], x: ['-100%', 0] },
          // { opacity: [0, 1], scale: [0, 1], y: [0, 0] },
          { duration: 0.5, onComplete: next }
        );
      }}
    >
      <main ref={wrapperRef}>{children}</main>
    </TransitionRouter>
  );
}




// export default function Providers({ children }) {
//   return (
//     <TransitionRouter
//         auto={true}
//         leave={(next) => {
//           console.log('leave')
//           const tween = gsap.fromTo("main", { x: 0, autoAlpha: 1 }, { x: '100%', autoAlpha: 0, duration: .5, onComplete: next });
//             // const tween = gsap.fromTo("main", { autoAlpha: 1 }, { autoAlpha: 0, onComplete: next });
//             return () => tween.kill();
//         }}
//         enter={(next) => {
//           console.log('enter')
//           const tween = gsap.fromTo("main", { x: '-100%', autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: .5, onComplete: next });
//             // const tween = gsap.fromTo("main", { autoAlpha: 0 }, { autoAlpha: 1, onComplete: next });
//             return () => tween.kill();
//         }}
//     > 
//       {children}
//     </TransitionRouter>
//   );
// }
