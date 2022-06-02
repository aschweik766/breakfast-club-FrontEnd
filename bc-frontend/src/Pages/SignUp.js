import React, { useEffect, useState } from 'react'
import './SignUp.css'


function SignUp({ users, getUsers, createUsers }) {

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
        interests: ['']
    }

    // const [user, setUser] = useState(null)


    const [userSignUp, setUserSignUp] = useState(userInitialState)


    // const url = "http://localhost:3001/users";

    // const createUrl = `http://localhost:3001/signup`

    // function getUsers() {
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((res) => setUser(res))
    //         .catch(console.error);
    // }

    // const createUsers = async (user) => {
    //     await fetch(createUrl, {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(user),
    //     });
    //     getUsers();
    // };

    const handleChange = (event) => {
        setUserSignUp({ ...userSignUp, [event.target.id]: event.target.value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        createUsers(userSignUp);
        setUserSignUp(userInitialState)
    };

    useEffect(() => {
        getUsers()
        createUsers()
    }, [])

    console.log(userSignUp)
    console.log(setUserSignUp)

    if (!users) {
        return <h1>....Hard at work to sign you up</h1>;
    }

    return (
        <div>

            <br></br>
            <form className='signUpForm'
            // onSubmit={handleSubmit}
            >

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
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <br></br>

                <label htmlFor="DOBday">Day of Birth: </label>
                <select id="DOBday" onChange={handleChange} value={userSignUp.DOBday}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
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
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                </select>
                <br></br>

                <label htmlFor="genderIdentity">  Gender Identity: </label>
                <select id="genderIdentity" onChange={handleChange} value={userSignUp.genderIdentity}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                </select>
                <br></br>
                
                {/* <label htmlFor="interestedIn">Interested In: </label>

                <input type="checkbox" id="interestedIn" onChange={handleChange} value={userSignUp.interestedIn}>Men</input> */}

                
                <select multiple id="interestedIn" onChange={handleChange} value={userSignUp.interestedIn}>
                    <option disabled selected>To select multiple, hold down Shift and click on options</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Everyone">Everyone</option>
                </select>
                <br></br>

                <label htmlFor="relationshipStatus"> Relationship Status: </label>
                <select id="relationshipStatus" onChange={handleChange} value={userSignUp.relationshipStatus}>
                    <option value="Single">Single</option>
                    <option value="Poly">Poly</option>
                    <option value="Married">Married</option>
                </select>
                <br></br>

                <label htmlFor="lookingFor"> Looking For: </label>
                <select id="lookingFor" onChange={handleChange} value={userSignUp.lookingFor}>
                    <option value="Fun">Fun</option>
                    <option value="Relationship">Relationship</option>
                    <option value="Not sure">Not sure</option>
                </select>
                <br></br>

                <label htmlFor="bio"> About Me: </label>
                <textarea id="bio" rows="5" cols="20" onChange={handleChange} value={userSignUp.bio} ></textarea>
                <br></br>


                <label htmlFor="height"> height: </label>
                <select id="height" onChange={handleChange} value={userSignUp.height}>
                    <option value="Short">  Short</option>
                    <option value="Average">Average</option>
                    <option value="Tall">Tall</option>
                </select>
                <br></br>


                <label htmlFor="weight"> weight: </label>
                <select id="weight" onChange={handleChange} value={userSignUp.weight}>
                    <option value="Thin">Thin</option>
                    <option value="Toned">Toned</option>
                    <option value="Fit">Fit</option>
                    <option value="Curvy">Curvy</option>
                    <option value="Plus Size">Plus Size</option>
                    <option value="Heavyset">Heavyset</option>
                </select>
                <br></br>


                <label htmlFor="interests"> Interests: </label>
                <select multiple size="6" id="interests" onChange={handleChange} value={userSignUp.interests}>
                    {/* <option disabled selected>To select multiple, hold down Shift and click on options</option> */}
                    <option value="Cooking">Cooking</option>
                    <option value="Gardening">Gardening</option>
                    <option value="TV">TV</option>
                    <option value="Film">Film</option>
                    <option value="Photography">Photography</option>
                    <option value="Baking">Baking</option>
                    <option value="Dining">Dining</option>
                    <option value="Sports">Sports</option>
                    <option value="Hiking/Camping">Hiking/Camping</option>
                    <option value="Traveling">Traveling</option>
                    <option value="Music">Music</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Anime">Anime</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Reading">Reading</option>
                    <option value="Writing">Writing</option>
                    <option value="Art/Design">Art/Design</option>
                    <option value="Hunting/Fishing">Hunting/Fishing</option>
                    <option value="Museums/Galleries">Museums/Galleries</option>
                    <option value="Breweries/Bars">Breweries/Bars</option>
                    <option value="Clubs">Clubs</option>
                    <option value="Concerts/Festivals">Concerts/Festivals</option>
                    <option value="Theater">Theater</option>
                    <option value="Drag">Drag</option>
                    <option value="Modeling">Modeling</option>
                    <option value="Dancing">Dancing</option>
                    <option value="Singing">Singing</option>
                    <option value="Cars">Cars</option>
                    <option value="Sewing">Sewing</option>
                    <option value="Carpentry">/Carpentry/</option>
                    <option value="Skating">Skating</option>
                </select>
                <br></br>


                <button onClick={handleSubmit}>Submit </button>
                {/* this button aciton isnt working i'm trying to figure out how to redirect once the button is clicked i can go back to /login */}
            </form>
        </div>
    )
}

export default SignUp