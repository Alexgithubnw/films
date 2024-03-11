import "./Toggle.css";

export const Toggle = ({ handelChange, isChecked }) => {
  return (
    <div className="togle-container">
      <input
        type="checkbox"
        id="check"
        className="togle"
        onChange={handelChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark mode</label>
    </div>
  );
};
