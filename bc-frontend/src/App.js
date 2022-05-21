import './App.css';

function App() {
  return (
    <>
    
    <header>
    <nav>Home  Matches   Chart</nav>
      <h1>Horoscope Dating</h1>
    <nav>My Account   Sign Out</nav>
    </header>

<br></br>
    <div className='lr-cont'>
   

    <div className='left'>
    <div className='daily-matches'>
     <div className='daily-match'>
       <img src="https://thispersondoesnotexist.com/image" alt="match1" className='dm-img'/>
       <p className='dm-bio'>Bio: sldjald jldsajldjaljlwa dsljaj daiwjlaw jdklakld sjlkadiwam
         jldjklslslia
       </p>
    </div>
    <div className='daily-match'>
       <img src="https://thispersondoesnotexist.com/image" alt="match2" className='dm-img' />
       <p className='dm-bio'>Bio: sldjald jldsajldjaljlwa dsljaj daiwjlaw jdklakld sjlkadiwam
         jldjklslslia
       </p>
    </div>
    <div className='daily-match'>
       <img src="https://thispersondoesnotexist.com/image" alt="match3" className='dm-img'/>
       <p className='dm-bio'>Bio: sldjald jldsajldjaljlwa dsljaj daiwjlaw jdklakld sjlkadiwam
         jldjklslslia
       </p>
    </div>

    </div>

    <div className='love-horo'>
    <h4>Love Horoscope</h4>
        <p>May 21, 2022 - Today's prospects should suit the dynamic, idealistic being that you are, especially right now. There will be some criticism in the air, and you won't miss an opportunity to punctuate your comments with your famous irony. Your viewpoints on corporate rigidity and conformist attitudes are well known, but today your sense of humor prevails and people listen to you with pleasure!</p>
    </div>

    </div>

    <div className='right'>
      <div className='daily-horo'>
        <h4>Daily Horoscope</h4>
        <p>May 21, 2022 - Today's prospects should suit the dynamic, idealistic being that you are, especially right now. There will be some criticism in the air, and you won't miss an opportunity to punctuate your comments with your famous irony. Your viewpoints on corporate rigidity and conformist attitudes are well known, but today your sense of humor prevails and people listen to you with pleasure!</p>
      </div>
    </div>

    </div>
    </>
  );
}

export default App;
