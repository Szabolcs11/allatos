import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("Contact");
  return (
    <section id="main" className="container">
      <header>
        <h2>{t("welcome")}</h2>
        {/* <p>Tell us what you think about our little operation.</p> */}
      </header>
      <div className="box">
        <section className="openat">
          <h1>{t("openinghours")}:</h1>
          <p>{t("monday")} 7:00 - 15:00</p>
          <p>{t("tuesday")} 7:00 - 15:00</p>
          <p>{t("wednesday")} 7:00 - 15:00</p>
          <p>{t("thursday")} 7:00 - 15:00</p>
          <p>{t("friday")} 7:00 - 15:00</p>
          <p>{t("saturday")} 7:00 - 12:00</p>
          <p>
            {t("sunday")} {t("closed")}
          </p>
        </section>
        <section className="contact-info">
          {t("telephone")} <a href="tel:024764270">024 764270</a>
          <br />
          {t("phoneoncall")} <a href="tel:0647150100">063 7 150 100</a>
          <br />
          Instagram:
          <a href="https://www.instagram.com/veterinarskastanica.vetservis/">
            https://www.instagram.com/veterinarskastanica.vetservis/
          </a>
          <br />
          Facebook:
          <a href="https://www.facebook.com/veterinarskastanica.vetservis">
            https://www.facebook.com/veterinarskastanica.vetservis/
          </a>
        </section>
        <section className="map-container">
          Trumbićeva 7, Bajmok 456621
          <iframe
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6595.915320426924!2d19.426991725712764!3d45.9664503070767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743451dccc6acad%3A0xffc00b06546ee679!2sVeterinarska%20stanica%20Vetservis%20-%20Homeopatija!5e0!3m2!1sen!2srs!4v1721034335727!5m2!1sen!2srs"
            loading="lazy"
          ></iframe>
        </section>
        <br />
        <span>{t("tribenumber")} 08796165</span>
        <br />
        <span>{t("vatnumber")} 103078698</span>
      </div>
    </section>
  );
}

export default Page;
