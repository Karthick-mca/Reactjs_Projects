import {useState} from 'react'

const UserDetails = () => {
    // const [userName,setuserName] = useState("Karthick")
    // const [userAge,setuserAge] = useState(28)

    //single type calling
    const [User,setUser] = useState({name:"karthick",age:28})


    const handleClick1 = ()=>{
        // userName=="Karthick"?setuserName("Yogu") : setuserName("Karthick");
        
        //to call object value we need to use spread operator
        setUser({...User,name:"yogu"})
    }
    const handleClick2 = ()=>{
        // setuserAge(25)
        // userAge ==28 ? setuserAge(25) : setuserAge(28);

        //to call object value we need to use spread operator
        setUser({...User,age:25})

    }
  return (
    <>
    <h1>User Details</h1>
    <h3>{User.name}</h3>
    <h3>{User.age}</h3>
    <button onClick={handleClick1}>Update user name</button>
    <button onClick={handleClick2}>Update user age</button>
    </>
    
  )
}

export default UserDetails
