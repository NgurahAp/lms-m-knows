export const Header: React.FC = () => {
  return (
    <div className="bg-[#3498DB] w-full h-56 rounded-lg mt-6 flex flex-col justify-center text-white px-12">
      <h1 className="text-2xl font-semibold">Fitur</h1>
      <p className="py-2">
        Serangkaian fitur canggih untuk menciptakan pengalaman pembelajaran yang
        menarik dan personal:
      </p>
      <div className="flex items-center w-full py-4">
        {/* Input search */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-12 pl-10 pr-12 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {/* Icon search di sebelah kiri */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img
              src="/pelatihanku/search.png"
              alt="Search Icon"
              className="h-5 w-5"
            />
          </div>
        </div>

        <button className="ml-2 h-12 px-4 bg-[#9AC827] text-white rounded-md">
          <img
            src="/pelatihanku/search-right.png"
            alt="Search Icon"
            className="md:h-5 h-3 w-5"
          />
        </button>
      </div>
    </div>
  );
};
