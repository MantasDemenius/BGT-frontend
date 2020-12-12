import * as Yup from 'yup';

export default Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title is too short - should be 3 characters minimum')
    .max(100, 'Title is too long - should be 100 characters maximum'),
  description: Yup.string()
    .required('Description is required')
    .min(3, 'Description is too short - should be 3 characters minimum')
    .max(2000, 'Description is too long - should be 2000 characters maximum'),
  language: Yup.string().required('Language is required'),
});
