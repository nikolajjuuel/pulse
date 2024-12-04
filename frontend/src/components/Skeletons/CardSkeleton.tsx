const CardSkeleton = () => {
  return (
    <div className="animate-skeleton m-1 w-72 shadow  bg-slate-300 rounded-lg flex  justify-between border-2 border-slate-400">
      <div style={{ width: "100%" }}>
        <div className="shadow  flex text-sm font-bold items-center mb-1 p-2 border-dashed border-b-2 border-slate-400">
          <div className=" shadow w-2 h-2 bg-slate-400 rounded-full relative">
            <div className="pulse"></div>
          </div>{" "}
          <div className="h-4 w-full ml-1  bg-slate-400 rounded"> </div>
        </div>
        <div className="flex mb-1 ml-1 text-sm "></div>
        <div className="h-4 w-40 ml-1  bg-slate-400 rounded"> </div>
        <div className="flex text-xs ml-3"></div>
        <div className="h-4 w-20 mt-1 ml-1  bg-slate-400 rounded"> </div>
        <div className="pb-1 border-b-2 border-slate-400 ">
          <ul>
            <li className="h-2 w-44 ml-1 mt-1 bg-slate-400 rounded"></li>
            <li className="h-2 w-44 ml-1 mt-1 bg-slate-400 rounded"></li>
          </ul>
        </div>
        <div className="flex justify-between items-center ">
          <div className="w-1/2 h-2 bg-slate-400 text-xs flex m-1  justify-center items-center hover:bg-orange-300 rounded-md"></div>
          <div className="w-1/2 h-2 bg-slate-400 text-xs flex  justify-center items-center hover:bg-orange-300 rounded-md"></div>
        </div>{" "}
      </div>
    </div>
  );
};

export default CardSkeleton;
