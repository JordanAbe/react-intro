import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
import Nav from '../layout/Nav';
import './style.scss';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function MyForm(props) {
    const {
        isSubmitting,
        isValid,
    } = props;

    return (
        <div>
            <Nav/>
            <Form>
                <div className="row">
                    Email:
                    <Field name="email" type="email" className="input" />
                    <ErrorMessage name="email">
                        {message => <div className="error">{message}</div>}
                    </ErrorMessage>
                </div>

                <div className="row">
                    Password:
                    <Field name="password" type="password" className="input" />
                    <ErrorMessage name="password">
                        {message => <div className="error">{message}</div>}
                    </ErrorMessage>
                </div>

                <div className="row">
                    <button
                        type="submit"
                        className={`submit ${isSubmitting || !isValid ? 'disabled' : ''}`}
                        disabled={isSubmitting || !isValid}
                    >
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    );
}

export default withFormik({
    mapPropsToValues(props) {
        return {
            email: 'me@example.com',
            password: '',
        };
    },

    async validate(values) {
        const errors = {};

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        await sleep(3000);

        // if (Object.keys(errors).length) {
        //     throw errors;
        // }
        return errors;
    },

    handleSubmit(values, formikBag) {
        formikBag.setSubmitting(false);
        console.log(values);
    },
})(MyForm);