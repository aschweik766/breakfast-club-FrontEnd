import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'


function SignUp({ users, getUsers, createUsers }) {

    const history = useNavigate()


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

    const [userSignUp, setUserSignUp] = useState(userInitialState)

    const handleChange = (event) => {
        setUserSignUp({ ...userSignUp, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createUsers(userSignUp);
        history('/')

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

                <label htmlFor='firstName'>First Name: </label>
                <input type='text' id='firstName' onChange={handleChange} value={userSignUp.firstName}></input>
                <br></br>

                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' id='lastName' onChange={handleChange} value={userSignUp.lastName}></input>
                <br></br>

                <label htmlFor='DOBmonth'>Month of Birth: </label>
                <select id='DOBmonth' onChange={handleChange} value={userSignUp.DOBmonth}>
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
                </select>
                <br></br>

                <label htmlFor='DOBday'>Day of Birth: </label>
                <select id='DOBday' onChange={handleChange} value={userSignUp.DOBday}>
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

                <label htmlFor='DOByear'>DOB Year: </label>
                <input type='text' id='DOByear' onChange={handleChange} value={userSignUp.DOByear}></input>
                <br></br>

                <label htmlFor='location'>Location: </label>
                <input type='text' id='location' onChange={handleChange} value={userSignUp.location}></input>
                <br></br>

                <label htmlFor='email'>Email: </label>
                <input type='text' id='email' onChange={handleChange} value={userSignUp.email}></input>
                <br></br>

                <label htmlFor='username'>Username: </label>
                <input type='text' id='username' onChange={handleChange} value={userSignUp.username}></input>
                <br></br>

                <label htmlFor='password'>Password: </label>
                <input type='text' id='password' placeholder='must be at least 8 characters' onChange={handleChange} value={userSignUp.password}></input>
                <br></br>

                <label htmlFor='image'> Profile Picture: </label>
                <input type='text' id='image' onChange={handleChange} value={userSignUp.image}></input>
                <br></br>

                <label htmlFor='zodiacSign'> Zodiac Sign: </label>
                <select id='zodiacSign' onChange={handleChange} value={userSignUp.zodiacSign}>
                    <option>Capricorn</option>
                    <option>Aquarius</option>
                    <option>Pisces</option>
                    <option >Aries</option>
                    <option >Taurus</option>
                    <option >Gemini</option>
                    <option >Cancer</option>
                    <option >Leo</option>
                    <option >Virgo</option>
                    <option >Libra</option>
                    <option >Scorpio</option>
                    <option >Sagittarius</option>
                </select>
                <br></br>

                <label htmlFor='genderIdentity'>  Gender Identity: </label>
                <select id='genderIdentity' onChange={handleChange} value={userSignUp.genderIdentity}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                </select>
                <br></br>

                {/* cannot get checkbox values to all go into intestedIn array so going to have to just choose 1 */}
                {/* <div>
                    <label htmlFor='interestedIn'>Interested In: </label>
                    <br></br>
                    <input type='checkbox' id='interestedIn' onChange={handleChange} value='Men' /> Men
                    <br></br>
                    <input type='checkbox' id='interestedIn' onChange={handleChange} value='Women' /> Women
                    <br></br>
                    <input type='checkbox' id='interestedIn' onChange={handleChange} value='Non-binary' /> Non-binary
                    <br></br>
                    <input type='checkbox' id='interestedIn' onChange={handleChange} value='Everyone' /> Everyone
                    <br></br>
                </div>
                <br></br> */}

                <label htmlFor='interestedIn'>Interested In: </label>
                <select id='interestedIn' onChange={handleChange} value={userSignUp.interestedIn}>
                    <option >Men</option>
                    <option >Women</option>
                    <option >Non-binary</option>
                    <option >Everyone</option>
                </select>
                <br></br>

                <label htmlFor='relationshipStatus'> Relationship Status: </label>
                <select id='relationshipStatus' onChange={handleChange} value={userSignUp.relationshipStatus}>
                    <option >Single</option>
                    <option >Poly</option>
                    <option >Married</option>
                </select>
                <br></br>

                <label htmlFor='lookingFor'> Looking For: </label>
                <select id='lookingFor' onChange={handleChange} value={userSignUp.lookingFor}>
                    <option>Fun</option>
                    <option>Relationship</option>
                    <option>Not sure</option>
                </select>
                <br></br>

                <label htmlFor='bio'> About Me: </label>
                <textarea id='bio' rows='5' cols='20' onChange={handleChange} value={userSignUp.bio} ></textarea>
                <br></br>


                <label htmlFor='height'> height: </label>
                <select id='height' onChange={handleChange} value={userSignUp.height}>
                    <option>Short</option>
                    <option>Average</option>
                    <option>Tall</option>
                </select>
                <br></br>


                <label htmlFor='weight'> weight: </label>
                <select id='weight' onChange={handleChange} value={userSignUp.weight}>
                    <option>Thin</option>
                    <option>Toned</option>
                    <option>Fit</option>
                    <option>Curvy</option>
                    <option>Plus Size</option>
                    <option>Heavyset</option>
                </select>
                <br></br>

                {/* cannot get checkbox values to all go into interests array so going to have to just choose 1 */}
                {/* <div>
                    <label htmlFor='interests'> Interests: </label>
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Cooking' /> Cooking
                        <input type='checkbox' id='interests' onChange={handleChange} value='Gardening' /> Gardening
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='TV' /> TV
                        <input type='checkbox' id='interests' onChange={handleChange} value='Film' /> Film
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Photography' /> Photography
                        <input type='checkbox' id='interests' onChange={handleChange} value='Sports' /> Sports
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Camping' /> Camping
                        <input type='checkbox' id='interests' onChange={handleChange} value='Traveling' /> Traveling
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Music' /> Music
                        <input type='checkbox' id='interests' onChange={handleChange} value='Cycling' /> Cycling
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Gaming' /> Gaming
                        <input type='checkbox' id='interests' onChange={handleChange} value='Anime' /> Anime
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Shopping' /> Shopping
                        <input type='checkbox' id='interests' onChange={handleChange} value='Reading' /> Reading
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Writing' /> Writing
                        <input type='checkbox' id='interests' onChange={handleChange} value='Art/Design' /> Art/Design
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Hunting' /> Hunting
                        <input type='checkbox' id='interests' onChange={handleChange} value='Fishing' /> Fishing
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Breweries/Bars' /> Breweries/Bars
                        <input type='checkbox' id='interests' onChange={handleChange} value='Clubs' /> Clubs
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Concerts' /> Concerts
                        <input type='checkbox' id='interests' onChange={handleChange} value='Theater' /> Theater
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Drag' /> Drag
                        <input type='checkbox' id='interests' onChange={handleChange} value='Modeling' /> Modeling
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Dancing' /> Dancing
                        <input type='checkbox' id='interests' onChange={handleChange} value='Singing' /> Singing
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Museums' /> Museums
                        <input type='checkbox' id='interests' onChange={handleChange} value='Skating' /> Skating
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Carpentry' /> Carpentry
                        <input type='checkbox' id='interests' onChange={handleChange} value='Sewing' /> Sewing
                    <br></br>

                </div>
                <br></br> */}

                <label htmlFor='interests'> Top Interest: </label>
                <select id='interests' onChange={handleChange} value={userSignUp.interests}>
                    <option value="Cooking">Cooking</option>
                    <option value="Gardening">Gardening</option>
                    <option value="TV">TV</option>
                    <option value="Film">Film</option>
                    <option value="Photography">Photography</option>
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
                    <option value="Breweries/Bars">Breweries/Bars</option>
                    <option value="Clubs">Clubs</option>
                    <option value="Concerts">Concerts</option>
                    <option value="Theater">Theater</option>
                    <option value="Drag">Drag</option>
                    <option value="Modeling">Modeling</option>
                    <option value="Dancing">Dancing</option>
                    <option value="Singing">Singing</option>
                    <option value="Museums">Museums</option>
                    <option value="Skating">Skating</option>
                    <option value="Carpentry">/Carpentry/</option>
                    <option value="Sewing">Sewing</option>
                </select>
                <br></br>


                <button
                    onClick={handleSubmit}
                >Submit </button>
            </form>
        </div>
    )
}

export default SignUp