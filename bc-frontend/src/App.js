import './App.css';

function App() {
  return (
    <div className='body'>
    
    <header>
    <nav className='nav-left'>Home  Matches   Chart</nav>
      <h1 className='page-title'>Horoscope Dating</h1>
    <nav className='nav-right'>My Account   Sign Out</nav>
    </header>

<br></br>
    <div className='lr-cont'>
    <div className='left'>
    <h3 className='comp-title'>Today's Compatibility</h3>
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
    <h4 className='love-title'>Love Horoscope</h4>
        <p>May 21, 2022 - Today's prospects should suit the dynamic, idealistic being that you are, especially right now. There will be some criticism in the air, and you won't miss an opportunity to punctuate your comments with your famous irony. Your viewpoints on corporate rigidity and conformist attitudes are well known, but today your sense of humor prevails and people listen to you with pleasure!</p>
    </div>

    </div>

    <div className='right'>
      <div className='daily-horo'>
        <h4 className='horo-title'>Daily Horoscope</h4>
        <p>May 21, 2022 - Today's prospects should suit the dynamic, idealistic being that you are, especially right now. There will be some criticism in the air, and you won't miss an opportunity to punctuate your comments with your famous irony. Your viewpoints on corporate rigidity and conformist attitudes are well known, but today your sense of humor prevails and people listen to you with pleasure!</p>
      </div>
    </div>

    </div>
    </div>
  );
}

export default App;
