import Card from "./Card";
interface Props {
  tickets: any;
  setSelctedTicket: React.Dispatch<React.SetStateAction<any>>;
}
const Slide = (props: Props) => {
  const { tickets, setSelctedTicket } = props;
  return (
    <>
      <div className="flex">
        <div>
          Section
          {tickets &&
            tickets.map((ticket: any) => {
              return (
                <Card ticket={ticket} setSelctedTicket={setSelctedTicket} />
              );
            })}
          <div>Add Card</div>
        </div>
      </div>
    </>
  );
};

export default Slide;
