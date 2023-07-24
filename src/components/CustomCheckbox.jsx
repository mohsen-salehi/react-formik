import {Field, useField} from "formik";

function CustomCheckbox({label , ...props}) {
    const [field , meta , helper] = useField(props)
    return (
        <label className="w-3/4 lg:w-1/2 p-1 mx-1 flex flex-wrap justify-start pt-4">
            <Field
                {...field}
                {...props}
                className="p-2   bg-opacity-10 shadow-inner  bg-white rounded drop-shadow-2xl"
            >
            </Field>
            <div className="w-auto ps-1 py-2 text-xs ">{label}</div>
            {meta.touched && meta.error &&
                <div className="my-2 text-xs text-red-600"> {meta.error} </div>}
        </label>
    );
}

export default CustomCheckbox;