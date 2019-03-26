import React from "react";
import { ThreeDots } from "./Spinners"
import '../App.css'


export default class Loader extends React.Component {

  svgRenderer = (type = "ThreeDots") => {
    let svgToRender;

    switch (type) {
      case "ThreeDots":
        svgToRender = <ThreeDots {...this.props} />;
        break;
      default:
        svgToRender = <ThreeDots {...this.props} />;
        break;
    }

    return svgToRender;
  };

  render() {
    const { type } = this.props;
    return <div className="main-block">{this.svgRenderer(type)}</div>;
  }
}