import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-white py-10 md:py-14">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12">
          {/* Map Section */}
          <div className="flex-shrink-0">
            <div className="w-[345px] h-[300px] bg-gym-gray-light flex items-center justify-center">
              <span className="text-black text-[17px] font-body font-medium uppercase">MAP</span>
            </div>
            {/* Navigation Links */}
            <div className="mt-8 text-center">
              <div className="text-gym-text-dark text-[17px] font-body font-medium">
                <Link to="/" className="hover:text-gym-blue transition-colors">HOME</Link>
                <span className="mx-2">|</span>
                <Link to="/membership" className="hover:text-gym-blue transition-colors">MEMBERSHIP</Link>
                <span className="mx-2">|</span>
                <Link to="/about" className="hover:text-gym-blue transition-colors">ABOUT</Link>
                <span className="mx-2">|</span>
                <Link to="/blog" className="hover:text-gym-blue transition-colors">BLOG</Link>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 flex flex-col">
            {/* Location Icon & Address */}
            <div className="flex items-start gap-4 mb-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f72fda95afb61b39a358c474d4224cf40013d3c4?width=67" 
                alt="Location" 
                className="w-[34px] h-[34px]"
              />
              <p className="text-gym-text-dark text-[17px] font-body font-medium">
                147, CCA, Sector C, DHA Phase 5, Lahore
              </p>
            </div>

            {/* Phone Icon & Number */}
            <div className="flex items-start gap-4 mb-12">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f72fda95afb61b39a358c474d4224cf40013d3c4?width=67" 
                alt="Phone" 
                className="w-[34px] h-[34px]"
              />
              <p className="text-gym-text-dark text-[17px] font-body font-medium">
                + 92 333 1111951
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2 mb-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f72fda95afb61b39a358c474d4224cf40013d3c4?width=67" 
                  alt="Instagram" 
                  className="w-[34px] h-[34px]"
                />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f72fda95afb61b39a358c474d4224cf40013d3c4?width=67" 
                  alt="Facebook" 
                  className="w-[34px] h-[34px]"
                />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f72fda95afb61b39a358c474d4224cf40013d3c4?width=67" 
                  alt="YouTube" 
                  className="w-[34px] h-[34px]"
                />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gym-text-light text-[13px] font-body font-medium leading-relaxed">
              <p>
                Copyright © 2026{' '}
                <a href="https://okratech.com" className="underline hover:text-gym-blue transition-colors">
                  OkraTech. All rights reserved.
                </a>
                {'       '}
                <Link to="/privacy" className="underline hover:text-gym-blue transition-colors">
                  Privacy Policy
                </Link>
                {'    '}
                <Link to="/terms" className="underline hover:text-gym-blue transition-colors">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
