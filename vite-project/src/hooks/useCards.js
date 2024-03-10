import { useContext } from "react";
import { TaskContext } from "../contexts/cards";

export function useTasks() {
    return useContext(TaskContext)
}