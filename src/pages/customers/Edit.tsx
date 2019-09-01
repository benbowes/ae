import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { State } from '../../redux/types/index';
import { Input } from '../../components/Input';

type CustomRouteParams = {
    match: {
        params: {
            customerId: string;
        }
    }
}

const Edit: React.FC<RouteComponentProps & CustomRouteParams> = ({ history, match: { params: { customerId } } }) => {
    const dispatch = useDispatch();
    const foundCustomer = useSelector((state: State) => state.customers.find(
        (customer) => customer.id === customerId
    ));

    if (foundCustomer) {
        return (
            <Formik
                initialValues={{
                    id: foundCustomer.id || '',
                    dob: foundCustomer.dob || '',
                    firstName: foundCustomer.firstName || '',
                    lastName: foundCustomer.lastName || '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        dispatch({
                            type: 'CUSTOMER_EDIT',
                            value: {
                                id: values.id,
                                firstName: values.firstName,
                                lastName: values.lastName,
                                dob: values.dob,
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
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <h1>Edit customer details</h1>
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
                                label="Last Name"
                                placeholder="dd/mm/yyyy"
                                value={values.dob}
                                error={errors.dob}
                                touched={touched.dob}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div>
                                <Link to="/customers">
                                    Cancel
                                </Link>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        );
    }

    // This condition would not be hit as we are using ReactRouter.BrowserRouter without a server
    return (
        <div>
            <h1>Edit</h1>
            <p>Customer not found :(</p>
            <Link to="/customers">Back to customers list</Link>
        </div>
    );
}

export default Edit;
