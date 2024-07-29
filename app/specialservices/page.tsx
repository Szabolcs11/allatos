import React from 'react'

function page() {
  return (
    <>
    <section id="banner">
        <h2>Speciális Szolgáltatásaink</h2>
        <p>Büszkék vagyunk hogy alternatív megoldásokkal segíthetjük pácienseink gyógyulását!</p>
      </section>

      <section id="main" className="container">
        <section className="box special">
          <header className="major">
            <h2></h2>
            {/* <p style="border-top: none; margin-top: 0"> */}
            <p style={{borderTop: 'none', marginTop: 0}}>
              Nehezen gyógyuló eseteket homeopátiás módszerrel hatékonyan oldottuk meg az elmúlt húsz év során.
            </p>
            <h2></h2>
            <p style={{borderTop: 'none', marginTop: 0}}>
              A lógyógyászat terén megfelelő box-ban történő elhelyezést tudunk biztosítani a folyamatos és pontos
              gyógyítás vagy megtermékenyítés érdekében. Szaporodás biológus és lógyógyász specialista állatorvosaink
              Európai szinvonalú ellátást biztosítanak pácienseinknek. Speciális vérvonalú lovaknak mesterséges
              megtermékenyítést végzünk.
            </p>
          </header>
        </section>
      </section>
    </>
  )
}

export default page