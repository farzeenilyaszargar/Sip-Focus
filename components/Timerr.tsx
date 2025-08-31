'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Timer() {
    const [time, setTime] = useState<number>(0);
    const [breakTime, setBreakTime] = useState<number>(0);
    const [run, setRun] = useState<boolean>(true);
    const [focusMode, setMode ] = useState<boolean>(true);


    useEffect(()=>{
        let interval: NodeJS.Timeout | null;
        if(run){
            interval = setInterval(()=>{
                setTime(time => time+1);
            }, 1000)
        }
        
        return () => {
            if(interval) clearInterval(interval);
        }
        
        
    }, [run]);

    function makeTimeGood(num:number | undefined)
    {
        if (!num)
        {
            return "0h 0m 0s";
        }
        let totalTime = Math.floor(num);
        let m = Math.floor(totalTime/60);
        let s = totalTime%60;
        let h = Math.floor(totalTime/3600);
        let res = `${h}h ${m}m ${s}s`;
        return res;
    }

    return (
        <div className="mt-0">
            <div className="w-full text-xs flex justify-around mb-3 mt-0">
                <button className={`border rounded-2xl pl-2 pr-2 p-1 w-2/5 ${focusMode?'':'bg-gray-400'}`} onClick={()=>setMode(true)}>Focus</button>
                <button className={`border rounded-2xl pl-2 pr-2 p-1 w-2/5 ${focusMode?'bg-gray-400':''}`} onClick={()=>setMode(false)}>Break</button>
            </div>
            <div className={`h-50  rounded-2xl w-full flex flex-col justify-center items-center ${focusMode?'':'hidden'}`}>
                <div className="border-8 h-50 w-50 rounded-full border-gray-500 flex flex-col items-center justify-center">
                    <p className="text-xs mt-2">{makeTimeGood(time)}</p>
                    <button className={`mt-2 ${run?'':'hidden'}`} onClick={()=> setRun(false)}>
                        <Image src={'/pause.png'} alt="pause" width={30} height={30}/>
                    </button>
                    <button className={`mt-2 ${run?'hidden':''}`} onClick={()=> setRun(true)}>
                        <Image src={'/play.png'} alt="resume" width={30} height={30}/>
                    </button>
                focus mode
                </div>
            </div>

            <div className={`h-50  rounded-2xl w-full flex flex-col justify-center items-center ${focusMode?'hidden':''}`}>
                <div className="border-8 h-50 w-50 rounded-full border-gray-500 flex flex-col items-center justify-center">
                    <p className="text-xs mt-2">{makeTimeGood(time)}</p>
                    <button className={`mt-2 ${run?'':'hidden'}`} onClick={()=> setRun(false)}>
                        <Image src={'/pause.png'} alt="pause" width={30} height={30}/>
                    </button>
                    <button className={`mt-2 ${run?'hidden':''}`} onClick={()=> setRun(true)}>
                        <Image src={'/play.png'} alt="resume" width={30} height={30}/>
                    </button>
                    break time

                </div>
            </div>

           
        </div>

    );
}