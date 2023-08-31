import { useState } from "react";
import { slides } from "./data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide() {
    let newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  }

  function nextSlide() {
    let newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }
  return (
    <section className="testimonial section">
      <div className="testimonial__slider">
        <div className="slider__wrapper">
          {slides?.map((slide, idx) => {
            const { id, quote, description, date, name, detail, image } = slide;

            let position = "next-slide";
            if (idx === currentSlide) {
              position = "active-slide";
            } else if (
              idx === currentSlide - 1 ||
              (currentSlide === 0 && idx === slides.length - 1)
            ) {
              position = "prev-slide";
            }

            return (
              <figure className={`testimonial__slide ${position}`} key={id}>
                <div className="testimonial__slide-content">
                  <img
                    src={quote}
                    alt="quote icon"
                    color={"#f2f2f2"}
                    width={30}
                    height={30}
                  />
                  <p className="testimonial__description">{description}</p>
                  <span className="testimonial__date">{date}</span>
                  <div className="testimonial__profile">
                    <h3 className="testimonial__profile-name">{name}</h3>
                    <span className="testimonial__profile-detail">
                      {detail}
                    </span>
                  </div>
                </div>
                <img
                  src={image}
                  alt="testimonial slide pic"
                  className="testimonial__slide-img"
                />
              </figure>
            );
          })}
        </div>
      </div>
      <button className="slider__button-prev" onClick={prevSlide}>
        <FaArrowAltCircleLeft size={40} />
      </button>
      <button className="slider__button-next" onClick={nextSlide}>
        <FaArrowAltCircleRight size={40} />
      </button>
    </section>
  );
}
