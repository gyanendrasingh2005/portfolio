import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SectionWrapper } from './components/ui/SectionWrapper';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { CASE_STUDIES } from './constants/caseStudies';
import { CaseStudyView } from './components/caseStudy/CaseStudyView';
import { ProblemSolving } from './components/problemSolving/ProblemSolving';
import { Leadership } from './components/leadership/Leadership';
import { Education } from './components/education/Education';
import { ContactSection } from './components/contact/ContactSection';

export const App: React.FC = () => {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  // Hash-based routing for dedicated deep-dive Case Studies
  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/case-study/')) {
        const id = hash.replace('#/case-study/', '').trim();
        if (CASE_STUDIES[id]) {
          setActiveCaseStudyId(id);
          return;
        }
      }
      setActiveCaseStudyId(null);
    };

    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, []);

  const handleOpenCaseStudy = (id: string) => {
    window.location.hash = `#/case-study/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    window.location.hash = '#work';
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        const headerOffset = 90;
        const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectCaseStudy = (id: string) => {
    window.location.hash = `#/case-study/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dedicated Route: Render Full Editorial Case Study View if active
  if (activeCaseStudyId && CASE_STUDIES[activeCaseStudyId]) {
    return (
      <CaseStudyView
        project={CASE_STUDIES[activeCaseStudyId]}
        onBack={handleBackToPortfolio}
        onSelectProject={handleSelectCaseStudy}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] text-[#f1eee8] relative selection:bg-[#ff8c59] selection:text-[#030303]">
      {/* Sarthak-Style Radial Mesh Ambient Backdrop */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 75% 25%, rgba(255, 140, 89, 0.05) 0%, transparent 45%), radial-gradient(circle at 20% 70%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      {/* 1. Floating Glass Navigation Header */}
      <Header />

      <main id="main-content" className="relative z-10 pt-20 md:pt-28">
        {/* 1. About Section (Primary Opening View) */}
        <section id="about" className="scroll-mt-24">
          <div id="top" />
          <SectionWrapper py="lg">
            <About />
          </SectionWrapper>
        </section>

        {/* 2. Selected Work / Projects (Browser Mockups) */}
        <section id="work" className="scroll-mt-24">
          <SectionWrapper py="lg">
            <Projects onOpenCaseStudy={handleOpenCaseStudy} />
          </SectionWrapper>
        </section>

        {/* 3. Algorithmic Rigor / Problem-Solving Profiles */}
        <section id="experience" className="scroll-mt-24">
          <div id="problem-solving" className="scroll-mt-24" />
          <SectionWrapper py="lg">
            <ProblemSolving />
          </SectionWrapper>
        </section>

        {/* 8. Leadership & Community Building (K3) */}
        <section id="leadership" className="scroll-mt-24">
          <SectionWrapper py="lg">
            <Leadership />
          </SectionWrapper>
        </section>

        {/* 9. Academic Foundation & Education */}
        <section id="education" className="scroll-mt-24">
          <SectionWrapper py="lg">
            <Education />
          </SectionWrapper>
        </section>

        {/* 10. Contact Section (Let's Talk) */}
        <section id="contact" className="scroll-mt-24">
          <SectionWrapper py="lg">
            <ContactSection />
          </SectionWrapper>
        </section>
      </main>

      {/* 12. Distinctive Brand Footer */}
      <Footer />
    </div>
  );
};

export default App;
