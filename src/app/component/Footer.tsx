import Image from "next/image";
import logoImage1 from "@/app/assets/images/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="mx-auto w-full md:w-[1920px]">
        <div className="bg-black text-white py-10 px-6 md:px-[120px] md:pt-[70px] grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-x-10 w-full">
          {/* Logo and About Section */}
          <div className="text-center md:text-left w-full md:w-[295px]">
            <Image src={logoImage1} alt="logo" className="mx-auto md:mx-0" />
            <p className="mt-4 text-base text-center md:text-lg leading-[25px] tracking-[-0.02em] max-w-[240px] mx-auto md:text-left md:mx-0">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world.
            </p>
          </div>

          {/* Product Section */}
          <div className="text-center md:text-left w-full md:pt-2 md:w-[295px]">
            <h1 className="font-bold text-lg leading-[21.78px] tracking-[-0.02em]">
              Product
            </h1>
            <p className="text-white text-base font-normal leading-[20px] mt-4 tracking-[-0.02em]">
              Overview
            </p>
            <p className="text-white text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">
              Pricing
            </p>
            <p className="text-white text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">
              Customer stories
            </p>
          </div>

          {/* Resources Section */}
          <div className="text-center md:text-left w-full md:pt-2 md:w-[295px]">
            <h1 className="font-bold text-lg leading-[21.78px] tracking-[-0.02em]">
              Resources
            </h1>
            <p className="text-white text-base font-normal leading-[20px] mt-4 tracking-[-0.02em]">
              Blog
            </p>
            <p className="text-white text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">
              Guide and tutorials
            </p>
            <p className="text-white text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">
              Help center
            </p>
          </div>

          {/* Company Section */}
          <div className="text-center md:text-left w-full md:pt-2 md:w-[295px]">
            <h1 className="font-bold text-lg leading-[21.78px] tracking-[-0.02em]">
              Company
            </h1>
            <p className="text-white text-base font-normal leading-[20px] mt-4 tracking-[-0.02em]">
              About us
            </p>
            <p className="text-white text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">
              Careers
            </p>
            <p className="text-white text-base font-normal leading-[20px] mt-2 tracking-[-0.02em]">
              Media kit
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-black py-4 text-center text-white">
          <p className="text-base font-normal leading-[20px]">©2021 Whitepace LLC.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
