import { star } from "../assets/icons"
import {PopularProductsProps} from "../sections/PopularProducts"
export default function PopularProductCard ({imgURL, price, name, rating}: PopularProductsProps) {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:items-center">
            <img src={imgURL} alt= {name}className="w-[280px] h-[280px]"/>
            <div className="mt-8 flex flex-col justify-start gap-2.5">
                <div className="flex gap-3">
                    <img src={star} alt="star" width={24} height={24} />
                    <p className="font-montserrat leading-normal text-xl text-slate-gray"> ({rating}) </p>
                </div>
                <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin "> {name} </h3>
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-21x leading-normal"> {price} </p>
            </div>
        </div>
    )
}
