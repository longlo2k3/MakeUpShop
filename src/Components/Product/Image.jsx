import PropTypes from "prop-types";
export default function Image({ img }) {
  return (
    <img
      src={img}
      alt="product"
      className=" w-full h-full max-w-[500px] max-h-[500px] object-cover object-center mr-10"
    />
  );
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
};
