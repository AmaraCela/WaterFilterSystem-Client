import React from "react";
import { Link } from "react-router-dom";

const DashboardLink = ({to, src, text, highlighted}: {to: string, src: string, text: string, highlighted: boolean}) => {
    return (
        <Link to={to} className={`flex w-full mt-5 ${highlighted ? 'font-bold' : ''}`}>
            <div className="flex justify-end w-1/3">
                <img src={src} alt="" className="w-6 h-6" />
            </div>
            <div className="flex justify-start w-2/3 whitespace-nowrap">
                <p className={`ml-4 main-font ${highlighted && `font-bold`}`}>{text}</p>
            </div>
        </Link>
    );
}

export default DashboardLink;
