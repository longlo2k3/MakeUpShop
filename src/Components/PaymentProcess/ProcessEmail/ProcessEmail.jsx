import { useFormik } from "formik";
import ButtonLink from "../../ButtonLink/ButtonLink";
import Title from "../Title/Title";
import { useContext, useEffect, useState } from "react";
import ProcessSucess from "../ProcessSucess/ProcessSucess";
import Loader from "../../Loader";
import { SvContext } from "../../SeviceContext/SeviceContext";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Process1 = () => {
  const { upload, setUpload } = useContext(SvContext);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [email, setEmail] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
  });

  const handleContinue = () => {
    setLoading(true);
    setEmail(formik.values.email);
    const timeout = setTimeout(() => {
      setUpdate(true);
      setUpload(true);
    }, 2000);
  };
  return (
    <div className="font-krona flex flex-col gap-1">
      <div>
        {loading && email != "" ? (
          !update ? (
            <Loader />
          ) : (
            <ProcessSucess title="Your Email">
              <div className="text-gray-500">{email}</div>
            </ProcessSucess>
          )
        ) : (
          <div>
            <Title number="1" title={"Enter Your Email"}>
              <div className="">Already have an account? Log In</div>
              <div>
                <form>
                  <input
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="p-5 bg-gray-100 text-[14px] w-full"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span className="text-red-500">{formik.errors.email}</span>
                  ) : null}
                </form>
              </div>
              <div className="text-xs text-gray-500">
                By providing your email, you agree to our <u>Privacy Policy</u>{" "}
                and <u>Terms of Service</u>.
              </div>
              <div onClick={handleContinue}>
                <ButtonLink
                  isActive={true}
                  text="CONTINUE TO SHOPPING"
                  isWfull={true}
                />
              </div>
            </Title>
          </div>
        )}
      </div>
    </div>
  );
};

export default Process1;
