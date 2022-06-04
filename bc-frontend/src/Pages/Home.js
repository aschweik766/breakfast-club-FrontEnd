import React, { useEffect } from 'react'
import DailyMatches from '../components/DailyMatches'
import DailyHoroscope from '../components/DailyHoroscope'
import DailyLove from '../components/DailyLove'
/*eslint-disable*/

function Home({ dailyHoro, dailyLove, dh, dl, userZod, setUserZod, login, loggedIn }) {

if (!loggedIn) { return ( <></> )}

useEffect(() => {
    setUserZod(login.zodiacSign.toLowerCase());
    if (!userZod) { return ( console.log('loading') )} 
    dh();
    dl(userZod)
    

}, [userZod])



console.log(userZod)
console.log(dailyLove)


if (!(dailyLove && dailyHoro)) {
  return (<h2>Just a moment...</h2>)
}
console.log(dailyHoro)


  return (
    
    <div className='body'>

    <div className='lr-cont'>
    <div className='left'>
    
    <DailyMatches />

    <DailyLove dailyLove={dailyLove} userZod={userZod}/>

    </div>

    <div className='right'>
      <DailyHoroscope dailyHoro={dailyHoro} login={login}/>
    </div>

    </div>
    </div>
  )
}

export default Home