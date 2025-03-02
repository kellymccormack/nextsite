"use client";

// https://github.com/ismamz/next-transition-router?tab=readme-ov-file#minimal-example-using-gsap
// AUTO overrides Next default Link

import { TransitionRouter } from "next-transition-router";

import { gsap } from "gsap";
import { useRef } from "react";

export default function Providers({ children }) {
  return (
    <TransitionRouter
        auto={true}
        leave={(next) => {
          console.log('leave')
          const tween = gsap.fromTo("main", { x: 0, autoAlpha: 1 }, { x: '100%', autoAlpha: 0, duration: .5, onComplete: next });
            // const tween = gsap.fromTo("main", { autoAlpha: 1 }, { autoAlpha: 0, onComplete: next });
            return () => tween.kill();
        }}
        enter={(next) => {
          console.log('enter')
          const tween = gsap.fromTo("main", { x: '-100%', autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: .5, onComplete: next });
            // const tween = gsap.fromTo("main", { autoAlpha: 0 }, { autoAlpha: 1, onComplete: next });
            return () => tween.kill();
        }}
    > 
      {children}
    </TransitionRouter>
  );
}


// export default function Providers({ children }) {
//   // const firstLayer = useRef<HTMLDivElement | null>(null);
//   // const secondLayer = useRef<HTMLDivElement | null>(null);
//   const firstLayer = useRef(null);
//   const secondLayer = useRef(null);


//   return (
//     <TransitionRouter
//       auto={true}
//       leave={(next, from, to) => {
//         console.log({ from, to });

//         const tl = gsap
//           .timeline({
//             onComplete: next,
//           })
//           .fromTo(
//             firstLayer.current,
//             { y: "100%" },
//             {
//               y: 0,
//               duration: 0.5,
//               ease: "circ.inOut",
//             },
//           )
//           .fromTo(
//             secondLayer.current,
//             {
//               y: "100%",
//             },
//             {
//               y: 0,
//               duration: 0.5,
//               ease: "circ.inOut",
//             },
//             "<50%",
//           );

//         return () => {
//           tl.kill();
//         };
//       }}
//       enter={(next) => {
//         const tl = gsap
//           .timeline()
//           .fromTo(
//             secondLayer.current,
//             { y: 0 },
//             {
//               y: "-100%",
//               duration: 0.5,
//               ease: "circ.inOut",
//             },
//           )
//           .fromTo(
//             firstLayer.current,
//             { y: 0 },
//             {
//               y: "-100%",
//               duration: 0.5,
//               ease: "circ.inOut",
//             },
//             "<50%",
//           )
//           .call(next, undefined, "<50%");

//         return () => {
//           tl.kill();
//         };
//       }}
//     >
//       <main>{children}</main>

//       <div
//         ref={firstLayer}
//         className="fixed inset-0 z-50 translate-y-full bg-primary"
//       />
//       <div
//         ref={secondLayer}
//         className="fixed inset-0 z-50 translate-y-full bg-foreground"
//       />
//     </TransitionRouter>
//   );
// }