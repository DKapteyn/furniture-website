import "../sass/bottom.scss";
export default function Bottom() {
  return (
    <footer className="bottom--container">
      <img
        src="\furniture-website\images\image-about-dark.jpg"
        alt="blackchairs"
      />
      <div className="bottom--center">
        <h3 className="bottom--title">ABOUT OUR FURNITURE</h3>
        <p className="bottom--para">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img
        src="\furniture-website\images\image-about-light.jpg"
        alt="whitechairs"
      />
    </footer>
  );
}
