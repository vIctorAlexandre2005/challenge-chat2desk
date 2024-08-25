import { ComponentProps } from "react"

type InputProps = ComponentProps<"input">

export function InputComponent({ ...rest }: InputProps) {
    return (
        <div className="flex flex-col p-2">
            <label>{rest.title}</label>
            <input
                className="
                    p-2 
                    rounded-lg 
                    border 
                    border-gray-300 
                    focus:outline-none 
                    focus:border-neon-600 
                    transition duration-300
                    hover:border-neon-300
                " 
                {...rest} 
            />
        </div>
    )
}