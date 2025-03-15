const SelectFilter = ({ label, options, value, onChange }) => {
  console.log(label, options, value, onChange);

  return (
    <div>
      <select
        className="p-2 border rounded-md w-full cursor-pointer text-black"
        value={value}
        onChange={onChange}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
