import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SampleLead from "@/components/SampleLead";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <SampleLead />
      <SocialProof />
      <FAQ />
      <SignupForm />
      <Footer />
    </main>
  );
}
