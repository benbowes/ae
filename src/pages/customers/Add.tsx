import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Input } from '../../components/Input';
import { Button, ButtonGroup } from '../../components/Button.styled';

const Add: React.FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                dob: '',
                firstName: '',
                lastName: '',
            }}
            validationSchema={validationSchema}
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

                    // Redirect to list of customers
                    history.push('/customers');
                }, 500);
            }}
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
                        <h1>Add customer</h1>
                        <Input
                            name="firstName"
                            label="First Name"
                            value={values.firstName}
                            error={errors.firstName}
                            touched={touched.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            name="lastName"
                            label="Last Name"
                            value={values.lastName}
                            error={errors.lastName}
                            touched={touched.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            name="dob"
                            label="Date of birth"
                            placeholder="dd/mm/yyyy"
                            value={values.dob}
                            error={errors.dob}
                            touched={touched.dob}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <ButtonGroup>
                            <Button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Reset
                            </Button>
                            <Button
                                primary
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Submit
                            </Button>
                        </ButtonGroup>
                    </form>
                );
            }}
        </Formik>
    );
}

export default Add;
