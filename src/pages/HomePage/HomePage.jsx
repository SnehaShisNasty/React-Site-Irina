import Hero from 'components/Hero/Hero';
import Features from 'components/Features/Features';
// import Services from 'components/Services/Services';
import TrustBlobs from 'components/TrustBlobs/TrustBlobs';
import PricingPlan from 'components/PricingPlan/PricingPlan';

const HomePage = () => {
  return (
    <section>
      <Hero></Hero>
      <Features />
      {/* <Services /> */}
      <PricingPlan />
      <TrustBlobs />
    </section>
  );
};
export default HomePage;
