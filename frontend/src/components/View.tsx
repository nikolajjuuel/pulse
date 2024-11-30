interface Props {
  selectedView: string;
  setShowSlide: React.Dispatch<React.SetStateAction<boolean>>;
}
import Tickets from "./Tickets";

const View = (props: Props) => {
  const { setShowSlide } = props;
  if (props.selectedView === "Me") {
    return (
      <div className="bg-slate-100	w-5/6">
        <div className="p-4 border-b border-slate-700">{"My Tickets"}</div>
        <div>{"Priority"}</div>
        <div>
          <Tickets setShowSlide={setShowSlide} />
        </div>
      </div>
    );
  }
  if (props.selectedView === "Team") {
    return <div className="bg-slate-50	w-5/6">{"Team"}</div>;
  }
};

export default View;
