"use client"
import Card from '@/components/Card'
import { TestimonalsItems } from '@/lib/utils'
import Works from './Works'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const Testimonals = () => {
  const parentRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
        // markers: true
      }
    });
    tl.fromTo(parentRef.current.children, {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      ease: 'power4.out',
    })
  })

  return (
    <>
      <div className='mt-40 flex flex-col justify-center items-center gap-12'>
        <Works src='Group 14.svg' headline='User Testimonals' />
        <div ref={parentRef} className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 text-left
         gap-40 justify-between items-center'>
          {TestimonalsItems.map((items, index) => (
            <div
              ref={(el) => (parentRef.current[index] = el)}
              key={index}
              className={`
                ${index === 2 ? 'max-md:col-span-2 max-md:flex max-md:justify-center max-sm:col-span-1' : ''}
`}
            >
              <Card src={items} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Testimonals
