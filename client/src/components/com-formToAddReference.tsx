import * as React from "react";

function AddReferenceForm() {
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [originClient, setOriginClient] = React.useState("");

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Form submitted");
  };

  const handleClear = () => {
    // Clear form fields
    setFullName("");
    setPhoneNumber("");
    setOriginClient("");
    console.log("Fields cleared");
  };

  return (
    <div className="flex flex-col text-sm leading-4 text-indigo-800 max-w-[325px]">
      <div className="justify-center items-start p-5 w-full italic bg-white rounded-md border border-solid border-slate-700">
        <input
          type="text"
          className="w-full focus:outline-none"
          placeholder="Full Name of Reference"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="justify-center items-start p-5 mt-4 w-full italic bg-white rounded-md border border-solid border-slate-700">
        <input
          type="text"
          className="w-full focus:outline-none"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center mt-4 w-full bg-white">
        <div className="flex gap-5 py-3 pr-2.5 pl-5 w-full bg-white rounded-md border border-solid border-slate-700">
          <input
            type="text"
            className="flex-auto my-auto italic w-full focus:outline-none"
            placeholder="Origin Client of Reference"
            value={originClient}
            onChange={(e) => setOriginClient(e.target.value)}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b9bd73056c27322f40101b7d947f0b393d57f4adf45c2463cecd86c89231a2e?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="shrink-0 w-7 aspect-square"
          />
        </div>
      </div>
      <button
        className="justify-center items-center px-16 py-5 mt-10 w-full text-base font-bold leading-6 text-center text-white whitespace-nowrap bg-indigo-900 rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        className="justify-center items-center px-16 py-5 mt-4 w-full text-base font-bold leading-6 text-center text-white bg-indigo-800 rounded-md"
        onClick={handleClear}
      >
        Clear fields
      </button>
    </div>
  );
}

export default AddReferenceForm;
