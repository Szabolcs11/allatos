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
            {t("content1") != "About.content1" ? <> <p>{t("content1")}</p><h2></h2></> : <></>}
            {t("content2") != "About.content2" ? <> <p>{t("content2")}</p><h2></h2></> : <></>}
            {t("content3") != "About.content3" ? <> <p>{t("content3")}</p><h2></h2></> : <></>}
            {t("content4") != "About.content4" ? <> <p>{t("content4")}</p><h2></h2></> : <></>}
            {t("content5") != "About.content5" ? <> <p>{t("content5")}</p><h2></h2></> : <></>}
            {t("content6") != "About.content6" ? <> <p>{t("content6")}</p><h2></h2></> : <></>}
            {t("content7") != "About.content7" ? <> <p>{t("content7")}</p><h2></h2></> : <></>}
            {t("content8") != "About.content8" ? <> <p>{t("content8")}</p><h2></h2></> : <></>}
            {t("content9") != "About.content9" ? <> <p>{t("content9")}</p><h2></h2></> : <></>}           
            {t("content10") != "About.content10" ? <> <p>{t("content10")}</p><h2></h2></> : <></>}
            {t("content11") != "About.content11" ? <> <p>{t("content11")}</p><h2></h2></> : <></>}
            {t("content12") != "About.content12" ? <> <p>{t("content12")}</p><h2></h2></> : <></>}
            {t("content13") != "About.content13" ? <> <p>{t("content13")}</p><h2></h2></> : <></>}
            {t("content14") != "About.content14" ? <> <p>{t("content14")}</p><h2></h2></> : <></>}
            <img src="./../images/Bolt_1.jpg" alt="" className="image featured basicimage" />
            <h2></h2>
            {t("content15") != "About.content15" ? <> <p className="bold">{t("content15")}</p><p></p></> : <></>}
            {t("content16") != "About.content16" ? <> <p className="bold">{t("content16")}</p></> : <></>}
          </header>
        </section>
      </section>
    </>
  );
}

export default Page;
