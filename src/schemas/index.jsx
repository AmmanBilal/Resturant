import * as Yup from 'yup'
export const ValidationSchema = Yup.object({
    first_name: Yup.string()
    .min(2, 'First name should be at least 2 characters long')
    .max(50, 'First name should not exceed 50 characters') 
    .required('First name is required'),


    last_name:Yup.string()
    .min(2, 'Last name should be at least 2 characters long')
    .max(50, 'Last name should not exceed 50 characters')
    .required('Last name is required'),


    email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),


    phone_number: Yup.string()
    .matches(/^[0-9]{11}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),


    date: Yup.date()
    .required('Date is required')
    .nullable(),


    guests_number: Yup.number()
    .min(1, 'There must be at least 1 guest')
    .max(100, 'Number of guests should not exceed 100')
    .required('Enter Number of guests')
    .integer('Number of guests must be an integer'),

    comments: Yup.string()
    .min(2, 'Comments should be at least 5 characters long')
    .max(100, 'Comments should not exceed 100 characters')
})