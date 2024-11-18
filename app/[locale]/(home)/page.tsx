import banner from "./../../images/banner.jpg";
import pic2 from "./../../images/pic02.jpg";
import pic3 from "./../../images/pic03.jpg";
import kutya from "./../../images/kutyus.jpeg";
import { useTranslations } from "next-intl";
import { navigateTo } from "../blog/Navbar";
import NavigatorComponent from "../blog/NavigatorComponent";

const Page = () => {
  const t = useTranslations("Index");
  return (
    <>
      <section id="banner" style={{ backgroundColor: "#2B7013" }}>
        <h2>Vetservis</h2>
        <p>{t("welcome")}</p>
      </section>

      <section id="main" className="container">
        <section className="box special">
          {/* <header className="major">
            <h2>
              {t("title1")}
              <br />
              {t("title2")}
            </h2>
            <p>
              {t("subtitle1")}
              <br />
              {t("subtitle2")}
            </p>
          </header> */}
          <span className="image featured" style={{ marginTop: "-3em" }}>
            <img src={kutya.src} alt="" style={{ borderRadius: 6 }} />
          </span>
        </section>

        <section className="box special features">
          <div className="features-row">
            <section>
              <span className="icon solid major fa-bolt accent2"></span>
              <h3>{t("Service1")}</h3>
            </section>
            <section>
              <span className="icon solid major fa-chart-area accent3"></span>
              <h3>{t("Service2")}</h3>
            </section>
            <section>
              <span className="icon solid major fa-chart-area accent4"></span>
              <h3>{t("Service3")}</h3>
            </section>
          </div>
        </section>

        <div className="row">
          <NavigatorComponent message={t("Gallery")} path="/gallery" img={"./../images/Maci.jpg"} />
          <NavigatorComponent message={t("Contact")} path="/contact" img={"./../images/Elvis_2.jpeg"} />
        </div>
      </section>
    </>
  );
};

export default Page;
