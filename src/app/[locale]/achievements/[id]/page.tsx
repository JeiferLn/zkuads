import ProfilePicture from '@/components/account/ProfilePicture'
import AchievementsSVG from '@/components/containers/achievements/AchievementsSVG'
import TitleAchievementsSVG from '@/components/containers/achievements/TitleAchievementsSVG'
import { poppins } from '@/components/Fonts'
import React from 'react'

function Page() {
  return (
    <div className="pt-[23vh] w-[95%] mx-auto overflow-hidden">
      <div className="absolute top-[20vh] left-0 w-screen overflow-hidden">
        <AchievementsSVG />


        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative w-full h-[6.5vh] mt-[1.2vh] grid place-content-center ">
            <div className="absolute w-[78%] z-10 left-1/2 -translate-x-1/2">
              <TitleAchievementsSVG />
            </div>
            <h2 className="relative z-10">Achievement</h2>
          </div>
          
          <div className='relative mt-[6vh] w-[80%] mx-auto h-[65%]'>
            <div className='absolute bg-white w-32 h-[30%] -right-[2vw] top-[10%] rounded-r-2xl'/>

            <div className='absolute w-[35vw] z-20 -left-[5vw] -top-[2vh]'>
              <ProfilePicture />
            </div>

            <div className='relative w-full h-full bg-[#806AF9] rounded-3xl rounded-tl-[30%] z-10'>
              <div className='w-full [&>h1]:text-center [&>h2]:text-center pt-[5%]'>
                <h1 className='pl-[15%] text-[6vw]'>Namiel</h1>
                <h2 className='pl-[15%] text-[5vw] -mt-[1vh] opacity-80'>Fruit Finder</h2>
              </div>

              <p className={`${poppins.className} mt-[10%] text-[4vw] w-[95%] pl-[5%] mx-auto`}>Congratulations! You&apos;ve reached the Basic Achievement in our gem game. Your ability to match colors and form powerful lineups has led you to master the early stages of the game. Keep practicing to unlock more challenges and prove your prowess. Keep going, gem champion!</p>
            </div>




            <div></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page
