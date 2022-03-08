import React, { Component } from "react";

export default class GlassesItem extends Component {
  render() {
    let { glasses } = this.props;
    return <img className="w-75 h-100" style={{objectFit:'contain'}} src={"./img/g" + glasses.id + ".jpg"}></img>;
  }
}
