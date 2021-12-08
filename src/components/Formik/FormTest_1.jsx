import React from 'react';
import { Formik } from "formik";
import classes from "./FormikTest.module.css";
import * as yup from "yup";

const FormTest1 = () => {
    // т.к. initialState у нас объект, применяем метод object() и передадим в него его форму с помощью метода .shape()
    const validationsSchema = yup.object().shape({
        // name - мы ожидаем строку значит string(), typeError() - ошибка если не строка, в данном случае не возможно,
        // поле обязательно значит указываем на это required() иначе ошибка
        name: yup.string().typeError('should be string').required('mandatory field'),
        secondName: yup.string().typeError('should be string').required('mandatory field'),
        password: yup.string().typeError('should be string').required('mandatory field'),
        // confirmPassword должен ссылаться на пароль - должен быть такой-же, для этого в yup есть метод oneOf([], ''),
        // Первый параметр - массив, и в нем мы указываем ссылку на поле, с которым мы должны сравнивать.
        // Второй - сообщение которое мы будем передавать, если пароли не будут совпадать.
        // required - указывает, что это поле обязательно
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password does not match')
            .required('mandatory field'),

        //метод email() - метод для валидации email(a), может содержать сообщение, а также функцию YUP в которую
        // передается regExp, таким образом можно установить собственные правили валидации формы
        email: yup.string().email('enter your acting email').required('mandatory field'),
        //oneOF - проверяем что он такой же, как и email
        confirmEmail: yup.string().email('enter your acting email').oneOf([yup.ref('email')], 'Email does not match')
            .required('mandatory field'),

    })

    return (
        <div>
            <h1>Form - 1</h1>
            <Formik initialValues={ {
                name: '',
                secondName: '',
                password: '',
                confirmPassword: '',
                email: '',
                confirmEmail: '',
            } }
                    validateOnBlur={ false }
                    validateOnChange={ false }
                    onSubmit={ (values) => console.log(values) }
                // передадим нашу валидационную схему в Formik
                    validationSchema={ validationsSchema }
            >

                { ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    < div className={ classes.form }>
                        <p>
                            <label htmlFor={ 'name' }>Name</label><br />
                            <input className={ classes.input }
                                   type={ 'text' }
                                   name={ 'name' }
                                   onChange={ handleChange }
                                   onBlur={ handleBlur }
                                   value={ values.name }
                            />
                        </p>
                        { touched.name && errors.name && <p className={ classes.error }>{ errors.name }</p> }

                        <p>
                            <label htmlFor={ 'secondName' }>SureName</label><br />
                            <input className={ classes.input }
                                   type={ 'text' }
                                   name={ 'secondName' }
                                   onChange={ handleChange }
                                   onBlur={ handleBlur }
                                   value={ values.secondName }

                            />
                        </p>
                        { touched.secondName && errors.secondName &&
                            <p className={ classes.error }>{ errors.secondName }</p> }

                        <p>
                            <label htmlFor={ 'password' }>Password</label><br />
                            <input className={ classes.input }
                                   type={ 'password' }
                                   name={ 'password' }
                                   onChange={ handleChange }
                                   onBlur={ handleBlur }
                                   value={ values.password }

                            />
                        </p>
                        { touched.password && errors.password &&
                            <p className={ classes.error }>{ errors.password }</p> }

                        <p>
                            <label htmlFor={ 'confirmPassword' }>Confirm Password</label><br />
                            <input className={ classes.input }
                                   type={ 'password' }
                                   name={ 'confirmPassword' }
                                   onChange={ handleChange }
                                   onBlur={ handleBlur }
                                   value={ values.confirmPassword }

                            />
                        </p>

                        { touched.confirmPassword && errors.confirmPassword &&
                            <p className={ classes.error }>{ errors.confirmPassword }</p> }

                        <p>
                            <label htmlFor={ 'email' }>Email</label><br />
                            <input className={ classes.input }
                                   type={ 'email' }
                                   name={ 'email' }
                                   onChange={ handleChange }
                                   onBlur={ handleBlur }
                                   value={ values.email }

                            />
                        </p>
                        { touched.email && errors.email && <p className={ classes.error }>{ errors.email }</p> }

                        <p>
                            <label htmlFor={ 'confirmEmail' }>Confirm Email</label><br />
                            <input className={ classes.input }
                                   type={ 'email' }
                                   name={ 'confirmEmail' }
                                   onChange={ handleChange }
                                   onBlur={ handleBlur }
                                   value={ values.confirmEmail }

                            />
                        </p>
                        { touched.confirmEmail && errors.confirmEmail &&
                            <p className={ classes.error }>{ errors.confirmEmail }</p> }

                        <button disabled={ !isValid && !dirty }
                                onClick={ () => handleSubmit() }
                                type={ 'submit' }
                        > Submit
                        </button>
                    </div>
                ) }

            </Formik>
        </div>
    );
};

export default FormTest1;

