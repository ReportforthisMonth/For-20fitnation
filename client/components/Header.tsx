import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className="w-full h-[100px] md:h-[125px] border border-white/50 bg-[rgba(77,77,77,0.10)] backdrop-blur-md"
        style={{ backdropFilter: 'blur(6.149341106414795px)' }}
      >
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 md:py-6 h-full max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/97db7444d1fdf17592adfaa38c014609581cad74?width=245"
              alt="FITNATION Logo"
              className="h-[16px] md:h-[21px] w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            <Link to="/" className="text-white text-[14px] lg:text-[17px] font-medium font-body hover:text-gym-blue-light transition-colors">
              HOME
            </Link>
            <div className="w-[1px] h-[19px] bg-white"></div>
            <Link to="/membership" className="text-white text-[14px] lg:text-[17px] font-medium font-body hover:text-gym-blue-light transition-colors">
              MEMBERSHIP
            </Link>
            <div className="w-[1px] h-[19px] bg-white"></div>
            <Link to="/about" className="text-white text-[14px] lg:text-[17px] font-medium font-body hover:text-gym-blue-light transition-colors">
              ABOUT
            </Link>
            <div className="w-[1px] h-[19px] bg-white"></div>
            <Link to="/blog" className="text-white text-[14px] lg:text-[17px] font-medium font-body hover:text-gym-blue-light transition-colors">
              BLOG
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-[9px]">
            <Link
              to="/membership"
              className="bg-white h-[26px] md:h-[29px] px-3 md:px-4 flex items-center justify-center hover:bg-gym-gray-light transition-colors"
            >
              <span className="text-black text-[16px] md:text-[19px] font-heading uppercase">Join Now</span>
            </Link>
            <Link
              to="/day-pass"
              className="bg-white h-[26px] md:h-[29px] px-3 md:px-4 flex items-center justify-center hover:bg-gym-gray-light transition-colors"
            >
              <span className="text-black text-[16px] md:text-[19px] font-heading uppercase whitespace-nowrap">1 day PASS</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
