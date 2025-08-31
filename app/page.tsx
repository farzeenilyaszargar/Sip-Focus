import Header from "@/components/Header";
import Main from "@/components/Main";
import MusicPlayer from "@/components/MusicPlayer";
import Obstacle from "@/components/Shadow";

export default function Home() {
  return (

    <div className="font-main h-screen bg-[url('/art.gif')] bg-center bg-cover text-white ">
      <Obstacle />
      <Header />
      <Main />
      <MusicPlayer />


    </div>
  );
}
