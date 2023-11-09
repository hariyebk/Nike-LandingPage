import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";


export default function SpecialOffers() {
    return (
        <section className="flex items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773} height={687} className="object-contain w-full" />
            </div>
            <div className="flex flex-1 flex-col">
                    <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg"> <span  className="text-coral-red"> Special </span> Offer </h2>
                    <p className="lg:max-w-lg mt-6 font-montserrat text-justify text-slate-gray leading-7 "> Embark on  a shopping journey that redefines your experience with unbeatable deals. From premier selections to increadible savings, we offer unparalleled value that sets us apart. </p>
                    <p className="lg:max-w-lg mt-4 font-montserrat text-slate-gray leading-7"> Navigate a realm of posibilities designed to fullfill your unique desires, surpasssing the loftiest expectations. your journey with us is nothing short of exceptional.</p>
                    <div className=" flex flex-wrap gap-4 mt-11">
                        <Button label="Shop now" iconUrl={arrowRight} />
                        <Button label="Leran more" bgColor = "bg-white" borderColor = "border-slate-gray" textColor = "tet-slate-gray"/> 
                    </div>
            </div>
        </section>
    )
}
