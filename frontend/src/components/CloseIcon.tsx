interface Props {
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const CloseIcon = (props: Props) => {
  const { setState: state } = props;
  return (
    <div
      className="cursor-pointer p-1 rounded-full hover:bg-slate-200"
      onClick={() => state((prev: any) => null)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
        />
      </svg>
    </div>
  );
};
export default CloseIcon;
