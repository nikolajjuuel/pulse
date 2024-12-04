import { useEffect, useState } from "react";
import "./App.css";
import SidePanel from "./components/SidePanel";
import Slide from "./components/Slide";
import View from "./components/View";
import getData from "./utils/getData";

export interface Ticket {
  id: number;
  title: string;
  status: string;
  summary: string;
  inprogress: string;
  files: string[];
  comments: Comment[];
}
export interface Data {
  userTickers: Ticket[];
  teamTickets: Ticket[];
}

function App() {
  const [view, setView] = useState<"User" | "Team">("User");
  const [showSlide, setShowSlide] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Data[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Array of API calls
        const responses = await Promise.all([
          getData("/api/tickets/user/3"),
          getData("/api/tickets/team/1"),
          // getData("/api/teams"),
        ]);
        console.log(responses);
        // Check if all responses are successful
        const data = await Promise.all(responses.map((res) => res));
        setData(data);
      } catch (err) {
        console.log(err);
        console.log("An error occurred while fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("data", data);
  return (
    <div className="flex">
      <SidePanel
        view={view}
        setView={setView}
        selectedTicket={selectedTicket}
        setSelctedTicket={setSelectedTicket}
      />
      <View
        view={view}
        setShowSlide={setShowSlide}
        data={data}
        setSelctedTicket={setSelectedTicket}
        isLoading={isLoading}
      />
      <Slide
        showSlide={showSlide}
        selectedTicket={selectedTicket}
        setSelctedTicket={setSelectedTicket}
      />
    </div>
  );
}

export default App;
