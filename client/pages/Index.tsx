import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "rgba(1, 102, 254, 1)" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[650px] lg:h-[769px] bg-gym-dark overflow-hidden">
        {/* Blue Gradient Blurs */}
        <div
          className="absolute right-[0px] top-[160px] w-[655px] h-[655px] rounded-full bg-gym-blue opacity-100"
          style={{ filter: "blur(140px)" }}
        ></div>
        <div
          className="absolute left-[646px] top-[335px] w-[733px] h-[733px] rounded-full bg-gym-blue opacity-100"
          style={{ filter: "blur(186px)" }}
        ></div>
        <div
          className="absolute left-[-19px] top-[160px] w-[1358px] h-[655px] rounded-full bg-gym-blue opacity-100"
          style={{ filter: "blur(140px)" }}
        ></div>

        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c27a39a08bd0f9d7b40a7ce39a3026b874c0f87d?width=2901"
          alt=""
          className="absolute left-0 top-0 w-full h-full object-cover"
          style={{ filter: "blur(1.77px)" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-[100px] md:pt-[125px] px-4">
          <h1
            className="text-white text-[40px] sm:text-[55px] md:text-[65px] lg:text-[77px] font-heading text-center uppercase"
            style={{ textShadow: "0 0 29px rgba(255, 255, 255, 0.30)" }}
          >
            TRAIN LIKE A PRO
          </h1>
          <div className="w-[250px] sm:w-[300px] md:w-[369px] h-[20px] md:h-[30px] bg-white shadow-[0_1.4px_18.7px_0_rgba(255,255,255,0.25)] flex flex-col justify-center items-end">
            <p
              className="text-gym-blue-light text-[14px] md:text-[17px] font-body font-bold uppercase text-right px-4"
              style={{ textShadow: "0 0 29px rgba(255, 255, 255, 0.30)" }}
            >
              Premium Facilities
            </p>
          </div>
        </div>
      </section>

      {/* Services Bar */}
      <section className="w-full min-h-[60px] md:h-[78px] bg-gym-gray-light flex flex-wrap items-center justify-center gap-4 md:gap-12 lg:gap-20 px-4 py-4 md:py-0">
        <Link
          to="/services/group-classes"
          className="text-gym-gray-dark text-[11px] md:text-[13px] lg:text-[14px] font-body font-bold uppercase text-center hover:text-gym-blue transition-colors whitespace-nowrap"
        >
          Group Classes
        </Link>
        <Link
          to="/services/personal-training"
          className="text-gym-gray-dark text-[11px] md:text-[13px] lg:text-[14px] font-body font-bold uppercase text-center hover:text-gym-blue transition-colors whitespace-nowrap"
        >
          Personal Training
        </Link>
        <Link
          to="/services/crossfit"
          className="text-gym-gray-dark text-[11px] md:text-[13px] lg:text-[14px] font-body font-bold uppercase text-center hover:text-gym-blue transition-colors whitespace-nowrap"
        >
          Cross fit
        </Link>
        <Link
          to="/services/less-mills"
          className="text-gym-gray-dark text-[11px] md:text-[13px] lg:text-[14px] font-body font-bold uppercase text-center hover:text-gym-blue transition-colors whitespace-nowrap"
        >
          Less mills CLasses
        </Link>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gym-dark py-12 md:py-20 lg:py-24 relative">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="relative w-full max-w-[852px] mx-auto">
            {/* Feature 1: World Class Equipment */}
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-16 md:mb-24 lg:mb-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f72fda95afb61b39a358c474d4224cf40013d3c4?width=441"
                alt="World Class Equipment"
                className="w-full md:w-[180px] lg:w-[221px] h-[260px] md:h-[280px] lg:h-[348px] object-cover mx-auto md:mx-0"
              />
              <div className="flex-1 pt-0 md:pt-8">
                <h2
                  className="text-white text-[32px] md:text-[40px] lg:text-[49px] font-heading mb-3 md:mb-4"
                  style={{ textShadow: "0 0 29px rgba(255, 255, 255, 0.30)" }}
                >
                  World Class Equipment
                </h2>
                <p className="text-gym-gray text-[12px] md:text-[13px] font-body font-medium leading-relaxed capitalize">
                  Train with the best tools in the industry. Our facility is
                  stocked with state-of-the-art machinery, advanced cardio
                  stations, and premium free weights designed to maximize your
                  performance.
                  <br />
                  <br />
                  Whether you are a beginner or a pro athlete, our world-class
                  equipment ensures a safe, effective, and seamless workout
                  experience every time you step on the floor.
                </p>
              </div>
            </div>

            {/* Feature 2: Certified Trainers */}
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-16 md:mb-24 lg:mb-32 md:flex-row-reverse">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f72fda95afb61b39a358c474d4224cf40013d3c4?width=576"
                alt="Certified Trainers"
                className="w-full md:w-[230px] lg:w-[288px] h-[240px] md:h-[240px] lg:h-[299px] object-cover mx-auto md:mx-0"
              />
              <div className="flex-1 pt-0 md:pt-8 text-left md:text-right">
                <h2
                  className="text-white text-[32px] md:text-[40px] lg:text-[49px] font-heading mb-3 md:mb-4"
                  style={{ textShadow: "0 0 29px rgba(255, 255, 255, 0.30)" }}
                >
                  Certified Trainers
                </h2>
                <p className="text-gym-gray text-[12px] md:text-[13px] font-body font-medium leading-relaxed capitalize">
                  Achieving your goals is faster and safer with expert guidance.
                  Our team of certified personal trainers brings years of
                  experience and physiological knowledge to your sessions.
                  <br />
                  <br />
                  They are here to provide personalized workout plans, correct
                  your form, and push you past your limits, ensuring you get
                  real, lasting results without the guesswork.
                </p>
              </div>
            </div>

            {/* Feature 3: Community */}
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-16 md:mb-24 lg:mb-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f72fda95afb61b39a358c474d4224cf40013d3c4?width=459"
                alt="Community"
                className="w-full md:w-[180px] lg:w-[230px] h-[260px] md:h-[260px] lg:h-[327px] object-cover mx-auto md:mx-0"
              />
              <div className="flex-1 pt-0 md:pt-8">
                <h2
                  className="text-white text-[32px] md:text-[40px] lg:text-[49px] font-heading mb-3 md:mb-4"
                  style={{ textShadow: "0 0 29px rgba(255, 255, 255, 0.30)" }}
                >
                  Community
                </h2>
                <p className="text-gym-gray text-[12px] md:text-[13px] font-body font-medium leading-relaxed capitalize">
                  You never have to do this alone. At Fitnation, we pride
                  ourselves on building a supportive and inclusive community
                  where members uplift one another.
                  <br />
                  <br />
                  From high-energy group classes to a friendly culture on the
                  gym floor, you will find the motivation, camaraderie, and
                  accountability you need to stay consistent and actually enjoy
                  your fitness journey.
                </p>
              </div>
            </div>

            {/* Feature 4: Prime Location */}
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 md:flex-row-reverse">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f72fda95afb61b39a358c474d4224cf40013d3c4?width=512"
                alt="Prime Location"
                className="w-full md:w-[200px] lg:w-[256px] h-[270px] md:h-[270px] lg:h-[343px] object-cover mx-auto md:mx-0"
              />
              <div className="flex-1 pt-0 md:pt-8 text-left md:text-right">
                <h2
                  className="text-white text-[32px] md:text-[40px] lg:text-[49px] font-heading mb-3 md:mb-4"
                  style={{ textShadow: "0 0 29px rgba(255, 255, 255, 0.30)" }}
                >
                  Prime Location
                </h2>
                <p className="text-gym-gray text-[12px] md:text-[13px] font-body leading-relaxed capitalize">
                  <span className="font-medium">
                    Convenience is the key to consistency.
                    <br />
                    <br />
                    We are situated in a prime location at the heart of{" "}
                  </span>
                  <span className="font-bold">DHA Phase 5,</span>
                  <span className="font-medium">
                    {" "}
                    designed to fit perfectly into your busy lifestyle. With
                    easy access and a central position, getting to your workout
                    is hassle-free. We remove the obstacles between you and the
                    gym, leaving you with no excuses and more time to focus on
                    your health.
                  </span>
                </p>
              </div>
            </div>

            {/* View Brochure Button */}
            <div className="flex justify-center px-[200px]">
              <Link
                to="/brochure"
                className="bg-white h-[35px] md:h-[39px] px-8 md:px-12 flex items-center justify-center hover:bg-gym-gray-light transition-colors"
              >
                <span className="text-gym-text-medium text-[24px] md:text-[28px] lg:text-[32px] font-heading">
                  View Broacher
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Successful Stories Section */}
      <section className="w-full bg-gym-dark py-12 md:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center items-start">
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <h2
              className="text-[32px] md:text-[40px] lg:text-[49px] font-heading text-center border-4 border-white"
              style={{
                color: "rgb(53, 53, 53)",
                backgroundColor: "rgba(255, 255, 255, 1)",
                overflow: "hidden",
                marginRight: "-4px",
                padding: "0 120px 0 26px",
              }}
            >
              Successful Stories
            </h2>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9 w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F000a334ed8be43baa8221d4c490e04ff%2F37cb60cf15554431b8e2bb81add59eb0"
              alt="Success Story 1"
              className="w-full h-[380px] md:h-[500px] lg:h-[653px] object-cover"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f72fda95afb61b39a358c474d4224cf40013d3c4?width=559"
              alt="Success Story 2"
              className="w-full h-[380px] md:h-[500px] lg:h-[653px] object-cover"
            />
            <div className="w-full h-[380px] md:h-[500px] lg:h-[653px] bg-white hidden sm:block"></div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-8 md:gap-16 mt-8 md:mt-12 w-full">
            <button className="hover:opacity-70 transition-opacity" />
            <button className="hover:opacity-70 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Clients Reviews Title - moved to dark section */}
      <section className="w-full bg-gym-dark py-0">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center pb-12">
          <h2
            className="text-white text-[28px] md:text-[32px] lg:text-[34px] font-body font-semibold capitalize mb-0"
            style={{ textShadow: "0 0 29px rgba(255, 255, 255, 0.30)" }}
          >
            Clients Reviews
          </h2>
        </div>
      </section>

      {/* Clients Reviews White Section */}
      <section
        className="w-full bg-white py-5 flex flex-col justify-center items-center"
        style={{ borderStyle: "none", borderWidth: "1px" }}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          {/* Stars removed */}
        </div>
      </section>

      {/* Membership Plans Section */}
      <section
        className="w-full pt-36 pb-14"
        style={{
          backgroundColor: "rgba(1, 102, 254, 1)",
          marginBottom: "-2px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "144px 0 56px",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-2 mb-12 md:mb-16">
            <h2
              className="text-white text-[36px] md:text-[52px] lg:text-[66px] font-heading text-center"
              style={{ textShadow: "0 0 25px rgba(255, 255, 255, 0.30)" }}
            >
              Memberships Plans
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[53px] max-w-[918px] mx-auto">
            {/* Card 1: Gym Monthly */}
            <div className="w-full max-w-[271px] mx-auto border border-white">
              <div className="bg-white h-[140px] flex items-center justify-center px-8">
                <h3 className="text-gym-text-dark text-[29px] font-body font-extrabold uppercase leading-tight text-left">
                  Gym Monthly
                </h3>
              </div>
              <div className="py-12 px-8">
                <p
                  className="text-white text-[48px] md:text-[56px] lg:text-[60px] font-heading text-center mb-6 md:mb-8"
                  style={{ textShadow: "0 0 25px rgba(255, 255, 255, 0.30)" }}
                >
                  pkr 11,000
                </p>
                <p className="text-white text-[11px] font-body font-medium leading-relaxed capitalize mb-6">
                  Our monthly membership helps you to keep your fitness goals on
                  track without a commitment of any kind, while still enjoying
                  all of the amenities that Fitnation has to offer.
                </p>
              </div>
              <div
                className="bg-white flex items-center justify-center"
                style={{ height: "37px" }}
              >
                <p className="text-[#555] text-[11px] font-body uppercase text-center">
                  <span className="font-bold">+ pkr </span>
                  <span className="font-extrabold">6,000</span>
                  <span className="font-bold"> Gym Registration fee</span>
                </p>
              </div>
            </div>

            {/* Card 2: Gym + Personal Training */}
            <div className="w-full max-w-[271px] mx-auto border border-white">
              <div className="bg-white h-[140px] flex items-center justify-center px-6">
                <h3 className="text-gym-text-dark text-[29px] font-body font-extrabold uppercase leading-tight text-left">
                  Gym + Personal Training
                </h3>
              </div>
              <div className="py-8 px-8 pb-12">
                <div className="bg-white w-[82px] h-[21px] flex items-center justify-center mx-auto mb-8">
                  <span className="text-gym-gray-dark text-[12px] font-body font-bold uppercase">
                    Monthly
                  </span>
                </div>
                <p
                  className="text-white text-[48px] md:text-[56px] lg:text-[60px] font-heading text-center mb-6 md:mb-8"
                  style={{ textShadow: "0 0 25px rgba(255, 255, 255, 0.30)" }}
                >
                  pkr 26,000
                </p>
                <p className="text-white text-[11px] font-body font-medium leading-relaxed capitalize mb-6">
                  All the benefits of gym access plus customized workout plans
                  and ongoing support from our certified personal trainers
                </p>
              </div>
              <div
                className="bg-white flex items-center justify-center"
                style={{ height: "37px" }}
              >
                <p className="text-[#555] text-[11px] font-body uppercase text-center">
                  <span className="font-bold">+ pkr </span>
                  <span className="font-extrabold">6,000</span>
                  <span className="font-bold"> Gym Registration fee</span>
                </p>
              </div>
            </div>

            {/* Card 3: Gym + Senior Personal Training */}
            <div className="w-full max-w-[271px] mx-auto border border-white md:col-span-2 lg:col-span-1">
              <div className="bg-white h-[176px] flex items-center justify-center px-6">
                <h3 className="text-gym-text-dark text-[29px] font-body font-extrabold uppercase leading-tight text-left">
                  Gym + Senior Personal Training
                </h3>
              </div>
              <div className="py-4 px-8 pb-8">
                <div className="bg-white w-[82px] h-[21px] flex items-center justify-center mx-auto mb-4">
                  <span className="text-gym-gray-dark text-[12px] font-body font-bold uppercase">
                    Monthly
                  </span>
                </div>
                <p
                  className="text-white text-[48px] md:text-[56px] lg:text-[60px] font-heading text-center mb-4 md:mb-6"
                  style={{ textShadow: "0 0 25px rgba(255, 255, 255, 0.30)" }}
                >
                  pkr 31,000
                </p>
                <p className="text-white text-[11px] font-body font-medium leading-relaxed capitalize mb-6">
                  Tailored fitness programs with specialized personal trainers
                  focused on safe, effective training to support strength,
                  mobility, and overall wellness.
                </p>
              </div>
              <div
                className="bg-white flex items-center justify-center"
                style={{ height: "38px" }}
              >
                <p className="text-[#555] text-[11px] font-body uppercase text-center">
                  <span className="font-bold">+ pkr </span>
                  <span className="font-extrabold">6,000</span>
                  <span className="font-bold"> Gym Registration fee</span>
                </p>
              </div>
            </div>
          </div>

          {/* View Full Plans CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mt-8 md:mt-12">
            <p
              className="text-white text-[17px] md:text-[19px] font-body font-bold uppercase text-center"
              style={{ textShadow: "0 0 25px rgba(255, 255, 255, 0.30)" }}
            >
              Click here to View full Plans
            </p>
            <Link
              to="/membership"
              className="bg-white h-[36px] md:h-[38px] px-5 md:px-6 flex items-center justify-center hover:bg-gym-gray-light transition-colors"
            >
              <span className="text-gym-gray-dark text-[17px] md:text-[19px] font-body font-bold uppercase">
                View
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Want to try us out first? */}
      <section
        className="w-full py-12 md:py-16 lg:py-20"
        style={{
          backgroundColor: "rgba(1, 102, 254, 1)",
          marginTop: "-2px",
          padding: "64px 0 85px",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2
            className="text-white text-[22px] md:text-[26px] lg:text-[29px] font-body font-semibold capitalize mb-6 md:mb-8"
            style={{ textShadow: "0 0 19px rgba(255, 255, 255, 0.30)" }}
          >
            Want to try us out first?
          </h2>
          <Link
            to="/day-pass"
            className="inline-block bg-white h-[40px] md:h-[46px] px-8 md:px-12 hover:bg-gym-gray-light transition-colors"
          >
            <span
              className="text-gym-blue-accent text-[18px] md:text-[20px] lg:text-[22px] font-body font-bold italic uppercase leading-[40px] md:leading-[46px]"
              style={{ textShadow: "0 0 19px rgba(255, 255, 255, 0.30)" }}
            >
              Get 1 Day Pass
            </span>
          </Link>

          {/* Large Join Now Text */}
          <div className="mt-12 md:mt-16 overflow-hidden">
            <h3 className="text-white text-[80px] sm:text-[140px] md:text-[200px] lg:text-[281px] font-heading opacity-68 mix-blend-soft-light leading-none">
              Join Now
            </h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
