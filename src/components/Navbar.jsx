import { Instagram } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
const Navbar = () => {
  return (
    <>
      <div className='
      fixed w-full max-sm:w-screen bg-transparent flex flex-row
       justify-between items-center px-4 mt-2 z-50
'>
        <div>
          <h1 className='font-semibold dark:text-white text-zinc-900 text-xl'>Ambyt</h1>
        </div>
        <div>
          <div className='flex flex-row max-sm:flex-row-reverse justify-center items-center gap-4'>
            <ModeToggle />
            <Button variant={'outline'} className={`rounded-full bg-transparent
              hover:dark:bg-zinc-500/70 cursor-pointer`} size="icon">
              <Instagram className='text-white ' />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
