import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SettingsProvider } from './contexts/SettingsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/* ── Lazy-loaded pages (code splitting — ~80% smaller initial bundle) ── */
const Home               = lazy(() => import('./pages/Home'));
const TDEECalculator     = lazy(() => import('./pages/calculators/TDEE'));
const BMICalculator      = lazy(() => import('./pages/calculators/BMI'));
const MacroCalculator    = lazy(() => import('./pages/calculators/Macros'));
const CalorieDeficit     = lazy(() => import('./pages/calculators/CalorieDeficit'));
const IdealWeight        = lazy(() => import('./pages/calculators/IdealWeight'));
const BodyFat            = lazy(() => import('./pages/calculators/BodyFat'));
const ProteinCalculator  = lazy(() => import('./pages/calculators/ProteinCalculator'));
const WeightLossTimeline = lazy(() => import('./pages/calculators/WeightLossTimeline'));
const WaterIntake        = lazy(() => import('./pages/calculators/WaterIntake'));
const OneRepMax          = lazy(() => import('./pages/calculators/OneRepMax'));
const PregnancyWeightGain= lazy(() => import('./pages/calculators/PregnancyWeightGain'));
const LeanBodyMass       = lazy(() => import('./pages/calculators/LeanBodyMass'));
const ArmyBodyFat        = lazy(() => import('./pages/calculators/ArmyBodyFat'));
const KetoMacro          = lazy(() => import('./pages/calculators/KetoMacro'));

const CalorieCalculator  = lazy(() => import('./pages/calculators/CalorieCalculator'));
const BMRCalculator      = lazy(() => import('./pages/calculators/BMRCalculator'));
const PaceCalculator     = lazy(() => import('./pages/calculators/PaceCalculator'));
const HealthyWeightCalculator = lazy(() => import('./pages/calculators/HealthyWeightCalculator'));
const CaloriesBurnedCalculator= lazy(() => import('./pages/calculators/CaloriesBurnedCalculator'));
const TargetHeartRateCalculator= lazy(() => import('./pages/calculators/TargetHeartRateCalculator'));
const PregnancyCalculator= lazy(() => import('./pages/calculators/PregnancyCalculator'));
const PregnancyConceptionCalculator = lazy(() => import('./pages/calculators/PregnancyConceptionCalculator'));
const DueDateCalculator  = lazy(() => import('./pages/calculators/DueDateCalculator'));
const OvulationCalculator= lazy(() => import('./pages/calculators/OvulationCalculator'));
const ConceptionCalculator= lazy(() => import('./pages/calculators/ConceptionCalculator'));
const PeriodCalculator   = lazy(() => import('./pages/calculators/PeriodCalculator'));
const CarbohydrateCalculator = lazy(() => import('./pages/calculators/CarbohydrateCalculator'));
const FatIntakeCalculator= lazy(() => import('./pages/calculators/FatIntakeCalculator'));
const GFRCalculator      = lazy(() => import('./pages/calculators/GFRCalculator'));
const BodyTypeCalculator = lazy(() => import('./pages/calculators/BodyTypeCalculator'));
const BodySurfaceAreaCalculator = lazy(() => import('./pages/calculators/BodySurfaceAreaCalculator'));
const BACCalculator      = lazy(() => import('./pages/calculators/BACCalculator'));
const BlogIndex          = lazy(() => import('./pages/Blog').then(m => ({ default: m.BlogIndex })));
const BlogPostComp       = lazy(() => import('./pages/Blog').then(m => ({ default: m.BlogPost })));
const About              = lazy(() => import('./pages/StaticPages').then(m => ({ default: m.About })));
const Privacy            = lazy(() => import('./pages/StaticPages').then(m => ({ default: m.Privacy })));
const Terms              = lazy(() => import('./pages/StaticPages').then(m => ({ default: m.Terms })));
const Disclaimer         = lazy(() => import('./pages/StaticPages').then(m => ({ default: m.Disclaimer })));
const Contact            = lazy(() => import('./pages/StaticPages').then(m => ({ default: m.Contact })));
const TDEEUs             = lazy(() => import('./pages/CountryPages').then(m => ({ default: m.TDEEUs })));
const TDEEUk             = lazy(() => import('./pages/CountryPages').then(m => ({ default: m.TDEEUk })));
const TDEECanada         = lazy(() => import('./pages/CountryPages').then(m => ({ default: m.TDEECanada })));
const TDEEAustralia      = lazy(() => import('./pages/CountryPages').then(m => ({ default: m.TDEEAustralia })));
const TDEEUA             = lazy(() => import('./pages/CountryPages').then(m => ({ default: m.TDEEUA })));
const TDEEIndia          = lazy(() => import('./pages/CountryPagesExtra').then(m => ({ default: m.TDEEIndia })));
const TDEEGermany        = lazy(() => import('./pages/CountryPagesExtra').then(m => ({ default: m.TDEEGermany })));
const TDEEPhilippines    = lazy(() => import('./pages/CountryPagesExtra').then(m => ({ default: m.TDEEPhilippines })));
const TDEENigeria        = lazy(() => import('./pages/CountryPagesExtra').then(m => ({ default: m.TDEENigeria })));
const TDEERussia         = lazy(() => import('./pages/CountryPagesExtra').then(m => ({ default: m.TDEERussia })));
const AdminPanel         = lazy(() => import('./pages/AdminPanel'));

