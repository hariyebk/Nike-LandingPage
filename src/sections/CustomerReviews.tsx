import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

export interface Review {
    imgURL: string,
    customerName: string,
    rating: number,
    feedback: string
}
export default function CustomerReviews() {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center  text-4xl font-bold "> What our <span className="text-coral-red"> Customers </span> Say </h3>
            <p className="info-text m-auto mt-6 max-w-lg text-center"> Hear genuine stories from our satisfied cutomers about their exceptional experiences with us.</p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review: Review): React.ReactNode => {
                    return (
                        <div key={review.customerName}>
                            <ReviewCard imgURL = {review.imgURL} customerName = {review.customerName} rating = {review.rating} feedback = {review.feedback} />
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
