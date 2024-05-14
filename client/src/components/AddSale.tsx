import React, { useState } from "react";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { phoneNumberValidation } from "../utils/validations";
import { addReferences, allClients } from "../store/client/clientThunks";
import { resetReferences } from "../store/client/clientSlice";
import { addSale } from "../store/sales/saleThunks";
import { resetState } from "../store/sales/saleSlice";
import { Client } from "../types/types";

interface ReferenceFormProps {
  referenceNumber: number;
  information: ReferenceInformation[];
  setInformation: any;
  onSubmit: () => void;
  isVisible: boolean;
  setHasErrors: any;
  phoneNoError: string | null;
}

interface ReferenceInformation {
  originClientId: number;
  referralName: string;
  address?: string;
  phoneNumber: string;
  profession?: string;
  financiallyQualified: boolean;
  comments?: string;
}


const ReferenceForm: React.FC<ReferenceFormProps> = ({
  referenceNumber,
  information,
  setInformation,
  onSubmit,
  isVisible,
  setHasErrors,
  phoneNoError,
}) => {
  const [referralName, setReferralName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [profession, setProfession] = React.useState("");
  const [financiallyQualified, setFinanciallyQualified] = React.useState(false);
  const [notFinanciallyQualified, setNotFinanciallyQualified] = React.useState(false);
  const [comments, setComments] = React.useState("");

  const [phoneNumberError, setPhoneNumberError] = React.useState("");

  const [inputs, setInputs] = React.useState<ReferenceInformation>({
    originClientId: -1,
    referralName: "",
    address: "",
    phoneNumber: "",
    profession: "",
    financiallyQualified: false,
    comments: ""
  });

  React.useEffect(() => {
    setHasErrors(phoneNumberError ? true : false)
  }, [phoneNumberError]);

  React.useEffect(() => {
    setInputs({ ...inputs, referralName })
  }, [referralName]);

  React.useEffect(() => {
    setInputs({ ...inputs, address })
  }, [address]);

  React.useEffect(() => {
    setInputs({ ...inputs, phoneNumber });
    phoneNumber.length > 0 && setPhoneNumberError(phoneNumberValidation(phoneNumber));
  }, [phoneNumber]);

  React.useEffect(() => {
    setInputs({ ...inputs, profession })
  }, [profession]);

  React.useEffect(() => {
    setInputs({ ...inputs, financiallyQualified })
  }, [financiallyQualified]);

  React.useEffect(() => {
    setInputs({ ...inputs, comments })
  }, [comments]);

  React.useEffect(() => {
    const newArray = information;
    newArray[referenceNumber - 1] = inputs;
    setInformation(newArray);
  }, [inputs]);


  // Function to handle form submission
  const handleSubmit = () => {
    onSubmit();
  };

  // Function to handle referral name change
  const handleReferralNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReferralName(event.target.value);
  };

  // Function to handle address change
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  // Function to handle phone number change
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  // Function to handle profession change
  const handleProfessionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfession(event.target.value);
  };

  // Function to handle financially qualified checkbox change
  const handleFinanciallyQualifiedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFinanciallyQualified(event.target.checked);
    if (event.target.checked) {
      setNotFinanciallyQualified(false);
    }
  };

  // Function to handle not financially qualified checkbox change
  const handleNotFinanciallyQualifiedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotFinanciallyQualified(event.target.checked);
    if (event.target.checked) {
      setFinanciallyQualified(false);
    }
  };

  // Function to handle comments change
  const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(event.target.value);
  };

  return (
    <div
      className={`flex flex-col px-5 py-6 rounded-lg bg-indigo-50 max-w-[500px] ${isVisible ? "" : "hidden"
        }`}
    >
      <h2 className="text-2xl font-bold leading-6 text-indigo-800">
        Reference {referenceNumber}
      </h2>
      <div className="flex flex-col gap-5 mt-3.5">
        <div className="flex flex-col justify-center px-3 py-1.5 bg-white rounded-lg shadow-md">
          <label
            htmlFor={`referralName-${referenceNumber}`}
            className="text-xs leading-4 text-zinc-600"
          >
            Referral's Full Name
          </label>
          <input
            type="text"
            id={`referralName-${referenceNumber}`}
            value={referralName}
            onChange={handleReferralNameChange}
            className="flex flex-col justify-center items-start px-2 py-1"
            aria-label={`Enter referral's full name for reference ${referenceNumber}`}
          />
        </div>
        <div className="text-xs leading-4 text-zinc-600">
          ! Ensure reference is not already added
        </div>
        <div className="flex flex-col justify-center px-3 py-1.5 bg-white rounded-lg shadow-md">
          <label
            htmlFor={`address-${referenceNumber}`}
            className="text-xs leading-4 text-zinc-600"
          >
            Address
          </label>
          <input
            type="text"
            id={`address-${referenceNumber}`}
            value={address}
            onChange={handleAddressChange}
            className="flex flex-col justify-center items-start px-2 py-1"
            aria-label={`Enter address for reference ${referenceNumber}`}
          />
        </div>
        <div className="flex flex-col justify-center px-3 py-1.5 bg-white rounded-lg shadow-md">
          <label
            htmlFor={`phoneNumber-${referenceNumber}`}
            className="text-xs leading-4 text-zinc-600"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id={`phoneNumber-${referenceNumber}`}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="flex flex-col justify-center items-start px-2 py-1"
            aria-label={`Enter phone number for reference ${referenceNumber}`}
          />
          {phoneNoError ? <p className="text-[#ff0000e0]">
            {phoneNoError}
          </p> : phoneNumberError.length > 0 && <p className="text-[#ff0000e0]">
            {phoneNumberError}
          </p>}
        </div>
        <div className="flex flex-col justify-center px-3 py-2.5 bg-white rounded-lg shadow-md">
          <label
            htmlFor={`profession-${referenceNumber}`}
            className="text-xs leading-4 text-zinc-600"
          >
            Profession
          </label>
          <input
            type="text"
            id={`profession-${referenceNumber}`}
            value={profession}
            onChange={handleProfessionChange}
            className="flex flex-col justify-center items-start px-2 py-1"
            aria-label={`Enter profession for reference ${referenceNumber}`}
          />
        </div>
        <div className="flex gap-5 w-full text-xs leading-4 text-zinc-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5">
            <input
              type="checkbox"
              id={`financiallyQualified-${referenceNumber}`}
              checked={financiallyQualified}
              onChange={handleFinanciallyQualifiedChange}
              className="shrink-0 self-start w-5 h-3.5 bg-white rounded-lg border border-solid border-neutral-400"
              aria-label={`Reference ${referenceNumber} is financially qualified`}
            />
            <label htmlFor={`financiallyQualified-${referenceNumber}`} className="flex-auto">
              Financially qualified
            </label>
          </div>
          <div className="flex gap-5">
            <input
              type="checkbox"
              id={`notFinanciallyQualified-${referenceNumber}`}
              checked={notFinanciallyQualified}
              onChange={handleNotFinanciallyQualifiedChange}
              className="shrink-0 self-start w-5 h-3.5 bg-white rounded-lg border border-solid border-neutral-400"
              aria-label={`Reference ${referenceNumber} is not financially qualified`}
            />
            <label htmlFor={`notFinanciallyQualified-${referenceNumber}`} className="flex-auto">
              Not financially qualified
            </label>
          </div>
        </div>
      </div>
      <label
        htmlFor={`comments-${referenceNumber}`}
        className="mt-6 text-xs font-medium tracking-wide text-zinc-600 text-opacity-90 max-md:max-w-full"
      >
        Comments (optional)
      </label>
      <textarea
        id={`comments-${referenceNumber}`}
        value={comments}
        onChange={handleCommentsChange}
        className="shrink-0 bg-white rounded-lg border border-solid border-neutral-400 h-[72px] max-md:max-w-full"
        aria-label={`Enter optional comments for reference ${referenceNumber}`}
      />
    </div>
  );
};


const MyComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const originClients = useSelector((state: RootState) => state.client.clients);
  const [originClient, setOriginClient] = useState<Client | null>(null);
  const [numberOfReferences, setNumberOfReferences] = useState(1);
  const [selectedReference, setSelectedReference] = useState(1);
  const [buyerName, setBuyerName] = useState("");
  const [paymentOption, setPaymentOption] = useState<string | null>(null);
  const [hasErrors, setHasErrors] = React.useState(false);
  const [submitClicked, setSubmitClicked] = React.useState(false);
  const [inputs, setInputs] = React.useState<ReferenceInformation[]>([]);
  const [originClientId, setOriginClientId] = React.useState<number>(-1);
  const [saleInputs, setSaleInputs] = React.useState<{ clientId: number, salesAgentId: number, phoneOperatorId: number, price: number, monthlyPayment: number }>({ clientId: originClientId, salesAgentId: 6, phoneOperatorId: 5, price: 1495, monthlyPayment: 0 });
  const [clientSuggestion, setClientSuggestion] = React.useState("hidden");
  const addReferencesSuccessful = useSelector((state: RootState) => state.client.referencesSuccesful);
  const addSaleSuccessful = useSelector((state: RootState) => state.sale.addSaleSuccessful);
  const phoneNoErrors = useSelector((state: RootState) => state.client.phoneNoErrors);
  const [referrerError, setReferrerError] = useState("");
  const [upfrontPayment, setUpfrontPayment] = useState(0);
  const [upfrontError, setUpfrontError] = useState("");

  React.useEffect(() => {
    dispatch(resetReferences());
  }, []);

  React.useEffect(() => {
    setInputs(inputs.map((input) => ({ ...input, originClientId })));
    setSaleInputs({ ...saleInputs, clientId: originClientId });
    setOriginClient(originClients.filter((client) => (client.id === originClientId))[0]);
    originClientId !== -1 && setReferrerError("");
  }, [originClientId]);

  React.useEffect(() => {
    const monthlyPayment = paymentOption === 'full' ? 0 : (saleInputs.price / 12);
    setSaleInputs({ ...saleInputs, monthlyPayment });
  }, [paymentOption]);

  React.useEffect(() => {
    if (addReferencesSuccessful) {
      setSaleInputs({ ...saleInputs, price: (1495 - numberOfReferences * 50) });
    }
  }, [addReferencesSuccessful]);

  React.useEffect(() => {
    
  }, [referrerError]);

  // React.useEffect(() => {
  //   console.log(inputs);
  // }, [inputs]);

  // React.useEffect(() => {
  //   addReferencesSuccessful && dispatch(addSale(saleInputs));
  // }, [saleInputs]);

  // Function to handle buyer name change
  const handleBuyerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value.length > 2 && dispatch(allClients(event.target.value));
    setBuyerName(event.target.value);
  };

  // Function to handle payment option change
  const handlePaymentOptionChange = (option: string) => {
    setPaymentOption(option);
  };

  // Function to handle number of references change
  const handleNumberOfReferencesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberOfReferences(parseInt(event.target.value));
  };

  // Function to handle reference selection
  const handleReferenceSelection = (referenceNumber: number) => {
    setSelectedReference(referenceNumber);
  };

  const handleSubmit = () => {
    originClientId === -1 && setReferrerError('Enter a valid client.');
    !hasErrors && originClientId !==-1 && dispatch(addReferences(inputs));
  }

  return (
    <><div className="flex flex-col mr-36 max-w-full w-[1500px] max-md:mr-2.5 ml-5">
      <div className="flex gap-4 mb-4">
        <div>
          <div className="text-sm text-black-600 mb-2">Credentials:</div>
          <div className="flex flex-col justify-center text-base leading-6 fill-white">
            <div className="flex flex-col gap-5 justify-between px-3.5 py-3 bg-white rounded-lg border border-solid border-neutral-400">
              <input
                type="text"
                id="buyerName"
                value={buyerName}
                onChange={(e) => {
                  handleBuyerNameChange(e);
                  setClientSuggestion('flex');
                }}
                placeholder="Enter buyer's name" />
              {referrerError && <p className="text-[#ff0000e0]">{referrerError}</p>}
            </div>
            <div className={`${clientSuggestion} flex-col bg-white max-h-20 overflow-auto`}>
              {(originClients && originClients.length > 0) && originClients.map((client) => (
                <button key={client.id} className="hover:bg-gray-200 cursor-pointer w-full" onClick={() => {
                  setOriginClientId(client.id);
                  setClientSuggestion("hidden");
                  const nameToDisplay = (client.name ? client.name : '') + ' ' + (client.surname ? client.surname : '');
                  setBuyerName(nameToDisplay ?? '');
                }}>
                  {client.name} {client.surname}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="checkbox-box">
          <div className="text-sm text-black-600 mb-2">Payment details:</div>
          <div className="flex justify-between">
            <div className="flex justify-between gap-2 px-4 py-2 rounded-lg bg-white border border-solid border-neutral-400 mr-4">
              <input
                type="checkbox"
                id="fullPayment"
                checked={paymentOption === 'Full'}
                onChange={() => handlePaymentOptionChange('Full')} />
              <label htmlFor="fullPayment">Full</label>
            </div>
            <div className="flex justify-between gap-2 px-4 py-2 rounded-lg bg-white border border-solid border-neutral-400">
              <input
                type="checkbox"
                id="monthlyPayment"
                checked={paymentOption === 'Monthly'}
                onChange={() => handlePaymentOptionChange('Monthly')} />
              <label htmlFor="monthlyPayment">Monthly</label>
            </div>
          </div>
        </div>
        {/* <div>
      <div className="text-sm text-black-600 mb-2">Upfront payment:</div>
      <div className="flex justify-between gap-2 px-4 py-2 rounded-lg bg-white border border-solid border-neutral-400 mr-4 w-52">
        <input type="number" min={0} max={1495} placeholder="Enter upfront payment" className="w-48" value={upfrontPayment}
        onChange={(e) => {setUpfrontPayment(parseInt(e.target.value))}}/>
        {upfrontError && <p className="text-[#ff0000e0]">{referrerError}</p>}
      </div>
    </div> */}
      </div>
      <form>
        <div className="flex gap-4 self-start max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col text-gray-600">
            <div className="flex flex-col justify-center text-base leading-6 fill-white">
              <div className="flex gap-5 bg-white justify-between px-3.5 py-3 rounded-lg border border-solid border-neutral-400">
                <select value={numberOfReferences} onChange={handleNumberOfReferencesChange} className="input-field w-full">
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="justify-center px-4 py-0.5 text-xs leading-4">
              Max. 10 references allowed
            </div>
          </div>
        </div>
      </form>

      <div className="flex gap-5 mt-6 max-md:flex-wrap">
        {[...Array(numberOfReferences)].map((_, index) => (
          <React.Fragment key={index}>
            <ReferenceForm
              information={inputs}
              setInformation={setInputs}
              referenceNumber={index + 1}
              onSubmit={() => { }}
              isVisible={selectedReference === index + 1}
              setHasErrors={setHasErrors}
              phoneNoError={phoneNoErrors && (phoneNoErrors.filter((error) => (error.reference === index)).length === 1 ? phoneNoErrors.filter((error) => (error.reference === index))[0].data : null)} />
          </React.Fragment>
        ))}
        <div className="flex flex-col gap-2">
          {[...Array(numberOfReferences)].map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer ${selectedReference === index + 1 ? 'bg-indigo-500 border-indigo-500' : 'bg-white'}`}
              onClick={() => handleReferenceSelection(index + 1)}
            >
              {selectedReference === index + 1 && <div className="w-3 h-3 rounded-full bg-white" />}
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="justify-center items-start self-stretch mt-3 mr-0 max-w-[344px] h-10 text-xl font-bold text-center text-white bg-indigo-500 rounded-xl"
        onClick={() => { setSubmitClicked(true); handleSubmit(); }}
      >
        Proceed
      </button>
      {((submitClicked && (hasErrors || phoneNoErrors.length > 0 || referrerError))) && <div className="w-screen h-screen top-0 left-0 absolute z-10 flex items-center justify-center bg-[#81808065]">
        <div className="w-1/3 h-1/3 bg-white border-1 border-black rounded-md flex justify-evenly flex-col items-center">
          {((phoneNoErrors && phoneNoErrors.length > 0) || referrerError) && <><p className="text-center p-2 text-[#ff0000e0]">An error has occurred. Check the form for more details.</p><button className="rounded-md bg-[#64aa64] px-4 py-2" onClick={() => {
            setSubmitClicked(false);
          }}>Okay</button></>
          }
        </div>
      </div>}
      {addSaleSuccessful && <div className="w-screen h-screen top-0 left-0 absolute z-10 flex items-center justify-center bg-[#81808065]">
        <div className="w-1/3 h-1/3 bg-white border-1 border-black rounded-md flex justify-evenly flex-col items-center">
          <p>Sale added successfully.</p>
          <button className="rounded-md bg-[#64aa64] px-4 py-2" onClick={() => { dispatch(resetState()); setSubmitClicked(false) }}>
            Okay
          </button>
        </div>
      </div>}
    </div>
      {submitClicked && (!hasErrors && phoneNoErrors.length === 0) && addReferencesSuccessful && originClient && !addSaleSuccessful && <div className="absolute top-0 left-0 w-screen h-screen bg-[#00000061] z-30 flex justify-center items-center">
        <div className="rounded-md bg-white w-1/2 h-2/3 px-16 py-6">
          <p className="main-font font-semibold text-xl">Sale Receipt</p>
          <div className="flex justify-between mt-2">
            <p className="main-font text-[#979797]">Name</p>
            <p className="main-font">{originClient?.name} {originClient?.surname}</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="main-font text-[#979797]">Address</p>
            <p className="main-font">{originClient?.address}</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="main-font text-[#979797]">Phone number</p>
            <p className="main-font">{originClient?.phoneNo}</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="main-font text-[#979797]">Date</p>
            <p className="main-font">{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="main-font text-[#979797] ">Water Filter fee</p>
            <p className="main-font">1495</p>
          </div>
          <hr className="border border-black border-dashed mt-2" />
          <div className="flex justify-between mt-1">
            <p className="main-font text-[#FF4267] text-xl font-semibold">Discount</p>
            <p className="main-font text-[#FF4267] text-xl font-semibold">-{numberOfReferences * 50}&euro;</p>
          </div>
          <hr className="border border-black border-dashed mt-2" />
          <div className="flex justify-between mt-1">
            <p className="main-font font-semibold text-xl">Total</p>
            <p className="main-font text-[#3AA981] text-xl">{1495 - (numberOfReferences * 50)}&euro;</p>
          </div>
          <div className="flex justify-between mt-3">
            <button className="bg-[#5272E9] text-white font-main p-2 rounded-md w-[45%]">
              Pay by card
            </button>
            <button className="bg-[#5272E9] text-white font-main p-2 rounded-md w-[45%]" onClick={
              () => dispatch(addSale(saleInputs))
            }>
              Pay by cash
            </button>
          </div>
        </div>
      </div>}
    </>
  );
};


export default MyComponent;