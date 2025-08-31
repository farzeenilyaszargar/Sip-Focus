'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

type TaskItem = {
    text: string;
    completed: boolean;
};


export default function ToDo() {
    const [taskList, setTaskList] = useState<TaskItem[]>([]);
    const [task, setTask] = useState("");

    function helpSetTask() {
        if (task.trim() === "") return;
        setTaskList([...taskList, { text: task, completed: false }]);
        setTask("");
    }

    function toggleTaskCompleted(index: number) {
        const newTasks = [...taskList];
        newTasks[index].completed = !newTasks[index].completed;

        newTasks.sort((a, b) => Number(a.completed) - Number(b.completed));

        setTaskList(newTasks);
    }
    return (
        <div className="mt-5">


            <div className="h-fit">
                <p className="text-[8px] text-center mb-2">Add Tasks Here</p>
                <div className="  flex flex-row h-9 relative">
                    <input type="text" className="border border-green-700 text-xs rounded-2xl justify-between pl-4 pr-15 w-full relative placeholder:opacity-30"
                        onKeyDown={(e) => e.key === "Enter" && helpSetTask()}
                        value={task} onChange={(e) => { setTask(e.target.value) }} placeholder="write your tasks" />
                    <button className="absolute right-0 h-full w-1/6  rounded-2xl  flex justify-center items-center bg-green-700 duration-150 transition-all" onClick={helpSetTask}
                    >
                        <Image src={'/next.png'} alt="next" width={20} height={20} className="invert" />
                    </button>
                </div>
                <div className="mt-2 space-y-1">
                    {taskList.map((txt, key) => (
                            <label key={key} className="flex items-center h-fit border rounded-2xl p-2 cursor-pointer relative">
                                <input type="checkbox" className="peer" onChange={() => { toggleTaskCompleted(key) }}
                                checked={txt.completed}
                                 />
                                <span className="ml-2 text-sm peer-checked:line-through">
                                    {txt.text}
                                </span>
                                <button className="text-red-600 absolute right-3 text-xs" >x</button>
                            </label>
                        ))}
                </div>

            </div>
            <div className="text-[8px] text-center mt-2">
                <p className={`${(taskList.filter(t => t.completed).length)==taskList.length?'text-green-600':''}`}
                >{taskList.filter(t => t.completed).length}/{taskList.length} tasks finished</p>
            </div>

        </div>
    );
}