import { Ticket } from "../App";

interface Props {
  view: string;
  setView: React.Dispatch<React.SetStateAction<"User" | "Team">>;
  selectedTicket: Ticket | null;
  setSelctedTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
}

const SidePanel = (props: Props) => {
  const { view, setView } = props;
  return (
    <div className="w-1/6 h-screen bg-teal-800">
      <ul className="flex flex-col">
        <li
          onClick={() => setView("Team")}
          className={`text-white cursor-pointer	 p-4 border-b border-slate-700 ${
            view === "Team" ? "font-bold" : ""
          }`}
        >
          {"Team"}
        </li>
        <li
          onClick={() => setView("User")}
          className={`text-white	cursor-pointer p-4 border-b border-slate-700 ${
            view === "Me" ? "font-bold" : ""
          }`}
        >
          {"Me"}
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;
