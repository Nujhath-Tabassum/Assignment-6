"use client";

import type { Workout } from "../../types/types";
import { usePlan } from "../../context/PlanContext";

interface PlanButtonsProps {
    workout: Workout;
}

const PlanButtons = ({ workout }: PlanButtonsProps) => {
    const {
        todayPlan,
        savedWorkouts,
        addToPlan,
        saveWorkout,
    } = usePlan();

    const isInPlan = todayPlan.some(
        (item) => item.id === workout.id
    );

    const isSaved = savedWorkouts.some(
        (item) => item.id === workout.id
    );

    return (
        <div className="flex flex-wrap gap-3 mt-7">

            <button
                onClick={() => addToPlan(workout)}
                disabled={isInPlan || todayPlan.length >= 5}
                className="bg-lime-400 text-black px-5 py-3 rounded-md font-bold text-sm disabled:opacity-50"
            >
                {isInPlan
                    ? "Added to today's plan"
                    : "Add to today's plan"}
            </button>

            <button
                onClick={() => saveWorkout(workout)}
                disabled={isSaved}
                className="border border-gray-700 px-5 py-3 rounded-md text-sm disabled:opacity-50"
            >
                {isSaved
                    ? "Saved"
                    : "Save for later"}
            </button>

        </div>
    );
};

export default PlanButtons;