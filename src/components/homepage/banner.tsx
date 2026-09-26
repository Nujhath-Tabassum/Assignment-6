import Image from "next/image";
import logo from "../../assects/banner.png";

const Banner = () => {
    return (
        <section className="px-4 md:px-6 py-12">
            <div className="max-w-7xl mx-auto min-h-[500px] rounded-2xl border border-gray-800 bg-[#141519] px-6 md:px-10 lg:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                {/* Left Content */}
                <div className="text-left">

                    <span className="text-xs md:text-sm font-bold tracking-widest text-lime-400">
                        WORKOUT LIBRARY
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-5 leading-[0.95] text-white">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="text-gray-400 mt-6 text-sm md:text-base leading-6 max-w-xl">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <a
                        href="#library"
                        className="inline-block mt-7 px-6 py-3 bg-lime-400 text-black rounded-md font-bold text-sm hover:bg-lime-300 transition"
                    >
                        BROWSE WORKOUTS
                    </a>

                </div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-end">

                    <Image
                        src={logo}
                        alt="FitLog Workout"
                        width={450}
                        height={450}
                        priority
                        className="w-[280px] md:w-[350px] lg:w-[450px] h-auto object-contain"
                    />

                </div>

            </div>
        </section>
    );
};

export default Banner;