import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Skills from "./components/Skills";
import AboutPreview from "./components/AboutPreview";
import ContactPreview from "./components/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Skills />
      <AboutPreview />
      <ContactPreview />
    </>
  );
}
