const buyer = require("../assets/userpic.png");
const reference = require("../assets/Group 36930.png");

const Client = ({ type }: { type: "Buyer" | "Reference" }) => {
    const colors = {
        Buyer: "text-[#28D372]",
        Reference: "text-[#3D5AA1]" 
    }

    return ( 
        <div className="flex flex-col items-center">
            <img src={type === "Buyer" ? buyer : reference} alt="client" />
            <p className={`${colors[type]} rubik`}>Artan Delisani</p>
            <p className={`${colors[type]} rubik`}>ID: 996752</p>
        </div>
    );
}

export default Client;