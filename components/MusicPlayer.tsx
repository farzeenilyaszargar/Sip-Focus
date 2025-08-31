'use client';

import { useRef } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const tracks = [
    { title: "Bach – The Well-Tempered Clavier", src: '/music/track1.mp3'},
    { title: "Mozart – Piano Concerto No. 21", src: '/music/track2.mp3'},
    { title: "Beethoven – Piano Sonata No. 14", src: '/music/track3.mp3'},
    { title: "Erik Satie – Gymnopédies", src: '/music/track4.mp3'},
    { title: "Vivaldi – The Four Seasons: “Winter” Largo", src: '/music/track5.mp3'},
    { title: "Chopin – Nocturnes", src: '/music/track6.mp3'},
    { title: "Debussy – Arabesque No. 1", src: '/music/track7.mp3'},
    { title: "Pachelbel – Canon in D", src: '/music/track8.mp3'},
    { title: "Arvo Pärt – Spiegel im Spiegel", src: '/music/track9.mp3'},
    { title: "Ralph Vaughan Williams – The Lark Ascending", src: '/music/track10.mp3'},
]



function makeTimeGood(num:number | undefined)
{
    if (!num)
    {
        return "0m 0s";
    }
    let totalTime = Math.floor(num);
    let m = Math.floor(totalTime/60);
    let s = totalTime%60;
    let res = `${m}m ${s}s`;
    return res;
}

export default function MusicPlayer() {
    const [playing, togglePlay] = useState(false);
    const [progress, setProgress] = useState(0);
    const [track, setTrack] = useState(0);

    useEffect(()=>{
        localStorage.setItem("lastTrackIndex", track.toString());

    },[track]);

    useEffect(() => {
    const savedIndex = localStorage.getItem("lastTrackIndex");
    if (savedIndex) {
      setTrack(parseInt(savedIndex, 10));
    }
    

  }, []);

  useEffect(() => {
  audioRef.current?.play().catch(err => console.log("Autoplay blocked:", err));
}, [track]);



    const progressNo = () => {
        if (audioRef.current) {
            const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(percentage);
        }
    }

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const play = () => {
        audioRef.current?.play();
        togglePlay(false);

    }
    const pause = () => {
        audioRef.current?.pause();
        togglePlay(true);

    }
    const next = () => {
        setTrack((c)=>(c+1)%tracks.length)
        audioRef.current?.play();
    }


   
    return (
        <div className=" w-70 h-fit absolute bottom-5 right-5 rounded-2xl p-5 bg-green-50 opacity-80 ">
            <audio ref={audioRef} src={tracks[track].src} onTimeUpdate={progressNo} onEnded={next}  />
            <div className=" w-full text-center">
                <p className="text-sm text-green-950 ">{tracks[track].title}</p>
                
            </div>
            <div className="w-full flex justify-around text-black text-xs  mt-3 mb-3">

                <button onClick={() => setTrack((c)=>(c-1+tracks.length)%tracks.length)}><Image src={"/prev.png"} alt="pause" height={25} width={25} /></button>
                <button onClick={play} className={`${playing?'':'hidden'}`}><Image src={"/play.png"} alt="play" height={25} width={25} /></button>
                <button onClick={pause} className={`${playing?'hidden':''}`}><Image src={"/pause.png"} alt="pause" height={25} width={25} /></button>
                <button onClick={next}><Image src={"/next.png"} alt="pause" height={25} width={25} /></button>

            </div>
            <div className="w-full rounded-2xl h-2 bg-gray-400 relative" >
                <div className={`h-2 bg-green-900 z-10 absolute rounded-2xl`} style={{ width: `${progress}%` }} />
            </div>
            <div className="text-gray-600 text-xs flex justify-between">
                <p className="">{makeTimeGood(audioRef.current?.currentTime)}</p>
                <p className="">{makeTimeGood(audioRef.current?.duration)}</p>
            </div>
        </div>
    );
}