interface CustomHistoryModel {
  keys: string[];
  value?: string;
  onClick: (value: string) => void;
}

export const CustomHistory = ({ onClick, keys }: CustomHistoryModel) => {
  const handleClick = (value: string) => {
    onClick(value);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-start">History</h1>
      <div className="max-w-5xl mx-auto mt-8">
        {[...keys].reverse().map((elem, index) => (
          <div
            className="border-l-2 border-gray-500"
            onClick={() => handleClick(elem)}
            key={index}
          >
            <div className=" hover:bg-slate-500 flex flex-col md:flex-row md:justify-between py-4 pl-8 rounded-r-lg ">
              <div className="mb-4 md:mb-0 ">
                <h3 className="text-xl font-bold">{elem}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
