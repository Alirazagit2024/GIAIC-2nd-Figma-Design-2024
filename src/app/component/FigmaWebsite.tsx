import Img from "@/app/assets/images/Group 212.png";
import Image from "next/image";
import Container from "@/app/assets/images/first-img.png";
import WorkImg from "@/app/assets/images/wt-img.png";

const FigmaWebsite = () => {
  return (
    <div className="mx-auto md:w-[1920px]">
      {/* Hero-Section Start */}
      <div className="bg-[#043873] mx-auto py-12 px-6 md:py-[100px] md:px-[100px] text-white flex flex-col md:flex-row justify-between items-center md:h-[600px]">
        <div className="w-full md:w-[656px] md:h-[361px]">
          <h2 className="font-bold text-2xl md:text-[46px] leading-tight md:leading-[55.45px] tracking-[-0.02em] mt-5 md:mt-11 mb-6 md:mb-[24px] ml-2 md:ml-8 text-center md:text-left">
            Get More Done with whitepace
          </h2>
          <p className="font-normal text-sm md:text-md leading-relaxed tracking-[-0.02em] mb-6 md:mb-10 ml-2 md:ml-9 text-center md:text-left">
            Project management software that enables your teams to collaborate,
            plan, analyze, and manage everyday tasks
          </p>

          <button className="bg-[#4F9CF9] w-full px-4 md:w-[200px] text-white rounded-lg py-3 md:py-4 ml-2 md:ml-9 hover:transform hover:text-black hover:border hover:border-black hover:bg-white transition duration-300 hidden md:block">
            <p className="font-medium text-lg leading-[23px] tracking-[-0.02em] flex justify-between">
              Try Whitepace free
              <span className="w-[10px] h-[10px] pt-[8px]">
                <Image src={Img} alt="Right-Error" />
              </span>
            </p>
          </button>
        </div>
        <div className="w-full md:w-[824px] h-auto mt-8 md:mt-0">
          <Image src={Container} alt="container" className="mx-auto" />
        </div>
        <button className="bg-[#4F9CF9]  w-full md:w-[200px] text-white rounded-lg py-3 md:py-4 ml-2 mt-4 md:ml-9 hover:transform hover:text-black hover:border hover:border-black hover:bg-white transition duration-300 block md:hidden">
            <p className="font-medium text-lg text-center leading-[23px] tracking-[-0.02em] flex justify-center items-center">
              Try Whitepace free
              <span className="w-[10px] h-[10px] ml-4">
                <Image src={Img} alt="Right-Error" />
              </span>
            </p>
          </button>
      </div>
      {/* Hero-Section End */}

      {/* Project-Management-Section Start */}
      <div className="bg-white py-12 px-6 md:py-[100px] md:px-[100px] text-black flex flex-col md:flex-row justify-between items-center md:h-[600px]">
        <div className="w-full md:w-[656px] md:h-[238px]">
          <h2 className="font-bold text-2xl md:text-[46px] leading-tight md:leading-[55.45px] tracking-[-0.02em] mt-5 md:mt-14 mb-6 md:mb-[24px] ml-2 md:ml-9 text-center md:text-left">
            Project Management
          </h2>
          <p className="font-normal text-sm md:text-[18px] leading-relaxed tracking-[-0.02em] mb-6 md:mb-10 ml-2 md:ml-9 text-center md:text-left">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>

          <button className="bg-[#4F9CF9] w-full md:w-[169px] text-white rounded-lg py-3 ml-2 md:ml-9 hover:transform hover:text-black hover:border hover:border-black hover:bg-white transition duration-300 hidden md:block">
            <p className="font-medium text-lg leading-[23px] tracking-[-0.02em] flex justify-center items-center">
              Get Started
              <span className="w-[10px] h-[10px] ml-4">
                <Image src={Img} alt="Right-Error" />
              </span>
            </p>
          </button>
        </div>
        <div className="w-full md:w-[749px] h-auto mt-8 md:mt-0">
          <Image src={Container} alt="container" className="mx-auto" />
        </div>
        <button className="bg-[#4F9CF9] w-full md:w-[169px] text-white rounded-lg mt-4 py-3 ml-2 md:ml-9 hover:transform hover:text-black hover:border hover:border-black hover:bg-white transition duration-300 block md:hidden">
            <p className="font-medium text-lg leading-[23px] tracking-[-0.02em] flex justify-center items-center">
              Get Started
              <span className="w-[10px] h-[10px] ml-4">
                <Image src={Img} alt="Right-Error" />
              </span>
            </p>
          </button>
      </div>
      {/* Project-Management-Section End */}
      <hr className="bg-black w-full h-1" />

      {/* Work-Together-Section Start */}
      <div className="bg-white py-12 px-6 md:px-[110px] text-black flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[500px]">
          <Image src={WorkImg} alt="container" className="mx-auto" />
        </div>
        <div className="w-full md:w-[670px] mt-8 md:mt-28">
          <h2 className="font-bold text-2xl md:text-[46px] leading-tight md:leading-[55.45px] tracking-[-0.02em] ml-2 md:ml-24 text-center md:text-left">
            Work together
          </h2>
          <p className="font-normal text-sm md:text-[18px] leading-relaxed tracking-[-0.02em] mt-2 ml-2 md:ml-24 text-center md:text-left">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>

          <button className="bg-[#4F9CF9] w-full md:w-[150px] text-white border border-[#4F9CF9] rounded-lg py-3 md:py-4 my-5 md:my-7 ml-2 md:ml-24 hover:transform hover:text-black hover:border hover:border-black hover:bg-white transition duration-300">
            <p className="font-medium text-lg leading-[15px] tracking-[-0.02em] flex justify-center items-center">
              Try it now
              <span className="w-[10px] h-[10px] ml-4">
                <Image src={Img} alt="Right-Error" />
              </span>
            </p>
          </button>
        </div>
      </div>
      {/* Work-Together-Section End */}
    </div>
  );
};

export default FigmaWebsite;
