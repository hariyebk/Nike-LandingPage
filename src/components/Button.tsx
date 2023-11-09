
interface ButtonProps {
    label: string,
    iconUrl?: string,
    bgColor?: string,
    borderColor?: string,
    textColor?: string
}
export default function Button({label, iconUrl, bgColor, borderColor, textColor}: ButtonProps) {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border-2 ${borderColor && borderColor}font-montserrat text-lg leading-none ${bgColor ? bgColor : "bg-coral-red"} rounded-full ${textColor ? textColor : "text-white"}`}>
            {label}
            { iconUrl && <img src= {iconUrl}  alt = "cta-button" className="ml-2 rounded-full w-5 h-5" />}
        </button>
    )
}
