import { useState } from "react";
interface Props {
  value: string;
  options: { value: string; label: string }[];
}

const Dropdown = (props: Props) => {
  const { value, options } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex w-30 ml-1 p-1 relative">
      <div
        className="flex p-1"
        onClick={toggleDropdown}
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {value || "Select an option"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
      {isOpen && (
        <ul
          style={{
            position: "absolute",
            width: "400px",
            top: "100%",
            left: 0,
            zIndex: 10,
            margin: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            listStyle: "none",
            overflow: "scroll",
            maxHeight: "80vh",
          }}
        >
          {options.map((option) => (
            <li
              key={value}
              className="hover:bg-slate-100"
              style={{
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
