// // import { useEffect, useState } from 'react'

// // function scrollToId(id) {
// //   const el = document.getElementById(id)
// //   if (el) {
// //     el.scrollIntoView({ behavior: 'smooth' })
// //   }
// // }

// // export default function Navbar() {
// //   const [scrolled, setScrolled] = useState(false)

// //   useEffect(() => {
// //     const onScroll = () => {
// //       setScrolled(window.scrollY > 60)
// //     }
// //     onScroll()
// //     window.addEventListener('scroll', onScroll)
// //     return () => window.removeEventListener('scroll', onScroll)
// //   }, [])

// //   return (
// //     <header className="fixed inset-x-0 top-0 z-[100] flex items-center justify-center">
// //       <div
// //         className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between border-b px-6 transition-all duration-300 ${
// //           scrolled
// //             ? 'border-[rgba(240,237,232,0.08)] bg-[rgba(6,6,6,0.75)] backdrop-blur-[20px] py-4'
// //             : 'border-transparent bg-transparent py-7'
// //         }`}
// //       >
// //         {/* <a
// //           href="/"
// //           className="py-1 font-mono text-[13px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.7)]"
// //           data-cursor="hover"
// //         >
// //           [ personal photos ]
// //         </a> */}
// // <a
// //   href="/"
// //   className="text-[22px] text-white/80 hover:text-white transition-all duration-500 tracking-wide"
// //   style={{ fontFamily: "Tiro Devanagari Hindi" }}
// // >
// //   दिक्षित कुमार
// // </a>

// //         <nav className="hidden items-center gap-8 md:flex">
// //           <button
// //             type="button"
// //             onClick={() => scrollToId('gallery')}
// //             className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.4)] transition-colors hover:text-[#f0ede8]"
// //             data-cursor="hover"
// //           >
// //             Gallery
// //           </button>
// //           <button
// //             type="button"
// //             onClick={() => scrollToId('about')}
// //             className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.4)] transition-colors hover:text-[#f0ede8]"
// //             data-cursor="hover"
// //           >
// //             About
// //           </button>
// //           <a
// //             href="https://instagram.com"
// //             target="_blank"
// //             rel="noreferrer"
// //             className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.4)] transition-colors hover:text-[#f0ede8]"
// //             data-cursor="hover"
// //           >
// //             ↗ Instagram
// //           </a>
// //         </nav>
// //       </div>
// //     </header>
// //   )
// // }

// import { useEffect, useState } from "react"

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   return (
//     <header className="fixed top-0 left-0 w-full z-[999]">
//       <div
//         className={`flex items-center justify-center w-full transition-all duration-500 ${
//           scrolled
//             ? "py-4 bg-black/70 backdrop-blur-xl"
//             : "py-8 bg-transparent"
//         }`}
//       >
//         <h1
//           className={`text-white transition-all duration-500 ${
//             scrolled
//               ? "text-8xl md:text-9xl"
//               : "text-8xl md:text-9xl"
//           }`}
//           style={{ fontFamily: "Tiro Devanagari Hindi" }}
//         >
//           दिक्षित कुमार
//         </h1>
//       </div>
//     </header>
//   )
// }

import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      <div
        className={`flex items-center justify-center w-full transition-all duration-500 ${
          scrolled
            ? "py-4 bg-black/70 backdrop-blur-xl"
            : "py-10 bg-transparent"
        }`}
      >
        <h1
  className={`text-white text-center transition-all duration-500 ${
    scrolled
      ? "text-6xl md:text-7xl"
      : "text-[clamp(80px,12vw,180px)]"
  }`}
  style={{ fontFamily: "Tiro Devanagari Hindi" }}
>
  दिक्षित कुमार
</h1>
      </div>
    </header>
  )
}