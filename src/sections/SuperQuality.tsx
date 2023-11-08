import { shoe8 } from "../assets/images";
import Button from "../components/Button";

export default function SuperQuality() {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
                    <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg"> We Provide You <span  className="text-coral-red"> Super </span> <br /> <span className="text-coral-red"> Quality </span> Shoes </h2>
                    <p className="lg:max-w-lg mt-6 font-montserrat text-justify text-slate-gray leading-7 "> Ensuring premium comfort and style, our meticulously <br /> certified footwear is designed to elevate your experience, <br /> providing you with unmatched quality, innovation, and a <br /> touch of elegance</p>
                    <p className="lg:max-w-lg mt-4 font-montserrat text-slate-gray leading-7"> our dedication to detail and excellence ensures your <br /> satisfaction</p>
                    <div className="mt-11">
                        <Button label="View details" /> 
                    </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="quality-shoe" width={570} height={522} className="object-contain" />
            </div>

        </section>
    )
}
