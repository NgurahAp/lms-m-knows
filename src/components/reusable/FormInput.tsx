import React, { useState } from "react";

interface FormInputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  label: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  id,
  name,
  placeholder,
  label,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false); // State untuk melacak fokus input

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`mt-1 block w-full h-10 pl-4 rounded-md shadow-sm transition duration-200 ${
          isFocused ? "border-blue-500" : "border-gray-300"
        } bg-gray-50 focus:border-blue-500 focus:outline-none`} // Mengubah border sesuai dengan state
        required={required}
        onFocus={() => setIsFocused(true)} // Mengatur state saat input mendapatkan fokus
      />
    </div>
  );
};

export default FormInput;
