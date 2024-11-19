import banner from "./../../images/banner.jpg";
import pic2 from "./../../images/pic02.jpg";
import pic3 from "./../../images/pic03.jpg";
import kutya from "./../../images/kutyus.jpeg";
import { useTranslations } from "next-intl";
import { navigateTo } from "../blog/Navbar";
import NavigatorComponent from "../blog/NavigatorComponent";
import Services from "./services";

const Page = () => {
  const t = useTranslations("Index");
  return (
    <>
      <section id="banner">
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
          <Services Service1={t("Service1")} Service2={t("Service2")} Service3={t("Service3")} />
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
