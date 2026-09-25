"use client";

import Link from "next/link";
import { usePlan } from "../../context/PlanContext";

const MyPlan = () => {
    const { todayPlan, savedWorkouts } = usePlan();

    const totalMinutes = todayPlan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = todayPlan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <main className="min-h-screen bg-[#0d0e11] text-white">

            <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">

                <h1 className="text-2xl font-bold uppercase">
                    MY PLAN
                </h1>

                <p className="text-gray-500 text-xs mt-2">
                    Cap of five lifts for today. Finish them, then load more.
                </p>


                {/* Summary */}

                <div className="mt-6 bg-[#141519] border border-gray-800 rounded-xl">

                    <div className="grid grid-cols-3">

                        <div className="px-5 py-6 border-r border-gray-800">
                            <p className="text-[10px] text-gray-500">
                                Exercises
                            </p>

                            <p className="text-3xl font-bold text-lime-400 mt-1">
                                {todayPlan.length}
                            </p>
                        </div>


                        <div className="px-5 py-6 border-r border-gray-800">
                            <p className="text-[10px] text-gray-500">
                                Minutes
                            </p>

                            <p className="text-3xl font-bold mt-1">
                                {totalMinutes}
                            </p>
                        </div>


                        <div className="px-5 py-6">
                            <p className="text-[10px] text-gray-500">
                                Calories
                            </p>

                            <p className="text-3xl font-bold mt-1">
                                {totalCalories}
                            </p>
                        </div>

                    </div>

                </div>


                {/* Navigation */}

                <div className="flex gap-3 mt-7">

                    <Link
                        href="/my-plan/todays-plan"
                        className="bg-[#16171b] border border-gray-800 px-5 py-3 rounded-lg text-xs hover:bg-[#202229]"
                    >
                        Today&apos;s Plan
                    </Link>

                    <Link
                        href="/my-plan/saved"
                        className="bg-[#16171b] border border-gray-800 px-5 py-3 rounded-lg text-xs hover:bg-[#202229]"
                    >
                        Saved ({savedWorkouts.length})
                    </Link>

                </div>

            </div>

        </main>
    );
};

export default MyPlan;