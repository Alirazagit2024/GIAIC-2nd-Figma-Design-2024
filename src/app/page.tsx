import Navbar from "./component/Navbar";
import FigmaWebsite from "./component/FigmaWebsite";
import Extension from "./component/Extension";
import Customize from "./component/Customize";
import YourWork from "./component/YourWork";
import Sponsors from "./component/Sponsors";
import Footer from "./component/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <FigmaWebsite />
      <Extension />
      <Customize />
      <YourWork />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default page;
