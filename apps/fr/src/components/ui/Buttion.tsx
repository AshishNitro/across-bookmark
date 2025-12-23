import type { ReactElement } from "react";


interface ButtonProps {
    title: string;
    size: "ls"| "ms"| "ss";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    variant: "primary" | "secondary" ;


}

const sizeStyle ={
    "ls": "px-8 py-3 text-x1 rounded-x1",
    "ms": "px-6 py-2 text-md rounded-md",
    "ss": "px-4 py-1 text-sm rounded-sm"
}
const variantSyle = {
    "primary": "bg-blue-600 text-white hover:bg-blue-700 rounded-full",
    "secondary": "bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full"
}


export function Button(props : ButtonProps){
     return  <button className= {sizeStyle[props.size] + " "+ variantSyle[props.variant]}>
        <div className= "flex items-center ">
            {props.startIcon}
            {props.title}
            {props.endIcon}
        </div>
     </button>
}