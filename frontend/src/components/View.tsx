interface Props {
  view: "User" | "Team";
  setShowSlide: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  setSelctedTicket: React.Dispatch<React.SetStateAction<any>>;
}
import Tickets from "./Tickets";

const View = (props: Props) => {
  const { view, setShowSlide, data, setSelctedTicket } = props;
  console.log("Tickets", data);

  if (view === "User") {
    return (
      <div className="bg-slate-100	w-5/6">
        <div className="p-4 border-b border-slate-700">{"My Tickets"}</div>
        <div>
          <Tickets
            tickets={data[0]?.userTickets}
            setSelctedTicket={setSelctedTicket}
          />
        </div>
      </div>
    );
  }
  if (view === "Team") {
    return (
      <div className="bg-slate-100	w-5/6">
        <div className="p-4 border-b border-slate-700">{"My Tickets"}</div>
        <div>
          <Tickets
            tickets={data[1]?.teamTickets}
            setSelctedTicket={setSelctedTicket}
          />
        </div>
      </div>
    );
  }
};

export default View;
