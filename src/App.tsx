import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Methodology from "./pages/Methodology";
import ROICalculator from "./pages/ROICalculator";
import UseCases from "./pages/UseCases";
import Integrations from "./pages/Integrations";
import Intro from "./pages/Intro";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";
import SmoothScroll from "./components/SmoothScroll";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <SmoothScroll />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Intro /></PageWrapper>} />
          <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/methodology" element={<PageWrapper><Methodology /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          <Route path="/roi-calculator" element={<PageWrapper><ROICalculator /></PageWrapper>} />
          <Route path="/use-cases" element={<PageWrapper><UseCases /></PageWrapper>} />
          <Route path="/integrations" element={<PageWrapper><Integrations /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
