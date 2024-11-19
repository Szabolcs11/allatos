import { useTranslations } from "next-intl";
import React from "react";

function Page() {
  const t = useTranslations("Services");
  return (
    <>
      <section id="banner">
        <h2>{t("welcome")}</h2>
      </section>

      <section id="main" className="container">
        {/* <section className="box special">
          <header className="major">
            <h2>{t("title")}</h2>
            <p>
              {t("subtitle1")}
              <br />
              {t("subtitle2")}
            </p>
          </header>
        </section> */}

        <section className="box special features">
          <div className="features-row" style={{ borderTop: "none" }}>
            <section id="service1">
              <h3>{t("section1title")}</h3>
              <p>{t("section1subtitle")}</p>
              <ul>
                <li>
                  {t("service1item1")}
                  <b>{t("service1item12")}</b>
                </li>
                <li>{t("service1item2")}</li>
                <li>{t("service1item3")}</li>
                <li>{t("service1item4")}</li>
                <li>{t("service1item5")}</li>
                <li>{t("service1item6")}</li>
                <li>{t("service1item7")}</li>
                <li>{t("service1item8")}</li>
                <li>{t("service1item9")}</li>
                <li>{t("service1item10")}</li>
                <li>{t("service1item11")}</li>
              </ul>
              <img src="./../images/cicák.jpg" alt="" className="image featured basicimage smallerimg" />
              {t("sectionpricelist")}
              <a href="./Male Životinje Ambulanta Cenovnik.docx.pdf" target="_blank">
                {t("sectionpricelistlink")}
              </a>
              .
            </section>
            <section id="service2">
              <h3>{t("section2title")}</h3>
              <p>{t("section2subtitle")}</p>
              <ul>
                <li>{t("service2item1")}</li>
                <li>{t("service2item2")}</li>
                <li>{t("service2item3")}</li>
                <li>{t("service2item4")}</li>
                <li>{t("service2item5")}</li>
                <li>{t("service2item6")}</li>
                <li>{t("service2item7")}</li>
                <li>{t("service2item8")}</li>
              </ul>
              <img src="./../images/Sebészet.jpg" alt="" className="image featured basicimage smallerimg" />
              {t("sectionpricelist")}
              <a href="./Hirurgija_Cenovnik.docx.pdf" target="_blank">
                {t("sectionpricelistlink")}
              </a>
              .
            </section>
            <section id="service3">
              <h3>{t("section3title")}</h3>
              <p>{t("section3subtitle")}</p>
              <ul>
                <li>{t("service3item1")}</li>
                <li>{t("service3item2")}</li>
                <li>{t("service3item3")}</li>
                <li>{t("service3item4")}</li>
                <li>{t("service3item5")}</li>
                <li>{t("service3item6")}</li>
              </ul>
              {/* <img src="./../images/Terepi_munka.jpg" alt="" className="image featured basicimage smallerimg" /> */}
              <img src="./../images/Terepi_1.jpeg" alt="" className="image featured basicimage smallerimg" />
              <img src="./../images/Terepi_2.jpeg" alt="" className="image featured basicimage smallerimg" />
              {t("sectionpricelist")}
              <a href="./Terenski rad Cenovnik.docx.pdf" target="_blank">
                {t("sectionpricelistlink")}
              </a>
              .
            </section>
          </div>
          {/* <div className="features-row" style={{ borderTop: "none" }}>

          </div> */}
        </section>
      </section>
    </>
  );
}

export default Page;
