import { Link } from "react-router-dom";
export default function Error() {
  return (
    // wrapper

    <div className="bg-white h-screen  w-screen flex flex-col justify-center items-center py-10" style={{ fontFamily: "DM Serif Display, sans-serif" }}>
      <div
        className=" h-full w-full bg-center bg-no-repeat flex justify-center "
        style={{
          backgroundImage:
            "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
        }}
      >
        <h1 className="text-5xl font-bold text-red-600">404</h1>
      </div>
      <div className="flex justify-center flex-col items-center text-3xl font-bold tracking-widest text-center gap-3">
        <h3 >Look like you're lost</h3>

        <p>the page you are looking for not available!</p>

        <Link to={'/'} className="border px-6 py-3 bg-emerald-400 rounded-xl text-white text-xl">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
