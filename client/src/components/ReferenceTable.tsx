
interface ReferenceItemProps {
  fullName: string;
  referrer: string;
  city: string;
  address: string;
  phoneNumber: string;
  profession: string;
}

const ReferenceItem: React.FC<ReferenceItemProps> = ({
  fullName,
  referrer,
  city,
  address,
  phoneNumber,
  profession,
}) => {
  return (
    <div className="px-3 py-5 rounded-md border border-solid bg-white bg-opacity-80 border-zinc-400 max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="box-border relative flex-wrap mx-auto text-xl leading-4">
              {fullName}
            </div>
            <div className="box-border relative flex-wrap mx-auto text-xl leading-4 underline">
              {referrer}
            </div>
            <div className="box-border relative flex-wrap mx-auto text-xl leading-4">
              {city}
            </div>
            <div className="box-border flex relative flex-row flex-wrap shrink-0 mx-auto">
              <div className="self-center m-auto text-lg leading-4">
                {address}
              </div>
            </div>
            <div className="box-border relative flex-wrap mx-auto text-lg leading-4">
              {phoneNumber}
            </div>
            <div className="box-border flex relative flex-row flex-wrap shrink-0 mx-auto">
              <div className="self-center m-auto text-lg leading-4">
                {profession}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const referenceData: ReferenceItemProps[] = [
  {
    fullName: "Sokol Kaci",
    referrer: "Ervin Hysa",
    city: "Tirane",
    address: "Rruga e barrikadave",
    phoneNumber: "+355 69 78 65471",
    profession: "Medical Doctor",
  },
  {
    fullName: "John Doe",
    referrer: "Jane Smith",
    city: "New York",
    address: "123 Main St",
    phoneNumber: "+1 555 123 4567",
    profession: "Software Engineer",
  },
  {
    fullName: "Alice Johnson",
    referrer: "Bob Williams",
    city: "London",
    address: "456 Oxford St",
    phoneNumber: "+44 20 1234 5678",
    profession: "Graphic Designer",
  },
  {
    fullName: "Maria Garcia",
    referrer: "Carlos Hernandez",
    city: "Madrid",
    address: "Calle Gran Via 789",
    phoneNumber: "+34 91 234 5678",
    profession: "Marketing Manager",
  },
];

const ReferenceTable: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-end px-16 py-16 backdrop-blur-[2px] bg-neutral-100 max-md:px-5">
      <div className="flex flex-col mt-2.5 max-md:mt-10 max-md:max-w-full">
        <h1 className="mt-8 text-4xl font-bold leading-7 text-indigo-800 max-md:max-w-full">
          References
        </h1>
        <div className="flex gap-5 justify-between self-start mt-16 text-lg font-bold text-center text-white max-md:mt-10">
          <div className="flex gap-1 px-7 py-3 whitespace-nowrap rounded-xl bg-blue-950 bg-opacity-60 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c8fb975ba1727805af4a15d86d5d01604c2f8e9391044746ec3ad00b5617c31?apiKey=88d3f92d58ea482684c8df6752948a2d&"
              alt="Search icon"
              className="shrink-0 aspect-square w-[19px]"
            />
            <div className="my-auto">Search</div>
          </div>
          <div className="flex gap-3 px-4 py-3 rounded-xl bg-blue-950 bg-opacity-60">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5774f732307e4364f456cea88447f754b5e7cf4e59fd87fc25e90ee06707b17?apiKey=88d3f92d58ea482684c8df6752948a2d&"
              alt="Add reference icon"
              className="shrink-0 aspect-[0.94] w-[18px]"
            />
            <div className="flex-auto my-auto">add reference</div>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-10 text-sm leading-4 bg-stone-300 bg-opacity-0 text-slate-700 max-md:max-w-full">
          <div className="flex gap-5 justify-center px-3 py-3.5 w-full border border-solid bg-zinc-100 border-stone-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="gap-3.5 justify-center px-7 py-3 m-auto rounded-xl shadow-sm bg-indigo-500 bg-opacity-50">
              Full Name
            </div>
            <div className="gap-3.5 justify-center px-7 py-3 m-auto rounded-xl shadow-sm bg-indigo-500 bg-opacity-50">
              Referrer
            </div>
            <div className="gap-3.5 justify-center px-7 py-3 m-auto rounded-xl shadow-sm bg-indigo-500 bg-opacity-50">
              City
            </div>
            <div className="gap-3.5 justify-center px-7 py-3 m-auto rounded-xl shadow-sm bg-indigo-500 bg-opacity-50">
              Address
            </div>
            <div className="gap-3.5 justify-center px-7 py-3 m-auto rounded-xl shadow-sm bg-indigo-500 bg-opacity-50">
              Phone Number
            </div>
            <div className="gap-3.5 justify-center px-7 py-3 m-auto rounded-xl shadow-sm bg-indigo-500 bg-opacity-50">
              Profession
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-6 pb-14 bg-white bg-opacity-10 max-md:max-w-full">
          <div className="flex flex-col justify-center border border-solid bg-zinc-100 border-stone-300 max-md:max-w-full">
            {referenceData.map((reference, index) => (
              <ReferenceItem key={index} {...reference} />
            ))}
          </div>
          <div className="shrink-0 mt-1.5 rounded-xl border border-solid bg-white bg-opacity-80 border-zinc-400 h-[60px] max-md:max-w-full" />
          <div className="shrink-0 mt-3.5 rounded-xl border border-solid bg-white bg-opacity-80 border-zinc-400 h-[60px] max-md:max-w-full" />
          <div className="shrink-0 mt-3.5 rounded-xl border border-solid bg-white bg-opacity-80 border-zinc-400 h-[60px] max-md:max-w-full" />
          <div className="shrink-0 mt-3.5 rounded-xl border border-solid bg-white bg-opacity-80 border-zinc-400 h-[60px] max-md:max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default ReferenceTable;