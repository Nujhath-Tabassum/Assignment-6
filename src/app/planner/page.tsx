"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePlan } from "../../context/PlanContext";

import clockIcon from "../../assects/icons8-clock-50.png";
import flameIcon from "../../assects/icons8-fire-32.png";
import starIcon from "../../assects/icons8-star-30.png";

const MyPlan = () => {
    const {
        todayPlan,
        savedWorkouts,
        completedWorkouts,
        removeFromPlan,
        markAsDone,
    } = usePlan();

    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");

    const sortedTodayPlan = [...todayPlan].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        return a.rating - b.rating;
    });

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

            <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">

                {/* Heading */}
                <h1 className="text-2xl font-bold uppercase">
                    MY PLAN
                </h1>

                <p className="text-gray-500 text-xs mt-1">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                {/* Summary */}
                <div className="mt-5 bg-[#141519] border border-gray-800 rounded-xl">
                    <div className="grid grid-cols-3">

                        <div className="px-4 md:px-5 py-6 border-r border-gray-800">
                            <p className="text-[10px] text-gray-500">
                                Exercises
                            </p>

                            <p className="text-3xl font-bold text-lime-400 mt-1">
                                {todayPlan.length}
                            </p>
                        </div>

                        <div className="px-4 md:px-5 py-6 border-r border-gray-800">
                            <p className="text-[10px] text-gray-500">
                                Minutes
                            </p>

                            <p className="text-3xl font-bold mt-1">
                                {totalMinutes}
                            </p>
                        </div>

                        <div className="px-4 md:px-5 py-6">
                            <p className="text-[10px] text-gray-500">
                                Calories
                            </p>

                            <p className="text-3xl font-bold mt-1">
                                {totalCalories}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-0 mt-6">

                    <Link
                        href="/planner/todaysPlan"
                        className="bg-[#202229] border border-gray-800 px-4 py-2.5 rounded-l-lg text-[10px] font-bold"
                    >
                        Today&apos;s Plan
                    </Link>

                    <Link
                        href="/planner/savedPlan"
                        className="bg-[#16171b] border border-gray-800 border-l-0 px-4 py-2.5 rounded-r-lg text-[10px] text-gray-500"
                    >
                        Saved&nbsp; {savedWorkouts.length}
                    </Link>

                </div>

                {/* Sort By */}
                <div className="flex justify-end items-center mt-4">
                    <div className="flex items-center gap-2">

                        <span className="text-[10px] text-gray-500">
                            Sort By
                        </span>

                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) =>
                                    setSortBy(
                                        e.target.value as
                                            | "duration"
                                            | "calories"
                                            | "rating"
                                    )
                                }
                                className="appearance-none bg-[#16171b] border border-gray-800 text-gray-300 text-[10px] rounded-lg pl-3 pr-8 py-2 outline-none cursor-pointer"
                            >
                                <option value="duration">
                                    Duration
                                </option>

                                <option value="calories">
                                    Calories
                                </option>

                                <option value="rating">
                                    Rating
                                </option>
                            </select>

                            <svg
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none text-gray-500"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                    </div>
                </div>

                {/* Workout List */}
                <div className="mt-4 space-y-3">

                    {todayPlan.length === 0 ? (

                        <div className="min-h-[235px] border border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center text-center">

                            <h2 className="text-base font-bold uppercase">
                                NOTHING HERE YET
                            </h2>

                            <p className="text-[10px] text-gray-500 mt-2">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/"
                                className="mt-5 bg-lime-400 text-black px-6 py-2.5 rounded-full text-[10px] font-bold"
                            >
                                Go to workouts
                            </Link>

                        </div>

                    ) : (

                        sortedTodayPlan.map((workout) => {

                            const isDone =
                                completedWorkouts.includes(workout.id);

                            return (
                                <div
                                    key={workout.id}
                                    className="bg-[#141519] border border-gray-800 rounded-xl p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                                >

                                    {/* Left */}
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

                                                {/* Clock */}
                                                <span className="flex items-center gap-1">
                                                    <Image
                                                        src={clockIcon}
                                                        alt="duration"
                                                        width={13}
                                                        height={13}
                                                        style={{
                                                            filter:
                                                                "brightness(0) saturate(100%) invert(85%) sepia(90%) saturate(1000%) hue-rotate(25deg) brightness(105%) contrast(105%)",
                                                        }}
                                                    />
                                                    {workout.duration} min
                                                </span>

                                                {/* Flame */}
                                                <span className="flex items-center gap-1">
                                                    <Image
                                                        src={flameIcon}
                                                        alt="calories"
                                                        width={13}
                                                        height={13}
                                                        style={{
                                                            filter:
                                                                "brightness(0) saturate(100%) invert(85%) sepia(90%) saturate(1000%) hue-rotate(25deg) brightness(105%) contrast(105%)",
                                                        }}
                                                    />
                                                    {workout.caloriesBurned} kcal
                                                </span>

                                                {/* Star */}
                                                <span className="flex items-center gap-1">
                                                    <Image
                                                        src={starIcon}
                                                        alt="rating"
                                                        width={13}
                                                        height={13}
                                                        style={{
                                                            filter:
                                                                "brightness(0) saturate(100%) invert(85%) sepia(90%) saturate(1000%) hue-rotate(25deg) brightness(105%) contrast(105%)",
                                                        }}
                                                    />
                                                    {workout.rating}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    {/* Buttons */}
                                    <div className="flex items-center gap-2">

                                        <Link
                                            href={`/workouts/${workout.id}`}
                                            className="border border-gray-700 px-4 py-2 rounded-full text-[9px] hover:border-gray-500"
                                        >
                                            View Details
                                        </Link>

                                        <button
                                            onClick={() =>
                                                markAsDone(workout.id)
                                            }
                                            disabled={isDone}
                                            className="bg-lime-400 text-black px-4 py-2 rounded-full text-[9px] font-bold disabled:opacity-50"
                                        >
                                            {isDone
                                                ? "✓ Done"
                                                : "✓ Mark as Done"}
                                        </button>

                                        <button
                                            onClick={() =>
                                                removeFromPlan(workout.id)
                                            }
                                            className="text-gray-500 hover:text-white text-lg px-2"
                                        >
                                            ×
                                        </button>

                                    </div>

                                </div>
                            );
                        })

                    )}

                </div>

            </div>

        </main>
    );
};

export default MyPlan;