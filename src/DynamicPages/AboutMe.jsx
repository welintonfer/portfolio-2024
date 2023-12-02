import LightBg from "../Components/LightBg";
import HeaderOne from "../Components/HeaderOne";
import Footer from "../Components/Footer";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

export default function AboutMe() {
  return (
    <>
      <ScrollToTopOnMount />
      <LightBg />
      <HeaderOne />
      <h1>About Me</h1>
      <Footer />
    </>
  );
}
