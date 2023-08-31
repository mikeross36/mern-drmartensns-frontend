import PropTypes from "prop-types";

export default function Button({ className, type, text }) {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};
