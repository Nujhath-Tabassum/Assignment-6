"use client";

import Image from "next/image";
import Link from "next/link";
import { usePlan } from "../../../context/PlanContext";

const SavedPlan = () => {
    const { savedWorkouts } = usePlan();

    return (
        <main className="min-h-screen bg-[#0d0e11] text-white">

            <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">

                <h1 className="text-2xl font-bold uppercase">
                    SAVED
                </h1>

                <p className="text-gray-500 text-xs mt-2">
                    Workouts you saved for later.
                </p>

                <div className="mt-6 space-y-3">

                    {savedWorkouts.length === 0 ? (

                        <div className="min-h-[235px] border border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center text-center">

                            <h2 className="text-base font-bold uppercase">
                                NO SAVED WORKOUTS
                            </h2>

                            <p className="text-[10px] text-gray-500 mt-2">
                                Save a workout from the library to see it here.
                            </p>

                            <Link
                                href="/"
                                className="mt-5 bg-lime-400 text-black px-6 py-2.5 rounded-full text-[10px] font-bold"
                            >
                                Go to workouts
                            </Link>

                        </div>

                    ) : (

                        savedWorkouts.map((workout) => (

                            <div
                                key={workout.id}
                                className="bg-[#141519] border border-gray-800 rounded-xl p-3 flex items-center justify-between gap-4"
                            >

                                <div className="flex items-center gap-3">

                                    <div className="relative w-24 h-14 rounded-lg overflow-hidden shrink-0">

                                        <Image
                                            src={workout.image}
                                            alt={workout.name}
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                    <div>

                                        <h3 className="text-xs font-bold uppercase">
                                            {workout.name}
                                        </h3>

                                        <p className="text-[9px] text-gray-500 mt-1">
                                            {workout.equipment}
                                        </p>

                                        <div className="flex gap-3 mt-2 text-[9px] text-gray-300">

                                            <span>
                                                ◷ {workout.duration} min
                                            </span>

                                            <span>
                                                ♨ {workout.caloriesBurned} kcal
                                            </span>

                                            <span>
                                                ☆ {workout.rating}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                <Link
                                    href={`/workouts/${workout.id}`}
                                    className="border border-gray-700 px-4 py-2 rounded-full text-[9px]"
                                >
                                    View Details
                                </Link>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </main>
    );
};

export default SavedPlan;