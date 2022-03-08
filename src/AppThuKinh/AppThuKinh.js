import React, { Component } from "react";
import GlassesList from "./GlassesList";
import style from "./Style.module.css";

import { connect } from "react-redux";

class AppThuKinh extends Component {
  arrGlasses = [
    {
      id: 1,
      name: "Bamboo Wood",
      descr:
        "Woodies sunglasses are Handmade from 100% Real Bamboo. Soft pouch/lens cloth are included.",
    },

    {
      id: 2,
      name: "American Flag",
      descr: "Long-lasting, weatherproof and wearability in all conditions.",
    },

    {
      id: 3,
      name: "Gunmetal Blue",
      descr: "Gunmetal sunglasses full rim round.",
    },

    {
      id: 4,
      name: "Cretan Bull",
      descr:
        "These sunglasses are the perfect accessory on the beach, on the way to the office or in the city.",
    },

    {
      id: 5,
      name: "Joyride",
      descr:
        "The tone of the polarized lenses plays off this cue effortlessly, blending in at the bottom edge.",
    },

    {
      id: 6,
      name: "Natty Ice",
      descr:
        "Round cat eye sunglasses are straight-up phenomenal, with a bright “Crystal Aquarius” base color fading to navy across the frame.",
    },

    {
      id: 7,
      name: "Tortoise",
      descr:
        "We took a classic shape and designed around durable crystal tan frames.",
    },

    {
      id: 8,
      name: "Wood Red",
      descr:
        "This evolution combined with sturdy stainless steel frames make for a red-carpet-worthy aesthetic",
    },

    {
      id: 9,
      name: "Midnight Vixen",
      descr:
        "The impact of this glossy, sky blue pattern that blankets the entire exterior.",
    },
  ];

  render() {
    let { id, name, descr } = this.props.glassOnTry;
    return (
      <div
        className={`${style.appUI}`}
        style={{
          background: "url(./img/background.jpg), no-repeat, center",
          backgroundSize: "cover",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <div className={`${style.appContent}`}>
          <h3 className="text-center text-white bg-dark p-4">
            Try Glasses App Online
          </h3>
          <div className="container py-4">
            <div className="row text-center mt-4">
              <div className="col-6">
                <img
                  src="./img/model.jpg"
                  className="w-50"
                  style={{ position: "relative" }}
                />
                <img
                  src={"./img/v" + id + ".png"}
                  className={`${style.glassImg}`}
                ></img>
                <div className={`${style.overlay}`}>
                  <h5 className="text-primary">{name}</h5>
                  <p className={`${style.descrP}`}>{descr}</p>
                </div>
              </div>
              <div className="col-6">
                <img src="./img/model.jpg" className="w-50" />
              </div>
            </div>
            <GlassesList arrGlasses={this.arrGlasses} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    glassOnTry: rootReducer.appThuKinhReducer.glassOnTry,
  };
};

export default connect(mapStateToProps)(AppThuKinh);
