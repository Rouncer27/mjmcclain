import "./input.scss";

const Input = ({
  handler,
  value,
  label,
  id,
  type,
  size,
  placeholder,
  error,
  required,
}) => {
  return (
    <div className={`main-form-input main-form-input-${size}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="required">&#42;</span>}
        <span className={`error-message ${error ? " error-active" : ""}`}>
          {error?.message}
        </span>
      </label>
      <input
        name={id}
        type={type}
        onChange={handler}
        value={value}
        id={id}
        placeholder={placeholder}
        aria-required={required}
        required={required}
      />
    </div>
  );
};

export default Input;
