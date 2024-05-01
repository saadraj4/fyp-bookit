import React from "react";
import img from "../assets/img/blog/3.jpg";
import img1 from "../assets/img/blog/1.png";
import img2 from "../assets/img/blog/2.jpg";
import img3 from "../assets/img/blog/4.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Blog_Details() {
  return (
    <div>
      <div>
        <div className="w-full p-20">
          <div className="grid grid-cols-4 gap-x-5">
            <div className="col-span-3 bg-slate-100 rounded-md">
              <div className="details rounded-md shadow-slate-400 border">
                <img src={img} className="w-full rounded-tl-md rounded-tr-md" />
              </div>
              <div className="text my-10 mx-5 ">
                <h1 className="text-slate-700 font-bold text-4xl">
                  Swat Vally: Here’s All You Need to Know
                </h1>
                <p className="text-slate-800 p-5">
                  Pakistan is home to a number of the world’s most stunning
                  locations. currently, the security scenario has improved over
                  the past 5 years, commercial enterprise is prospering and
                  guests from across the world area unit returning in droves to
                  marvel at the natural scenery of the country. Speaking of
                  mesmeric landscapes and traveler destinations in Islamic
                  Republic of Pakistan, have you ever been to Swat Valley?
                  Cocooned in the foothills of the Hindu Kush mountains, Swat
                  Valley is famously known as “the Switzerland of the East” and
                  rightfully so. People here enjoy cold weather almost
                  throughout the year. Since the valley is located in the
                  Malakand Division of KPK, locals mostly belong to the Gujjar,
                  Pashtun and Kohistani communities. These people are famous for
                  their friendly and hospitable nature. From food to culture;
                  everything about the people of Swat is unique.
                </p>
              </div>
              <div className="text my-10 mx-5 ">
              <h1 className="text-slate-700 font-bold text-4xl">Swat Vally: Here’s All You Need to Know</h1>
              <p className="text-slate-800 p-5">Pakistan is home to a number of the world’s most stunning locations. currently, the security scenario has improved over the past 5 years, commercial enterprise is prospering and guests from across the world area unit returning in droves to marvel at the natural scenery of the country. Speaking of mesmeric landscapes and traveler destinations in Islamic Republic of Pakistan, have you ever been to Swat Valley?

              Cocooned in the foothills of the Hindu Kush mountains, Swat Valley is famously known as “the Switzerland of the East” and rightfully so. People here enjoy cold weather almost throughout the year. Since the valley is located in the Malakand Division of KPK, locals mostly belong to the Gujjar, Pashtun and Kohistani communities. These people are famous for their friendly and hospitable nature. From food to culture; everything about the people of Swat is unique.</p>
              </div>

              <div className="text my-10 mx-5 ">
              <h1 className="text-slate-700 font-bold text-4xl">
              HOW TO GET TO SWAT VALLEY?
              </h1>
              <p className="text-slate-800 p-5">
                <b className="my-5">Unveiling the Jewel of Pakistan: The Enchanting Beauty of Swat Valley:</b>
                <br />
                Welcome to the breathtaking Swat Valley, nestled like a precious gem in the heart of Pakistan. Prepare to embark on a journey of discovery as we unravel the captivating allure of this hidden paradise. From majestic mountains to serene rivers, Swat Valley offers an enchanting tapestry of natural beauty that will leave you spellbound.
              </p>
              <p className="text-slate-800 p-5">
                <b className="my-5">A Cultural Melting Pot:</b>
                <br />
                Beyond its natural splendor, Swat Valley boasts a rich cultural heritage that dates back thousands of years. Immerse yourself in the vibrant tapestry of Pashtun culture as you explore ancient archaeological sites, including the renowned Butkara Stupa and the imposing Swat Museum. Indulge your senses in the colorful bazaars of Mingora, where the aromas of exotic spices and the sounds of traditional music mingle in the air. Every corner of Swat Valley tells a story, inviting you to uncover its hidden treasures and embrace its timeless traditions.
              </p>
              <p className="text-slate-800 p-5">
                <b className="my-5">Hospitality Like No Other:</b>
                <br />
                One of the most endearing qualities of Swat Valley is the warmth and hospitality of its people. Prepare to be welcomed with open arms as you immerse yourself in the local culture and traditions. From cozy guesthouses overlooking the pristine Swat River to luxurious resorts nestled in the heart of the valley, accommodation options abound for every budget and preference. Experience the true essence of Pakistani hospitality as you dine on sumptuous local delicacies and immerse yourself in the warm hospitality of the Swati people.
              </p>
              <p className="text-slate-800 p-5">
                <b className="my-5">Embark on Your Swat Adventure Today:</b>
                <br />
                Whether you’re a seasoned traveler or a curious explorer, Swat Valley beckons with its irresistible charm and timeless allure. Embark on an unforgettable journey of discovery as you explore the hidden treasures of this enchanting paradise. From thrilling outdoor adventures to soul-stirring cultural experiences, Swat Valley promises an immersive and unforgettable escape from the ordinary. Come, discover the magic of Swat Valley and create memories that will last a lifetime.
              </p>
            </div>
            </div>
            <div className="col-span-1  rounded-tr-md rounded-tl-md">
              <div className="categories my-4 bg-slate-300 rounded-md pb-3">
                <h1 className="font-bold rounded-tr-md rounded-tl-md text-2xl bg-slate-800 shadow-lg shadow-white text-white p-5">
                  Categories
                </h1>
                <div className="my-5 categories text-slate-500">
                  <div className="p-[8px] px-3 text-[15px] m-2 rounded-md bg-slate-100">
                    <a href="#" className="flex  items-center underline">
                      {" "}
                      <IoIosArrowForward className="mr-3" /> Information
                    </a>
                  </div>
                  <div className="p-[8px] px-3 text-[15px] m-2 rounded-md bg-slate-100">
                    <a href="#" className="flex  items-center underline">
                      {" "}
                      <IoIosArrowForward className="mr-3" /> Travelling{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="recent-posts my-2 bg-slate-300 rounded-md pb-3">
                <h1 className="font-bold text-2xl bg-slate-800 shadow-lg rounded-tr-md rounded-tl-md shadow-white text-white p-5">
                  Recent Posts
                </h1>
                <div className="my-5 posts categories text-slate-800">
                  <div className="post flex gap-5 items-center justify-evenly p-3">
                    <img src={img1} className="w-20 h-20 rounded-md" />
                    <a href="#" className="underline">
                      Pakistan where adventure meets tradition
                    </a>
                  </div>
                  <div className="post flex gap-5 items-center justify-evenly p-3">
                    <img src={img2} className="w-20 h-20 rounded-md" />
                    <a href="#" className="underline">
                      Thandiani Hill Station Abbottabad
                    </a>
                  </div>
                  <div className="post flex gap-5 items-center justify-evenly p-3">
                    <img src={img3} className="w-20 h-20 rounded-md" />
                    <a href="#" className="underline">
                      Book Your KPL tickets online from Bookkaru.com
                    </a>
                  </div>
                  <div className="post flex gap-5 items-center justify-evenly p-3">
                    <img src={img1} className="w-20 h-20 rounded-md" />
                    <a href="#" className="underline">
                      Pakistan where adventure meets tradition
                    </a>
                  </div>
                  <div className="post flex gap-5 items-center justify-evenly p-3">
                    <img src={img2} className="w-20 h-20 rounded-md" />
                    <a href="#" className="underline">
                      Thandiani Hill Station Abbottabad
                    </a>
                  </div>
                  <div className="post flex gap-5 items-center justify-evenly p-3">
                    <img src={img3} className="w-20 h-20 rounded-md" />
                    <a href="#" className="underline">
                      Book Your KPL tickets online from Bookkaru.com
                    </a>
                  </div>
                  <div className="post flex gap-5 items-center justify-evenly p-3">
                    <img src={img1} className="w-20 h-20 rounded-md" />
                    <a href="#" className="underline">
                      Pakistan where adventure meets tradition
                    </a>
                  </div>
                  <div className="post flex gap-5 items-center justify-evenly p-3">
                    <img src={img2} className="w-20 h-20 rounded-md" />
                    <a href="#" className="underline">
                      Thandiani Hill Station Abbottabad
                    </a>
                  </div>
                  <div className="post flex gap-5 items-center justify-evenly p-3">
                    <img src={img3} className="w-20 h-20 rounded-md" />
                    <a href="#" className="underline">
                      Book Your KPL tickets online from Bookkaru.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
