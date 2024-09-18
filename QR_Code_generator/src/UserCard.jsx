import PropTypes from 'prop-types'
const userData=[
    {
        name:"James", 
        city:"New York",
        description:"front end developer",
        skills:["HTML","CSS","JavaScript","React Js","Node Js","Bootstrap","Materialize"],
        online:true,
        profile:"images/img 1.jpg",
    },
    {
        name:"Robin", 
        city:"New Jercey",
        description:"Back end developer",
        skills:["Python",".net","django","SQL"],
        online:false,
        profile:"images/img 2.jpg",
    },
    {
        name:"Rock", 
        city:"Florida",
        description:"Full Stack developer",
        skills:["HTML","CSS","JavaScript","React Js","Node Js","Bootstrap","Materialize","Python",".net","django","SQL"],
        online:true,
        profile:"images/img 3.jpg",
    },
];

function User(props){
    return <div className="container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img"  alt="User"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="btn">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
            </ul>
        </div>
    </div>  
}

const UserCard = () => {
  return (
  <>
    {userData.map((user,index)=>(
        <User key={index} name={user.name} city={user.city} description={user.description} skills={user.skills}
        online={user.online} profile={user.profile} />
        ))}
  </>
  )
}

export default UserCard
//   <User name="James" city="New York" description="front end developer" skills={["HTML","CSS","JavaScript","React Js","Node Js","Bootstrap","Materialize"]} online={true} profile="images/img 1.jpg" />

User.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,
}