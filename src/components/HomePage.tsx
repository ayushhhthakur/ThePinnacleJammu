// HomePage.js
import '../styles/GlobalStyles.css';
import '../styles/HomePage.css';

const HomePage = () => {
  const scrollToBanner = () => {
    const bannerSection = document.getElementById('apply');
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <div className="home-page">
        <div className="home-page__title">
          <h1>𝐓𝐇𝐄 𝐏𝐈𝐍𝐍𝐀𝐂𝐋𝐄 𝐎𝐕𝐄𝐑𝐒𝐄𝐀𝐒 𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍</h1>
        </div>
        <div className="home-page__content">
          <p>(𝐈𝐄𝐋𝐓𝐒 / 𝐏𝐓𝐄 / 𝐒𝐓𝐔𝐃𝐘 𝐕𝐈𝐒𝐀).</p>
        </div>
        <div className="btn">
          <button onClick={scrollToBanner}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
