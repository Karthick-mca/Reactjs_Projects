import {useState} from 'react';
import './RegForm.css';

const RegForm = () => {
    const [User,setUser] = useState({
        name:"karthick",
        age:25,
        gender:"male",
        isMarried: true,
        country:"india",
        bio:"Write about yourself.."
    })

    function checkHandler(e){
        const name = e.target.name;
        const value = e.target.type == "checkbox"?e.target.checked:e.target.value;
        setUser({...User,[name]:value})
    }
  return (
    <>
    <h1>USER REGISTRAION FORM</h1>
      <table>
        <tbody>
            <tr>
                <td>Name:</td>
                <td>{User.name}</td>
            </tr>
            <tr>
                <td>Age:</td>
                <td>{User.age}</td>
            </tr>
            <tr>
                <td>Gender:</td>
                <td>{User.gender}</td>
            </tr>
            <tr>
                <td>Marital status:</td>
                <td>{User.isMarried ? "married":"not married"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{User.country}</td>
            </tr>
            <tr>
                <td>Bio</td>
                <td>{User.bio}</td>
            </tr>
        </tbody>
      </table>
      <form action="">
        <input type="text" placeholder="full name " name="name" id="" value={User.name} onChange={checkHandler}/>
        <input type="number" placeholder="age " name="age" id="" value={User.age} onChange={checkHandler}/>
        <div className="gender">
            <label htmlFor="male">
                <input type="radio" name='gender' id='male' checked={User.gender=="male"} value="male" onChange={checkHandler}/>Male
            </label>
            <label htmlFor="female">
                <input type="radio" name="gender" id='female' checked={User.gender=="female"}  value="female" onChange={checkHandler}/>Female
            </label><br /><br />
            <label htmlFor="isMarried">
                <input type="checkbox" name="isMarried" id='isMarried' checked={User.isMarried} onChange={checkHandler}/>isMarried
            </label><br /><br />
            <div className='world'>
                <label htmlFor="">Select country</label>
                <select name="country" id="country" value={User.country} onChange={checkHandler}>
                    <option value="INDIA">INDIA</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
            </div>
        </div>
        <textarea name="bio" id="bio" cols="30" rows="5" placeholder='Write about yourself..' value={User.bio} onChange={checkHandler}></textarea>
      </form>
    </>
  )
}

export default RegForm
