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
          <header className="major">
            <h2></h2>
            {/* <p style="border-top: none; margin-top: 0"> */}
            <p style={{ borderTop: "none", marginTop: 0 }}>{t("subtitle1")}</p>
            <h2></h2>
            <p style={{ borderTop: "none", marginTop: 0 }}>{t("subtitle2")}</p>
          </header>
        </section>
      </section>
    </>
  );
}

export default Page;
