import { Link } from 'react-router-dom';
import backgroundImage from '../image.png';

function LandingPage() {
  return (
    <div className="landing-page" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="hero-section" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '3rem',
        borderRadius: '15px',
        maxWidth: '800px',
        margin: '2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Green Haven</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Welcome to Green Haven, your premier destination for beautiful houseplants. 
          We believe that every home deserves a touch of nature's beauty. Our carefully 
          curated collection of plants brings life, color, and positive energy to your space.
        </p>
        <Link to="/products" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '1.1rem',
          transition: 'background-color 0.3s ease'
        }}>
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default LandingPage; 