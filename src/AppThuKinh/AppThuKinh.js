import React, { Component } from "react";
import GlassesList from "./GlassesList";
import style from "./Style.module.css";

export default class AppThuKinh extends Component {
  render() {
    return (
      <div
        className={`${style.appUI}`}
        style={{
          background: "url(./img/background.jpg), no-repeat, center",
          backgroundSize: "cover",
          position: "relative",
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
                <img src="./img/v7.png" className={`${style.glassImg}`}></img>
                <div className={`${style.overlay}`}>
                  <h4 className="text-primary">Fendi F970</h4>
                  <p>
                    Light pink square lensses define those sunglasses, ending
                    with another of pearl effect tip
                  </p>
                </div>
              </div>
              <div className="col-6">
                <img src="./img/model.jpg" className="w-50" />
              </div>
            </div>
            <GlassesList />
          </div>
        </div>
      </div>
    );
  }
}
