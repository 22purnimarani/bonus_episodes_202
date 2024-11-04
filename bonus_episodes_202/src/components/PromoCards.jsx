import PromoCard from "./PromoCard"
import art3 from "../assets/Images/art3.webp";
import art4 from "../assets/Images/art4.webp";

const PromoCards = () => {
    const promoList = [
        {
            id:1,
            img:art3,
            description:"Checkout more of our collection",
            buttonDescription:"Buy Now"
        },
        {
            id:2,
            img:art4,
            description:"Learn more about our product line",
            buttonDescription:"Learn More"
        }
    ]
    return (
        <div className="flex justify-center space-x-2 p-4 flex-wrap">
            {promoList.map((promos)=>(
                <div className="w-full sm:w-1/2 lg:w-1/3"> {/* Responsive widths */}
                    <PromoCard Image={promos.img} buttonDescription={promos.buttonDescription} Description={promos.description} />
                </div>
            ))}
        </div>
    )
}
export default PromoCards;