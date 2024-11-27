const Slide = () => {
  return (
    <div className="bg-orange-600 w-1/3 absolute right-0 h-full">
      {"Slide"}
      <div>{"Ticket #123"}</div>
      <div>{"Status"}</div>
      <hr />
      <div>{"Summary"}</div>
      <div>
        <textarea className="w-full h-32" placeholder="Description"></textarea>
      </div>
      <div>
        <textarea className="w-full h-32" placeholder="Files"></textarea>
      </div>
    </div>
  );
};

export default Slide;
