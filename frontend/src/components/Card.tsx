import { FaTrain } from "react-icons/fa6";
import { FaArrowRight , FaBus , FaCarAlt } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

const Card = ({price,src, dest, srcTime, destTime, srcDay, destDay}) => {
  return (
    <div className="w-[95vw] m-auto my-2 mb-5 h-auto shadow-lg rounded-lg border-2">
      <div className="flex items-center p-2 border-b-4 border-[#1656B7]">
        <FaTrain color="green" className="w-10 h-6" />
        <FaArrowRight color="#1656B7" className="w-6 h-5" />
        <FaBus color="green" className="w-10 h-6" />
        <FaArrowRight color="#1656B7" className="w-6 h-5" />
        <FaCarAlt color="green" className="w-10 h-7" />
      </div>
      <div className="flex">
        {/* mumbai/jaipur */}
        <div className="w-[130vw] pt-1">
          <div className="h-[10vh] flex justify-center">
            <div className="text-black w-[45%] flex-col justify-center items-center gap-0">
              <div className="text-center text-lg text-[#1656B7] font-semibold">
                {src}
              </div>
              <div className="text-center font-semibold ">16:24</div>
              <div className="text-center">16th Mar</div>
            </div>
            <FaArrowRight color="#1656B7" className="mt-2 h-4 w-[15%] pt-" />
            <div className="text-black w-[45%] flex-col justify-center items-center gap-0">
              <div className="text-center text-lg text-[#1656B7] font-semibold">
                dest
              </div>
              <div className="text-center font-semibold ">23:44</div>
              <div className="text-center">17th Mar</div>
            </div>
          </div>
        </div>
        <div className="text-black w-full h-full flex-col justify-center items-center pt-2">
          <div className="font-semibold text-xl text-center text-[#1656B7]">
            {" "}
            ₹2400/-
          </div>
          <div className="text-center text-lg font-medium">Total Fare</div>
        </div>
      </div>
      <div className="text-black flex flex-row-reverse font-light text-sm relative tracking-tighter bottom-1 pb-1 pr-1 gap-2">
        <div className="bg-green-500 flex rounded-lg">
          <FaLeaf className="h-4 w-4" />
          <div>Green Ride</div>
        </div>
      </div>
    </div>
  );
}

export default Card