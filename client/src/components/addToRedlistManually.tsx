import React, { useState, useEffect } from "react";
import RedlistAlert from "./redlistAlert"; // Import the Redlist component
import { addClientToRedlist, retrieveWaitlistFromServer } from "../serverUtils/serverUtils";

function SearchableDropdown({ options, selectedOption, onOptionSelect }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option: any) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (option: any) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(true);
    if (options.includes(value)) {
      onOptionSelect(value);
    } else {
      onOptionSelect("");
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="justify-center items-start px-2 py-1 text-base text-black whitespace-nowrap rounded-xl border border-black border-solid bg-indigo-500 bg-opacity-10"
        value={selectedOption || searchTerm}
        placeholder="Select a client..."
        onClick={() => setIsOpen(!isOpen)}
        onChange={handleInputChange}
      />
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-black border-solid rounded-xl max-h-60 overflow-y-auto mt-1">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option: any, index: any) => (
              <li
                key={index}
                className="cursor-pointer px-2 py-1 hover:bg-indigo-500 hover:text-white text-sm"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="px-2 py-1 text-gray-500 text-sm">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

function ManualRedlistAdd() {
  const [showManualRedlistAdd, setShowManualRedlistAdd] = useState(true); // State to manage visibility of ManualRedlistAdd
  const [showRedlistAlert, setShowRedlistAlert] = useState(false); // State to manage visibility of RedlistAlert
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");
  const [clients, setClients] = useState<string[]>([]);
  const [clientIDs, setClientIDs] = useState([]);

  useEffect(() => {
    retrieveWaitlistFromServer().then((clients) => {
      if (clients == null) {
        return;
      }

      const clientNames = clients.map((client: any) => {
        return client.name + " " + client.surname + " (" + client.phoneNo + ")";
      });

      const clientIDs = clients.map((client: any) => {
        return client.id;
      });

      setClients(clientNames);
      setClientIDs(clientIDs);
    });
  }, []);
  

  const handleSaveClick = () => {
    if (selectedClient === "") {
      return;
    }

    const index = clients.indexOf(selectedClient);
    const selectedClientID = clientIDs[index];

    addClientToRedlist(selectedClientID).then(() => {
      setShowRedlistAlert(true);
    }).catch((error) => {
      setShowErrorAlert(true);
    });
  };

  const handleOkayClick = () => {
    setShowRedlistAlert(false); // Hide RedlistAlert
    setShowErrorAlert(false);
    document.location.reload(); // i don't like this but for now it works
  };
  
  return (
    <>
      {showManualRedlistAdd && (
        <div className="flex flex-col px-5 text-2xl leading-9 text-indigo-800 max-w-[300px]" style={{width: '30%'}}>
          <div className="w-full font-bold tracking-tight text-center">
            Add referral to redlist{" "}
          </div>
          <div className="flex flex-col pl-3  w-full font-medium">
            <div className="text-xs font-semibold text-stone-500">
              Use this form to add the client to the redlist.{" "}
            </div>
            <div className="mt-1 tracking-tight text-s">Name</div>
            <SearchableDropdown
              options={clients}
              selectedOption={selectedClient}
              onOptionSelect={setSelectedClient}
            />
            <button
              className="justify-center self-center px-4 py-1 mt-5 text-xs font-bold leading-4 text-gray-900 uppercase whitespace-nowrap bg-white rounded border-2 border-indigo-800 border-solid tracking-[2px]"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        </div>
      )}
      {showRedlistAlert && <RedlistAlert title="Redlist alert" message="Your call got moved to the Redlist Section." onClose={handleOkayClick} />} {/* Render Redlist if showRedlist is true */}
      {showErrorAlert && <RedlistAlert title="Error" message="Failed to add client to redlist." onClose={handleOkayClick} />}
    </>
  );
}

export default ManualRedlistAdd;
