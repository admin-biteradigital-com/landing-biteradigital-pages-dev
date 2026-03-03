import GridBackground    from "@/components/GridBackground";
import Nav              from "@/components/Nav";
import Hero             from "@/components/Hero";
import Services         from "@/components/Services";
import WhyBitera        from "@/components/WhyBitera";
import Certifications   from "@/components/Certifications";
import CTAFinal         from "@/components/CTAFinal";
import Footer           from "@/components/Footer";

export default function Home() {
  return (
    <>
      <GridBackground />
      <Nav />
      <main id="main">
        <Hero />
        <hr className="border-none h-px" style={{ background: "linear-gradient(90deg, transparent, #183355, transparent)" }} />
        <Services />
        <hr className="border-none h-px" style={{ background: "linear-gradient(90deg, transparent, #183355, transparent)" }} />
        <WhyBitera />
        <hr className="border-none h-px" style={{ background: "linear-gradient(90deg, transparent, #183355, transparent)" }} />
        <Certifications />
        <hr className="border-none h-px" style={{ background: "linear-gradient(90deg, transparent, #183355, transparent)" }} />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
