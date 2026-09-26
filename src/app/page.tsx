import { Suspense } from "react";
import Banner from "../components/homepage/banner";
import WorkoutLibrary from "../components/homepage/WorkoutLibrary";

const page = () => {
    return (
        <div>
            <Banner />

            <Suspense
                fallback={
                    <section className="px-4 md:px-6 py-8">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-xl font-bold text-white">
                                THE LIBRARY
                            </h2>

                            <p className="text-gray-500 text-xs mt-1 mb-5">
                                Twelve lifts covering every major muscle group.
                            </p>

                            <div className="flex justify-center items-center min-h-[300px]">
                                <div className="w-8 h-8 border-4 border-gray-700 border-t-lime-400 rounded-full animate-spin"></div>
                            </div>
                        </div>
                    </section>
                }
            >
                <WorkoutLibrary />
            </Suspense>
        </div>
    );
};

export default page;