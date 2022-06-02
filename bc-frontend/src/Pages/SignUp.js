import React, { useEffect, useState } from 'react'
import './SignUp.css'


function SignUp() {

    const userInitialState = {

        firstName: '',
        lastName: '',
        DOBmonth: '',
        DOBday: '',
        DOByear: '',
        location: '',
        email: '',
        username: '',
        password: '',
        image: '',
        zodiacSign: '',
        genderIdentity: '',
        interestedIn: [''],
        relationshipStatus: '',
        lookingFor: '',
        bio: '',
        height: '',
        weight: '',
        interests: [''],
        // user_id: cookies.UserId
    }

    const [user, setUser] = useState(null)


    const [userSignUp, setUserSignUp] = useState(userInitialState)
  

    const url = "http://localhost:3001/users";

    const createUrl = `http://localhost:3001/signup`

    function getUsers() {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setUser(res))
            .catch(console.error);
    }

    const createUsers = async (user) => {
        await fetch(createUrl, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        getUsers();
    };

    const handleChange = (event) => {
        setUserSignUp({ ...userSignUp, [event.target.id]: event.target.value });
    };

 
    const handleSubmit = (event) => {
        event.preventDefault();
        createUsers(userSignUp);
        setUserSignUp(userInitialState)

        // setCookie('UserId', response.data.userId)
    };

    useEffect(() => {
        getUsers()
        createUsers()
    }, [])

    console.log(userSignUp)
    console.log(setUserSignUp)

    if (!user) {
        return <h1>....Hard at work to sign you up</h1>;
    }
    // Event Listener: tells the browser
    // which event to listen for on which
    // element and what to do when the event
    // happens


    return (
        <div>

            <br></br>
            <form className='signUpForm' onSubmit={handleSubmit}>

                {/* <select id="dropdown">
                    <option value="N/A">N/A</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select> */}

                <h3>Sign Up Form</h3>

                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" onChange={handleChange} value={userSignUp.firstName}></input>
                <br></br>

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" onChange={handleChange} value={userSignUp.lastName}></input>
                <br></br>

                <label htmlFor="DOBmonth">Month of Birth: </label>
                <select id="DOBmonth" onChange={handleChange} value={userSignUp.DOBmonth}>
                    <option value="1">1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
                <br></br>
                <label htmlFor="DOBday">Day of Birth: </label>
                <select id="DOBday" onChange={handleChange} value={userSignUp.DOBday}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
                <br></br>

                <label htmlFor="DOByear">DOB Year: </label>
                <input type="text" id='DOByear' onChange={handleChange} value={userSignUp.DOByear}></input>
                <br></br>

                <label htmlFor="location">Location: </label>
                <input type="text" id="location" onChange={handleChange} value={userSignUp.location}></input>
                <br></br>

                <label htmlFor="email">Email: </label>
                <input type="text" id='email' onChange={handleChange} value={userSignUp.email}></input>
                <br></br>

                <label htmlFor="username">Username: </label>
                <input type="text" id='username' onChange={handleChange} value={userSignUp.username}></input>
                <br></br>

                <label htmlFor="password">Password: </label>
                <input type="text" id='password' placeholder='must be at least 8 characters' onChange={handleChange} value={userSignUp.password}></input>
                <br></br>

                <label htmlFor="image"> Profile Picture: </label>
                <input type="text" id="image" onChange={handleChange} value={userSignUp.image}></input>
                <br></br>

                <label htmlFor="zodiacSign"> Zodiac Sign: </label>
                <select id="zodiacSign" onChange={handleChange} value={userSignUp.zodiacSign}>
                    <option>Capricorn</option>
                    <option>Aquarius</option>
                    <option>Pisces</option>
                    <option>Aries</option>
                    <option>Taurus</option>
                    <option>Gemini</option>
                    <option>Cancer</option>
                    <option>Leo</option>
                    <option>Virgo</option>
                    <option>Libra</option>
                    <option>Scorpio</option>
                    <option>Sagittarius</option>
                </select>
                <br></br>

                <label htmlFor="genderIdentity">  Gender Identity: </label>
                <select id="genderIdentity" onChange={handleChange} value={userSignUp.genderIdentity}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                </select>
                <br></br>

                {/* <select name="Country" multiple size="5">
  <option value="USA">USA</option>
  <option value="Russia">Russia</option>
  <option value="India">India</option>
  <option value="Britain">Britain</option>
</select> */}
                <label htmlFor="interestedIn">Interested In: </label>
                <select id="interestedIn" onChange={handleChange} value={userSignUp.interestedIn} multiple>
                <option value="" disabled selected>To select multiple, hold down Shift and click on options</option>
                <option>Men</option>
                <option>Women</option>
                <option>Non-binary</option>

                </select>
                <br></br>

                <label htmlFor="relationshipStatus"> Relationship Status: </label>
                <select id="relationshipStatus" onChange={handleChange} value={userSignUp.relationshipStatus}>
                    <option>Single</option>
                    <option>Poly</option>
                    <option>Married</option>
                </select>
                <br></br>

                <label htmlFor="lookingFor"> Looking For: </label>
                <select id="lookingFor" onChange={handleChange} value={userSignUp.lookingFor}>
                    <option>Fun</option>
                    <option>Relationship</option>
                    <option>Not sure</option>
                </select>
                <br></br>

                <label htmlFor="bio"> About Me: </label>
                <textarea id="bio" rows="5" cols="20" onChange={handleChange} value={userSignUp.bio} ></textarea>
                <br></br>


                <label htmlFor="height"> height: </label>
                <select id="height" onChange={handleChange} value={userSignUp.height}>
                    <option>Short</option>
                    <option>Average</option>
                    <option>Tall</option>
                </select>
                <br></br>


                <label htmlFor="weight"> weight: </label>
                <select id="weight" onChange={handleChange} value={userSignUp.weight}>
                    <option>Thin</option>
                    <option>Mid Size</option>
                    <option>Fit</option>
                    <option>Curvy</option>
                    <option>Plus Size</option>
                </select>
                <br></br>


                <label htmlFor="interests"> Interests: </label>
                <select multiple size="6" id="interests" onChange={handleChange} value={userSignUp.interests}>
                    <option>Cooking</option>
                    <option>TV</option>
                    <option>Film</option>
                    <option>Photography</option>
                    <option>Anime</option>
                    <option>Baking</option>
                    <option>Dining</option>
                    <option>Sports</option>
                    <option>Hiking</option>
                    <option>Music</option>
                    <option>Cycling</option>
                    <option>Gaming</option>
                    <option>Shopping</option>
                    <option>Reading</option>
                    <option>Art/Design</option>
                    <option>Hunting/Fishing</option>
                    <option>Breweries/Bars</option>
                    <option>Drag</option>
                    <option>Modeling</option>
                    <option>Dancing</option>
                    <option>Singing</option>
                    <option>Cars</option>
                    <option>Sewing</option>
                    <option>Building/Carpentry/Engineering</option>
                    <option>Skating</option>
                    <option>Outdoor Sports</option>




                </select>
                <br></br>


                <button onClick={handleSubmit}>Submit </button>
                {/* this button aciton isnt working i'm trying to figure out how to redirect once the button is clicked i can go back to /users */}
            </form>
        </div>
    )
}

export default SignUp