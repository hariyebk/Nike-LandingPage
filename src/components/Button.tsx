
interface ButtonProps {
    label: string,
    iconUrl: string
}
export default function Button({label, iconUrl}: ButtonProps) {
    return (
        <button className=" flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
            {label}
            <img src= {iconUrl}  alt = "cta-button" className="ml-2 rounded-full w-5 h-5" />
        </button>
    )
}
