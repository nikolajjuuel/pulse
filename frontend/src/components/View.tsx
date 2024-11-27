interface Props {
  selectedView: string;
}
import Tickets from "./Tickets";

const View = (props: Props) => {
  if (props.selectedView === "Me") {
    return (
      <div className="bg-yellow-300	w-5/6">
        <div className="p-4 border-b border-slate-700">{"My Tickets"}</div>
        <div>{"Priority"}</div>
        <div>
          <Tickets />
        </div>
      </div>
    );
  }
  if (props.selectedView === "Team") {
    return <div className="bg-yellow-300	w-5/6">{"Team"}</div>;
  }
};

export default View;
