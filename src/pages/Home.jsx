import Button from "../components/Button";

export default function Home() {
  return (
    <section className="home">
      <div className="home__container grid">
        <div className="cube__container">
          <div className="cube">
            <div className="face front">
              <img
                src="/images/home-pic2.jpg"
                alt="home background pic"
                className="home__img"
              />
            </div>
            <div className="face back">
              <img
                src="/images/home-pic2.jpg"
                alt="home background pic"
                className="home__img"
              />
            </div>
            <div className="face right">
              <img
                src="/images/home-pic.jpg"
                alt="home background pic"
                className="home__img"
              />
            </div>
            <div className="face left">
              <img
                src="/images/home-pic2.jpg"
                alt="home background pic"
                className="home__img"
              />
            </div>
            <div className="face top">
              <img
                src="/images/home-pic.jpg"
                alt="home background pic"
                className="home__img"
              />
            </div>
            <div className="face bottom">
              <img
                src="/images/home-pic2.jpg"
                alt="home background pic"
                className="home__img"
              />
            </div>
          </div>
        </div>
        {/* <div className="home__boot">
          <div className="home__overlay">
            <img
              src="/images/home-pic.png"
              alt="home background pic"
              className="home__img"
            />
          </div>
        </div> */}
        <div className="home__data">
          <span className="home__new">new in</span>
          <h1>crazy</h1>
          <h1>dr martensNS boots</h1>
          <p className="home__description">
            Explore new collection of dr Martens boots
          </p>
          <div>
            <a
              href="https://www.drmartens.com/ca/en_ca/"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="button" text="explore" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
