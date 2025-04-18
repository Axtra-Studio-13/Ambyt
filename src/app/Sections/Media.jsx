import Card from '@/components/Card'
import { TestimonalsItems } from '@/lib/utils'
import Image from 'next/image'
import Works from './Works'

const Media = () => {
  return (
    <div className='relative'>
      <div>
        <Image src={'bg-Group.svg'} alt='media img' width={100} height={10}
          className='w-full absolute h-fit object-cover top-0 -z-10' />
      </div>
      <div className='flex flex-col justify-center items-center mt-40 gap-40'>
        <Works src='Group 17.svg' headline='Media Mentions' />
        <div className='grid grid-cols-3 max-md:grid-cols-2
         max-sm:grid-cols-1 text-left
         gap-40 justify-between items-center'>
          {TestimonalsItems.map((items, index) => (
            <div
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
    </div>
  )
}

export default Media
