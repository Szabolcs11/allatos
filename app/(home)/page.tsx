import banner from "./../images/banner.jpg";
import pic2 from "./../images/pic02.jpg";
import pic3 from "./../images/pic03.jpg";

const Page = () => {
  return (
    <>
      <section id="banner">
        <h2>Vetservis</h2>
        <p>Mert az élet érték!</p>
      </section>

      <section id="main" className="container">
        <section className="box special">
          <header className="major">
            <h2>
              Introducing the ultimate mobile app
              <br />
              for doing stuff with your phone
            </h2>
            <p>
              Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare
              <br />
              adipiscing nunc adipiscing. Condimentum turpis massa.
            </p>
          </header>
          <span className="image featured">
            <img src={banner.src} alt="" />
          </span>
        </section>

        <section className="box special features">
          <div className="features-row">
            <section>
              <span className="icon solid major fa-bolt accent2"></span>
              <h3>Magna etiam</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum
                phasellus iaculis accumsan dolore magna aliquam veroeros.
              </p>
            </section>
            <section>
              <span className="icon solid major fa-chart-area accent3"></span>
              <h3>Ipsum dolor</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum
                phasellus iaculis accumsan dolore magna aliquam veroeros.
              </p>
            </section>
          </div>
          <div className="features-row">
            <section>
              <span className="icon solid major fa-cloud accent4"></span>
              <h3>Sed feugiat</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum
                phasellus iaculis accumsan dolore magna aliquam veroeros.
              </p>
            </section>
            <section>
              <span className="icon solid major fa-lock accent5"></span>
              <h3>Enim phasellus</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum
                phasellus iaculis accumsan dolore magna aliquam veroeros.
              </p>
            </section>
          </div>
        </section>

        <div className="row">
          <div className="col-6 col-12-narrower">
            <section className="box special">
              <span className="image featured">
                <img src={pic2.src} alt="" />
              </span>
              <h3>Sed lorem adipiscing</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum
                phasellus iaculis accumsan dolore magna aliquam veroeros.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#" className="button alt">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-6 col-12-narrower">
            <section className="box special">
              <span className="image featured">
                <img src={pic3.src} alt="" />
              </span>
              <h3>Accumsan integer</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum
                phasellus iaculis accumsan dolore magna aliquam veroeros.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#" className="button alt">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
