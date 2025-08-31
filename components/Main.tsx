import Timer from "./Timerr";
import ToDo from "./ToDo";

export default function Main() {
    return (
        <div className="flex justify-center items-center w-screen mt-20">
            <div className="h-130 w-90 bg-blue-50 text-black rounded-2xl opacity-80 p-5 space-y-3 overflow-y-auto">
                <Timer />
                <ToDo />
            </div>
        </div>
    );
}