import BookingPageCard from "../../components/BookingPageCard";

const BookingPage = () => {
  return (
    <div className="bg-white min-h-[101vh] min-w-[101vw] overflow-x-hidden text-black">
      <div className="bg-[#1656B7] text-white text-center font-semibold h-[10vh] flex justify-center items-center text-xl">
        My Journey
      </div>
      <div>
        <BookingPageCard />
      </div>
    </div>
  );
}

export default BookingPage