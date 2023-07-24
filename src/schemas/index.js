import * as yup from "yup"

const emailRules = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please Enter Valid Email").matches(emailRules).required("required"),
    jobType: yup.string().oneOf(["dev", "po", "cto"]).required("required"),
    acceptedTos: yup.boolean().oneOf([true]).required("required"),
    firstname : yup.string().min(5).required("required"),
    lastname : yup.string().min(5).required("required")
})

