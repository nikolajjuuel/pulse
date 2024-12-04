import Card from "./Card";
import CardSkeleton from "./Skeletons/CardSkeleton";
interface Props {
  tickets: any;
  setSelctedTicket: React.Dispatch<React.SetStateAction<any>>;
  isLoading: boolean;
}
const Slide = (props: Props) => {
  const { tickets, setSelctedTicket, isLoading } = props;
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
                tickets.map((ticket: any) => {
                  return (
                    <Card ticket={ticket} setSelctedTicket={setSelctedTicket} />
                  );
                })}
              <div>Add Card</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Slide;
