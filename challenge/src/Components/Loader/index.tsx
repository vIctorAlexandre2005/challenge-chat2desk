import { BeatLoader } from "react-spinners";

export function Loader() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <BeatLoader size={32} color="#2a68ff" />
        </div>
    )
}