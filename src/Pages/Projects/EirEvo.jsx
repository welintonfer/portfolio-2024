import figma from "../../assets/img/skills/figma.svg";
import psd from "../../assets/img/skills/ps.svg";
import ai from "../../assets/img/skills/ai.svg";

import LightBg from "../../Components/LightBg";
import HeaderOne from "../../Components/HeaderOne";
import Footer from "../../Components/Footer";

import logo from "../../assets/img/eir/eir-logo@2x.png";
import img01 from "../../assets/img/eir/01@2x.png";
import img02 from "../../assets/img/eir/02@2x.png";
import img03 from "../../assets/img/eir/register-flow@2x.png";
import img04 from "../../assets/img/eir/notification-centre.png";
import img05 from "../../assets/img/eir/notification-centre-mobile.png";
import img06 from "../../assets/img/eir/user-flow-map.png";
import img07 from "../../assets/img/eir/workshop.png";
import img08 from "../../assets/img/eir/bottom-navigation.png";
import img09 from "../../assets/img/eir/vote-options.png";
import img10 from "../../assets/img/eir/streamlined-porting-flow.png";
import img11 from "../../assets/img/eir/material-ui-eir.png";

import ScrollToTopOnMount from "../../Components/KeepTopPosition";

export default function EirEvo() {
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
      <ScrollToTopOnMount />
      <LightBg />
      <HeaderOne />
      <main className="case-study-single">
        <section className="case-study-single__herocase">
          <img src={logo} alt="eir logo" />
          <div className="overview">
            <h1 className="h1">Project Overview</h1>
            <p>
              <strong>Eir's UX Evolution: Embracing SaaS at version 1.0</strong>
              . Welcome to Eir's user-centric innovation. I'm Wellington
              Alexander, your Lead Product Designer, and we're on a
              transformative journey. I'm architecting a dynamic, delightful
              onboarding experience that embodies the Software as a Service
              (SaaS) culture. Together, we're elevating your interaction with
              Eir, redefining the telecom journey with seamless,
              customer-centric experiences that align with the latest UX design
              paradigms. Join me on this exciting SaaS-driven adventure!
            </p>
          </div>
        </section>
        <section className="case-study-single__design-process">
          <h2 className="h2">Design Process</h2>
          <p>
            I used a 5-stage Design Thinking model proposed by the Hasso
            Plattner Institute of Design at Stanford (the "d. school"). The
            stages of this Design Thinking process are as follows:1. Empathise,
            2. Define, 3. Ideate, 4. Prototype, 5. Test.
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
              Revolutionising Eir's Onboarding for a Seamless User Journey
            </h2>
            <p>
              Onboarding is more than a welcome mat; it's a transformative force
              in UX design. For a SaaS platform like Eir, it's the engine of
              innovation. It's not just about setup; it's a leap into a world of
              user-centric digital experiences.
            </p>
            <p>
              Consider a user launching Eir's app. It's not just an interface;
              it's an overture. The Eir logo, a warm "Welcome," and a "Get
              Started" call-to-action signal simplicity and user-friendliness.
              But onboarding is more. It builds trust, empowers users, and
              reveals how Eir makes managing services effortless. From finances
              to account settings and bill management, it's the gateway to a
              brighter digital future.
            </p>
            <p>
              At its core is a thriving SaaS culture. It's about crafting
              dynamic, delightful, and convenient experiences. Led by Product
              Designer Wellington Alexander, Eir embraces the latest UX design
              paradigms.
            </p>
            <img src={img01} alt="01" className="img1" />
            <p>
              Now, let's delve into the mastery of influencing users through
              onboarding, making their journey smoother and more seamless than
              ever before.
            </p>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>User Empowerment</strong>: Onboarding isn't a static
                    process but a vehicle for empowerment. It equips users with
                    the knowledge and tools they need to navigate the platform
                    with confidence.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Seamless Experience</strong>: Onboarding is the
                    compass guiding users through their journey. It's not a mere
                    setup; it's a deliberate strategy to ensure every
                    interaction is intuitive and effortless.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Trust and Assurance</strong>: Building trust is a
                    cornerstone of UX design. Through onboarding, trust is
                    cultivated, making users feel secure and confident in their
                    interactions with the platform.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Trust and Assurance</strong>: Building trust is a
                    cornerstone of UX design. Through onboarding, trust is
                    cultivated, making users feel secure and confident in their
                    interactions with the platform.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Simplified Engagement</strong>: Onboarding
                    simplifies the complex, making sure that users can interact
                    with Eir's services in a straightforward and user-friendly
                    way.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Setting the Tone</strong>: The onboarding process
                    establishes the user's mindset for the entire journey. It's
                    not just an introduction; it's a declaration of a commitment
                    to a seamless, user-focused experience.
                  </p>
                </li>
              </ul>
            </div>

            <img src={img02} alt="01" className="img1" />
            <p>
              Incorporating these principles in your UX design is not just a
              challenge; it's a game-changing approach. It represents the
              solution to a problem, the transformation of an onboarding process
              that once posed hurdles into one that now creates a fluid,
              user-centric journey. It's a testament to your ability to
              architect dynamic and delightful experiences, turning a UX
              challenge into a game-changing success story for Eir.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">
              Celebrating User-Centric Innovation: Navigating Legacy Systems
              with Grace
            </h2>
            <p>
              In our pursuit of optimizing the user experience, we encountered a
              scenario with our login system that mirrors the previous database
              distinction challenge, albeit with some nuances. It's imperative
              to address even the minutest hindrances stemming from legacy
              systems, all in the spirit of a seamless and user-centric
              experience.
            </p>
            <p>
              Our ingenuity led us to devise a robust solution that not only
              preserves data integrity but also ensures uninterrupted access to
              our platform. This underscores our unwavering commitment to
              user-centric design.
            </p>
            <p>
              In our ongoing mission to provide flexibility and convenience,
              we've introduced two distinct registration methods, each designed
              to cater to diverse user preferences. Our users can now register
              via email or mobile number, empowering them to choose the option
              that suits them best. This approach grants users the freedom to
              seamlessly engage with our platform, ushering in a new era of
              flexibility and accessibility.
            </p>
            <img src={img03} alt="Register Flow" className="img1" />
            <p>
              By combining the power of thoughtful UX design and the flexibility
              of dual registration options, we are poised to offer an
              exceptional user experience that adapts to individual needs. It's
              a testament to our dedication to overcoming hurdles while
              enriching our users' interactions with our platform.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">
              Notification Center: Your Gateway to Seamlessness
            </h2>
            <p>
              In a world driven by connectivity and innovation, the Notification
              Center within Eir's SaaS platform stands as the cornerstone of our
              user-centric approach. It's not just about delivering information;
              it's about crafting an experience that empowers you to navigate
              your digital world with ease.
            </p>
            <img src={img04} alt="Notification Center" className="img1" />
            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>Notification Options</strong>: We understand that
                    not all notifications are created equal. In the Notification
                    Center, you have the freedom to choose how you wish to be
                    notified. With options like "All," "Unread," and "Unseen,"
                    you're in control. Whether you want to see everything at
                    once or focus on the most recent updates, it's your choice.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Mark All as Read</strong>: To streamline your
                    experience, we've included a "Mark all as read" feature. No
                    need to go through each notification individually – a single
                    click, and you're back to an organised slate. It's
                    simplicity at your fingertips.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>A Scrolling List</strong>: Notifications should be
                    effortless to navigate. In our Notification Center, you'll
                    find a scrolling list that displays your messages in a clean
                    and organized fashion. No more clutter or confusion; you can
                    quickly scroll through your notifications and find what you
                    need.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Empowering Actions</strong>: We believe in putting
                    you in the driver's seat. Every notification comes with a
                    primary call-to-action, such as "update," enabling you to
                    take immediate action. However, we also understand that
                    choices matter. That's why we provide a secondary
                    call-to-action, like "Cancel move," ensuring you have
                    options that align with your needs.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Timely Updates</strong>: We respect your time.
                    That's why every notification is time-stamped, so you know
                    precisely when it arrived. For example, "Today at 9:42 AM."
                    This allows you to prioritise and respond as needed, without
                    the stress of uncertainty.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mobile-screen-port-col">
              <p>
                The Notification Center is not just a feature; it's a testament
                to our commitment to delivering a user experience that empowers
                and informs. It's the gateway to your digital world, keeping you
                in control, organized, and informed at every step. At Eir, we
                don't just notify; we elevate your interaction with our
                services, ensuring that you can seamlessly manage your telecom
                needs. It's a dynamic, user-centric journey that's at the heart
                of our SaaS culture.
              </p>
              <img
                src={img05}
                alt="Notification Center Mobile"
                className="screen-img"
              />
            </div>
          </article>
          <article className="sub-content">
            <h2 className="h2">User Flow</h2>
            <p>
              I crafted a User Flow for eir's SaaS, which serves a dual purpose
              as both design documentation and a resource for the development
              team.
            </p>
            <img src={img06} alt="User Flow" className="img1" />
            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>Problem Identification</strong>: While mapping the
                    eir User Flow, I uncovered obstacles, pain points, and areas
                    of friction in the user journey, such as dead-end pages or
                    loops. This aids in optimising the design, eliminating
                    barriers, and crafting a smoother experience.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Problem Identification</strong>: While mapping the
                    eir User Flow, I uncovered obstacles, pain points, and areas
                    of friction in the user journey, such as dead-end pages or
                    loops. This aids in optimising the design, eliminating
                    barriers, and crafting a smoother experience.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Enhancing Usability</strong>: One of the significant
                    challenges faced in this project was comprehending the paths
                    users navigate within the product, which aids in creating a
                    more intuitive interface. Grounded in solid A/B testing
                    data, it empowered me to make informed decisions regarding
                    the arrangement of on-screen elements and navigation to
                    facilitate user interaction.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Continuous Optimisation</strong>: Ongoing monitoring
                    and analysis of User Flows post-product launch have allowed
                    for the identification of areas in need of improvement. This
                    contributes to the continuous optimisation of the user
                    experience, ensuring the product remains relevant and
                    effective over time.
                  </p>
                </li>
              </ul>
            </div>
            <p>
              As for the image placement, you can include an image in the
              "Understanding the User Journey" section to visually represent a
              portion of the User Flow, providing a visual aid for the reader.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">Workshop: Card Sorting</h2>
            <p>
              To enhance the navigation experience, a workshop was conducted
              utilizing the Card Sorting technique. In this workshop, a set of
              cards representing various features of our SaaS platform was
              prepared. The workshop brought together cross-functional teams,
              including members from marketing, design, and development, to
              collaboratively organize these cards into logical groups or
              categories that made sense to them.
            </p>
            <img src={img07} alt="Workshop: Card Sorting" className="img1" />
            <p>
              Participants were encouraged to arrange the cards into groups
              based on the logic they deemed most suitable. This process was
              instrumental in shaping the navigation structure of the
              application.
            </p>
            <p>
              Throughout the workshop, lively discussions were encouraged among
              the participants. They were asked to articulate the rationale
              behind their card groupings, and valuable insights were recorded.
              Subsequently, an in-depth analysis of the collected data was
              conducted to identify emerging patterns and trends. This analysis
              will serve as a foundation for informing the design of the
              application's navigation.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">Bottom Navigation</h2>
            <p>
              Based on these insights from our Card Sorting workshop, we arrived
              at a refined site map that includes key navigation elements:
              'Bill,' 'Services,' 'Home,' 'Offers,' and 'Help.' These choices
              represent the collective wisdom of our cross-functional teams,
              including members from marketing, design, and development, who
              collaboratively organized these elements into logical groups that
              resonated with our user-centric approach.
            </p>
            <img src={img08} alt="Bottom Navigation" className="img1" />
            <p>
              The workshop discussions were lively, as we deliberated over each
              element's placement within the UI. Participants voiced their
              thoughts on the best positioning, with phrases like 'Services
              should be easy to find, that's what our customers need!'
              emphasizing the user-centric perspective. 'Bill on the menu is
              very important to our clients' further validated the decision.
            </p>
            <p>
              The debate continued with considerations about 'Home,' the heart
              of the app, and 'Help,' the ever-reliable guiding hand for users.
              'Offers' presented an exciting opportunity, with our team
              pondering the ideal spot to showcase these promotions. 'Think
              about what you'd click first; it's Bill for me!' captured the
              essence of our thoughtful deliberations.
            </p>
            <p>
              'Services - where do you expect to see it? Share your thoughts'
              spurred valuable insights, while 'Bill or Home? Let's decide which
              comes first!' reflected our commitment to a user-focused
              experience. 'Help is essential; where's its home in the menu?'
              summed up the importance of accessible support.
            </p>
            <img src={img09} alt="Vote" className="img1" />
            <p>
              These discussions and decisions formed the foundation of our user
              interface (UI) design, ensuring a seamless, intuitive, and
              user-centric navigation structure that reflects our dedication to
              an enhanced user experience.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">
              Streamlined Porting: Enhancing the User Experience for Seamless
              Transition
            </h2>
            <p>
              At Eir, as a leading telecom and broadband provider, data security
              for our customers is a paramount concern. Given the ever-evolving
              technological landscape, I embarked on a challenge: to condense
              the user journey for number portability into just three essential
              steps. This streamlined process ensures a seamless and secure
              transition for our users.
            </p>
            <p>
              As part of this effort, we're introducing a new feature called
              'Register.' This feature is designed to segregate users with
              distinct databases, addressing certain temporary limitations
              intelligently.
            </p>
            <p>
              In the context of the 'Register' feature, we'll present a series
              of mockups showcasing three crucial steps to facilitate the
              portability process for our users:
            </p>
            <div className="list">
              <ul>
                <li>
                  <p>
                    1. <strong>Validate Number</strong>: In this initial step,
                    users will validate their mobile numbers, ensuring that they
                    are eligible for the portability process. This step is
                    designed to verify the user's current phone number's status.
                  </p>
                </li>
                <li>
                  <p>
                    2. <strong>Input Account Info</strong>: The second step
                    involves users providing essential account information. This
                    input is crucial for a smooth transition and ensures that
                    their new account will be seamlessly integrated with our
                    services
                  </p>
                </li>
                <li>
                  <p>
                    3. <strong>Schedule Move</strong>: The final step empowers
                    users to schedule the actual number move. This step allows
                    users to pick a suitable date and time for the transition,
                    providing them with the flexibility and convenience they
                    deserve.
                  </p>
                </li>
              </ul>
            </div>
            <img src={img10} alt="Streamlined Porting Flow" className="img1" />
            <p>
              These mockups and steps underscore our commitment to delivering a
              secure, user-friendly experience while overcoming temporary
              challenges. They represent our dedication to providing top-notch
              services to our valued customers.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">
              Unlocking User-Centric Brilliance: A Design System Journey with
              Material UI
            </h2>
            <p>
              In the ever-evolving landscape of UX design, we embarked on a
              transformative journey to create a Design System that would not
              only streamline our design processes but also elevate our user
              experience to new heights. Our destination? An interface that
              resonates with finesse, a harmonious marriage of beauty and
              functionality.
            </p>
            <p>
              With a commitment to user-centric design, we recognized the
              paramount importance of a stellar Design System. It's the North
              Star guiding our design endeavors, ensuring consistency,
              efficiency, and, most importantly, a design that truly speaks to
              our users.
            </p>
            <p>
              Our journey is fueled by Material UI, a versatile and dynamic UI
              framework, harmoniously bridging the worlds of Figma and React on
              the front-end. This dynamic synergy offers the best of both
              worlds: the pixel-perfect precision of Figma's design tools and
              the fluid responsiveness of React's front-end capabilities. This
              union translates into seamless transitions from design to
              implementation, allowing us to craft a user interface that oozes
              fidelity and agility.
            </p>
            <p>
              The power of Material UI lies in its adaptability and scalability.
              It empowers us to infuse our designs with the life and vibrancy
              our users deserve. The reusable components and design patterns
              within Material UI ensure that our interface is not just beautiful
              but also highly functional and responsive.
            </p>
            <p>
              In this case study snippet, we unravel the profound impact of our
              Design System journey, offering a glimpse into the mechanics that
              power our interface's elegance and efficiency. Our commitment to
              user-centric brilliance is at the heart of every pixel, every
              component, and every interaction.
            </p>
            <img
              src={img11}
              alt="A Design System Journey with
              Material UI"
              className="img1"
            />
            <p>
              Join us as we journey through the world of Design Systems, where
              creativity meets structure, and where user-centricity reigns
              supreme. Our voyage is a testament to our unwavering dedication to
              creating an exceptional user experience, one pixel at a time.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">Conclusion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              tempora dolores, odio, nesciunt ex asperiores qui ipsa dicta
              obcaecati, sequi libero corrupti accusamus magni molestiae
              exercitationem. Iure sunt delectus fugiat.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
