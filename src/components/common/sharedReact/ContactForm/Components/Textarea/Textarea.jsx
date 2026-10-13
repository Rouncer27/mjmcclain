import "./textarea.scss";

const Textarea = ({
  handler,
  value,
  label,
  id,
  size,
  placeholder,
  required,
  rows,
  error,
}) => {
  return (
    <div className={`main-form-textarea main-form-textarea-${size}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="required">&#42;</span>}
        <span className={`error-message ${error ? " error-active" : ""}`}>
          {error?.message}
        </span>
      </label>
      <textarea
        name={id}
        value={value}
        id={id}
        onChange={handler}
        placeholder={placeholder}
        aria-required={required}
        required={required}
        rows={rows ? rows : "5"}
      />
    </div>
  );
};

export default Textarea;
