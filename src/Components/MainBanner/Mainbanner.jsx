import ButtonLink from "./ButtonLink/ButtonLink"
import BannerImg from "../MainBanner/banner.png"
export default function Mainbanner() {
    const title = {
        subtitle: "The new lineup you'll swear by for dullness, dryness and breakouts.",
        detail: "Makeup can transform one's appearance, boosting self-confidence and making individuals feel more beautiful." +
            "Makeup is a form of self-expression that allows individuals to enhance their natural beauty and boost their confidence. It can be a fun and creative way to experiment with different looks and styles."
    }
    return (
        <div className="mx-auto lg:padding-primary grid grid-cols-1 sm:grid-cols-2 py-20">
            <div className="flex flex-col sm:max-w-[500px] max-w-full gap-6 ">
                <p className="text-4xl font-mono font-semibold ">{title.subtitle}</p>
                <p className="text-sm font-base">{title.detail}</p>
                <ButtonLink path="/about" text="see more" />
            </div>
            <div className="relative w-3/4">
                <img src={BannerImg} alt="banner" className="w-full object-cover object-center"/>
                <div className="absolute w-[80%] h-[80%] bg-yellow rounded-full -z-10 right-[-30%] top-[-10%]">
                    <p className="absolute text-black font-base text-4xl font-bold right-2 top-10">24.99$</p>
                    <p className="absolute text-black font-base text-sm font-semibold right-6 top-20">per piece 30ml</p>
                </div>
            </div>
        </div>
    )
}