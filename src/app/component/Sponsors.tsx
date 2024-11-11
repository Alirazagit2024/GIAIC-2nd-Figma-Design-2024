import Apple from "@/app/assets/images/Apple.png";
import Microsoft from "@/app/assets/images/Microsoft.png";
import Slack from "@/app/assets/images/Slack.png";
import Google from "@/app/assets/images/Google.png";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="mx-auto bg-white md:w-[1920px] py-12 md:py-20">
      <div className="text-black flex flex-col items-center justify-center px-4 md:px-[80px]">
        <h1 className="font-bold text-3xl md:text-[72px] leading-tight md:leading-[87.14px] tracking-[-0.02em] text-center mb-10 md:mb-20">
          Our sponsors
        </h1>

        <div className="flex flex-wrap justify-center md:w-[1482px] gap-8 md:justify-between w-full">
          <Image
            src={Apple}
            alt="Apple-img"
            className="w-[55px] h-auto md:w-[55.47px] md:h-[59px] hover:scale-110 transition-transform duration-300"
          />
          <Image
            src={Microsoft}
            alt="Microsoft-img"
            className="w-[244px] h-auto md:w-[257px] md:h-[59px] hover:scale-110 transition-transform duration-300"
          />
          <Image
            src={Slack}
            alt="Slack-img"
            className="w-[140px] h-auto md:w-[250px] md:h-[59px] hover:scale-110 transition-transform duration-300"
          />
          <Image
            src={Google}
            alt="Google-img"
            className="w-[130px] h-auto md:w-[211px] md:h-[59px] hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
