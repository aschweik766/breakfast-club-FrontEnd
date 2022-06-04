// import React, { useState, useEffect } from 'react'
// // import '../.env'




// function StarChart({user}) {
//     // const [userInfo, setUserInfo] = useState(null)
//     const [chartInfo, setChartInfo] = useState(null)
//     const userInfo = user

//     // function getUserInfo () {
//     //     fetch('http://localhost:3001/starchart')
//     //     .then((res) => res.json())
//     //     .then((res) => setUserInfo(res[0]))
//     //     .then(() => getChart())
//     //     .catch((err) => console.log(err))
//     // }

//     // useEffect(() => {
   
//     //     }, [])

 

// function getChart () {

//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'X-RapidAPI-Host': 'astrologer.p.rapidapi.com',
//             'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
//         },
//         // body: `{"name":"Test","year":1993,"month":10,"day":10,"hour":23,"minute":0,"longitude":41.91,"latitude":12.48,"city":"Roma","timezone":"Europe/Rome","language":"IT"}`}
//          body: `{"name":"${userInfo.name}","year":"${userInfo.year}","month":"${userInfo.month}","day":"${userInfo.day}","hour":"${userInfo.hour}","minute":"${userInfo.minute}","longitude":"${userInfo.longitude}","latitude":"${userInfo.latitude}","city":"${userInfo.city}","timezone":"${userInfo.timezone}","language":"${userInfo.language}"}`}

//       fetch('https://astrologer.p.rapidapi.com/api/v2/birth-chart', options)
//         .then(response => response.json())
//         .then(response => setChartInfo(response))
//         .catch(err => console.error(err));
// }

// useEffect(() => {
//     if (!userInfo) {
//         console.log('waiting...')
//     }
//     getChart()
//     // changeUserInfo()
//     }, [])

// const ZodiacArr = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius']

// function zodiacName (abbr) {
//     ZodiacArr.forEach((zod) => {
//         if (zod.startsWith(abbr)){
//             console.log(zod.charAt(0).toUpperCase() + zod.slice(1))
//         } 
//     })
// }


// if (!chartInfo) {
//     return(<><h1>no info</h1></>)
// }

// console.log(userInfo)
// console.log(chartInfo.data)


// zodiacName('sag')



//   return (
//     <div className='body'>StarChart</div>
//   )
// }

// export default StarChart