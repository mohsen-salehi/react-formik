import React from 'react';
import {basicSchema} from "../schemas/index.js";
import {Formik} from "formik";

function FormikLogic({children}) {
    const initialValues = {email: '', jobType: "", acceptedTos: false, firstname: '', lastname: ''}

    return (
        <Formik
            validationSchema={basicSchema}
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    actions.resetForm()
                }, 1000);
            }}
        >
            {children}
        </Formik>
    );
}

export default FormikLogic;