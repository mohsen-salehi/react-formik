import {Form, Formik} from "formik";
import CustomInput from "./components/customInput.jsx";
import CustomSelect from "./components/CustomSelect.jsx";
import CustomCheckbox from "./components/CustomCheckbox.jsx";
import Layout from "./components/Layout.jsx";
import {baseStyle} from "./assets/StyleComponent.jsx";
import FormikLogic from "./components/FormikLogic.jsx";


function AdvanceForm() {
    return (
        <FormikLogic>
            {props => (
                <Layout>
                    <Form
                        className={baseStyle}>
                        <CustomSelect
                            name="jobType"
                            id="jobType"
                            placeholder="Plase select a job"
                        >
                            <option className="select" value="select">select</option>
                            <option className="bg-black" value="dev">dev</option>
                            <option className="bg-black" value="po">po</option>
                            <option className="bg-black" value="cto">cto</option>
                        </CustomSelect>
                        <CustomInput
                            label="Email"
                            placeholder="email"
                            type="email"
                            name="email"
                            id="email"
                        />
                        <CustomInput
                            label="firstname"
                            placeholder="firstname"
                            type="text"
                            name="firstname"
                            id="firstname"
                        />
                        <CustomInput
                            label="lastname"
                            placeholder="lastname"
                            type="text"
                            name="lastname"
                            id="lastname"
                        />
                        <CustomCheckbox
                            label="I accept the terms of service"
                            type="checkbox"
                            name="acceptedTos"
                        />
                        <div className="w-1/2 mx-1">
                            <button
                                disabled={props.isSubmitting}
                                type={"submit"}
                                className="p-2 w-full disabled:opacity-30 rounded-2xl bg-blue-500 shadow duration-100 active:scale-[0.95]">Submit
                            </button>
                        </div>
                    </Form>
                </Layout>
            )}
        </FormikLogic>
    )
}

export default AdvanceForm;