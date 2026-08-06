import Navbar from '../components/landing/Navbar';
import CircuitLines from '../components/landing/CircuitLines';
import HeroSection from '../components/landing/HeroSection';
import MolecularDetail from '../components/landing/MolecularDetail';
import ProblemSolution from '../components/landing/ProblemSolution';
import ProcessFlow from '../components/landing/ProcessFlow';
import InquiryForm from '../components/landing/InquiryForm';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CircuitLines />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <MolecularDetail />
        <ProcessFlow />
        <ProblemSolution />
<InquiryForm />
      </main>
      <Footer />
    </div>
  );
}