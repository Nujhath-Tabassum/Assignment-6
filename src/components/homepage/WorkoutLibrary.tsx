import React from "react";
import WorkoutCard from "../shared/WorkoutCard";
import { Workout } from "../../types/types";

const getWorkouts = async (): Promise<Workout[]> => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    const data: Workout[] = await res.json();

    return data;
};

const WorkoutLibrary = async () => {
    const workouts = await getWorkouts();

    return (
        <section className="px-4 md:px-6 py-8">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-xl font-bold text-white">
                    THE LIBRARY
                </h2>

                <p className="text-gray-500 text-xs mt-1 mb-5">
                    The essential strength and conditioning moves.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {workouts.map((workout) => (
                        <WorkoutCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}

                </div>
            </div>
        </section>
    );
};

export default WorkoutLibrary;