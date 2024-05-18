import { Client } from "../types/types";
import "../styles/buyerInfo.css";
import "../styles/contract.css";
import { useRef } from "react"; 
import html2pdf from 'html2pdf.js';

const calendar = require("../assets/Calendarr.png");
const history = require("../assets/Ticket_alt.png");
const references = require("../assets/3 User.png");
const contract = require("../assets/Download.png");
const close = require("../assets/Close Icon.png");

const BuyerInfo = ({ client, setDivVisibility }: { client: Client, setDivVisibility: any }) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
   
    const buyerInfoRef = useRef<HTMLDivElement>(null);

    // Function to handle drag event
    const handleDrag = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const buyerInfo = buyerInfoRef.current;
        if (!buyerInfo) return;
        buyerInfo.style.position = 'absolute';
        buyerInfo.style.left = `${event.clientX}px`;
        buyerInfo.style.top = `${event.clientY}px`;
       
    
    };
    const handleDownloadContract = () => {
        const contractFileData = `
        <html>
        <head>
            <link rel="stylesheet" href="./contract.css">
        </head>
        <body>
            <main>
            <article id="buyer-info">
              <header>
                <h1 class="headline">Development Contract</h1>
                <div class="meta">
                    <p>This Contract is between <address itemscope itemtype="http://schema.org/Company" class="author">Aqualife SHPk Located at Street Address, City, Country</address> (the "Seller") and <address itemscope itemtype="http://schema.org/Person" class="author">Buyer Name</address> (the "Buyer").</p>
                    <p>The Contract is dated [Date].</p>
                </div>
              </header>
              <section>
                <h2>1. <b>PRODUCT AND PAYMENT</b>.</h2>
                <h3>1.1 Product.</h3>
                <p>The Seller agrees to provide the Buyer with a [Type of Water Filter] water filter. The water filter will include [Specifications].</p>
              </section>
              <section>
                <h3>1.2 Payment.</h3>
                <p>The Buyer agrees to pay the Seller a total flat fee of [Total Amount]. Payment shall be made as follows:</p>
                <ul>
                    <li>[Initial Payment]: The Buyer shall pay [Initial Payment Amount] as a deposit upon signing this contract.</li>
                    <li>[Final Payment]: The remaining balance of [Final Payment Amount] shall be paid upon delivery of the water filter.</li>
                </ul>
              </section>
              <section>
                <h3>1.3 Delivery.</h3>
                <p>The Seller agrees to deliver the water filter to the Buyer's address at [Address] within [Delivery Timeframe]. The Buyer shall be responsible for any shipping or delivery fees.</p>
              </section>
              <section>
                <h2>2. OWNERSHIP AND WARRANTIES.</h2>
                <h3>2.1 Ownership.</h3>
                <p>Upon full payment, the Buyer shall own the water filter and all associated components outright.</p>
                <h3>2.2 Warranties.</h3>
                <p>The Seller warrants that the water filter shall be free from defects in materials and workmanship for a period of [Warranty Period]. If any defects arise during this period, the Seller shall repair or replace the water filter at no additional cost to the Buyer.</p>
              </section>
              <section>
                <h2>3. INSTALLATION AND MAINTENANCE.</h2>
                <p>The Seller shall provide installation instructions to the Buyer upon delivery. The Buyer shall be responsible for the installation of the water filter. The Buyer shall also be responsible for the routine maintenance and cleaning of the water filter.</p>
              </section>
              <section>
                <h2>4. TERMINATION.</h2>
                <p>This contract may be terminated by either party upon [Notice Period] written notice to the other party. In the event of termination, any payments made by the Buyer shall be refunded, less any costs incurred by the Seller up to the date of termination.</p>
              </section>
              <section>
                <h2>5. GOVERNING LAW.</h2>
                <p>This Contract shall be governed by and construed in accordance with the laws of [Country].</p>
              </section>
              <section>
                <h2>6. ENTIRE AGREEMENT.</h2>
                <p>This Contract constitutes the entire agreement between the parties with respect to the subject matter hereof, and supersedes all prior and contemporaneous agreements and understandings, whether written or oral, relating to such subject matter.
                
                </p>
              </section>
            </article>
          </main>
        </body>
        </html>
    `;

    html2pdf().from(contractFileData).save('contract.pdf');
    };

    return (
        <div className="bg-[#271d9659] rounded-[49px] h-full flex flex-col items-center" style={{width :'480px' , height: '400px' }}>
            <div className="bg-[#ffffffa6] w-11/12 px-7 h-max mt-8 rounded-[49px] pt-4 flex flex-col items-center inner-div"  style={{ height: '300px'}}>
                <div className=" pt-5 pl-5 pr-5 pb-5 flex justify-between w-full">
                    <p className="rubik text-[#281D96]  font-semibold text-lg">{client.name} {client.surname}</p>
                    <div className="flex ml-2">
                        <img src={calendar} alt="calendar" className="size-6 mr-2" />
                        <p className="text-[#0000004d] mali">Joined on</p>
                        <p className="text-[#2B437B] mali ml-1">{months[new Date(client.createdAt).getMonth()]}/{new Date(client.createdAt).getFullYear()}</p>
                    </div>
                </div>
                <div className="w-3/4 mt-2">
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">ID:</p>
                        <p className="rubik ml-16 text-[#0000004d] text-xs">{client.id}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">Address:</p>
                        <p className="rubik ml-16 text-[#0000004d] text-xs">{client.address}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">Phone No.:</p>
                        <p className="rubik ml-16 text-[#0000004d] text-xs mb-0">{client.phoneNo}</p>
                    </div>
                </div>

                <div className="pt-17  justify-between w-full my-4 mb-4">
                    <button className="flex-col mr-3">
                        <div className="flex justify-center mb-1">
                        <img  className='mr-1 ' src={history} alt="" />
                        <p className="rubik font-bold text-[#60687B]">History</p>
                    </div>
                    </button>
                    <button className="ml-3">
                        <div className="flex justify-center mb-1">
                        <img  className='mr-1 ' src={references} alt="" />
                        <p className="rubik font-bold text-[#60687B]">References</p>
                    </div>
                    </button> 

                    <button className="ml-3" onClick={handleDownloadContract}>
            <div className="flex justify-center mt-1">
                <img className='mr-1' src={contract} alt="" />
                <p className="rubik font-bold text-[#60687B]">Contract</p>
            </div>
        </button>
                   
                </div>

            </div>
            <button className="w-max flex my-8 " onClick={() => setDivVisibility(false)}>
                <img src={close} alt="" />
                <p className="rubik text-[#172B85] font-bold ml-2">
                    Close
                </p>
            </button>
        </div>
    );
}

export default BuyerInfo;