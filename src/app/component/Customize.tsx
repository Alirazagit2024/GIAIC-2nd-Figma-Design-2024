import Img from "@/app/assets/images/Group 212.png";
import Image from "next/image";
import Container from "@/app/assets/images/first-img.png";

const Customize = () => {
  return (
    <div className="mx-auto md:w-[1920px] bg-white">
      <div className="bg-white px-6 py-8 md:px-[100px] md:py-[70px] text-black flex flex-col md:flex-row justify-between items-center md:h-[500px]">
        <div className="w-full md:w-[714px] flex justify-center md:justify-start">
          <Image src={Container} alt="container" className="max-w-full h-auto" />
        </div>

        <div className="w-full md:w-[670px] mt-8 md:mt-14 text-center md:text-left">
          <h2 className="font-bold text-2xl md:text-[46px] leading-tight md:leading-[55.45px] tracking-[-0.02em] md:ml-14">
            Customise it to <br /> your needs
          </h2>
          <p className="font-normal text-sm md:text-[18px] leading-relaxed md:leading-[25px] tracking-[-0.02em] mt-4 md:ml-14">
            Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>

          <button className="bg-[#4F9CF9] w-full md:w-[150px] text-white rounded-lg py-3 md:py-4 mt-6 md:my-7 md:ml-14 hover:text-black hover:border hover:border-black hover:bg-white transition duration-300">
            <p className="font-medium text-lg leading-[15px] tracking-[-0.02em] flex justify-center items-center">
              Let&apos;s Go
              <span className="w-[10px] h-[10px]  ml-4">
                <Image src={Img} alt="Right-Arrow" />
              </span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
