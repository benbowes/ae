import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Add: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                dob: '',
                firstName: '',
                lastName: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    dispatch({
                        type: 'CUSTOMER_ADD',
                        value: {
                            firstName: values.firstName,
                            lastName: values.lastName,
                            dob: values.dob,
                            // `id` is added in the reducer
                        },
                    });
                    setSubmitting(false);
                }, 500);
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string().required('Required'),
                lastName: Yup.string().required('Required'),
                dob: Yup.string()
                    .matches(
                        // e.g. dd/mm/yyyy
                        /^((0|1|2|3)\d{1})\/((0|1)\d{1})\/((19|20)\d{2})/,
                        {
                            message: 'Please enter a valid birth date in the format "dd/mm/yyyy"',
                            excludeEmptyString: true
                        }
                    )
                    .required('Required'),
            })}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstName" style={{ display: 'block' }}>
                            First name
                        </label>
                        <input
                            id="firstName"
                            placeholder=""
                            type="text"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // className={
                            //     errors.firstName && touched.firstName ? 'text-input error' : 'text-input'
                            // }
                        />
                        {errors.firstName && touched.firstName && (
                            <div /*className="input-feedback"*/>{errors.firstName}</div>
                        )}

                        <label htmlFor="lastName" style={{ display: 'block' }}>
                            Last name
                        </label>
                        <input
                            id="lastName"
                            placeholder=""
                            type="text"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // className={
                            //     errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
                            // }
                        />
                        {errors.lastName && touched.lastName && (
                            <div /*className="input-feedback"*/>{errors.lastName}</div>
                        )}

                        <label htmlFor="dob" style={{ display: 'block' }}>
                            Date of Birth
                        </label>
                        <input
                            id="dob"
                            placeholder="dd/mm/yyyy"
                            type="text"
                            value={values.dob}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // className={
                            //     errors.dob && touched.dob ? 'text-input error' : 'text-input'
                            // }
                        />
                        {errors.dob && touched.dob && (
                            <div /*className="input-feedback"*/>{errors.dob}</div>
                        )}

                        <div>
                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Reset
                            </button>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>

                        <pre>{JSON.stringify(props, null, 2)}</pre>
                    </form>
                );
            }}
        </Formik>
    );
}

export default Add;
