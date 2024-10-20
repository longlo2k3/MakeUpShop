import { useContext, useEffect, useState } from "react";
import Title from "../Title/Title";
import { SvContext } from "../../SeviceContext/SeviceContext";
import Loader from "../../Loader";
import ProcessSucess from "../ProcessSucess/ProcessSucess";

const ProcessAddress = () => {
  const { upload, setUploadPayment } = useContext(SvContext);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [next, setNext] = useState(false);

  const handleContinueChange = () => {
    setNext(true);
    setUploadPayment(true);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    country: "Vietnam",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
  });

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      setUpdate(true);
    }, 2000);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    let formErrors = {};

    if (!formData.fullName) formErrors.fullName = "Full Name is required.";
    if (!formData.streetAddress)
      formErrors.streetAddress = "Street Address is required.";
    if (!formData.city) formErrors.city = "City is required.";
    if (!formData.state)
      formErrors.state = "State/Province/Region is required.";
    if (!formData.postalCode)
      formErrors.postalCode = "Postal Code is required.";
    if (!formData.phoneNumber)
      formErrors.phoneNumber = "Phone Number is required.";

    return formErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      handleContinue();
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <div className="font-krona">
      {loading ? (
        !update ? (
          <Loader />
        ) : next ? (
          <ProcessSucess title={"Shipping"}>
            <div className="text-gray-500  mb-3 flex flex-col gap-2">
              <p>Full Name: {formData.fullName}</p>
              <p>
                Street Address: {formData.streetAddress}, {formData.apartment},{" "}
                {formData.city}, {formData.country},{" "}
              </p>
              <p>Phone Number: {formData.phoneNumber}</p>
              <div>
                <label className="flex flex-row items-center mb-3 font-krona text-[14px] gap-3">
                  <input type="checkbox" checked />
                  <div className="flex flex-row justify-between items-center flex-1">
                    <p className="font-semibold">
                      Express Shipping{" "}
                      <span className="text-gray-500">(2-3 days)</span>
                    </p>
                    <p>2.00 &euro;</p>
                  </div>
                </label>
              </div>
            </div>
          </ProcessSucess>
        ) : (
          <div>
            <Title title="Shipping" number={2} />
            <div className="text-gray-500 ml-10 mb-3">
              <p>Full Name: {formData.fullName}</p>
              <p>
                Street Address: {formData.streetAddress}, {formData.apartment},{" "}
                {formData.city}, {formData.country},{" "}
              </p>
              <p>Phone Number: {formData.phoneNumber}</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-krona text-[14px] font-semibold">
                Select Shipping Option
              </div>
              <div>
                <label className="flex flex-row items-center mb-3 font-krona text-[14px] gap-3">
                  <input type="checkbox" checked />
                  <div className="flex flex-row justify-between items-center flex-1">
                    <p className="font-semibold">
                      Express Shipping{" "}
                      <span className="text-gray-500">(2-3 days)</span>
                    </p>
                    <p>2.00 &euro;</p>
                  </div>
                </label>
              </div>
            </div>
            <button
              onClick={handleContinueChange}
              className=" font-krona text-sm  transition-all duration-[0.4s]
                    hover:scale-110 text-white bg-black w-full font-bold px-14 py-3 rounded-3xl"
            >
              See Shipping Options
            </button>
          </div>
        )
      ) : (
        <div>
          <Title title="Shipping" number={2} />
          <form
            onSubmit={handleSubmit}
            className={`address-form flex flex-col gap-3 mt-3 mx-20 ${
              upload ? "block" : "hidden"
            }`}
          >
            <div className="form-group">
              <input
                placeholder="Full Name*"
                type="text"
                name="fullName"
                onChange={handleChange}
                className="p-5 bg-gray-100 text-[14px] w-full"
                required
              />
            </div>

            <div className="form-group">
              <select
                placeholder="Country*"
                name="country"
                onChange={handleChange}
                className="p-5 bg-gray-100 text-[14px] w-full"
                required
              >
                <option value="Viet Nam">Viet Nam</option>
                <option value="United States">United States</option>
                {/* Add more countries here */}
              </select>
            </div>

            <div className="form-group">
              <input
                placeholder="Street Address*"
                type="text"
                name="streetAddress"
                onChange={handleChange}
                className="p-5 bg-gray-100 text-[14px] w-full"
                required
              />
            </div>

            <div className="form-group">
              <input
                placeholder="Apartment, Suite, Building (Optional)"
                type="text"
                name="apartment"
                className="p-5 bg-gray-100 text-[14px] w-full"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                placeholder="City*"
                type="text"
                name="city"
                onChange={handleChange}
                className="p-5 bg-gray-100 text-[14px] w-full"
                required
              />
            </div>

            <div className="form-group-row flex flex-row justify-center items-center gap-3">
              <div className="form-group half flex-1">
                <input
                  placeholder="State/Province/Region*"
                  type="text"
                  name="state"
                  onChange={handleChange}
                  className="p-5 bg-gray-100 text-[14px] w-full"
                  required
                />
              </div>

              <div className="form-group half flex-1">
                <input
                  placeholder="Postal Code*"
                  type="text"
                  name="postalCode"
                  className="p-5 bg-gray-100 text-[14px] w-full"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              {/* <label>Phone Number*</label> */}
              <input
                placeholder="Phone Number*"
                type="text"
                name="phoneNumber"
                onChange={handleChange}
                className="p-5 bg-gray-100 text-[14px] w-full"
                required
              />
            </div>

            <button
              type="submit"
              className=" font-krona text-sm  transition-all duration-[0.4s]
                    hover:scale-110 text-white bg-black w-full font-bold px-14 py-3 rounded-3xl"
            >
              See Shipping Options
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProcessAddress;
