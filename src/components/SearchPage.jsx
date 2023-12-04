import {
    IoIosSearch,
    IoMdTrendingUp,
    FaRegUser,
    IoIosAddCircleOutline,
    MdOutlineEdit,
    BiSearchAlt,
} from "../icons";

export default function SearchPage() {
    return (
        // wrapper
        <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center   bg-[#272727]">
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
            <div className="w-[90%] md:pl-52  text-white flex flex-col md:justify-start  md:items-start items-center  h-full md:py-14 py-4 pb-20 md:pb-0 md:gap-2 gap-4">
                {/* search bar */}
                <div className="w-[90%]  relative flex justify-center items-center md:mb-5">
                    <label
                        className="text-[#6EEB83] md:text-3xl text-xl absolute top-3 right-8"
                        htmlFor="search"
                    >
                        <BiSearchAlt />
                    </label>
                    <input
                        className="px-9 py-2 w-full outline-none text-[#A5A5A5] md:text-xl text-lg border-2 border-[#6EEB83] rounded-full bg-transparent "
                        type="search"
                        name="search"
                        id="search"
                        placeholder="search"
                    />
                </div>

                {/* horizontal line */}
                <p className="w-[90%] mx-auto md:mx-0 border-2 border-[#A5A5A5]  rounded-full"></p>

                {/* lower section */}
                <div className="md:w-[90%] w-full flex flex-col items-start md:mt-4 md:gap-16 gap-14 mb-10">

                    {/* card 1 */}
                    <div className="flex flex-col items-start gap-2 w-full">
                        {/* title and meta data */}
                        <div className="w-full flex flex-col items-start justify-start ">
                            <h1
                                className="md:text-4xl text-center md:text-start text-lg text-[#6EEB83] not-italic font-400"
                                style={{ fontFamily: "DM Serif Display, sans-serif" }}
                            >
                                Embracing Change: A Journey of Self-Discovery
                            </h1>

                            {/* metadata */}
                            <div className="w-full" style={{ fontFamily: "Lexend Deca, sans-serif" }}>
                                <h3 className="text-[#A5A5A5] text-center md:text-start text-xs md:text-base">
                                    written by @lokesh293 on 27 may 2022
                                </h3>
                            </div>
                        </div>

                        {/* hastag section */}
                        <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
                            {/* hastag 1 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #PersonalGrowth
                            </button>

                            {/* hastag 2 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #ChangeIsBeautiful
                            </button>

                            {/* hastag 3 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #SelfDiscovery
                            </button>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="flex flex-col items-start gap-2 w-full">
                        {/* title and meta data */}
                        <div className="w-full flex flex-col items-start justify-start ">
                            <h1
                                className="md:text-4xl text-center md:text-start text-lg text-[#6EEB83] not-italic font-400"
                                style={{ fontFamily: "DM Serif Display, sans-serif" }}
                            >
                                Embracing Change: A Journey of Self-Discovery
                            </h1>

                            {/* metadata */}
                            <div className="w-full" style={{ fontFamily: "Lexend Deca, sans-serif" }}>
                                <h3 className="text-[#A5A5A5] text-center md:text-start text-xs md:text-base">
                                    written by @lokesh293 on 27 may 2022
                                </h3>
                            </div>
                        </div>

                        {/* hastag section */}
                        <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
                            {/* hastag 1 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #PersonalGrowth
                            </button>

                            {/* hastag 2 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #ChangeIsBeautiful
                            </button>

                            {/* hastag 3 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #SelfDiscovery
                            </button>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="flex flex-col items-start gap-2 w-full">
                        {/* title and meta data */}
                        <div className="w-full flex flex-col items-start justify-start ">
                            <h1
                                className="md:text-4xl text-center md:text-start text-lg text-[#6EEB83] not-italic font-400"
                                style={{ fontFamily: "DM Serif Display, sans-serif" }}
                            >
                                Embracing Change: A Journey of Self-Discovery
                            </h1>

                            {/* metadata */}
                            <div className="w-full" style={{ fontFamily: "Lexend Deca, sans-serif" }}>
                                <h3 className="text-[#A5A5A5] text-center md:text-start text-xs md:text-base">
                                    written by @lokesh293 on 27 may 2022
                                </h3>
                            </div>
                        </div>

                        {/* hastag section */}
                        <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
                            {/* hastag 1 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #PersonalGrowth
                            </button>

                            {/* hastag 2 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #ChangeIsBeautiful
                            </button>

                            {/* hastag 3 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #SelfDiscovery
                            </button>
                        </div>
                    </div>

                    {/* card 4 */}
                    <div className="flex flex-col items-start gap-2 w-full">
                        {/* title and meta data */}
                        <div className="w-full flex flex-col items-start justify-start ">
                            <h1
                                className="md:text-4xl text-center md:text-start text-lg text-[#6EEB83] not-italic font-400"
                                style={{ fontFamily: "DM Serif Display, sans-serif" }}
                            >
                                Embracing Change: A Journey of Self-Discovery
                            </h1>

                            {/* metadata */}
                            <div className="w-full" style={{ fontFamily: "Lexend Deca, sans-serif" }}>
                                <h3 className="text-[#A5A5A5] text-center md:text-start text-xs md:text-base">
                                    written by @lokesh293 on 27 may 2022
                                </h3>
                            </div>
                        </div>

                        {/* hastag section */}
                        <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
                            {/* hastag 1 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #PersonalGrowth
                            </button>

                            {/* hastag 2 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #ChangeIsBeautiful
                            </button>

                            {/* hastag 3 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #SelfDiscovery
                            </button>
                        </div>
                    </div>

                    {/* card 5 */}
                    <div className="flex flex-col items-start gap-2 w-full">
                        {/* title and meta data */}
                        <div className="w-full flex flex-col items-start justify-start ">
                            <h1
                                className="md:text-4xl text-center md:text-start text-lg text-[#6EEB83] not-italic font-400"
                                style={{ fontFamily: "DM Serif Display, sans-serif" }}
                            >
                                Embracing Change: A Journey of Self-Discovery
                            </h1>

                            {/* metadata */}
                            <div className="w-full" style={{ fontFamily: "Lexend Deca, sans-serif" }}>
                                <h3 className="text-[#A5A5A5] text-center md:text-start text-xs md:text-base">
                                    written by @lokesh293 on 27 may 2022
                                </h3>
                            </div>
                        </div>

                        {/* hastag section */}
                        <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
                            {/* hastag 1 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #PersonalGrowth
                            </button>

                            {/* hastag 2 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #ChangeIsBeautiful
                            </button>

                            {/* hastag 3 */}
                            <button className="border text-xs md:text-base border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">
                                #SelfDiscovery
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
