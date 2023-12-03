import arrow from "../assets/img/graphics/arrow.svg";
import dots from "../assets/img/graphics/dots.svg";
import draft from "../assets/img/graphics/draft.svg";
import globo from "../assets/img/graphics/globo.svg";
import plus from "../assets/img/graphics/plus.svg";
import star from "../assets/img/graphics/star.svg";
import ContactLabelInput from "./ContactLabelInput";

const ContactLabel = () => {
  return (
    <>
      <section id="contact" className="contact-label">
        <article>
          <img className="arrow" src={arrow} alt="arrow" />
          <img className="dots" src={dots} alt="dots" />
          <img className="draft" src={draft} alt="draft" />
          <img className="globo" src={globo} alt="globo" />
          <img className="plus" src={plus} alt="plus" />
          <img className="star" src={star} alt="star" />
          <div className="top-bar">
            <div className="left-buttons">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
          </div>
          <div className="content">
            <h2 className="h2">Crafting Experiences That Captivate ✨</h2>
            <p>
              {`Experienced UX/UI Designer with 13+ years, specializing in product design, UI/UX, and front-end development. Proven track record of impactful projects with 20-45% engagement rates. Let's innovate together!`}
            </p>

            <ContactLabelInput />
          </div>
        </article>
      </section>
    </>
  );
};

export default ContactLabel;
