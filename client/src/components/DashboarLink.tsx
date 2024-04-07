import React from "react";
import { Link } from "react-router-dom";

interface DashboardLinkProps {
    to: string;
    src: string;
    text: string;
    bold?: boolean; // Make bold prop optional
}

const DashboardLink: React.FC<DashboardLinkProps> = ({ to, src, text, bold }) => {
    return (
        <Link to={to} className={`flex w-full mt-5 ${bold ? 'font-bold' : ''}`}>
            <div className="flex justify-end w-1/3">
                <img src={src} alt="" className="w-6 h-6" />
            </div>
            <div className="flex justify-start w-2/3">
                <p className="ml-4 main-font">{text}</p>
            </div>
        </Link>
    );
}

export default DashboardLink;
