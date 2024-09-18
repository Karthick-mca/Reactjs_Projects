import {useState} from 'react'

const FormInput = () => {

    const [user, setUser] = useState({fname:"karthick",lname:"rajendran",age:28})

    // function changeName(e){
    //     // const newStateObject = {...user};
    //     // newStateObject.name=e.target.value;
    //     // setUser(newStateObject);
    //   setUser((oldState)=>{
    //     return {...oldState, name:e.target.value}
    //   })
    // }
  function changeHandler(e){
    setUser({...user, [e.target.name]: e.target.value});
  }

    // function changeAge(e){
    //     // const newStateObject = {...user};
    //     // newStateObject.age=e.target.value;
    //     // setUser(newStateObject);
    //     setUser((oldState)=>{
    //       return {...oldState, age:e.target.value}
    //     })
    // }
  return (
    <>
    <h2>
      {user.fname} {user.lname},{user.age}
    </h2>
      <form action="">
        <input type="text" placeholder='Enter User fname' onChange={changeHandler} value={user.fname} name='fname'/>
        <input type="text" placeholder='Enter User lname' onChange={changeHandler} value={user.lname} name='lname'/>
        <input type="text" placeholder='Enter User age' onChange={changeHandler} value={user.age} name='age'/>
      </form>
    </>
  )
}

export default FormInput
