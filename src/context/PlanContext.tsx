"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import type { Workout } from "../types/types";

interface PlanContextType {
    todayPlan: Workout[];
    savedWorkouts: Workout[];
    completedWorkouts: number[];

    addToPlan: (workout: Workout) => void;
    saveWorkout: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;
    removeSavedWorkout: (id: number) => void;
    markAsDone: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(
    undefined
);

export const PlanProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
    const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);

    useEffect(() => {
        const plan = localStorage.getItem("todayPlan");
        const saved = localStorage.getItem("savedWorkouts");
        const completed = localStorage.getItem("completedWorkouts");

        if (plan) {
            setTodayPlan(JSON.parse(plan));
        }

        if (saved) {
            setSavedWorkouts(JSON.parse(saved));
        }

        if (completed) {
            setCompletedWorkouts(JSON.parse(completed));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "todayPlan",
            JSON.stringify(todayPlan)
        );
    }, [todayPlan]);

    useEffect(() => {
        localStorage.setItem(
            "savedWorkouts",
            JSON.stringify(savedWorkouts)
        );
    }, [savedWorkouts]);

    useEffect(() => {
        localStorage.setItem(
            "completedWorkouts",
            JSON.stringify(completedWorkouts)
        );
    }, [completedWorkouts]);

    const addToPlan = (workout: Workout) => {
        setTodayPlan((previousPlan) => {
            if (
                previousPlan.some(
                    (item) => item.id === workout.id
                )
            ) {
                return previousPlan;
            }

            return [...previousPlan, workout];
        });
    };

    const saveWorkout = (workout: Workout) => {
        setSavedWorkouts((previousSaved) => {
            if (
                previousSaved.some(
                    (item) => item.id === workout.id
                )
            ) {
                return previousSaved;
            }

            return [...previousSaved, workout];
        });
    };

    const removeFromPlan = (id: number) => {
        setTodayPlan((previousPlan) =>
            previousPlan.filter(
                (workout) => workout.id !== id
            )
        );
    };

    const removeSavedWorkout = (id: number) => {
        setSavedWorkouts((previousSaved) =>
            previousSaved.filter(
                (workout) => workout.id !== id
            )
        );
    };

    const markAsDone = (id: number) => {
        setCompletedWorkouts((previousCompleted) => {
            if (previousCompleted.includes(id)) {
                return previousCompleted;
            }

            return [...previousCompleted, id];
        });
    };

    return (
        <PlanContext.Provider
            value={{
                todayPlan,
                savedWorkouts,
                completedWorkouts,
                addToPlan,
                saveWorkout,
                removeFromPlan,
                removeSavedWorkout,
                markAsDone,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error(
            "usePlan must be used inside PlanProvider"
        );
    }

    return context;
};