import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import {useState} from "react"

interface Stats {
    value: string,
    label: string
}
export interface Shoes {
    thumbnail: string,
    bigShoe: string,
}
export default function Hero() {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
    return (
        
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            {/* New Arrival text */}
            <div className="relative xl:w-2/5 flex flex-col gap-5 justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red"> Our popular collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> The New Ariival </span> <br/>
                <span className="text-coral-red inline-block mt-3"> Nike </span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"> Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
                <Button label = "Shop now" iconUrl = {arrowRight} />
                <div className="flex justify-start items-start flex-wrap w-full mt-2 gap-16">
                    {statistics.map((stat: Stats): React.ReactNode => {
                        return (
                            <div key={stat.label}>
                                <p className="text-4xl font-palanquin font-bold"> {stat.value} </p>
                                <p className="leading-7 font-montserrat text-slate-gray "> {stat.label} </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Shoe Image */}
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img src = {bigShoeImg} alt="shoe" width={610} height={500} className="object-contain relative z-10" />
                {/* The 3 Images */}
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe: Shoes, index: number): React.ReactNode => {
                        return (
                            <div key={index}>
                                <ShoeCard imgUrl= {shoe}
                                changeBigShoeImage = {(setShoe) => setBigShoeImg(setShoe)}
                                bigShoeImg = {bigShoeImg}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>


    )
}
