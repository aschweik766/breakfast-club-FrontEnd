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

const match = 'match'
const matches = 'matches'

  return (
    
    <div className='body'>
      <div className='greeting'> <h2>Hello, {login.firstName}!</h2> <div className='matchgreet'><h2>You have {login.matches.length} compatible</h2>
      <h2 style={login.matches.length <2 ? {display: 'block'} : {display: 'none'}}>&nbsp;match&nbsp;</h2> <h2 style={login.matches.length>=2 ? {display: 'block'} : {display: 'none'}}>&nbsp;matches&nbsp;</h2><h2> waiting to connect with you.</h2></div></div>
   
    <div className='lr-cont'>
      

    <DailyMatches />
   

    {/* <DailyLove dailyLove={dailyLove} userZod={userZod}/>

 
      <DailyHoroscope dailyHoro={dailyHoro} login={login}/> */}
  

    </div>
    </div>
  )
}

export default Home