

const Header = () => {
    let customClr = "clrerror";
    const isLoggedIn = false;
    const greeting = isLoggedIn ? <p>Welcome Back</p> : <p>Please Log In</p>;
    const items = ["item 1", "item 2", "item 3", "item 3"]


  return <>
        <div>
            <h1 className="head">I'm Karthick</h1>
            <p className="body">I came here to learn reactJs by myself</p>
        

        {/* Javascript Exxpression in JSX */}

        <p className={customClr} style={{fontFamily:"sans-serif", fontStyle:"italic"}}>30+40={30+40}</p>

        {/* JSX with conditional rendering */}

        {greeting}

        {/* JSX list */}
        <ul>
        {items.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
        </div>
    </>
}

export default Header
