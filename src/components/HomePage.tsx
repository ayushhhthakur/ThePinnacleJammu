// HomePage.js
import '../styles/GlobalStyles.css';
import '../styles/HomePage.css';

const HomePage = () => {
  const scrollToBanner = () => {
    const bannerSection = document.getElementById('banner');
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <div className="home-page">
        <div className="home-page__title">
          <h1>TypeScript</h1>
        </div>
        <div className="home-page__content">
          <p>Learn TypeScript with me in 30 days.</p>
        </div>
        <div className="btn">
          <button onClick={scrollToBanner}>Learn</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
