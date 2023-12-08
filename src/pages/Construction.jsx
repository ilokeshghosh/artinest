export default function Construction() {
    return (
        // wrappper
        <div className="bg-white relative h-screen w-screen overflow-hidden flex justify-center items-center">
            {/* video wrapper */}
            <div className=" border h-full w-full flex justify-center items-center">
                <video autoPlay muted loop>
                    <source src="https://ik.imagekit.io/8fgpvoiai/artinest/construction-video.mp4?updatedAt=1702038270510" />
                </video>
            </div>

            {/* content wrapper */}
            <div className="absolute bg-black/90 h-full w-full flex justify-center items-center" style={{ fontFamily: "DM Serif Display, sans-serif" }}>
                <h1 className="text-[#6EEB83] md:text-7xl text-3xl text-center w-full uppercase">👷🏿‍♂️Project under Construction 🚧</h1>
            </div>
        </div>
    );
}
