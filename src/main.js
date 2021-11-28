

export default function Main(){
return(
    <div className="main--container">
        
        <img className="main--heropic" src="\images\desktop-image-hero-1.jpg" alt="hero pic"  />
       
        
        <div className="main--leftcontainer">
            <div className="main--lefttext">
            <h1 className="main--title">Discover innovative ways to decorate</h1>
            <p className="main--para">We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.
                </p>
            <div className="main--shopnow">
                <span>SHOP NOW</span>
                <img className="arrow" src="\images\icon-arrow.svg" alt="arrow"  />
            </div>
            </div>
           <div className="button-container">
            <div className="leftbutton, button" > <img src="\images\icon-angle-left.svg" alt="left pointer" />  </div>
            <div className="rightbutton, button"><img src="\images\icon-angle-right.svg" alt="right pointer" /></div>
            </div>

          </div>

    </div>
    
    )



}