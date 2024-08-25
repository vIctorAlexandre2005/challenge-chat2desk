import { toast } from "react-toastify";

export function toastSuccess(message: string) {
    return toast.success(message);
}

export function toastError(message: string) {
    return toast.error(message);
}