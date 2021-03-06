import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { customerFormValidationSchema } from './customerFormValidationSchema';
import { State } from '../../types';
import { Field } from '../../components/Field';
import { Button, LinkButton, ButtonGroup } from '../../components/Button.styled';
import ContentArea from '../../components/ContentArea.styled';
import FormContents from '../../components/FormContents.styled';

type CustomRouteParams = {
    match: { params: { customerId: string; } }
};

const Edit: React.FC<RouteComponentProps & CustomRouteParams> = ({
    history, match: { params: { customerId } },
}) => {
    const dispatch = useDispatch();
    const foundCustomer = useSelector((state: State) => state.customers.find(
        (customer) => customer.id === customerId
    ));

    if (foundCustomer) {
        return (
            <ContentArea>
                <Formik
                    initialValues={{
                        id: foundCustomer.id || '',
                        dob: foundCustomer.dob || '',
                        firstName: foundCustomer.firstName || '',
                        lastName: foundCustomer.lastName || '',
                    }}
                    validationSchema={customerFormValidationSchema}
                    onSubmit={(values/*, { setSubmitting }*/) => {
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
                                <FormContents>
                                    <Field
                                        name="firstName"
                                        label="First Name"
                                        value={values.firstName}
                                        error={errors.firstName}
                                        touched={touched.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Field
                                        name="lastName"
                                        label="Last Name"
                                        value={values.lastName}
                                        error={errors.lastName}
                                        touched={touched.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Field
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
                                        <LinkButton to="/customers">
                                            Cancel
                                        </LinkButton>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            Submit
                                        </Button>
                                    </ButtonGroup>
                                </FormContents>
                            </form>
                        );
                    }}
                </Formik>
            </ContentArea>
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
