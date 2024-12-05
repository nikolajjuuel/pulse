import { Data, Ticket } from "../App";
import getData from "../utils/getData";
import CloseIcon from "./CloseIcon";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import StatusIcon from "./StatusIcon";
import { options } from "../utils/options";

interface Props {
  showSlide: boolean;
  setSelctedTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
  selectedTicket: Ticket | null;
  setNewTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
}

export interface Comment {
  comment: string;
  timestamp: string;
  id: number;
  ticket_id: number;
  user_id: number;
}

const Slide = (props: Props) => {
  const { selectedTicket, setSelctedTicket, data, setData } = props;
  const [filename, setFilename] = useState<string>("");
  const [files, setFiles] = useState<string[]>([
    "./src/components/Slide.tsx",
    "./src/components/DropDown.tsx",
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [summary, setSummary] = useState<string>(selectedTicket?.summary || "");
  const [inprogress, setInprogress] = useState<string>(
    selectedTicket?.inprogress || ""
  );

  const save = async () => {
    const data = {
      title: "title",
      summary: "sum",
      status: "status",
      inprogress: "progrtess",
      user_id: 1,
      team_id: 1,
    };

    try {
      const res = await fetch("api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  const handleSummary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (selectedTicket) {
      const ticket = data[0].userTickets.filter(
        (t) => t.id === selectedTicket.id
      );
      setSummary(e.target.value);
      ticket[0].summary = e.target.value;

      const newData = [...data];
      newData[0].userTickets = ticket;
      setData(newData);
    }
  };
  const handleProgress = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (selectedTicket) {
      const ticket = data[0].userTickets.filter(
        (t) => t.id === selectedTicket.id
      );

      const updatedValue = e.target.value;
      setInprogress(updatedValue);

      ticket[0].inprogress = updatedValue;
      const newData = [...data];
      newData[0].userTickets = ticket;
      setData(newData);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getData("/api/comments/1");
        setComments(data.comments);
      } catch (err) {
        console.log(err);
        console.log("An error occurred while fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Selected Ticket", selectedTicket);
    if (selectedTicket) {
      setSummary(selectedTicket.summary);
      setInprogress(selectedTicket.inprogress);
    }
  }, [selectedTicket]);

  return (
    <div
      className={`bg-slate-50 w-1/3 absolute right-0 h-full p-5  ${
        selectedTicket ? "" : "translate-x-full"
      }  transition-all duration-300 ease-in-out`}
    >
      <div className="flex place-content-between">
        <div>
          <div className="flex items-center">
            <StatusIcon />
            <Dropdown options={options} value={selectedTicket?.status ?? ""} />
          </div>
          <div className="text-xl font-bold">{selectedTicket?.title}</div>
        </div>
        <div>
          <CloseIcon setState={setSelctedTicket} />
        </div>
      </div>
      <hr />
      <div>{"Summary"}</div>
      <div>
        <textarea
          className="w-full h-32"
          value={summary}
          placeholder="Breakdown"
          onChange={handleSummary}
        ></textarea>
      </div>
      <div>
        <textarea
          className="w-full h-32"
          value={inprogress}
          placeholder="In Progress"
          onChange={handleProgress}
        ></textarea>
      </div>
      <div>
        <label>Add file</label>
        <input
          type="text"
          className="ml-1 p-1"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setFiles([...files, filename]);
              setFilename("");
            }
          }}
          placeholder="Enter file name"
        />

        <ul>
          {files.map((file, i) => {
            return (
              <div className="flex">
                <li>{file}</li>
                <button
                  className="rounded-full ml-2 hover:bg-red-500"
                  onClick={() => {
                    setFiles(files.filter((f) => f !== files[i]));
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </ul>
        <div>Ai Recommendation</div>
        {isLoading && <div>Loading...</div>}
        {comments &&
          comments.map((comment) => {
            return (
              <div className="flex">
                <div>comment:{comment.comment}</div>
                <div>date:{comment.timestamp}</div>
                <div>by:{comment.user_id}</div>
              </div>
            );
          })}
      </div>

      <button onClick={save} className="bg-indigo-500 rounded-md">
        Post to DB
      </button>
    </div>
  );
};

export default Slide;
