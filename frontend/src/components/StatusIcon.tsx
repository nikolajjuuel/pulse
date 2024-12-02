const StatusIcon = () => {
  const yellow = "#f6e05e";
  const red = "#f56565";
  return (
    <>
      <div className="w-2 h-2 bg-red-500 rounded-full relative">
        <div id="status" className="pulse"></div>
      </div>
      <style>
        {`
      #status {
        position: absolute;
        top: -1px; 
        left: -1px;
        background-color:${red}; // #6fe69b;
        display: block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        opacity: 0.5;
        }

      .pulse {
        animation: pulse-animation 1.5s infinite;
      }

      @keyframes pulse-animation {
        0% {
          scale: 0
        }
        100% {
          slace: 4
        }
      }

      `}
      </style>
    </>
  );
};

export default StatusIcon;
