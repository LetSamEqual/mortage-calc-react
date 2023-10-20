import "./button.css";

const Button = ({ label, onClick, disabled }) => {
  return (
    <div className="buttonContainer">
      <button className="button" disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
