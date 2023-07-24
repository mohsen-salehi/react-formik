import {Field, useField} from "formik";

function CustomInput({label , ...props}) {
    const [field , meta , helper] = useField(props)
    return (
        <div className="w-3/4 lg:w-1/2 mx-1 flex flex-wrap justify-start pt-4">
            <label className="w-full py-2">{label}:</label>
            <Field
                {...field}
                {...props}
                className={`${meta.touched && meta.error ? "ring-1 ring-red-600" : null} p-2 w-full bg-opacity-10 shadow-inner  focus:outline-0 focus:ring-1 bg-white rounded drop-shadow-2xl`}
            />
            {meta.touched && meta.error && <div className="my-2 text-xs text-red-600"> {meta.error} </div>}
       </div>
    );
}

export default CustomInput;