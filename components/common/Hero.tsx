// components/common/Certificate.js
import Image from "next/image";
import Me from "../../public/me.svg";
import MeArrow from "../../public/me-arrow.svg";

const Hero = () => {
  return (
    <div className="my-32 lg:flex items-center justify-between" id="hero">
      <div className="lg:w-1/2 relative">
        <Image src={Me} className="w-full h-full" alt="me" />
        <Image style={{bottom: '34rem'}} src={MeArrow} className="absolute hidden lg:flex right-0 " alt="me-arrow" />

      </div>
      <div className="lg:w-1/2">
        <h2 className="mt-4 text-white text-4xl font-semibold">
          Hello! I’m
          <span className="text-[#0B78F4]"> Taiwo Ademola</span>
        </h2>

        <p className="text-2xl mt-10 text-white font-medium ">A Designer who</p>
        <div className="mt-3 text-5xl lgtext-8xl font-semibold  text-white">
          Judges a book by its
          <span className="text-[#0B78F4] ml-2 ellipse-2">Cover</span>...
        </div>
        <p className="my-5 text-xl text-white font-semibold">
          Because if the cover does not impress you what else can?
        </p>

        <div className="md:flex mt-10 md:space-x-4">
          <button className="bg-[#0B78F4] text-white mt-6 font-bold flex items-center rounded-3xl px-8 py-4">
            View my Portfolio{" "}
            <svg
              className="ml-3"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5383 7.6633L9.91328 13.2883C9.73716 13.4644 9.49829 13.5634 9.24922 13.5634C9.00015 13.5634 8.76128 13.4644 8.58516 13.2883C8.40904 13.1122 8.31009 12.8733 8.31009 12.6242C8.31009 12.3752 8.40904 12.1363 8.58516 11.9602L12.6094 7.93752H1.125C0.87636 7.93752 0.637903 7.83874 0.462087 7.66293C0.286272 7.48711 0.1875 7.24866 0.1875 7.00002C0.1875 6.75137 0.286272 6.51292 0.462087 6.3371C0.637903 6.16129 0.87636 6.06252 1.125 6.06252H12.6094L8.58672 2.03751C8.4106 1.86139 8.31166 1.62252 8.31166 1.37345C8.31166 1.12438 8.4106 0.88551 8.58672 0.70939C8.76284 0.533269 9.00171 0.434326 9.25078 0.434326C9.49985 0.434326 9.73872 0.533269 9.91484 0.70939L15.5398 6.33439C15.6273 6.4216 15.6966 6.52523 15.7438 6.63931C15.7911 6.75339 15.8153 6.87569 15.8152 6.99917C15.815 7.12265 15.7905 7.24489 15.743 7.35886C15.6955 7.47283 15.6259 7.57629 15.5383 7.6633Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="bg-transparent border-[#0B78F4] text-white border-2 mt-6 font-bold flex items-center rounded-3xl px-10 py-4">
            Hire Me{" "}
            <svg
              className="ml-3"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5383 7.6633L9.91328 13.2883C9.73716 13.4644 9.49829 13.5634 9.24922 13.5634C9.00015 13.5634 8.76128 13.4644 8.58516 13.2883C8.40904 13.1122 8.31009 12.8733 8.31009 12.6242C8.31009 12.3752 8.40904 12.1363 8.58516 11.9602L12.6094 7.93752H1.125C0.87636 7.93752 0.637903 7.83874 0.462087 7.66293C0.286272 7.48711 0.1875 7.24866 0.1875 7.00002C0.1875 6.75137 0.286272 6.51292 0.462087 6.3371C0.637903 6.16129 0.87636 6.06252 1.125 6.06252H12.6094L8.58672 2.03751C8.4106 1.86139 8.31166 1.62252 8.31166 1.37345C8.31166 1.12438 8.4106 0.88551 8.58672 0.70939C8.76284 0.533269 9.00171 0.434326 9.25078 0.434326C9.49985 0.434326 9.73872 0.533269 9.91484 0.70939L15.5398 6.33439C15.6273 6.4216 15.6966 6.52523 15.7438 6.63931C15.7911 6.75339 15.8153 6.87569 15.8152 6.99917C15.815 7.12265 15.7905 7.24489 15.743 7.35886C15.6955 7.47283 15.6259 7.57629 15.5383 7.6633Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
