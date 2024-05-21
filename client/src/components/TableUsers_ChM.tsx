import React, { useState } from "react";
import { Client } from "../types/types";
import BuyerInfo from "./BuyerInfo";
import ReferenceInfo from "./ReferenceInfo";



interface Props {
  clients: Client[];
  handleRowClick: (client: Client) => void; // Include handleRowClick in Props interface
  selectedClient: Client | null;
}

const ClientTable: React.FC<Props> = ({ clients }) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleRowClick = (client: Client) => {
    setSelectedClient(client);
  };

  const closePopup = () => {
    setSelectedClient(null);
  };

  return (
    <div>
      <div style={{ backgroundColor: "#F5F5F5", borderRadius: "20px", padding: "10px", overflow: "auto", maxHeight: "300px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#FDFDFD" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <th style={{ padding: "5px", fontSize: "12px" }}>Date Added</th>
              <th style={{ padding: "5px", fontSize: "12px" }}>Full Name</th>
              <th style={{ padding: "5px", fontSize: "12px" }}>Referenced By</th>
              <th style={{ padding: "5px", fontSize: "12px" }}>ID</th>
              <th style={{ padding: "5px", fontSize: "12px" }}>Phone No</th>
              <th style={{ padding: "5px", fontSize: "12px" }}>Address</th>
              <th style={{ padding: "5px", fontSize: "12px" }}>Type of Client</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                onClick={() => handleRowClick(client)}
                style={{
                  backgroundColor: selectedClient === client ? (client.hasMadePurchase ? "lightgreen" : "lightblue") : "white",
                  borderBottom: "1px solid #ddd",
                  cursor: "pointer"
                }}
              >
                <td style={{ padding: "5px", fontSize: "12px" }}>{client.createdAt}</td>
                <td style={{ padding: "5px", fontSize: "12px" }}>{client.name} {client.surname}</td>
                <td style={{ padding: "5px", fontSize: "12px" }}>{client.referredBy}</td>
                <td style={{ padding: "5px", fontSize: "12px" }}>{client.id}</td>
                <td style={{ padding: "5px", fontSize: "12px" }}>{client.phoneNo}</td>
                <td style={{ padding: "5px", fontSize: "12px" }}>{client.address}</td>
                <td style={{ padding: "5px", fontSize: "12px" }}>{client.hasMadePurchase ? "Buyer" : "Reference"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedClient && (
        <div>
          {selectedClient.hasMadePurchase ? (
            <div className="absolute">
              <ReferenceInfo client={selectedClient} setDivVisibility={closePopup} />
            </div>
            
          ) : (
            <div className="absolute">
            <BuyerInfo client={selectedClient} setDivVisibility={closePopup} />
          </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientTable;
