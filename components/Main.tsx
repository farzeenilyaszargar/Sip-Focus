'use client';

import Timer from "./Timer";
import ToDo from "./ToDo";
import { useState } from "react";


export default function Main() {
    const [bgColor, setBgColor] = useState<string>("blue-50");

    return (
        <div className="flex justify-center items-center w-screen mt-20">
            <div className={`h-130 w-90 bg-blue-50 text-black rounded-2xl opacity-80  space-y-3 overflow-y-auto bg-${bgColor}
                            duration-200 transition-all `}>
                <Timer setBgColor={setBgColor} />
                <ToDo />
            </div>
        </div>
    );
}