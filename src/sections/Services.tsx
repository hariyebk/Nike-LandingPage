import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

export interface Service {
    imgURL: string,
    label: string,
    subtext: string
}
export default function Services() {
    return (
        <section id = "services" className="max-container flex justify-center flex-wrap gap-9">
            {
            services.map((service: Service): React.ReactNode => {
                return (
                    <div key={service.label}>
                        <ServiceCard imgURL = {service.imgURL} label = {service.label} subtext = {service.subtext} />
                    </div>
                )
            })
            }

        </section>
    )
}
