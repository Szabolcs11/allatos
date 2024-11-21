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
          <header className="major" style={{ padding: 0 }}>
            {/* <h2>{t("whoarewe")}</h2>
            */}
            <img src="./../images/Ez_legyen.jpg" alt="" className="image featured basicimage" />
            <h2></h2>
            <p>{t("content1")}</p> 
            <h2></h2>
            <p>{t("content2")}</p>
            <h2></h2>
            <p>{t("content3")}</p>
            <h2></h2>
            <p>{t("content4")}</p>
            <h2></h2>
            <p>{t("content5")}</p>
            <h2></h2>
            <p>{t("content6")}</p>
            <h2></h2>
            <p>{t("content7")}</p>
            <h2></h2>
            <p>{t("content8")}</p>
            <h2></h2>
            <p>{t("content9")}</p>
            <h2></h2>
            <p>{t("content10")}</p>
            <h2></h2>
            <p>{t("content11")}</p>
            <h2></h2>
            <p>{t("content12")}</p>
            <h2></h2>
            <p>{t("content13")}</p>
            <h2></h2>
            <p>{t("content14")}</p>
            <h2></h2>
            <img src="./../images/Bolt_1.jpg" alt="" className="image featured basicimage" />
            <h2></h2>
            <p className="bold">{t("content15")}</p>
            <p></p>
            <p className="bold">{t("content16")}</p>
          </header>
        </section>
      </section>
    </>
  );
}

export default Page;
