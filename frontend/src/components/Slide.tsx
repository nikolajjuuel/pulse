import { Ticket } from "../App";
import getData from "../utils/getData";
import CloseIcon from "./CloseIcon";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";

interface Props {
  showSlide: boolean;
  setSelctedTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
  selectedTicket: Ticket | null;
}

export interface Comment {
  comment: string;
  timestamp: string;
  id: number;
  ticket_id: number;
  user_id: number;
}

const Slide = (props: Props) => {
  const { selectedTicket, setSelctedTicket } = props;
  const [filename, setFilename] = useState<string>("");
  const [files, setFiles] = useState<string[]>([
    "./src/components/Slide.tsx",
    "./src/components/DropDown.tsx",
  ]);

  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("Selected Ticket", selectedTicket);
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

  console.log("Comments", comments);

  return (
    <div
      className={`bg-slate-50 w-1/3 absolute right-0 h-full p-5  ${
        selectedTicket ? "" : "translate-x-full"
      }  transition-all duration-300 ease-in-out`}
    >
      <div className="flex place-content-between">
        <div>
          <div className="text-xl font-bold">{"Ticket #123"}</div>
          <div className="flex items-center">
            <div>{"Status"}</div>
            <Dropdown value={selectedTicket?.status ?? ""} />
          </div>
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
          value={selectedTicket?.summary}
          placeholder="Breakdown"
        ></textarea>
      </div>
      <div>
        <textarea
          className="w-full h-32"
          value={selectedTicket?.inprogress}
          placeholder="In Progress"
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
    </div>
  );
};

export default Slide;
