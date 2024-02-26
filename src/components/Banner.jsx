import trophy from "../assets/1.png";
import bannerImg from "../assets/2.png";
const Banner = () => {
  return (
    <div className="md:flex justify-between items-center mx-10 mt-6 font-medium text-justify">
      <div className="md:w-[30%]">
        <img className="md:h-[650px]" src={trophy} alt="" />
      </div>
      <div className="md:w-[70%]">
        <h1 className="font-bold">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h1>
        <ul className="list-disc text-sm ml-10 my-4 ">
          <li>
            {" "}
            C.R.I.s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            {" "}
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.{" "}
          </li>
        </ul>
        <img src={bannerImg} alt="" />
        <h1 className="mt-4">
          Government of India has awarded the{" "}
          <span className="font-bold">
            ``National Energy Conservation Award 2018``
          </span>
          . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
          the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
          Kumar Singh, Honorable Minister of State.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
