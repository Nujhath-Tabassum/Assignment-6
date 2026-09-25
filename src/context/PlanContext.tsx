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

    addToPlan: (workout: Workout) => void;
    saveWorkout: (workout: Workout) => void;
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

    useEffect(() => {
        const plan = localStorage.getItem("todayPlan");
        const saved = localStorage.getItem("savedWorkouts");

        if (plan) {
            setTodayPlan(JSON.parse(plan));
        }

        if (saved) {
            setSavedWorkouts(JSON.parse(saved));
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

    const addToPlan = (workout: Workout) => {
        setTodayPlan((previousPlan) => {
            if (
                previousPlan.some(
                    (item) => item.id === workout.id
                )
            ) {
                return previousPlan;
            }

            if (previousPlan.length >= 5) {
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

    return (
        <PlanContext.Provider
            value={{
                todayPlan,
                savedWorkouts,
                addToPlan,
                saveWorkout,
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