
import Image from "next/image";
import React from "react";
import PlanButtons from "../../../app/buttons/PlanButtons";

interface Workout {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: string;
    duration: number;
    caloriesBurned: number;
    sets: number;
    reps: string;
    rating: number;
    description: string;
    instructions: string[];
}

interface WorkoutDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

const getWorkout = async (id: string): Promise<Workout> => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workout");
    }

    return res.json();
};

const WorkoutDetails = async ({
    params,
}: WorkoutDetailsProps) => {
    const { id } = await params;

    const workout = await getWorkout(id);

    return (
        <main className="min-h-screen bg-[#0d0e11] text-white px-5 py-10">

            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Image */}
                    <div className="relative w-full h-[500px]">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>

                    {/* Details */}
                    <div>

                        <h1 className="text-4xl font-bold uppercase">
                            {workout.name}
                        </h1>

                        <p className="text-gray-400 mt-2">
                            {workout.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="flex flex-wrap gap-2 mt-5">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Information */}
                        <div className="bg-[#16171b] border border-gray-800 rounded-xl mt-5">

                            <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                                <span className="text-xs text-gray-500">
                                    EQUIPMENT
                                </span>
                                <span>{workout.equipment}</span>
                            </div>

                            <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                                <span className="text-xs text-gray-500">
                                    DIFFICULTY
                                </span>
                                <span>{workout.difficulty}</span>
                            </div>

                            <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                                <span className="text-xs text-gray-500">
                                    SETS
                                </span>
                                <span>{workout.sets}</span>
                            </div>

                            <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                                <span className="text-xs text-gray-500">
                                    REPS
                                </span>
                                <span>{workout.reps}</span>
                            </div>

                            <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                                <span className="text-xs text-gray-500">
                                    DURATION
                                </span>
                                <span>{workout.duration} min</span>
                            </div>

                            <div className="flex justify-between px-4 py-4 border-b border-gray-800">
                                <span className="text-xs text-gray-500">
                                    CALORIES
                                </span>
                                <span>{workout.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex justify-between px-4 py-4">
                                <span className="text-xs text-gray-500">
                                    RATING
                                </span>
                                <span>⭐ {workout.rating}</span>
                            </div>

                        </div>

                        {/* Instructions */}
                        <div className="mt-6">

                            <h2 className="font-bold text-sm">
                                INSTRUCTIONS
                            </h2>

                            <ol className="mt-3 space-y-3 text-sm text-gray-400 list-decimal list-inside">

                                {workout.instructions.map(
                                    (instruction, index) => (
                                        <li key={index}>
                                            {instruction}
                                        </li>
                                    )
                                )}

                            </ol>

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3 mt-7">

                            <PlanButtons workout={workout} />

                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkoutDetails;

