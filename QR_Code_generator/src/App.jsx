import LearnCom from "./Components/LearnCom"
import Header from "./Components/Header"
import Childprops from "./Components/Childprops"
import Student from "./Components/Student"
import Arraysample from "./Components/Arraysample"
import OneofExample from "./Components/OneofExample"
import MultiTypeCom from "./Components/MultiTypeCom"
import FunctionSample from "./Components/FunctionSample"
import "./css/style.css"

function App() {

  const studs = [
      {id : 1, name : "karthick"},
      {id : 2, name : "ram"},
      {id : 3, name : "geetha"},
  ]
  
  const handleClick = ()=>{
    alert("I'm Clicked")
  }
    
  
  return (
        <>
          <div><h1>Hi, Welcome to React Library</h1></div>
          <LearnCom />
          <Header />
          <Student name="karthick" age={28} isMarried={true} />
          <Student name="ram" age={30} isMarried={false} />
          <Student name="sam" age={29} isMarried={false} />
          <Student />
          
          {/* Accessing child props components */}
          <Childprops>
            <p>Example to access child component by using childprops</p>
            <p>Check it out</p>
            <h6>Thank you!</h6>
          </Childprops>

          {/* Accessing arrays by using props */}
          <Arraysample studs={studs}/>

          {/* Oneof example */}
          <OneofExample color="green" />
          
          {/* Multitype of components */}
          <MultiTypeCom value="name" />
          <MultiTypeCom value={28} />
          <MultiTypeCom value={true} />

          {/* Example of Function Component */}
          <FunctionSample handleClick={handleClick}/> 
        </>
  )
}

export default App
