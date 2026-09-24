import Image from "next/image";
import React from "react";

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
}

interface WorkoutCardProps {
    workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <div className="bg-[#16171b] border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition">

            {/* Image */}
            <div className="relative w-full h-44">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                    {workout.muscleGroups.slice(0, 2).map((muscle) => (
                        <span
                            key={muscle}
                            className="bg-lime-400 text-black text-[10px] font-bold px-2.5 py-1 rounded-full"
                        >
                            {muscle.toUpperCase()}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h3 className="text-white font-bold text-base uppercase">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="text-gray-500 text-xs mt-1">
                    {workout.equipment}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-4 pt-3"></div>

                {/* Info */}
                <div className="flex items-center gap-4 text-gray-500 text-xs">
                    <span>◷ {workout.duration} min</span>
                    <span>♨ {workout.caloriesBurned} kcal</span>
                    <span>☆ {workout.rating}</span>
                </div>

            </div>
        </div>
    );
};

export default WorkoutCard;