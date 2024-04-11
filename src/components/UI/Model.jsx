import { Fragment } from "react";
import classes from "./Model.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.model}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("portaloverlays");

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>)}
    </Fragment>
  );
};

export default Model;
