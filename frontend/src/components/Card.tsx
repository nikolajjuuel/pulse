import { useEffect } from "react";
import { Ticket } from "../App";
import GetHelp from "./GetHelp";
import StatusIcon from "./StatusIcon";

interface Props {
  ticket: Ticket | null;
  setSelctedTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
}
const Card = (props: Props) => {
  const { ticket } = props;
  const files: string[] = [
    "./src/components/Slide.tsx",
    "./src/components/DropDown.tsx",
  ];

  return (
    <div
      //h-80
      className="m-1 w-72  bg-slate-200 rounded-lg flex  justify-between border-2 border-slate-400"
      onClick={() => props.setSelctedTicket(ticket)}
    >
      <div style={{ width: "100%" }}>
        <div className="flex text-sm font-bold items-center mb-1 p-2 border-dashed border-b-2 border-slate-300">
          <StatusIcon />
          <div className="ml-1">{ticket?.status}</div>
        </div>
        <div className="flex mb-1 ml-1 text-sm ">{ticket?.title}</div>
        <div className="text-sm ml-1 font-bold">In Progress</div>
        <div className="flex text-xs ml-3">{ticket?.inprogress}</div>

        <div className="text-sm ml-1 font-bold">Files</div>
        <div className="pb-1 border-b-2 border-slate-400 ">
          <ul>
            {files.map((file) => {
              return (
                <div className="flex text-xs ml-3">
                  <li>{file}</li>
                </div>
              );
            })}
          </ul>
        </div>

        <GetHelp />
      </div>
    </div>
  );
};

export default Card;
