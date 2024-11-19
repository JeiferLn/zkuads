import React from 'react'
import Icons from '../../Icons';
import TournamentCard from '../TournamentCard';
import UserOnlineCard from '../UserOnlineCard';

interface LeaderboardProps {
  opened: boolean;
  handlerOpen: () => void;
} 

function Leaderboard({ opened, handlerOpen }: LeaderboardProps) {
  return (
    <div className={`${opened ? 'block' : 'hidden'} lg:hidden fixed top-0 left-0 w-screen h-screen bg-black/70 flex justify-center items-center z-10`}>
      <div className='relative w-11/12 h-5/6 bg-[#043062] rounded-2xl'>
        <div className='w-full h-[10%] flex justify-between items-center pt-2'>
          <div className='pl-5 text-xl'>
            <p>Leaderboards</p>
          </div>
          <div className='w-12 flex items-center' onClick={handlerOpen}>
            <Icons name="Close"/>
          </div>
        </div>
        <div className='h-[88%] px-2 overflow-y-auto'>
          <UserOnlineCard />
          <UserOnlineCard />
          <UserOnlineCard />
          <UserOnlineCard />
          <UserOnlineCard />
          <UserOnlineCard />
          <UserOnlineCard />
          <UserOnlineCard />
          <UserOnlineCard />
          <UserOnlineCard />
          <UserOnlineCard />
          <UserOnlineCard />
        </div>
      </div>
    </div>
  )
}

export default Leaderboard