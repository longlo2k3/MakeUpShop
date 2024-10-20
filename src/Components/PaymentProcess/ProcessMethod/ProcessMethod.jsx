import { useContext, useState } from "react";
import { SvContext } from "../../SeviceContext/SeviceContext";
import Title from "../Title/Title";
import ProcessSucess from "../ProcessSucess/ProcessSucess";

const ProcessMethod = () => {
  const { uploadPayment, setUploadPayment } = useContext(SvContext);

  // Khởi tạo state cho các trường nhập liệu và lỗi
  const [creditCard, setCreditCard] = useState("");
  const [errors, setErrors] = useState({});
  const [ischecked, setIsChecked] = useState(false);

  const validateCardNumber = (number) => {
    // Kiểm tra định dạng thẻ tín dụng (chỉ là ví dụ đơn giản)
    const regex = /^\d{16}$/; // Chỉ cho phép 16 chữ số
    return regex.test(number);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Kiểm tra thẻ tín dụng
    if (!validateCardNumber(creditCard)) {
      newErrors.creditCard =
        "Please enter a valid credit card number (16 digits).";
    }

    // Nếu có lỗi, cập nhật state lỗi
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }
    setIsChecked(true);
    // Nếu không có lỗi, xử lý dữ liệu

    // Xử lý dữ liệu thẻ tín dụng ở đây
  };

  console.log(ischecked);

  return (
    <div className="font-krona">
      {ischecked ? (
        <ProcessSucess
          title="
Payment Method"
        >
          <p className="text-gray-500">Validation Success</p>
        </ProcessSucess>
      ) : (
        <div>
          <Title title="Payment Method" number={3} />
          <div
            className={`mx-10 flex flex-col gap-3 ${
              uploadPayment ? "block" : "hidden"
            }`}
          >
            <p className="text-gray-500">
              All transactions are secure and encrypted.
            </p>

            <div className="flex flex-row justify-between items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <input type="radio" checked />
                <p>Credit card</p>
              </div>
              <div className="flex flex-row gap-2 max-w-[50px] max-h-[50px] mr-20">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                  alt=""
                />
                <img
                  src="https://canhme.com/wp-content/uploads/2016/01/Paypal.png"
                  alt=""
                />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="creditCard"
                  value={creditCard}
                  onChange={(e) => setCreditCard(e.target.value)}
                  maxLength="16" // Giới hạn độ dài nhập liệu
                  placeholder="Enter your credit card number"
                  className="p-5 bg-gray-100 text-[14px] w-full"
                />
                {errors.creditCard && (
                  <span className="text-red-500">{errors.creditCard}</span>
                )}
              </div>
              <button
                type="submit"
                className=" font-krona text-sm  transition-all duration-[0.4s] mt-3
                    hover:scale-110 text-white bg-black w-full font-bold px-14 py-3 rounded-3xl"
              >
                Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessMethod;
