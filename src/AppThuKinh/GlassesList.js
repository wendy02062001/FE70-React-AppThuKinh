import React, { Component } from "react";
import GlassesItem from "./GlassesItem";

export default class GlassesList extends Component {
  renderGlassesList = () => {
    let { arrGlasses } = this.props;
    console.log(arrGlasses);
    return arrGlasses.map((glasses, idx) => {
      return (
        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 mt-3" key={idx}>
          <GlassesItem glasses={glasses} />
        </div>
      );
    });
  };

  render() {
    return <div className="row text-center bg-white mt-5">{this.renderGlassesList()}</div>;
  }
}
