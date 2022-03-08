import React, { Component } from "react";
import { connect } from "react-redux";

class GlassesItem extends Component {
  render() {
    let { glasses } = this.props;
    return (
      <img
        className="w-75 h-100"
        style={{ objectFit: "contain" }}
        src={"./img/g" + glasses.id + ".jpg"}
        onClick={() => {
          this.props.tryGlasses(glasses);
        }}
      ></img>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tryGlasses: (glasses) => {
      const action = {
        type: "TRY_GLASSES",
        glasses,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(GlassesItem);
