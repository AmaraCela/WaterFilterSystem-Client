import { Client } from "../types/types";

const referenceImg = require("../assets/image 16.png");
const buyerImg = require("../assets/image 17.png");
const ClientDisplay = ({ type, client, setClient, setDivVisibility }: { type: "Buyer" | "Reference", client: Client, setClient: any, setDivVisibility: any}) => {
    const colors = {
        Buyer: "text-[#3D5AA1]",
        Reference: "text-[#28D372]" 
    }

    const bgColors = {
        Buyer: "bg-[#3d5aa126]",
        Reference: "bg-[#28d3722b]"
    }

    return ( 
        <button className={`flex flex-col items-center mx-2 ${bgColors[type]} border-black border-2 rounded-md h-max m-2 w-60 px-4 relative`} onClick={() => {setClient(client); setDivVisibility(true);}}>
            <p className={`${colors[type]} rubik font-bold text-lg`}>{client.name} {client.surname}</p>
            <p className={`${colors[type]} rubik`}>ID: {client.id}</p>
            {type === "Buyer" ? <img src={referenceImg} alt="" className="absolute size-8 -bottom-4 -left-1" /> :
                <img src={buyerImg} alt="" className="absolute size-7 -top-4 -right-1"/>
            }
        </button>
    );
}

export default ClientDisplay;