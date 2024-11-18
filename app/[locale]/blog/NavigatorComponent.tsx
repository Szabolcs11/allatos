"use client";
import React, { useState } from "react";
import { navigateTo } from "./Navbar";

type NavigatorComponentProps = {
  message: string;
  path: string;
  img: string;
};

function NavigatorComponent({ message, path, img }: NavigatorComponentProps) {
  return (
    <div className="col-6 col-12-narrower">
      <section className="box special">
        <span className="image featured">
          <img src={img} alt="" />
        </span>
        {/* <h3>{t("Contact")}</h3> */}
        <h3>{message}</h3>
        <ul className="actions special">
          <li>
            <a onClick={() => navigateTo(path)} className="button alt">
              {message}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default NavigatorComponent;
