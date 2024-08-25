import { PulseLoader } from "react-spinners";

export function Loader() {
    return (
        <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PulseLoader size={32} color="blue" />
        </div>
    )
}