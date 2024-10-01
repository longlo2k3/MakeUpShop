import PropTypes from "prop-types";
export default function Description({ text }) {
  return <div className="text-sm text-gray-400">{text}</div>;
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
};
