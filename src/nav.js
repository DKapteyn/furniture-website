
/*const close = document.querySelector('.nav--image');
const ul = document.querySelector('.nav--ul');

Need to change classes instead!!!

window.addEventListener('resize', ()=>{
  if (window.innerWidth >= 375){
   
      close.style.display = "none";
       ul.style.display = "none";
        
   
   
  
  }})*/

export default function Nav(){

  


   /* function changeDisplay(){
        close.style.display === "none"? close.style.display = "flex": close.style.display = "none";
        ul.style.display === "none"?   ul.style.display = "flex": ul.style.display = "none";
       
        }
    */


return(
<div className="nav">
<div className="nav--image-title">
<img /*onClick={changeDisplay}*/ src="/images/icon-hamburger.svg" alt="hamburger icon" className="nav--hamburger" />
<nav className="nav--Title">room</nav>
</div>
<ul className="nav--ul">

<img /*onClick ={changeDisplay}*/ src="/images/icon-close.svg" alt="x"  className="nav--image" />

<li className="nav--List">home</li>
<li className="nav--List">shop</li>
<li className="nav--List">about</li>
<li className="nav--List">contact</li>

</ul>
</div>
)
}