import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbItem {
  label: string | undefined;
  path?: string | undefined;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="bg-white w-full min-h-14 flex items-center pl-5 rounded-xl py-2">
      <div className="flex items-center overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {index === 0 && (
              <div className="flex-shrink-0">
                <img
                  src="/pelatihanku/home.png"
                  className="md:w-6 w-4 -mt-1 md:block hidden"
                  alt="Home"
                />
              </div>
            )}
            {item.path ? (
              <Link to={item.path} className="flex items-center">
                <span
                  className={`${
                    index === 0 ? "md:pl-5 pl-0" : ""
                  } text-blue-500 md:text-base text-xs font-semibold whitespace-nowrap`}
                >
                  {item.label}
                </span>
              </Link>
            ) : (
              <span
                className={`${
                  index === 0 ? "md:pl-5 pl-3" : ""
                } text-gray-400 md:text-base text-xs font-semibold whitespace-nowrap`}
              >
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <FaChevronRight className="text-gray-300 md:mx-4 mx-2 text-xs flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
