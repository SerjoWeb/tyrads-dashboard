import mock from '../../mock/users.json';
import * as Yup from 'yup';

import React from 'react';
import toast from 'react-hot-toast';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Spinner from '../shared/Spinner';

import { Formik, FormikHelpers, Form } from 'formik';
import { REGEXP_EMAIL, REGEXP_PASSWORD } from '../../common/regexp';
import { IForm, IUser } from '../../models/interfaces';
import { STORAGE } from '../../common/constants';
import { account } from '../../store/account';

const SignInSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Required')
    .email('Invalid email')
    .matches(
      REGEXP_EMAIL,
      'Invalid email'
    ),
  password: Yup
    .string()
    .required('Required')
    .min(8, 'Minimum length of 8 characters')
    .matches(
      REGEXP_PASSWORD,
      'Password must have at least one or more lowercase letters, one or more uppercase letters, one or more digits, one or more special characters (you can customize the special characters as needed), and a minimum length of 8 characters, and a maximun length of 12 characters'
    )
});

const LoginForm = (): React.ReactElement => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const { setUser } = account();

  return (
    <div className='w-full h-auto flex flex-col gap-y-8'>
      <h1 className='text-xl text-primary text-center font-semibold flex flex-col'>
        <span className='text-yellow'>Tyrads.com</span> <span className='text-sm text-secondary'>dashboard test assessment</span>
      </h1>

      <Formik
        validationSchema={SignInSchema}
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values: IForm, { setSubmitting, resetForm }: FormikHelpers<IForm>) => {
          setLoading(true);

          const { email, password } = values;

          const users: IUser[] = mock.users;
          const user = users.find((user) => user.email === email && user.password === password);

          if (user) {
            const account: IUser = {
              id: user.id,
              fullname: user.fullname,
              email: user.email,
              admin: user.admin,
              image: user.image,
              created: user.created,
              last_modified: user.last_modified
            };

            window.localStorage.setItem(STORAGE, JSON.stringify(account));
            setUser(account);
            resetForm();
          } else {
            toast.error('Invalid credentials');
          }

          setSubmitting(false);
          setLoading(false);
        }}
      >
        {({ errors, touched, isSubmitting, values, handleChange }) => (
          <Form className='w-full flex flex-col gap-y-8'>
            <div>
              <Input
                type='email'
                id='signin-email'
                name='email'
                placeholder='Enter your email'
                autoComplete='off'
                value={values.email}
                required={true}
                disabled={isSubmitting || loading}
                onChange={handleChange}
              />

              {
                errors.email && touched.email
                  ? <small className='text-xs text-red'>{errors.email}</small>
                  : null
              }
            </div>

            <div>
              <Input
                type='password'
                id='signin-password'
                name='password'
                placeholder='Enter your password'
                autoComplete='off'
                value={values.password}
                required={true}
                disabled={isSubmitting || loading}
                onChange={handleChange}
              />

              {
                errors.password && touched.password
                  ? <small className='text-xs text-red'>{errors.password}</small>
                  : null
              }
            </div>

            {loading ? (
              <div className='w-full flex justify-start items-center'>
                <Spinner />
              </div>
            ) : (
              <Button
                type='submit'
                className='w-fit'
                disabled={isSubmitting || loading}
              >
                Signin
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
