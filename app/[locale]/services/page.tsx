import { useTranslations } from "next-intl";
import React from "react";

function page() {
  const t = useTranslations("Services");
  return (
    <>
      <section id="banner">
        <h2>{t("welcome")}</h2>
      </section>

      <section id="main" className="container">
        <section className="box special">
          <header className="major">
            <h2>{t("title")}</h2>
            <p>
              {t("subtitle1")}
              <br />
              {t("subtitle2")}
            </p>
          </header>
        </section>

        <section className="box special features">
          <div className="features-row" style={{ borderTop: "none" }}>
            <section>
              <h3>KISÁLLAT RENDELŐ</h3>
              <p>
                Kisállatokat napi szinten várjuk szeretettel rendelőnkben védőoltások és egyéb ambuláns kezelések
                céljából.
              </p>
              <ul>
                <li>
                  Kisállatok állapotfelmérése és kezelése - igény szerint <b>alternatív homeopátiás módszerekkel</b>
                </li>
                <li>Infúziós terápiák az állatorvos javaslata szerint</li>
                <li>Fogászati ellátás, ultrahangos fogkőleszedés</li>
                <li>Laboratóriumi diagnosztika - teljes vérkép diagnosztika, biokémia, gyorstesztek</li>
                <li>Mintaküldés a megfelelő állatorvosi laboratóriumba szükség esetén</li>
                <li>Termékeny napok meghatározása, mesterséges megtermékenyítés</li>
                <li>Ultrahang diagnosztika</li>
                <li>Röntgen diagnosztika</li>
                <li>Bőrgyógyászati vizsgálatok és kezelések</li>
                <li>Fülgyógyászati vizsgálatok</li>
                <li>Allergia kezelése</li>
              </ul>
              Árjegyzékünkért kérjük, kattintson
              <a href="./Male Životinje Ambulanta Cenovnik.docx.pdf" target="_blank">
                ide
              </a>
              .
            </section>
            <section>
              <h3>SEBÉSZET</h3>
              <p>
                Műtéteket előjegyzéssel rutinszerűen, altatásban végezzük. A műtét során a szívműködést és vérnyomást
                figyelemmel kísérjük. Sürgős esetben azonnal elvégezzük a szükséges operációt.
              </p>
              <ul>
                <li>Sterilizáció és kasztráció</li>
                <li>Császármetszés, szülés, ellés levezetése</li>
                <li>Tumorműtétek</li>
                <li>Szemészeti műtétek</li>
                <li>Sérvek operációja</li>
                <li>Piometra</li>
                <li>Székrekedés kezelése</li>
                <li>Méhelőesés és egyéb nőgyógyászati problémák kezelése</li>
              </ul>
              Árjegyzékünkért kérjük, kattintson{" "}
              <a href="./Hirurgija_Cenovnik.docx.pdf" target="_blank">
                ide
              </a>
              .
            </section>
          </div>
          <div className="features-row" style={{ borderTop: "none" }}>
            <section>
              <h3>TEREPI MUNKA</h3>
              <p>
                Haszonállatok kezelése és az állomány követése akár napi szinten. Ügyfeleink igénye szerint házhoz megy
                állatorvosunk.
              </p>
              <ul>
                <li>Megelőző oltások</li>
                <li>Akut esetek ellátása</li>
                <li>Krónikus betegségek kezelése</li>
                <li>
                  Szaporodásbiológia - mely magában foglalja a szarvasmarha ciklusának követését egészen a hasasságig
                </li>
                <li>Elletés</li>
                <li>Terepi ultrahang diagnosztika</li>
              </ul>
              Árjegyzékünkért kérjük, kattintson
              <a href="./Terenski rad Cenovnik.docx.pdf" target="_blank">
                ide
              </a>
              .
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default page;
