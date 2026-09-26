"use client";

import type { Workout } from "../../types/types";
import { usePlan } from "../../context/PlanContext";
import { toast } from "react-toastify";
import { Plus, Bookmark } from "lucide-react";

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

    const handleAddToPlan = () => {
        if (isInPlan) {
            toast.info("Already in your plan!");
            return;
        }

        addToPlan(workout);
        toast.success("Added to today's plan!");
    };

    return (
        <div className="flex flex-wrap gap-3 mt-7">

            {/* Add to Plan */}
            <button
                onClick={handleAddToPlan}
                className="bg-lime-400 text-black px-5 py-3 rounded-md font-bold text-sm flex items-center gap-2"
            >
                <Plus size={18} />
                Add to today&apos;s plan
            </button>

            {/* Save */}
            <button
                onClick={() => {
                    if (isSaved) {
                        toast.info("Already saved!");
                        return;
                    }

                    saveWorkout(workout);
                    toast.success("Workout saved!");
                }}
                className="border border-gray-700 px-5 py-3 rounded-md text-sm flex items-center gap-2"
            >
                <Bookmark size={18} />
                Save for later
            </button>

        </div>
    );
};

export default PlanButtons;