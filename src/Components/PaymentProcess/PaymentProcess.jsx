import ProcessEmail from "./ProcessEmail/ProcessEmail";
import ProcesAddress from "./ProcessAddress/ProcessAddress";
import ProcessMethod from "./ProcessMethod/ProcessMethod";
const PaymentProcess = () => {
  return (
    <div>
      <div className="bg-white p-10 mb-2">
        <ProcessEmail />
      </div>
      <div className="bg-white p-10 mb-2">
        <ProcesAddress />
      </div>
      <div className="bg-white p-10 mb-2">
        <ProcessMethod />
      </div>
    </div>
  );
};

export default PaymentProcess;
