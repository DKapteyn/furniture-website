import { motion } from "framer-motion";

export default function Main(props) {
  const variant = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1 },
    transition: { duration: 0.7 },
  };

  return (
    <div className="main--container">
      <motion.img
        initial="hidden"
        animate="visible"
        transition="transition"
        variants={variant}
        key={props.Limg}
        className="main--large-heropic"
        src={props.Limg}
        alt="hero pic"
      />
      <motion.img
        initial="hidden"
        animate="visible"
        transition="transition"
        variants={variant}
        key={props.Simg}
        className={`main--small-heropic${props.classSize}`}
        src={props.Simg}
        alt="hero pic"
      />
      <div className={`main--rightcontainer${props.classSize}`}>
        <div className={`main--righttext`}>
          <motion.h1
            initial="hidden"
            animate="visible"
            transition="transition"
            variants={variant}
            key={props.title}
            className="main--title"
          >
            {" "}
            {props.title}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            transition="transition"
            variants={variant}
            key={props.Limg}
            className={`main--para${props.classSize}`}
          >
            {" "}
            {props.para}
          </motion.p>
          <div className="main--shopnow">
            <span>SHOP NOW</span>
            <img className="arrow" src="\images\icon-arrow.svg" alt="arrow" />
          </div>
        </div>
        <div className="button-container">
          <div onClick={props.handleClickDown} className={`leftbutton, button`}>
            <img
              className={`angleImage${props.classSize}`}
              src="\images\icon-angle-left.svg"
              alt="left pointer"
            />
          </div>
          <div onClick={props.handleClickUp} className={`rightbutton, button`}>
            <img
              className={`angleImage${props.classSize}`}
              src="\images\icon-angle-right.svg"
              alt="right pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
