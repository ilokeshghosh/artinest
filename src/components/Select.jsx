import React, { useId } from "react";

function Select({ options,  className, ...props }, ref) {
    const id = useId();
    return (
        <select
          {...props}
          id={id}
          ref={ref}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
          {options?.map((option) => (
            <option className="text-black" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
     
    );
  }
  
  export default React.forwardRef(Select);
  