const Loader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-500 z-50">
        <div className="relative w-36 h-36 rounded-full border border-gray-900 shadow-[25px_25px_75px_rgba(0,0,0,0.55)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-5 border border-dashed border-gray-900 rounded-full shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]"></div>
          <div className="absolute w-12 h-12 rounded-full border border-dashed border-gray-700 shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]"></div>
          <span className="absolute top-1/2 left-1/2 w-1/2 h-full bg-transparent origin-top-left border-t border-dashed border-white animate-[radar81_2s_linear_infinite]">
            <span className="absolute top-0 left-0 w-full h-full bg-green-700 origin-top-left rotate-[-55deg] blur-[30px] drop-shadow-[20px_20px_20px_rgba(34,139,34,1)]"></span>
          </span>
          <style>
            {`
              @keyframes radar81 {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      </div>
    );
  };
  
  export default Loader;
  