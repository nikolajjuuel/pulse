import Card from "./Card";
interface Props {
  setShowSlide: React.Dispatch<React.SetStateAction<boolean>>;
}
const Slide = (props: Props) => {
  const { setShowSlide } = props;
  return (
    <>
      <div className="flex">
        <div>
          Section
          <Card setShowSlide={setShowSlide} />
          <div>Add Card</div>
        </div>
        <div>
          Section
          <Card setShowSlide={setShowSlide} />
          <div>Add Card</div>
        </div>
        <div>
          Section
          <Card setShowSlide={setShowSlide} />
          <div>Add Card</div>
        </div>
        <div>Add Section</div>
      </div>
    </>
  );
};

export default Slide;
