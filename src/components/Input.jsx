import React ,{ useId }from "react"

const Input = React.forwardRef(function Input({ label, type = 'text', className = '', ...props }, ref) {
    const id = useId()
    return (
        <>
            {label && <label className="text-center md:text-start" htmlFor={id}>{label}</label>}
            <input
            type={type}
            className={className}
            ref={ref}
            {...props}
            id={id}
            />
        </>
    )
})

export default Input;