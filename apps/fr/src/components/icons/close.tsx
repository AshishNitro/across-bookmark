
interface CloseIconProps {
  size?: "sm"| "md" | "lg";
}

const sizeVatiants = {
  "sm": "size-4", 
  "md": "size-6",
  "lg": "size-8"
}

export function closeIcon(props: CloseIconProps){
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={sizeVatiants[props.size || "md"]}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

}