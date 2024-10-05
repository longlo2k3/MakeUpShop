import PropTypes from "prop-types";

const Title = ({ name, type }) => (
  <div className="mb-10">
    <h5 className="font-krona text-2xl font-semibold">{name}</h5>
    <p className="text-dark-grey font-krona text-[12px]">{type}</p>
  </div>
);

export default Title;

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
