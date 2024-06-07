const Cards = () => {
  return (
    <div className="h-screen w-full  flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full h-full rounded-xl  bg-[#224D44] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="image"
          />
          <button className="absolute left-10 bottom-10 px-2 rounded-full py-2 border-2">
            @2020-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer relative flex gap-5 h-[50vh] w-1/2 ">
        <div className="card w-1/2 h-full rounded-xl flex items-center justify-center bg-[#3e8a79]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="image"
          />
          <button className="absolute left-10 bottom-10 px-2 rounded-full py-2 border-2">
            Rating 5.0 on Clutch
          </button>
        </div>

        <div className="card relative w-1/2 h-full rounded-xl flex items-center justify-center bg-[#3e8a79]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="image"
          />
          <button className="absolute left-10 bottom-10 px-2 rounded-full py-2 border-2">
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
