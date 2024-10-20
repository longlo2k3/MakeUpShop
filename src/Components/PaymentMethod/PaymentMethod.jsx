const PaymentMethod = () => {
  return (
    <div className="flex flex-row items-center gap-2 mt-5">
      <p className="font-krona font-semibold">Payment Method</p>
      <div className=" flex flex-row items-center gap-2">
        <div className="px-2 bg-gray-200 rounded-lg hover:cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
            alt="Hình ảnh"
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="px-2 bg-gray-200 rounded-lg hover:cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
            alt="Paypal"
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="px-2 bg-gray-200 rounded-lg hover:cursor-pointer">
          <img
            src="https://canhme.com/wp-content/uploads/2016/01/Paypal.png"
            alt="Visa"
            className="w-[50px] h-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
