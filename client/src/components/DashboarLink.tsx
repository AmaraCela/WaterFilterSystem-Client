import { Link } from "react-router-dom";

interface DashboardLinkProps {
  to: string;
  src: string;
  text: string;
  highlighted: boolean;
}

const DashboardLink = ({ to, src, text, highlighted }: DashboardLinkProps) => {
  return (
    <Link
      to={to}
      className={`flex w-full mt-5 ${highlighted ? 'bg-blue-500 text-white' : ''}`}
    >
      <div className="flex justify-end w-1/3">
        <img src={src} alt="" className="w-6 h-6" />
      </div>
      <div className="flex justify-start w-2/3 whitespace-nowrap">
        <p className="ml-4 main-font">{text}</p>
      </div>
    </Link>
  );
}

export default DashboardLink;