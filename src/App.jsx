// import { useState } from 'react'
// import { AnimatePresence } from 'framer-motion'
// import { useLenis } from './hooks/useLenis'
// import Cursor from './components/Cursor'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Scene3D from './components/Scene3D'
// import Marquee from './components/Marquee'
// import Gallery from './components/Gallery'
// import About from './components/About'
// import Footer from './components/Footer'
// import Lightbox from './components/Lightbox'
// import { PHOTOS } from './data/photos'
// import "@fontsource/tiro-devanagari-hindi"
// export default function App() {
//   useLenis()
//   const [lightboxIndex, setLightboxIndex] = useState(null)

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#060606] text-[#f0ede8]">
//       <Cursor />
//       <Navbar />

//       <Hero />
//       <Scene3D />

//       <Marquee
//         items={[
//           'Personal Clicks',
//           '·',
//           'Candid Moments',
//           '·',
//           'Street Life',
//           '·',
//           'Golden Hours',
//           '·',
//           'Landscapes',
//           '·',
//           'Just Vibes',
//         ]}
//         speed={20}
//       />

//       <section id="gallery">
//         <Gallery onPhotoClick={setLightboxIndex} />
//       </section>

//       <Marquee
//         items={[
//           'Shot on Sony',
//           '·',
//           'Edited in Lightroom',
//           '·',
//           'No Filter Needed',
//           '·',
//           'Just Light & Timing',
//         ]}
//         speed={26}
//         reverse
//       />

//       <section id="about">
//         <About />
//       </section>

//       <Footer />

//       <AnimatePresence>
//         {lightboxIndex !== null && (
//           <Lightbox
//             photos={PHOTOS}
//             currentIndex={lightboxIndex}
//             onClose={() => setLightboxIndex(null)}
//             onNext={() =>
//               setLightboxIndex((lightboxIndex + 1) % PHOTOS.length)
//             }
//             onPrev={() =>
//               setLightboxIndex(
//                 (lightboxIndex - 1 + PHOTOS.length) % PHOTOS.length,
//               )
//             }
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }


import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Scene3D from './components/Scene3D'
import Marquee from './components/Marquee'
import Gallery from './components/Gallery'
import About from './components/About'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import { PHOTOS } from './data/photos'
import "@fontsource/tiro-devanagari-hindi"

export default function App() {
  useLenis()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#060606] text-[#f0ede8]">
      
      <Cursor />
      <Navbar />

      {/* 👇 This wrapper prevents content from hiding under fixed navbar */}
      <div className="pt-32">

        <Hero />
        <Scene3D />
        <Marquee
  items={[
    'Breathing Landscapes',
    '\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A0',
    'Echoes of Light',
    '\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A0',
    'Still Horizons',
    '\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A0',
    'Fading Sunlines',
    '\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A0',
    'Windswept Earth',
    '\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A0',
    'Distant Silence',
  ]}
  speed={16}
/>

        <section id="gallery">
          <Gallery onPhotoClick={setLightboxIndex} />
        </section>

        <Marquee
          items={[
            'Shot on Sony',
            '·',
            'Edited in Lightroom',
            '·',
            'No Filter Needed',
            '·',
            'Just Light & Timing',
          ]}
          speed={26}
          reverse
        />

        <section id="about">
          <About />
        </section>

        <Footer />

      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={PHOTOS}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNext={() =>
              setLightboxIndex((lightboxIndex + 1) % PHOTOS.length)
            }
            onPrev={() =>
              setLightboxIndex(
                (lightboxIndex - 1 + PHOTOS.length) % PHOTOS.length
              )
            }
          />
        )}
      </AnimatePresence>

    </div>
  )
}