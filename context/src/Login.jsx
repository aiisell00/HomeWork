import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: Yup.object({

            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
            confirm_password: Yup.number()
                .positive('age must be greater than zero')
                .required("Required!")
                .typeError('age must be a number')
                .integer('Please enter a valid number.')

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <div className="">
            <h1>Validation with Formik + Yup</h1>

            <form onSubmit={formik.handleSubmit}>
                <div className="loginmain">

                    {formik.errors.full_name && formik.touched.full_name && (
                        <p>{formik.errors.full_name}</p>
                    )}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p>{formik.errors.email}</p>
                    )}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p>{formik.errors.password}</p>
                    )}
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type="text"
                        name="confirm_password"
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.confirm_password &&
                        formik.touched.confirm_password && (
                            <p>{formik.errors.confirm_password}</p>
                        )}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}