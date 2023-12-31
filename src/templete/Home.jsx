import '../index.css'
import {
  IoIosSearch,
  IoMdTrendingUp,
  FaRegUser,
  IoIosAddCircleOutline,
} from "../icons";
export default function Home() {
  return (
    // wrapper
    <div className="w-full    flex md:flex-row flex-col-reverse justify-between items-center   bg-[#272727]">
      {/* nav bar */}
      <div className="md:w-[6%] z-10  flex fixed  backdrop-blur-2xl md:backdrop-blur-0 bottom-1   w-[90%] md:h-screen h-[20px] md:border-r-2 border-2 md:border-0 border-[#6EEB83] text-white  md:flex-col flex-row items-center justify-between py-10 px-2 ">
        {/* logo */}
        <div className="w-full md:inline-block hidden">
          <img
            src="https://ik.imagekit.io/8fgpvoiai/artinest/artinest-logo_zEoxudr28k.png?updatedAt=1701426547541itial-scale=1.0"
            alt="artinest-logo"
          />
        </div>

        {/* profile icon and nav content*/}
        <ul className="w-full flex md:pr-0 pr-5  md:flex-col flex-row md:justify-center justify-evenly items-center md:gap-6 gap-2 ">
          <li className="w-full flex justify-center items-center">
            <FaRegUser className="text-[#6EEB83] text-4xl " />
          </li>
          <li className="w-full  flex flex-col justify-center items-center">
            <IoIosSearch className="text-[#6EEB83] text-4xl font-bold" />
            <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>search</h3>
          </li>
          <li className="w-full flex flex-col justify-center items-center">
            <IoMdTrendingUp className="text-[#6EEB83] text-4xl font-bold" />
            <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>trending</h3>
          </li>
        </ul>

        {/* create  */}
        <ul className="md:w-full w-[30%] md:pr-0 pr-5">
          <li className="w-full  flex flex-col justify-center items-center">
            <IoIosAddCircleOutline className="text-[#6EEB83] text-4xl font-bold" />
            <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>create</h3>
          </li>
        </ul>
      </div>

      {/* content */}
      <div className="w-[90%] md:pl-40   text-white flex flex-col md:justify-start  md:items-start items-center  h-full md:py-14 py-4 pb-20 md:pb-0 md:gap-4 gap-1">
        {/* latest wrapper */}
        <div className="w-full flex justify-start md:items-start items-center ">
          {/* latest container */}
          <div className="flex flex-col items-center justify-center self-start md:w-[10%] w-full">
            <p className="border-2 rounded-full border-[#6EEB83] w-10"></p>
            <h3
              className="text-xl"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
            >
              Latest
            </h3>
          </div>
        </div>

        {/* post card 1 */}
        <div className="md:w-[90%] w-[95%] py-5 md:h-[300px] flex md:flex-row flex-col-reverse md:gap-6 gap-2 ">
          {/* meta data */}
          <div
            className=" md:h-full   md:w-[5%] w-full px-2 md:px-0 flex md:flex-col flex-row md:items-end justify-between md:justify-start items-center "
            style={{ fontFamily: "Lexend Deca, sans-serif" }}
          >
            {/* date container */}
            <div className=" md:w-full w-1/2  md:text-2xl text-lg font-bold gap-2 md:gap-0 flex md:flex-col md:justify-center items-end">
              <h2>27</h2>
              <h2>MAY</h2>
            </div>

            {/* username container */}
            <h1 className=" md:h-32 md:w-32 flex md:-rotate-90 items-end justify-center">
              @lokesghosh
            </h1>
          </div>

          {/* content */}
          <div className="h-full md:w-[80%] w-[90%] mx-auto md:mx-0 flex flex-col  gap-4 text-center md:text-start">
            <h1
              className="md:text-2xl text-lg text-[#6EEB83] not-italic font-400"
              style={{ fontFamily: "DM Serif Display, sans-serif" }}
            >
              Embracing Change: A Journey of Self-Discovery
            </h1>

            {/* content lower section */}
            <div className="w-full flex flex-col gap-5">
              {/* para section */}
              <div
                className="md:text-lg  text-sm"
                style={{ fontFamily: "Lexend Deca, sans-serif" }}
              >
                <h4 className="inline">
                  Discover the transformative power of embracing change. Through
                  challenges, we find hidden strengths. Embrace the journey of
                  self-discovery, and witness the beauty that unfolds when we
                  welcome change with open arms.
                </h4>
                <h4 className="inline text-[#6EEB83] cursor-pointer">
                  ...read more
                </h4>
              </div>

              {/* hastag section */}
              <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
                {/* hastag 1 */}
                <button className="border border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                  #PersonalGrowth
                </button>

                {/* hastag 2 */}
                <button className="border border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                  #ChangeIsBeautiful
                </button>

                {/* hastag 3 */}
                <button className="border border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                  #SelfDiscovery
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* post card 2 */}
        <div className="md:w-[90%] w-[95%] py-5 md:h-[300px] flex md:flex-row flex-col-reverse md:gap-6 gap-2 ">
          {/* meta data */}
          <div
            className=" md:h-full   md:w-[5%] w-full px-2 md:px-0 flex md:flex-col flex-row md:items-end justify-between md:justify-start items-center "
            style={{ fontFamily: "Lexend Deca, sans-serif" }}
          >
            {/* date container */}
            <div className=" md:w-full w-1/2  md:text-2xl text-lg font-bold gap-2 md:gap-0 flex md:flex-col md:justify-center items-end">
              <h2>27</h2>
              <h2>MAY</h2>
            </div>

            {/* username container */}
            <h1 className=" md:h-32 md:w-32 flex md:-rotate-90 items-end justify-center">
              @lokesghosh
            </h1>
          </div>

          {/* content */}
          <div className="h-full md:w-[80%] w-[90%] mx-auto md:mx-0 flex flex-col  gap-4 text-center md:text-start">
            <h1
              className="md:text-2xl text-lg text-[#6EEB83] not-italic font-400"
              style={{ fontFamily: "DM Serif Display, sans-serif" }}
            >
              Tech Trends 2023: Shaping Tomorrow's World
            </h1>

            {/* content lower section */}
            <div className="w-full flex flex-col gap-5">
              {/* para section */}
              <div
                className="md:text-lg  text-sm"
                style={{ fontFamily: "Lexend Deca, sans-serif" }}
              >
                <h4 className="inline">
                  Explore the exciting world of technology trends in 2023. From
                  AI advancements to sustainable innovations, witness the
                  evolution shaping our future. Join the conversation and stay
                  ahead in the dynamic tech landscape.
                </h4>
                <h4 className="inline text-[#6EEB83] cursor-pointer">
                  ...read more
                </h4>
              </div>

              {/* hastag section */}
              <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
                {/* hastag 1 */}
                <button className="border border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                  #TechTrends
                </button>

                {/* hastag 2 */}
                <button className="border border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                  #FutureTech
                </button>

                {/* hastag 3 */}
                <button className="border border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                  #Innovation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* post card 3 */}
        <div className="md:w-[90%]  w-[95%] py-5 md:h-[300px] flex md:flex-row flex-col-reverse md:gap-6 gap-2 ">
          {/* meta data */}
          <div
            className=" md:h-full   md:w-[5%] w-full px-2 md:px-0 flex md:flex-col flex-row md:items-end justify-between md:justify-start items-center "
            style={{ fontFamily: "Lexend Deca, sans-serif" }}
          >
            {/* date container */}
            <div className=" md:w-full w-1/2  md:text-2xl text-lg font-bold gap-2 md:gap-0 flex md:flex-col md:justify-center items-end">
              <h2>27</h2>
              <h2>MAY</h2>
            </div>

            {/* username container */}
            <h1 className=" md:h-32 md:w-32 flex md:-rotate-90 items-end justify-center">
              @lokesghosh
            </h1>
          </div>

          {/* content */}
          <div className="h-full md:w-[80%] w-[90%] mx-auto md:mx-0 flex flex-col  gap-4 text-center md:text-start">
            <h1
              className="md:text-2xl text-lg text-[#6EEB83] not-italic font-400"
              style={{ fontFamily: "DM Serif Display, sans-serif" }}
            >
              Mindful Living: Small Changes, Big Impact
            </h1>

            {/* content lower section */}
            <div className="w-full flex flex-col gap-5">
              {/* para section */}
              <div
                className="md:text-lg  text-sm"
                style={{ fontFamily: "Lexend Deca, sans-serif" }}
              >
                <h4 className="inline">
                  Embark on a journey towards mindful living. Discover how small
                  changes in daily habits can lead to a profound impact on
                  well-being. Embrace the power of presence and mindfulness for
                  a happier, healthier life
                </h4>
                <h4 className="inline text-[#6EEB83] cursor-pointer">
                  ...read more
                </h4>
              </div>

              {/* hastag section */}
              <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
                {/* hastag 1 */}
                <button className="border border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                  #SmallChangesBigImpact
                </button>

                {/* hastag 2 */}
                <button className="border border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                  #MindfulLiving
                </button>

                {/* hastag 3 */}
                <button className="border border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                  #MindfulnessMagic
                </button>

                {/* hastag 4 */}
                <button className="border border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                  #WellnessJourney
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
