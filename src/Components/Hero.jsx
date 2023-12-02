import HeroImg from "./HeroImg";
import profilePic from "../assets/img/avatarImg@2x.png";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__avatar">
          <img src={profilePic} alt="Wellington Alexander" />
          <p className="hello">{`Hi, I'm Ton 👋`}</p>
        </div>
        <div className="hero__content">
          <h1 className="display-1">
            From Web Designer to <span className="ux-expert">UX Expert</span>{" "}
            and Back to Front-end
          </h1>
        </div>
        <HeroImg />
      </div>
    </>
  );
}
