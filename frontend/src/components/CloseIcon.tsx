interface Props {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const CloseIcon = (props: Props) => {
  const { setState: state } = props;
  return (
    <div className="cursor-pointer" onClick={() => state((prev) => !prev)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};
export default CloseIcon;
