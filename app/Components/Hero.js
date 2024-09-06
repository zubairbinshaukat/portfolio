import React from 'react'
import { BackgroundBeamsWithCollision } from '../../components/ui/background-beams-with-collision'
import { FloatingDockDemo } from './floating'
import { SparklesPreview } from './Sparks'
export function Hero() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col">
          <div className="w-screen sm:top-6 left-0 h-16 absolute">
            <FloatingDockDemo />
          </div>
          <div className="sm:block hidden">
            <SparklesPreview />
          </div>
          <div className='sm:hidden block '>
            <h2 className="text-7xl relative z-20 md:text-8xl lg:text-9xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
              Zubair{' '}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className=""> Khan</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span className=""> Khan</span>
                </div>
              </div>
            </h2>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  )
}
