import Image from "next/image";
import Link from "next/link";

import clockIcon from "../../assects/icons8-clock-50.png";
import flameIcon from "../../assects/icons8-fire-32.png";
import starIcon from "../../assects/icons8-star-30.png";

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
        <Link href={`/workouts/${workout.id}`}>
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

                {/* Card Content */}
                <div className="p-4">

                    {/* Muscle Groups */}
                    <div className="flex gap-2 mb-3">
                        {workout.muscleGroups.slice(0, 2).map((muscle) => (
                            <span
                                key={muscle}
                                className="bg-lime-400 text-black text-[9px] font-bold px-2.5 py-1 rounded-full"
                            >
                                {muscle.toUpperCase()}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h3 className="text-white text-sm font-bold uppercase tracking-wide">
                        {workout.name}
                    </h3>

                    {/* Equipment */}
                    <p className="text-gray-500 text-xs mt-1">
                        {workout.equipment}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-800 my-3"></div>

                    {/* Workout Info */}
                    <div className="flex items-center gap-4 text-gray-400 text-[10px]">

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
        </Link>
    );
};

export default WorkoutCard;