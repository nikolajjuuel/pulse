import CloseIcon from "./CloseIcon";
import Dropdown from "./Dropdown";
import { useState } from "react";

interface Props {
  showSlide: boolean;
  setShowSlide: React.Dispatch<React.SetStateAction<boolean>>;
}

const Slide = (props: Props) => {
  const { showSlide, setShowSlide } = props;
  const [filename, setFilename] = useState<string>("");
  const [files, setFiles] = useState<string[]>([
    "./src/components/Slide.tsx",
    "./src/components/DropDown.tsx",
  ]);

  return (
    <div
      className={`bg-slate-50 w-1/3 absolute right-0 h-full p-5  ${
        showSlide ? "" : "translate-x-full"
      }  transition-all duration-300 ease-in-out`}
    >
      <div className="flex place-content-between">
        <div>
          <div className="text-xl font-bold">{"Ticket #123"}</div>
          <div className="flex items-center">
            <div>{"Status"}</div>
            <Dropdown />
          </div>
        </div>
        <div>
          <CloseIcon setState={setShowSlide} />
        </div>
      </div>
      <hr />
      <div>{"Summary"}</div>
      <div>
        <textarea className="w-full h-32" placeholder="Breakdown"></textarea>
      </div>
      <div>
        <textarea className="w-full h-32" placeholder="In Progress"></textarea>
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
      </div>
    </div>
  );
};

export default Slide;
