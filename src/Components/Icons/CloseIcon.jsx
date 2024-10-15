import { IoIosCloseCircle } from "react-icons/io";
import PropTypes from "prop-types";

const CloseIcon = (id) => {
  return (
    <IoIosCloseCircle className="text-dark-grey cursor-pointer text-2xl" />
  );
};

CloseIcon.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CloseIcon;
