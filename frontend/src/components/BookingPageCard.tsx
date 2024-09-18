import { FaTrainSubway } from "react-icons/fa6";
import { FaArrowCircleRight, FaCarAlt } from "react-icons/fa";


const BookingPageCard = () => {
  return (
    <>
      <div className="border-[#e3dada83] border-0 rounded-lg w-[93vw] mt-3 border-t-2 m-auto shadow-lg flex-col justify-center pt-3 ">
        <div className="m-auto flex justify-center">
          <div className="flex gap-4 justify-center">
            <FaTrainSubway
              className="w-8 h-10 relative top-8"
              color="#1656B7"
            />
            <div className="flex-col ">
              <div className="font-extrabold text-xl">
                19290 - Very Fast Express
              </div>
              <div className="flex gap-2 text-xl justify-center mt-1">
                <div>
                  <div className="h-6 text-center font-semibold text-[#1656B7]">
                    Mumbai
                  </div>
                  <div className="text-lg text-center h-5 overflow-hidden">
                    08:45
                  </div>
                  <div className="text-lg text-center">12th March</div>
                </div>
                <FaArrowCircleRight
                  className="mt-1 h-6 w-6 relative top-3"
                  color="#1656B7"
                />
                <div>
                  <div className="h-6 text-center font-semibold text-[#1656B7]">
                    Raipur
                  </div>
                  <div className="text-lg text-center h-5 overflow-hidden">
                    09:42
                  </div>
                  <div className="text-lg text-center">13th March</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-extrabold text-2xl text-center">₹3600/-</div>
          <div className="text-center relative bottom-2 font-light">
            Train Fare
          </div>
        </div>
      </div>

      <div className="border-[#e3dada83] border-0 rounded-lg w-[93vw] border-t-2 m-auto shadow-lg flex-col justify-center pt-3 mt-4">
        <div className="m-auto flex justify-center">
          <div className="flex gap-4 justify-center">
            <FaCarAlt className="w-10 h-10 relative top-8" color="#1656B7" />
            <div className="flex-col ">
              <div className="font-extrabold text-xl">
                Kartik Travels - EV Services
              </div>
              <div className="flex gap-2 text-xl justify-center mt-1">
                <div>
                  <div className="h-6 text-center font-semibold text-[#1656B7]">
                    Raipur
                  </div>
                  <div className="text-lg text-center h-5 overflow-hidden">
                    10:25
                  </div>
                  <div className="text-lg text-center">13th March</div>
                </div>
                <FaArrowCircleRight
                  className="mt-1 h-6 w-6 relative top-3"
                  color="#1656B7"
                />
                <div>
                  <div className="h-6 text-center font-semibold text-[#1656B7]">
                    Jaipur
                  </div>
                  <div className="text-lg text-center h-5 overflow-hidden">
                    09:42
                  </div>
                  <div className="text-lg text-center">14th March</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="max-h-[0vh]">
            <div className="font-extrabold text-2xl text-center">₹1800/-</div>
            <div className="text-center relative bottom-2 font-light">
              Train Fare
            </div>
          </div>
          <div className="bg-green-500 w-10 rounded-lg flex justify-center items-center relative bottom-5 left-2 pb-0">
            <div className="text-white font-extrabold text-center pb-0">EV</div>
          </div>
          <div className=" w-12 rounded-lg flex justify-center items-center relative bottom-4 left-2 pb-0">
            <div className="text-green-600 font-extrabold text-center pb-0">
              43g/km CO2 
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center text-3xl font-bold">₹5400/-</div>
        <div className="text-center text-xl relative bottom-2">Total Fare</div>
      </div>
      <div className="flex justify-center w-screen ">
        <button className="w-[80vw] h-[15vw] text-center bg-[#1656B7] hover:bg-[#1656b7e5]  text-white font-extrabold text-xl rounded-lg">
          Pay Here
        </button>
      </div>
    </>
  );
};

export default BookingPageCard;
