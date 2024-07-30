import React from "react";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("About");
  return (
    <>
      <section id="banner">
        <h2>{t("title")}</h2>
      </section>
      <section id="main" className="container">
        <section className="box special">
          <header className="major">
            <h2>{t("whoarewe")}</h2>
            <p>{t("content1")}</p>
            <h2></h2>
            <p>{t("content2")}</p>
            <h2></h2>
            <p>{t("content3")}</p>
            <h2></h2>
            <p>{t("content4")}</p>
          </header>
        </section>
      </section>
    </>
  );
}

export default Page;
