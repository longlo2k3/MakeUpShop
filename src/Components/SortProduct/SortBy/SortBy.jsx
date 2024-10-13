import PropTypes from "prop-types";

const SortBy = ({ title, children }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-2 focus:outline-none ">
      <div className="font-bold">{title}</div>
      {children}
    </div>
  );
};

SortBy.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SortBy;
