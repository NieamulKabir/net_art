import machinery from "../assets/3.png";
const Equipment = () => {
  return (
    <div className="mb-10">
      <h1 className="text-sm mx-3 font-medium mt-10 mb-6 text-justify">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </h1>
      <img className="px-6" src={machinery} alt="" />
      <p className="text-center text-xs font-medium mt-3">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </p>
      <hr className="h-[3px] bg-red-500 my-5" />
      <p className="text-center text-sm font-bold mt-3">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p className="text-center text-sm font-semibold mt-3">
        CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS &
        DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
        BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
        AGRICULTURE & RESIDENTIAL{" "}
      </p>
    </div>
  );
};

export default Equipment;
