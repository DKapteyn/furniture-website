

export default function Main(props) {
       
  
  
  return (
    <div className="main--container">
      <img className= "main--large-heropic" src={props.Limg} alt="hero pic" />
      <img className={`main--small-heropic${props.classSize}`} src={props.Simg} alt="hero pic" />
      <div className="main--rightcontainer">
        <div className="main--righttext">
          <h1 className="main--title"> {props.title}</h1>
          <p className="main--para"> {props.para}</p>
          <div className="main--shopnow">
            <span>SHOP NOW</span>
            <img className="arrow" src="\images\icon-arrow.svg" alt="arrow" />
          </div>
        </div>
        <div className="button-container">
          <div onClick={props.handleClickDown} className="leftbutton, button">
            
            <img src="\images\icon-angle-left.svg" alt="left pointer" />
          </div>
          <div onClick={props.handleClickUp} className="rightbutton, button">
            <img src="\images\icon-angle-right.svg" alt="right pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
