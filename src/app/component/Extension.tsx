import Img from "@/app/assets/images/Group 212.png";
import Image from "next/image";
import Container from "@/app/assets/images/second-img.png";

const Extension = () => {
  return (
    <div className="mx-auto md:w-[1920px]">
      {/* Main Section */}
      <div className="bg-[#043873] py-12 px-6 md:py-[100px] md:px-[100px] text-white flex flex-col md:flex-row justify-between items-center md:h-[559px]">
        <div className="w-full md:w-[656px] md:h-[238px] text-center md:text-left">
          <h2 className="font-bold text-2xl md:text-[46px] leading-tight md:leading-[55.45px] tracking-[-0.02em] mt-5 md:mt-16 mb-6 md:mb-[24px]">
            Use as Extension
          </h2>
          <p className="font-normal text-sm md:text-md leading-relaxed tracking-[-0.02em] mb-6 md:mb-8">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>

          <button className="bg-[#4F9CF9] w-full md:w-[150px] text-white rounded-lg py-3 md:py-4 hover:text-black hover:border hover:border-black hover:bg-white transition duration-300 hidden md:block">
            <p className="font-medium text-lg flex justify-center items-center tracking-[-0.02em]">
              Let&apos;s Go
              <span className="w-[10px] h-[10px] ml-4">
                <Image src={Img} alt="Right-Error" />
              </span>
            </p>
          </button>
        </div>

        <div className="w-full md:w-[686px] h-auto mt-8 md:mt-0 flex justify-center md:justify-end">
          <Image src={Container} alt="container" className="max-w-full h-auto" />
        </div>
      
      <button className="bg-[#4F9CF9] w-full mt-4 md:w-[150px] text-white rounded-lg mx-auto py-2 md:py-2 hover:text-black hover:border hover:border-black hover:bg-white transition duration-300 block md:hidden">
            <p className="font-medium text-lg flex justify-center items-center tracking-[-0.02em]">
              Let&apos;s Go
              <span className="w-[10px] h-[10px]  ml-4">
                <Image src={Img} alt="Right-Error" />
              </span>
            </p>
          </button>
          </div>
    </div>
  );
};

export default Extension;
