import { Link } from "react-router-dom"

export default function ButtonLink({path,text}) {
    return (
        <Link to={path}>
            <button className="w-fit font-krona text-sm bg-yellow transition-all duration-[0.4s]
              hover:scale-125 text-black font-bold px-14 py-3 rounded-3xl">
                {text}
            </button>
        </Link>
    )
}