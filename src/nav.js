/*import React, {useState} from 'react'*/

  
   
   
  
 

export default function Nav(props){
  /*
 const [classSize, setClassSize] = useState("")
  
function clickClassChange(){
 setClassSize(prevClass => prevClass === ""? "-onclick":"")

}

  function classChange() {
   
    if (window.innerWidth > 375){
     setClassSize(prevclass => prevclass ==="onclick"? "":"")
}
}

window.addEventListener('resize', classChange)
  
       

  
    */


return(
<div className="nav">
<div className="nav--image-title">
<img   onClick={props.clickClassChange} src="/images/icon-hamburger.svg" alt="hamburger icon" className="nav--hamburger" />
<nav className="nav--Title">room</nav>
</div>
<ul className={`nav--ul${props.classSize}`}>

<img onClick={props.clickClassChange}className="nav-x-small" src="/images/icon-close.svg" alt="x"   />

<li className="nav--List">home</li>
<li className="nav--List">shop</li>
<li className="nav--List">about</li>
<li className="nav--List">contact</li>

</ul>
</div>
)
}