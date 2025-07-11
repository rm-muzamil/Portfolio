// 'use client'

// import { motion, useAnimation, useInView } from 'framer-motion'
// import { useEffect, useRef } from 'react'

// export default function AnimatedSection({ children }: { children: React.ReactNode }) {
//   const controls = useAnimation()
//   const ref = useRef(null)
//   const inView = useInView(ref, {
//     amount: 0.3, // ✅ Use this instead of 'threshold'
//   })

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible')
//     } else {
//       controls.start('hidden') // Reverse animation on scroll back
//     }
//   }, [inView, controls])

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       variants={{
//         hidden: { opacity: 0, y: 80 },
//         visible: { opacity: 1, y: 0 },
//       }}
//     >
//       {children}
//     </motion.div>
//   )
// }
'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function AnimatedSection({
  children,
  variants,
}: {
  children: React.ReactNode
  variants: any
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4 })

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
