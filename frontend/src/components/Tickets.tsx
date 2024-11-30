import Card from "./Card";
interface Props {
  setShowSlide: React.Dispatch<React.SetStateAction<boolean>>;
}
const Slide = (props: Props) => {
  const { setShowSlide } = props;
  return (
    <>
      <div className="flex">
        <Card setShowSlide={setShowSlide} />
        <Card setShowSlide={setShowSlide} />
        <Card setShowSlide={setShowSlide} />
        <Card setShowSlide={setShowSlide} />
      </div>
    </>
  );
};

export default Slide;
