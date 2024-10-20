import { FaCheck } from "react-icons/fa";

const ProcessSucess = ({ title, children }) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#00ff00] flex justify-center items-center">
          <div className="text-white">
            <FaCheck />
          </div>
        </div>
        <div>
          <div className="font-semibold ">{title}</div>
        </div>
      </div>
      <div className="ml-10 flex flex-col gap-3">{children}</div>
    </div>
  );
};
export default ProcessSucess;
