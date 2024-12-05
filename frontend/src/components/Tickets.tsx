import { useEffect } from "react";
import { Ticket } from "../App";
import Card from "./Card";
import CardSkeleton from "./Skeletons/CardSkeleton";
interface Props {
  tickets: Ticket[];
  setSelctedTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
  isLoading: boolean;
  newTicket: Ticket | null;
  setNewTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
}
const Tickets = (props: Props) => {
  const { tickets, setSelctedTicket, isLoading, newTicket, setNewTicket } =
    props;

  useEffect(() => {}, [tickets]);
  return (
    <>
      <div className="flex">
        <div>
          Section
          {isLoading ? (
            <CardSkeleton />
          ) : (
            <>
              {tickets &&
                tickets.map((ticket) => {
                  return (
                    <Card ticket={ticket} setSelctedTicket={setSelctedTicket} />
                  );
                })}
              {newTicket ? null : (
                <div
                  onClick={() => {
                    setNewTicket({
                      id: 3,
                      title: "",
                      status: "",
                      summary: "",
                      inprogress: "",
                      files: [],
                      //comments: [],
                    });
                  }}
                >
                  Add New Ticket{" "}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Tickets;
