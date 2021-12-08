import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import classes from "./FormikTest.module.css";
import * as yup from "yup";

const initialState = {
    firstName: '',
    surName: '',
    age: Number(),
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    numberField: ''
}

const onSubmit = (values) => console.log(values)

const FormTest2 = () => {
    const validationSchema = yup.object({
        firstName: yup.string().required('Required field'),
        surName: yup.string().required('Required field'),
        age: yup.number().min(18).required('age must be over 18'),
        email: yup.string().email('invalid email').required(''),
        confirmEmail: yup.string().email('invalid email').oneOf([yup.ref('email')], 'email does not match'),
        password: yup.string().typeError('should be string').required('Required field'),
        confirmPassword: yup.string().typeError('should be string').oneOf([yup.ref('password')], '').required('Password does not match'),
        numberField: yup.number().test('this is not the number', (value) => value === 42)
    })


    return (
        <div>
            <h1>Form - 2</h1>
            <Formik
                initialValues={ initialState }
                validateOnChange
                validationSchema={ validationSchema }
                onSubmit={ onSubmit }
            >
                <Form className={ classes.form }>
                    <CustomField label={ 'Name' } name={ 'firstName' } />

                    {/*<label htmlFor={ 'firstName' }>Name</label><br />*/ }
                    {/*<Field name={ 'firstName' } type={ 'text' } className={ classes.input } />*/ }
                    {/*<ErrorMessage name={ 'firstName' }>{ message => <div*/ }
                    {/*    className={ classes.error }>{ message }</div> }</ErrorMessage>*/ }

                    <label htmlFor={ 'surName' }>SurName</label>
                    <Field name={ 'surName' } type={ 'text' } className={ classes.input } />
                    <ErrorMessage name={ 'surName' }>{ message => <div
                        className={ classes.error }>{ message }</div> }</ErrorMessage>

                    <label htmlFor={ 'age' }>Age</label>
                    <Field name={ 'age' } type={ 'text' } className={ classes.input } />
                    <ErrorMessage name={ 'age' }>{ message => <div
                        className={ classes.error }>{ message }</div> }</ErrorMessage>

                    <label htmlFor={ 'email' }>email</label>
                    <Field name={ 'email' } type={ 'email' } className={ classes.input } />
                    <ErrorMessage name={ 'email' }>{ message => <div
                        className={ classes.error }>{ message }</div> }</ErrorMessage>

                    <label htmlFor={ 'confirmEmail' }>confirmEmail</label>
                    <Field name={ 'confirmEmail' } type={ 'email' } className={ classes.input } />
                    <ErrorMessage name={ 'confirmEmail' }>{ message => <div
                        className={ classes.error }>{ message }</div> }</ErrorMessage>

                    <label htmlFor={ 'password' }>password</label>
                    <Field name={ 'password' } type={ 'password' } className={ classes.input } />
                    <ErrorMessage name={ 'password' }>{ message => <div
                        className={ classes.error }>{ message }</div> }</ErrorMessage>

                    <label htmlFor={ 'confirmPassword' }>confirm Password</label>
                    <Field name={ 'confirmPassword' } type={ 'password' } className={ classes.input } />
                    <ErrorMessage name={ 'confirmPassword' }>{ message => <div
                        className={ classes.error }>{ message }</div> }</ErrorMessage>

                    <label htmlFor={ 'numberField' }>number Field</label>
                    <Field name={ 'numberField' } type={ 'number' } className={ classes.input } />
                    <ErrorMessage name={ 'numberField' }>{ message => <div
                        className={ classes.error }>{ message }</div> }</ErrorMessage>

                    <button className={ classes.formBtn } type="submit">Submit</button>
                </Form>
            </Formik></div>
    );
};
export default FormTest2;

const CustomField = ({label = 'label', name, type = 'text'}) => {

    return (
        <>
            <label htmlFor={ name }>{ label }</label>
            <br />
            <Field name={ name } type={ type } className={ classes.input } />
            <ErrorMessage name={ name }>{ message => <div
                className={ classes.error }>{ message }</div> }</ErrorMessage>
        </>
    )
}

