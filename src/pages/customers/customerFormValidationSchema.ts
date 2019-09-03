import * as Yup from 'yup';

export const customerFormValidationSchema = Yup
    .object()
    .shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        dob: Yup.string().matches(
            // e.g. dd/mm/yyyy
            /^((0|1|2|3)\d{1})\/((0|1)\d{1})\/((19|20)\d{2})/,
            {
                message: 'Please enter a valid birth date in the format "dd/mm/yyyy"',
                excludeEmptyString: true
            }
        ).required('Required'),
    });
