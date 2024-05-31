import Hero from 'components/Hero/Hero';
import Features from 'components/Features/Features';
import Services from 'components/Services/Services';
import TrustBlobs from 'components/TrustBlobs/TrustBlobs';

const HomePage = () => {
  return (
    <section>
      <Hero></Hero>
      <Features/>
      <Services />
      <TrustBlobs/>
    </section>
  );
};
export default HomePage;
