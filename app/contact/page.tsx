"use client";

function page() {
  return (
    <section id="main" className="container">
      <header>
        <h2>Kontakt</h2>
        <p>Tell us what you think about our little operation.</p>
      </header>
      <div className="box">
        <section className="openat">
          <h1>Nyitvatartás:</h1>
          <p>Hétfő: 7:00 - 15:00</p>
          <p>Kedd: 7:00 - 15:00</p>
          <p>Szerda: 7:00 - 15:00</p>
          <p>Csütörtök: 7:00 - 15:00</p>
          <p>Péntek: 7:00 - 15:00</p>
          <p>Szombat: 7:00 - 12:00</p>
          <p>Vasárnap: Zárva</p>
        </section>
        <section className="contact-info">
          Ügyeletes telefonszám: <a href="tel:0647150100">063 7 150 100</a>
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
      </div>
    </section>
  );
}

export default page;
