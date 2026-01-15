import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gym-dark flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center pt-[100px] md:pt-[125px] pb-12 md:pb-20">
        <div className="text-center px-4 md:px-8">
          <h1 className="text-white text-[80px] sm:text-[100px] md:text-[120px] font-heading mb-4" style={{ textShadow: '0 0 29px rgba(255, 255, 255, 0.30)' }}>
            404
          </h1>
          <div className="w-[150px] md:w-[200px] h-[3px] md:h-[4px] bg-gym-blue mx-auto mb-6 md:mb-8"></div>
          <p className="text-gym-gray text-[22px] md:text-[26px] lg:text-[29px] font-body font-semibold mb-6 md:mb-8">
            Oops! Page not found
          </p>
          <Link
            to="/"
            className="inline-block bg-white h-[40px] md:h-[46px] px-8 md:px-12 hover:bg-gym-gray-light transition-colors"
          >
            <span className="text-gym-blue text-[18px] md:text-[20px] lg:text-[22px] font-body font-bold uppercase leading-[40px] md:leading-[46px]">
              Return to Home
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
