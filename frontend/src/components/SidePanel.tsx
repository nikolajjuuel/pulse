const SidePanel = () => {
  return (
    <div className="w-1/6 h-screen bg-slate-800">
      <ul className="flex flex-col">
        <li className="text-white	 p-4 border-b border-slate-700">{"Team"}</li>
        <li className="text-white	p-4 border-b border-slate-700">{"Me"}</li>
      </ul>
    </div>
  );
};

export default SidePanel;
