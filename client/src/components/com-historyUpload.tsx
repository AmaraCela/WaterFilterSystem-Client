import * as React from "react";
import SortDropdown from "./com-sortDropdown";
import PageNumber from "./pageNo"; // Import the PageNumber component

interface MyComponentProps {
  // Add any necessary props here
}

// Function to generate random  names
//MARKO AND AMARA, THIS FUNCTION IS ADDED TO BE CHANGED LATER
//USE THIS FUNCTION TO POPULATE  NAMES FROM DATABASE DATA INSTEAD
//JUST FOR TESTING

const generateRandomName = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const l = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 14 characters
  let refName = "";
  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    refName += alphabet[randomIndex];
  } 
  return refName;
};

function HistoryUpload(props: MyComponentProps) {
  // Generate an array of random file names
  const numberOfRows = 5; // Number of rows to generate
  const names = Array.from({ length: numberOfRows }, generateRandomName);

  return (
    <div className="flex flex-col grow pt-7 pr-3.5 pb-4 pl-8 max-w-[600px] bg-white rounded-xl border border-indigo-800 border-solid max-md:pl-5 max-md:mt-6 max-md:max-w-full">
      {/* Table header */}
      <table className="w-full">
        <thead>
          <tr className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <th className="flex flex-col">
              <div className="text-xl font-bold tracking-normal text-indigo-950">Sent Numbers</div>
              <div className="mt-5 text-sm font-medium tracking-normal text-indigo-800">Reference Name</div>
            </th>
            <th className="self-end mt-11 text-sm font-medium tracking-normal text-indigo-800 max-md:mt-10">Date sent</th>
            <th className="flex flex-col self-start">
              {/* SortDropdown component */}
              <SortDropdown onSelect={(value: string) => {}} />
              <div className="self-center mt-4 text-sm font-medium tracking-normal text-center text-indigo-800">Status of delivery</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Table body content */}
          {names.map((Name, index) => (
            <tr key={index} className="flex gap-20 items-center mt-1.5 text-xs font-medium tracking-normal max-md:flex-wrap max-md:max-w-full">
              <td className="flex-auto self-stretch my-auto text-sm tracking-normal text-zinc-800">{Name}</td>
              <td className="self-stretch my-auto italic text-neutral-400">12-04-23 14:00</td>
              <td className="justify-center self-stretch px-2.5 py-1 text-emerald-600 whitespace-nowrap rounded border border-emerald-500 border-solid bg-teal-500 bg-opacity-40">uploaded</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <div className="flex gap-2.5 self-end mt-6 text-xs font-medium tracking-normal leading-3 text-gray-700 whitespace-nowrap max-md:mr-2.5">
                {/* PageNumber components */}
                <PageNumber number={1} active />
                <PageNumber number={2} />
                <PageNumber number={3} />
                <PageNumber number={4} />
                <PageNumber number={5} />
                {/* Add more PageNumber components as needed */}
                <div className="self-start mt-4 text-black">...</div>
                {/* More pagination buttons */}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default HistoryUpload;
