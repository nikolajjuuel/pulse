interface Props {
  setShowSlide: React.Dispatch<React.SetStateAction<boolean>>;
}
const Card = (props: Props) => {
  const { setShowSlide } = props;
  return (
    <div
      className="m-1 w-72 h-80 bg-fuchsia-700 rounded-lg flex items-center justify-between p-4 border-2 border-gray-700"
      onClick={() => setShowSlide((prevState: boolean) => !prevState)}
    >
      <div>
        <div className="flex items-center"></div>
      </div>
    </div>
  );
};

export default Card;
