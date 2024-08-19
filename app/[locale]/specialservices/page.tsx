import { useTranslations } from "next-intl";
import React from "react";

function Page() {
  const t = useTranslations("SpecialServices");
  return (
    <>
      <section id="banner">
        <h2>{t("welcome")}</h2>
        <p>{t("subwelcome")}</p>
      </section>

      <section id="main" className="container">
        <section className="box special">
          <header className="major" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2></h2>
            {/* <p style="border-top: none; margin-top: 0"> */}
            <p style={{ borderTop: "none", marginTop: 0 }}>{t("subtitle1")}</p>
            <h2></h2>
            <p style={{ borderTop: "none", marginTop: 0 }}>{t("subtitle2")}</p>
            <img src="./../images/Lo.jpg" alt="" className="image featured basicimage resizedimg" />
            <img src="./../images/Friz.jpg" alt="" className="image featured basicimage resizedimg" />
          </header>
        </section>
      </section>
    </>
  );
}

export default Page;
