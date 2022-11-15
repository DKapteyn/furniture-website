import "../sass/nav.scss";

export default function Nav(props) {
  return (
    <div className="nav">
      <div className="nav--image-title">
        <img
          onClick={props.clickClassChange}
          src="/furniture-website/images/icon-hamburger.svg"
          alt="hamburger icon"
          className="nav--hamburger"
        />
        <nav className="nav--Title">room</nav>
      </div>
      <ul className={`nav--ul${props.classSize}`}>
        <img
          onClick={props.clickClassChange}
          className="nav-x-small"
          src="/furniture-website/images/icon-close.svg"
          alt="x"
        />

        <li className="nav--List">home</li>
        <li className="nav--List">shop</li>
        <li className="nav--List">about</li>
        <li className="nav--List">contact</li>
      </ul>
    </div>
  );
}
