import { Link } from "react-router-dom"

export default function Logolink() {
    return (
        <Link to="/" className="font-krona ">
            <div className="text-3xl font-mono font-bold transform skew-x-[15deg] italic w-fit" >
                WAVEY
                <div className="text-[12px] font-medium text-center -mt-4 mr-3">
                    b e a u t y
                </div>
            </div>
        </Link>
    )
}