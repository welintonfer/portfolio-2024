import figma from "../../assets/img/skills/figma.svg";
import psd from "../../assets/img/skills/ps.svg";
import ai from "../../assets/img/skills/ai.svg";

import LightBg from "../../Components/LightBg";
import HeaderOne from "../../Components/HeaderOne";
import Footer from "../../Components/Footer";

import logo from "../../assets/img/helen/logo@2x.png";
import img01 from "../../assets/img/helen/helen-cover@2x.png";
import img02 from "../../assets/img/helen/persona@2x.png";
import img03 from "../../assets/img/helen/user-flow@2x.png";
import img04 from "../../assets/img/helen/checkout@2x.png";
import img05 from "../../assets/img/helen/ui01@2x.png";
import img06 from "../../assets/img/helen/ui02@2x.png";
import img07 from "../../assets/img/helen/ui03@2x.png";
// deletar abaixo
import img08 from "../../assets/img/eir/bottom-navigation.png";
import img09 from "../../assets/img/eir/vote-options.png";
import img10 from "../../assets/img/eir/streamlined-porting-flow.png";
import img11 from "../../assets/img/eir/material-ui-eir.png";

export default function HelenTurkington() {
  console.log("Renderizando Helen...");

  const skills = [
    {
      id: 1,
      logo: figma,
      alt: "Figma",
      color: "#1E1E1E",
      borderColor: "#2C2C2C",
      bg: "#fff",
    },
    {
      id: 2,
      logo: psd,
      alt: "Adobe Photoshop",
      color: "#080138",
      borderColor: "#5F97D7",
      bg: "#fff",
    },
    {
      id: 3,
      logo: ai,
      alt: "Adobe Illustrator",
      color: "#070401",
      borderColor: "#EDA741",
      bg: "#fff",
    },
  ];

  return (
    <>
      <LightBg />
      <HeaderOne />
      <main className="case-study-single">
        <section className="case-study-single__herocase">
          <img src={logo} alt="eir logo" />
          <div className="overview">
            <h1 className="h1">Project Overview</h1>
            <p>
              <strong>UX Visual brand design</strong>. It has been a great
              honour to collaborate with Helen Turkington, recognised as one of
              Ireland's leading interior designers, boasting an impressive
              portfolio of both national and international clients. With a
              career spanning over thirty years, Helen has contributed her
              expertise to some of the most prestigious properties in Ireland,
              the UK, Portugal, and beyond. She is consistently lauded by
              industry press as one of Ireland's most influential and well-known
              interior designers. I undertook the redesign with the goal of
              seamlessly reflecting Helen Turkington's brand on an e-commerce
              platform while preserving its distinctive visual concept.
            </p>
          </div>
        </section>
        <section className="case-study-single__design-process">
          <h2 className="h2">Design Process</h2>
          <p>
            Crafted a winning eCommerce model through collaborative innovation.
            Conducted UX discovery workshops to shape user personas and
            eCommerce functionality. Developed a tailored sitemap based on
            personas and user journeys. Multi-stage development with client
            input. Comprehensive training for staff on future content edits.
            Ensured a flawless live launch through rigorous QA.
          </p>
          <h3 className="h3">Design Toolkit</h3>
          <ul>
            {skills.map((skill) => (
              <li
                className="skill-icon"
                key={skill.id}
                style={{
                  backgroundColor: `${skill.bg}`,
                  boxShadow: `0.74519px 0.74519px 0px 0px ${skill.color}, 1.49038px 1.49038px 0px 0px ${skill.color}, 2.23558px 2.23558px 0px 0px ${skill.color}`,
                  border: `2px solid  ${skill.borderColor}`,
                }}
              >
                <img src={skill.logo} alt={skill.alt} />
              </li>
            ))}
          </ul>
        </section>
        <section className="case-study-single__content">
          <article className="sub-content">
            <h2 className="h2">
              Crafting Timeless Elegance: Navigating High-End User Experiences
              in UI/UX Design
            </h2>
            <p>
              In establishing Helen Turkington as a premier destination for
              interior design products in Ireland, we are dedicated to aligning
              our online presence with the esteemed reputation cultivated in our
              physical stores. Our overarching goals include not only
              reinforcing our commitment to quality but also strategically
              advancing our digital landscape to achieve the following:
            </p>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>Drive Online Sales and In-Store Traffic</strong>
                    :Elevate the online shopping experience, seamlessly guiding
                    users through a visually engaging platform that mirrors the
                    sophistication found in our physical spaces. The aim is to
                    increase both online sales and foot traffic to our stores.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      Enhance Advisory Role for Home Interior Enthusiasts
                    </strong>
                    : Transform our platform into an inviting hub for home
                    interior enthusiasts, offering valuable advice and insights.
                    This initiative seeks to position us as more than just a
                    retailer but also as a knowledgeable and trusted resource in
                    the interior design community.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Make a Bold Visual Statement</strong>: Reflecting
                    our brand's commitment to quality, we aspire to make a bold
                    visual statement online that resonates with our reputation
                    for delivering opulence and understated elegance. This
                    visual identity will not only reinforce our brand image but
                    also enhance the overall user experience.
                  </p>
                </li>
              </ul>
            </div>

            <img src={img01} alt="Helen Turkington Website" className="img1" />
            <p>
              By incorporating these strategic goals into our design approach,
              we aim to propel Helen Turkington to the forefront of Ireland's
              interior design landscape, both online and offline.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">Persona: Olivia Sterling</h2>
            <img src={img02} alt="Persona" className="img1" />
            <h2 className="h2">
              Helen Turkington Project: Elevating the Experience for Olivia
              Sterling
            </h2>
            <p>
              In our continuous pursuit to enhance our online presence and align
              with the reputation of excellence maintained in our physical
              stores, we acknowledge the importance of meeting the expectations
              of our discerning audience, represented by personas such as Olivia
              Sterling.
            </p>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>
                      1. Focus on Seamless Online and Offline Shopping
                      Experience
                    </strong>
                    We seek a seamless transition between the online experience
                    and in-store visits, ensuring that Olivia and similar
                    customers have a consistent and efficient journey.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. Personalisation and Uniqueness</strong>: We value
                    individuality. Our project aims to offer{" "}
                    <strong>personalised</strong>
                    options, allowing users like Olivia to tailor their space to
                    the distinctive style of Helen Turkington
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      3. Emphasis on Design Inspiration and Advice
                    </strong>
                    : Our online platform will be a continuous source of
                    inspiration, providing Olivia with valuable advice and
                    insights into the latest trends in interior design.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>4. Facilitating Product Visualisation</strong>: We
                    will implement innovative tools to assist Olivia in
                    visualising products in her space, integrating augmented
                    reality features and detailed visualisations.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>5. Clear Communication of Brand Identity</strong>:
                    We respect your time. That's why every notification is
                    time-stamped, so you know precisely when it arrived. For
                    example, "Today at 9:42 AM." This allows you to prioritise
                    and respond as needed, without the stress of uncertainty.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>6. Offering Value-Driven Content</strong>: Our
                    website will not only be a transactional platform but also
                    an informative and inspiring resource. Additional content,
                    such as blogs and practical guides, will add value to
                    Olivia's experience.
                  </p>
                </li>
              </ul>
            </div>
            <p>
              By embracing these principles, our goal is to create a user
              experience that not only meets but exceeds the expectations of
              customers like Olivia Sterling, making Helen Turkington the
              ultimate choice for those seeking sophistication and excellence in
              interior design.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">
              Optimising User Flow: Insights from Card Sorting Workshop
            </h2>
            <p>
              Our recent workshop, anchored by activities like card sorting,
              played a pivotal role in refining the user flow on the Helen
              Turkington platform. Through collaborative card sorting exercises,
              we gained crucial insights into user mental models, guiding the
              strategic placement of products within their respective
              categories.
            </p>
            <img src={img03} alt="User Flow" className="img1" />
            <p>
              This hands-on approach ensures an intuitive and user-centric
              product categorization, aligning seamlessly with our audience's
              preferences. The workshop's impact extends beyond organization; it
              fuels informed design decisions, creating a digital environment
              that mirrors the sophistication and elegance of the Helen
              Turkington brand.
            </p>
            <p>
              In the ever-evolving UI/UX landscape, workshops like these are
              instrumental, ensuring our design decisions are user-focused and
              contribute to an enhanced and seamless user experience.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">
              UX Smart Checkout: Elevating Your Mobile Shopping Experience
            </h2>
            <p>
              Indulge in the epitome of shopping sophistication with our UX
              Smart Checkout, meticulously crafted for a seamless and delightful
              mobile experience. Your journey begins on a sleek product page,
              where each item is showcased with elegance and clarity.
            </p>

            <p>
              As you effortlessly add chosen products to your cart, the
              minimalist design ensures a visually pleasing and user-friendly
              interaction. Navigate to the Cart page, a digital canvas that
              maintains a sophisticated aesthetic while providing comprehensive
              details about your curated selections.
            </p>

            <p>
              When it's time to finalize your choices, our Smart Checkout
              beckons. The process is not merely transactional; it's a symphony
              of usability and style. Sign in with ease on a page designed for
              swift and secure access, enhancing your personalized journey.
            </p>

            <p>
              Choose your preferred shipping option—whether it's the convenience
              of doorstep delivery or the luxury of picking up your treasures at
              our store. The interface adapts to your desires, reflecting a
              commitment to convenience and flexibility.
            </p>

            <p>
              As you glide through the payment process, a secure and seamless
              transaction unfolds. The design ensures trust, providing a
              reassuring touchpoint in your shopping expedition. Finally, the
              Order Confirmation page elegantly seals the deal, leaving you with
              the satisfaction of a successful and stylish transaction.
            </p>

            <p>
              Our UX Smart Checkout is more than a process; it's an experience
              tailored to your desires, reflecting the hallmark of Helen
              Turkington's luxurious interior design. Welcome to a world where
              convenience meets sophistication, all at your fingertips
            </p>

            <img src={img04} alt="Smart Checkout" className="img1" />

            <p>
              Our UX Smart Checkout is more than a process; it's an experience
              tailored to your desires, reflecting the hallmark of Helen
              Turkington's luxurious interior design. Welcome to a world where
              convenience meets sophistication, all at your fingertips
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">
              Elevating Design Experience: Sophisticated Elements for Helen
              Turkington
            </h2>
            <p>
              Our design journey for Helen Turkington is a meticulous fusion of
              Helen's work profile and Olivia Sterling's demographic
              preferences. Each screenshot, intricately crafted, reflects the
              timeless elegance that characterises luxury interior design.
            </p>
            <img
              src={img05}
              alt="Elevating Design Experience: Sophisticated Elements for Helen
              Turkington"
              className="img1"
            />
            <p>
              <strong>Tailored Inspiration for Olivia</strong>: The screenshots
              are more than visual elements; they are a visual narrative that
              speaks directly to Olivia's profile. From Helen's signature design
              to seasonal inspirations, each image is a statement of how design
              can transform a space, providing a welcoming and sophisticated
              feel.
            </p>
            <p>
              <strong>Brand Elements Infused with Meaning</strong>: Every pixel
              is laden with the essence of the Helen Turkington brand. The
              colour palette, with subtle and timeless tones, reflects a
              commitment to elegance. Graphic elements, from typography to
              layout disposition, follow the minimalist aesthetic, offering a
              clear and engaging visual experience.
            </p>

            <img
              src={img06}
              alt="Brand Elements Infused with Meaning"
              className="img1"
            />
            <p>
              <strong>Connecting Design to Demographics</strong>: Considering
              Olivia's demographic profile, we've incorporated elements that
              transcend mere aesthetics. From practical outdoor solutions to
              functional kitchen design suggestions, each screenshot is a bridge
              between the desired design and Olivia's practical life.
            </p>
            <p>
              <strong>Connecting Design to Demographics</strong>: The interface
              is not just a means of interaction; it's an extension of Helen
              Turkington's commitment to transforming spaces. Every detail, from
              style guides to checkout interactions, is an opportunity to
              provide Olivia with a seamless and enchanting journey.
            </p>
            <img
              src={img07}
              alt="Connecting Design to Demographics"
              className="img1"
            />
            <p>
              These discussions and decisions formed the foundation of our user
              interface (UI) design, ensuring a seamless, intuitive, and
              user-centric navigation structure that reflects our dedication to
              an enhanced user experience.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">In Summary</h2>
            <p>
              These screenshots are more than a visual representation; they are
              the materialization of Helen Turkington's vision in a digital
              world. By infusing sophisticated elements and meticulously
              considering Olivia's profile, we aim to create a design experience
              that goes beyond aesthetics, emotionally connecting with those who
              seek beauty and functionality in every detail of home.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
