
import Image from "next/image";
import Link from "next/link";

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

interface WorkoutCardProps {
    workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link href={`/workouts/${workout.id}`}>
            <div className="bg-[#16171b] border border-gray-800 rounded-xl overflow-hidden">

                <div className="relative w-full h-44">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-5">

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

                    <h3 className="text-white font-bold">
                        {workout.name}
                    </h3>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;
