import { useState } from "react";
interface Props {
  value: string;
}

const Dropdown = (props: Props) => {
  const { value } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(value ?? "");

  const options = [
    { value: "great", label: "This is going great! 🎉" },
    { value: "zone", label: "Wow, I’m really in the zone. 😎" },
    {
      value: "productive",
      label: "Look at me being all productive and stuff. 💪",
    },
    {
      value: "harder",
      label: "This is a little harder than I thought. 🤔",
    },
    { value: "rightChoice", label: "Hmm, was that the right choice? 🤷‍♂️" },
    { value: "doubleCheck", label: "Alright, let me double-check that… 🧐" },
    { value: "notRight", label: "Wait, that doesn’t look right. 😅" },
    { value: "fixLater", label: "It’s fine, I’ll fix it in the next step. 🛠️" },
    { value: "notWorking", label: "Hold on, why isn’t this working? 😕" },
    { value: "skipped", label: "Maybe I skipped something…? 🙄" },
    { value: "broke", label: "Nope, I definitely broke something. 😬" },
    { value: "whatDidIDo", label: "What did I do?! 😱" },
    { value: "googling", label: "Googling my exact error message... 🔍" },
    { value: "reddit", label: "Okay, Reddit says this is common...ish? 🧵" },
    {
      value: "foreignStackOverflow",
      label: "Why is Stack Overflow in another language?! 🌐",
    },
    { value: "stayCalm", label: "Deep breath, stay calm. 🧘" },
    { value: "coffeeBreak", label: "Maybe I’ll take a quick coffee break. ☕" },
    { value: "systemDesign", label: "Who even designed this system?! 😤" },
    { value: "newError", label: "Wait, was that a new error message? 🫠" },
    { value: "noIdea", label: "I have no idea what I’m doing. 🤯" },
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectOption = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

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
        {selectedOption || "Select an option"}
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
              onClick={() => selectOption(option.label)}
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
