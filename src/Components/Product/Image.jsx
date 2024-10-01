import PropTypes from "prop-types";
export default function Image({ image }) {
  return (
    <img src={image} alt="product" className="w-full h-full object-cover" />
  );
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
};
