const buyer = require("../assets/userpic.png");
const reference = require("../assets/Group 36930.png");

const Client = ({ type, name, surname, id }: { type: "Buyer" | "Reference" , name: string, surname: string, id: number}) => {
    const colors = {
        Buyer: "text-[#28D372]",
        Reference: "text-[#3D5AA1]" 
    }

    return ( 
        <div className="flex flex-col items-center">
            <img src={type === "Buyer" ? buyer : reference} alt="client" />
            <p className={`${colors[type]} rubik`}>{name} {surname}</p>
            <p className={`${colors[type]} rubik`}>ID: {id}</p>
        </div>
    );
}

export default Client;