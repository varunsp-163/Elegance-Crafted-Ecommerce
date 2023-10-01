import React from "react";
import starSolid from "./assets/Icons Solid.svg";
import starRegular from "./assets/Icons regular.svg";
import img1 from "./assets/3.png";
import img2 from "./assets/2.png";
import img3 from "./assets/5.png";
import dress1 from "./assets/Screenshot 2022-07-08 at 18.07 2.png";
import dress2 from "./assets/Screenshot 2022-07-08 at 18.07 2 (1).png";
import dress3 from "./assets/Screenshot 2022-07-08 at 18.07 2 (2).png";
import color1 from "./assets/Color selection (1).svg";
import color2 from "./assets/Color selection.svg";

const Hero2 = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row">
        {/* Left Part */}
        <div className="lg:mr-8 lg:w-[923px] pb-8 px-10">
          <h1 className="text-gray-900 font-sans text-4xl font-bold mb-3">
            Client Reviews
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <h5 className="text-xl text-[#64748B] font-bold">4.7</h5>
            <div className="flex items-center">
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starRegular} alt="star" className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-sans ml-2">Based on 1234 reviews</h3>
          </div>
          {/* progress bars */}
          <div className="pb-5">
            <div className="mt-5 flex">
              <h1>5</h1>
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <div className="w-full my-3 mx-2 h-[5px] bg-gray-300 rounded-full">
                <div
                  className="h-[5px] bg-[#F19937] rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <h1>75%</h1>
            </div>
            <div className="mt-5 flex">
              <h1>4</h1>
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <div className="w-full my-3 mx-2 h-[5px] bg-gray-300 rounded-full">
                <div
                  className="h-[5px] bg-[#F19937] rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <h1>50%</h1>
            </div>
            <div className="mt-5 flex">
              <h1>3</h1>
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <div className="w-full my-3 mx-2 h-[5px] bg-gray-300 rounded-full">
                <div
                  className="h-[5px] bg-[#F19937] rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <h1>25%</h1>
            </div>
            <div className="mt-5 flex">
              <h1>2</h1>
              <img src={starRegular} alt="star" className="w-6 h-6" />
              <div className="w-full my-3 mx-2 h-[5px] bg-gray-300 rounded-full">
                <div
                  className="h-[5px] bg-[#F19937] rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <h1>0%</h1>
            </div>
            <div className="mt-5 flex">
              <h1>1</h1>
              <img src={starRegular} alt="star" className="w-6 h-6" />
              <div className="w-full my-3 mx-2 h-[5px] bg-gray-300 rounded-full">
                <div
                  className="h-[5px] bg-[#F19937] rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <h1>0%</h1>
            </div>
          </div>

          <h1 className="text-gray-900 font-semibold text-lg mt-4">
            We value your opinion
          </h1>
          <p className="text-Secondary font-NotoSans text-gray-400 mt-2">
            The time is now for it to be okay to be great. People in this world
            shun people for being great.
          </p>
          <button className="bg-[#1E293B] text-white mt-4 py-2 px-6 w-full rounded-md hover:bg-gray-900 transition-colors duration-300 ease-in-out">
            Write a review
          </button>
        </div>

        {/* Right Part */}
        <div className="flex w-full flex-col justify-start px-9 lg:justify-center">
          <div className="pb-8">
            <div className="flex items-center gap-2">
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starRegular} alt="star" className="w-6 h-6" />
            </div>
            <p className="text-gray-700 py-4">
              If everything I did failed - which it doesn't, it actually
              succeeds - just the fact that I'm willing to fail is an
              inspiration. People are so scared to lose that they don't even
              try.
            </p>
            <div className="flex items-center pb-6">
              <img src={img1} alt="img" className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <h1 className="text-gray-900 font-semibold text-lg">
                  Alexa Liras
                </h1>
                <h2 className="text-gray-600 text-sm">03 March 2022</h2>
              </div>
            </div>
          </div>
          <div className="pb-8">
            <div className="flex items-center gap-2">
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starRegular} alt="star" className="w-6 h-6" />
            </div>
            <p className="text-gray-700 py-4">
              We’re not always in the position that we want to be at. We’re
              constantly growing. We’re constantly making mistakes. We’re
              constantly trying to express ourselves and actualize our dreams.
              If you have the opportunity to play this game of life you need to
              appreciate every moment. A lot of people don’t appreciate the
              moment until it’s passed.
            </p>
            <div className="flex items-center pb-6">
              <img src={img2} alt="img" className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <h1 className="text-gray-900 font-semibold text-lg">
                  Laurent Perrier
                </h1>
                <h2 className="text-gray-600 text-sm">03 March 2022</h2>
              </div>
            </div>
          </div>
          <div className="pb-8">
            <div className="flex items-center gap-2">
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starSolid} alt="star" className="w-6 h-6" />
              <img src={starRegular} alt="star" className="w-6 h-6" />
            </div>
            <p className="text-gray-700 py-4">
              There’s nothing I really wanted to do in life that I wasn’t able
              to get good at. That’s my skill. I’m not really specifically
              talented at anything except for the ability to learn. That’s what
              I do. That’s what I’m here for. Don’t be afraid to be wrong
              because you can’t learn anything from a compliment.
            </p>
            <div className="flex items-center pb-6">
              <img src={img3} alt="img" className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <h1 className="text-gray-900 font-semibold text-lg">
                  Michael Levi
                </h1>
                <h2 className="text-gray-600 text-sm">03 March 2022</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="mt-8 p-4 bg-white">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">Recently viewed</h1>
          <h1 className="text-[16px] items-center pt-4 text-gray-700 font-bold mb-4">
            See all {`>`}
          </h1>
        </div>
        <hr className="border-t-2 border-gray-300 mb-4" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8">
          {/* Card 1 */}
          <div className="border-2 items-center justify-center p-4 rounded-lg">
            <img src={dress1} alt="" className="w-full h-auto" />
            <h3 className="text-center mt-2 font-sans text-base font-semibold text-gray-600 tracking-tighter">
              Permanent Collection
            </h3>
            <h1 className="text-lg font-semibold text-center mt-1">
              Premium Suit
            </h1>
            <div className="flex text-center justify-center items-center gap-2 mt-2">
              <img src={color2} alt="" className="w-6 h-6" />
              <img src={color1} alt="" className="w-6 h-6" />
              <img src={color1} alt="" className="w-6 h-6" />
            </div>
            <h1 className="text-lg font-semibold text-center mt-2">$790</h1>
          </div>
          {/* Card 2 */}
          <div className="border-2 items-center justify-center p-4 rounded-lg">
            <img src={dress2} alt="" className="w-full h-auto" />
            <h3 className="text-center mt-2 font-sans text-base font-semibold text-gray-600 tracking-tighter">
              Permanent Collection
            </h3>
            <h1 className="text-lg font-semibold text-center mt-1">
              Premium Suit
            </h1>
            <div className="flex text-center justify-center items-center gap-2 mt-2">
              <img src={color2} alt="" className="w-6 h-6" />
              <img src={color1} alt="" className="w-6 h-6" />
              <img src={color1} alt="" className="w-6 h-6" />
            </div>
            <h1 className="text-lg font-semibold text-center mt-2">$790</h1>
          </div>
          {/* Card 3 */}
          <div className="border-2 items-center justify-center p-4 rounded-lg">
            <img src={dress3} alt="" className="w-full h-auto" />
            <h3 className="text-center mt-2 font-sans text-base font-semibold text-gray-600 tracking-tighter">
              Permanent Collection
            </h3>
            <h1 className="text-lg font-semibold text-center mt-1">
              Premium Suit
            </h1>
            <div className="flex text-center justify-center items-center gap-2 mt-2">
              <img src={color2} alt="" className="w-6 h-6" />
              <img src={color1} alt="" className="w-6 h-6" />
              <img src={color1} alt="" className="w-6 h-6" />
            </div>
            <h1 className="text-lg font-semibold text-center mt-2">$790</h1>
          </div>
          {/* Card 4 */}
          <div className="border-2 items-center justify-center p-4 rounded-lg">
            <img src={dress1} alt="" className="w-full h-auto" />
            <h3 className="text-center mt-2 font-sans text-base font-semibold text-gray-600 tracking-tighter">
              Permanent Collection
            </h3>
            <h1 className="text-lg font-semibold text-center mt-1">
              Premium Suit
            </h1>
            <div className="flex text-center justify-center items-center gap-2 mt-2">
              <img src={color2} alt="" className="w-6 h-6" />
              <img src={color1} alt="" className="w-6 h-6" />
              <img src={color1} alt="" className="w-6 h-6" />
            </div>
            <div className="flex justify-center gap-8">
              <h1 className="text-lg font-semibold text-center  line-through mt-2">
                $1,290
              </h1>
              <h1 className="text-lg font-semibold text-center mt-2">$790</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

