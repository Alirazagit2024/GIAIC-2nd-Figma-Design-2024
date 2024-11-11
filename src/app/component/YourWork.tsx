import Img from "@/app/assets/images/Group 212.png";
import Image from "next/image";

const YourWork = () => {
  return (
    <div className="mx-auto md:w-[1920px]">
      <div className="mx-auto mt-3 md:w-[1481px] py-8 px-4 md:py-[80px] md:px-[80px] text-white flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl md:text-[52px] leading-tight md:leading-[87.14px] tracking-[-0.02em] text-center">
          Your work, everywhere you are
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg leading-relaxed md:leading-[25px] tracking-[-0.02em] md:px-40 text-center">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
        </p>

        <button className="bg-[#4F9CF9] w-full md:w-[165px] text-white border border-[#4F9CF9] rounded-lg py-3 px-6 mt-8 md:mt-11 hover:text-black hover:border-black hover:bg-white transition duration-300">
          <p className="font-medium text-base md:text-lg leading-none tracking-[-0.02em] flex justify-center items-center">
            Try Taskey
            <span className="w-[10px] h-[10px] ml-2 md:ml-4">
              <Image src={Img} alt="Right-Arrow" />
            </span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default YourWork;
