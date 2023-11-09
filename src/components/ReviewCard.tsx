import { star } from "../assets/icons"
import { Review } from "../sections/CustomerReviews"
export default function ReviewCard({imgURL, customerName, rating, feedback}: Review) {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="cutomer" className="rounded-full object-cover w-[120px] h-[120px]" />
            <p className="mt-6 max-w-sm text-center info-text"> {feedback} </p>
            <div className="mt-4 flex justify-center items-center gap-3">
                <img src = {star} alt="star" width={24} height={24} className="object-contain m-0" />
                <p className="text-xl font-montserrat text-slate-gray"> ({rating}) </p>
            </div>
            <h3 className="mt-4 font-palanquin text-3xl text-center font-bold"> {customerName} </h3>
            

        </div>
    )
}
