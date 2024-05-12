import * as React from "react";

interface ReferenceFormProps {
  referenceNumber: number;
  onSubmit: () => void;
  isVisible: boolean;
}

const ReferenceForm: React.FC<ReferenceFormProps> = ({
  referenceNumber,
  onSubmit,
  isVisible,
}) => {
  const [originClient, setOriginClient] = React.useState("");
  const [referralName, setReferralName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [profession, setProfession] = React.useState("");
  const [financiallyQualified, setFinanciallyQualified] = React.useState(false);
  const [notFinanciallyQualified, setNotFinanciallyQualified] = React.useState(false);
  const [comments, setComments] = React.useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    onSubmit();
  };

  // Function to handle origin client change
  const handleOriginClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOriginClient(event.target.value);
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
      className={`flex flex-col px-5 py-6 rounded-lg bg-indigo-50 max-w-[500px] ${
        isVisible ? "" : "hidden"
      }`}
    >
      <h2 className="text-2xl font-bold leading-6 text-indigo-800">
        Reference {referenceNumber}
      </h2>
      <div className="flex flex-col gap-5 mt-3.5">
        <div className="flex flex-col justify-center px-3 py-1.5 bg-white rounded-lg shadow-md">
          <label
            htmlFor={`originClient-${referenceNumber}`}
            className="text-xs leading-4 text-zinc-600"
          >
            Origin Client
          </label>
          <input
            type="text"
            id={`originClient-${referenceNumber}`}
            value={originClient}
            onChange={handleOriginClientChange}
            className="flex flex-col justify-center items-start px-2 py-1"
            aria-label={`Enter origin client for reference ${referenceNumber}`}
          />
        </div>
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
  const [numberOfReferences, setNumberOfReferences] = React.useState(1);
  const [selectedReference, setSelectedReference] = React.useState(1);

  // Function to handle number of references change
  const handleNumberOfReferencesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberOfReferences(parseInt(event.target.value));
  };

  // Function to handle reference selection
  const handleReferenceSelection = (referenceNumber: number) => {
    setSelectedReference(referenceNumber);
  };

  return (
    <div className="flex flex-col mr-36 max-w-full w-[1500px] max-md:mr-2.5 ml-5">
      <form>
        <div className="flex gap-4 self-start max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col text-gray-600">
            <div className="flex flex-col justify-center text-base leading-6 fill-white">
              <div className="flex gap-5 justify-between bg-white px-3.5 py-3 rounded-lg border border-solid border-neutral-400">
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
          <div className="flex-auto self-start text-sm tracking-wide text-neutral-900 text-opacity-90">
            Add the number of references that will be obtained from the client.
          </div>
        </div>
      </form>
      <div className="flex gap-5 mt-6 max-md:flex-wrap">
        {[...Array(numberOfReferences)].map((_, index) => (
          <React.Fragment key={index}>
            <ReferenceForm
              referenceNumber={index + 1}
              onSubmit={() => {}}
              isVisible={selectedReference === index + 1}
            />
          </React.Fragment>
        ))}
        <div className="flex flex-col gap-2">
          {[...Array(numberOfReferences)].map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer ${
                selectedReference === index + 1 ? 'bg-indigo-500 border-indigo-500' : 'bg-white'
              }`}
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
      >
        Submit All
      </button>
    </div>
  );
};

export default MyComponent;
