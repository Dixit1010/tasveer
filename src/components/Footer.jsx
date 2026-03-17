// // export default function Footer() {
// //   const scrollTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' })
// //   }

// //   return (
// //     <footer className="border-t border-[rgba(240,237,232,0.08)] px-6 py-12 sm:px-12 lg:px-16">
// //       <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
// //         <div className="font-display text-[16px] font-semibold tracking-[-0.02em]">
// //           [ personal photos ]
// //         </div>
// //         <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.2)]">
// //           © 2025 — All rights mine
// //         </div>
// //         <div className="flex items-center gap-5">
// //           <button
// //             type="button"
// //             onClick={scrollTop}
// //             className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.35)] transition-colors hover:text-[#f0ede8]"
// //             data-cursor="hover"
// //           >
// //             ↑ Top
// //           </button>
// //           <a
// //             href="https://instagram.com"
// //             target="_blank"
// //             rel="noreferrer"
// //             className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.35)] transition-colors hover:text-[#f0ede8]"
// //             data-cursor="hover"
// //           >
// //             Instagram
// //           </a>
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }

// export default function Footer() {
//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" })
//   }

//   return (
//     <footer className="relative mt-32 border-t border-[rgba(240,237,232,0.08)] px-6 py-20 sm:px-12 lg:px-16">
      
//       {/* Subtle background glow */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />

//       <div className="relative mx-auto max-w-6xl">

//         {/* Large poetic line */}
//         <div className="mb-16 text-center">
//           <p className="font-display text-[clamp(28px,4vw,48px)] leading-tight tracking-[-0.02em]">
//             Capturing Silence.
//           </p>
//           <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
//             Landscapes by Dixit Kumar
//           </p>
//         </div>

//         {/* Bottom Row */}
//         <div className="flex flex-col items-center justify-between gap-6 border-t border-[rgba(240,237,232,0.06)] pt-8 sm:flex-row">
          
//           <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[rgba(240,237,232,0.3)]">
//             © 2025 · All Rights Reserved
//           </div>

//           <div className="flex items-center gap-8">
//             <button
//               onClick={scrollTop}
//               className="font-mono text-[10px] uppercase tracking-[0.25em] text-[rgba(240,237,232,0.35)] transition-all duration-300 hover:text-[#f0ede8]"
//               data-cursor="hover"
//             >
//               Back to Top
//             </button>

//             <a
//               href="https://instagram.com/dixitkumarai"
//               target="_blank"
//               rel="noreferrer"
//               className="font-mono text-[10px] uppercase tracking-[0.25em] text-[rgba(240,237,232,0.35)] transition-all duration-300 hover:text-[#f0ede8]"
//               data-cursor="hover"
//             >
//               Instagram
//             </a>
//           </div>

//         </div>
//       </div>
//     </footer>
//   )
// }

import { Instagram } from "lucide-react"

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative mt-32 border-t border-[rgba(240,237,232,0.08)] px-6 py-16 sm:px-12 lg:px-16">

      <div className="relative mx-auto max-w-6xl">

        {/* Hero Footer Line */}
        <div className="mb-12 text-center">
          <p className="font-display text-[clamp(28px,4vw,48px)] leading-tight tracking-[-0.02em]">
            Capturing Silence.
          </p>
          <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
            Landscapes by Dixit Kumar
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between border-t border-[rgba(240,237,232,0.06)] pt-6">

          {/* Left */}
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[rgba(240,237,232,0.3)]">
            © 2026 · All Rights Reserved
          </div>

          {/* Right */}
          <a
            href="https://instagram.com/dixitkumarai"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[rgba(240,237,232,0.35)] transition-all duration-300 hover:text-[#f0ede8]"
            data-cursor="hover"
          >
            <Instagram size={14} />
           
          </a>

        </div>
      </div>
    </footer>
  )
}