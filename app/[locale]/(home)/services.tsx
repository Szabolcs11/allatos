"use client";
import React from "react";
import { navigateTo } from "../blog/Navbar";

type Props = {
  Service1: string;
  Service2: string;
  Service3: string;
};

function Services({ Service1, Service2, Service3 }: Props) {
  return (
    <div className="features-row" style={{ cursor: "pointer" }}>
      <section onClick={() => navigateTo("/services#service1")}>
        <span className="icon solid major fa-bolt accent2"></span>
        <h3>{Service1}</h3>
      </section>
      <section onClick={() => navigateTo("/services#service2")} style={{ cursor: "pointer" }}>
        <span className="icon solid major fa-chart-area accent3"></span>
        <h3>{Service2}</h3>
      </section>
      <section onClick={() => navigateTo("/services#service3")} style={{ cursor: "pointer" }}>
        <span className="icon solid major fa-chart-area accent4"></span>
        <h3>{Service3}</h3>
      </section>
    </div>
  );
}

export default Services;
