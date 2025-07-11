// // components/LenisWrapper.tsx
// 'use client'

// import { ReactNode, useEffect } from 'react'
// import Lenis from '@studio-freight/lenis'

// export default function LenisWrapper({ children }: { children: ReactNode }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       touchMultiplier: 1.5,  // Optional
//   lerp: 0.1,
//     })

//     const raf = (time: number) => {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)

//     return () => {
//       lenis.destroy()
//     }
//   }, [])

//   return <>{children}</>
// }

'use client'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