const PageLoader = () => (
  <div style={{ minHeight:'60vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
    <div style={{
      width: '40px', height: '40px',
      border: '3px solid var(--border)',
      borderTop: '3px solid var(--green)',
      borderRadius: '50%',
      animation: 'spin 0.7s linear infinite',
    }} />
  </div>
);

const BlogWrap = () => { const { slug } = useParams(); return <BlogPostComp slug={slug} />; };

const NotFound = () => (
  <div className="container" style={{ padding:'6rem 20px', textAlign:'center' }}>
    <h1 style={{ fontSize:'4rem', fontWeight:900, color:'var(--green)', marginBottom:'.5rem' }}>404</h1>
    <h2 style={{ marginTop:0 }}>Page Not Found</h2>
    <p style={{ color:'var(--muted)', marginBottom:'2rem' }}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
    <Link to="/" className="btn" style={{ display:'inline-flex', width:'auto', padding:'12px 28px' }}>← Go Home</Link>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <SettingsProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>
            <Header />
            <main id="main-content" tabIndex={-1} style={{ outline:'none', flex: 1 }}>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/tdee-calculator" element={<TDEECalculator />} />
                  <Route path="/bmi-calculator" element={<BMICalculator />} />
                  <Route path="/macro-calculator" element={<MacroCalculator />} />
                  <Route path="/calorie-deficit" element={<CalorieDeficit />} />
                  <Route path="/ideal-weight" element={<IdealWeight />} />
                  <Route path="/body-fat-calculator" element={<BodyFat />} />
                  <Route path="/protein-calculator" element={<ProteinCalculator />} />
                  <Route path="/weight-loss-timeline" element={<WeightLossTimeline />} />
                  <Route path="/water-intake-calculator" element={<WaterIntake />} />
                  <Route path="/one-rep-max-calculator" element={<OneRepMax />} />
                  <Route path="/pregnancy-weight-gain-calculator" element={<PregnancyWeightGain />} />
                  <Route path="/lean-body-mass-calculator" element={<LeanBodyMass />} />
                  <Route path="/army-body-fat-calculator" element={<ArmyBodyFat />} />
                  <Route path="/keto-macro-calculator" element={<KetoMacro />} />

                  <Route path="/calorie-calculator" element={<CalorieCalculator />} />
                  <Route path="/bmr-calculator" element={<BMRCalculator />} />
                  <Route path="/pace-calculator" element={<PaceCalculator />} />
                  <Route path="/healthy-weight-calculator" element={<HealthyWeightCalculator />} />
                  <Route path="/calories-burned-calculator" element={<CaloriesBurnedCalculator />} />
                  <Route path="/target-heart-rate-calculator" element={<TargetHeartRateCalculator />} />
                  <Route path="/pregnancy-calculator" element={<PregnancyCalculator />} />
                  <Route path="/pregnancy-conception-calculator" element={<PregnancyConceptionCalculator />} />
                  <Route path="/due-date-calculator" element={<DueDateCalculator />} />
                  <Route path="/ovulation-calculator" element={<OvulationCalculator />} />
                  <Route path="/conception-calculator" element={<ConceptionCalculator />} />
                  <Route path="/period-calculator" element={<PeriodCalculator />} />
                  <Route path="/carbohydrate-calculator" element={<CarbohydrateCalculator />} />
                  <Route path="/fat-intake-calculator" element={<FatIntakeCalculator />} />
                  <Route path="/gfr-calculator" element={<GFRCalculator />} />
                  <Route path="/body-type-calculator" element={<BodyTypeCalculator />} />
                  <Route path="/body-surface-area-calculator" element={<BodySurfaceAreaCalculator />} />
                  <Route path="/bac-calculator" element={<BACCalculator />} />

                  <Route path="/blog" element={<BlogIndex />} />
                  <Route path="/blog/:slug" element={<BlogWrap />} />

                  <Route path="/tdee-calculator-us" element={<TDEEUs />} />
                  <Route path="/tdee-calculator-uk" element={<TDEEUk />} />
                  <Route path="/tdee-calculator-canada" element={<TDEECanada />} />
                  <Route path="/tdee-calculator-australia" element={<TDEEAustralia />} />
                  <Route path="/tdee-calculator-uae" element={<TDEEUA />} />
                  <Route path="/tdee-calculator-india" element={<TDEEIndia />} />
                  <Route path="/tdee-calculator-germany" element={<TDEEGermany />} />
                  <Route path="/tdee-calculator-philippines" element={<TDEEPhilippines />} />
                  <Route path="/tdee-calculator-nigeria" element={<TDEENigeria />} />
                  <Route path="/tdee-calculator-russia" element={<TDEERussia />} />

                  <Route path="/about" element={<About />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/contact" element={<Contact />} />

                  {/* Secret Admin Route */}
                  <Route path="/x-admin-settings" element={<AdminPanel />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </SettingsProvider>
    </HelmetProvider>
  );
}
