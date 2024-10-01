import PropTypes from "prop-types";

export default function Info({ category, name, type }) {
  return (
    <>
      <p className="text-yellow text-sm font-krona">{type}</p>
      <h1 className="font-krona text-base">{name}</h1>
      <p>{category}</p>
    </>
  );
}

Info.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
