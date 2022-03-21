import { countries, feildset } from './mock-interface';

export const COUNTRIES: countries[] = [
  { name: 'Select' },
  { name: '+91 India' },
  { name: '+1 USA' },
  { name: '+44 UK' },
  { name: '+33 France' },
  { name: '+7 Russia' },
];

export const FEILDSET: feildset[] = [
  {
    class: 'form-control span6 offset6 form-alingment',
    columnName: 'firstName',
    name: 'First Name',
    errorMessage: 'First Name is required',
  },
  {
    class: 'form-control span6 offset6 form-alingment-left',
    columnName: 'lastName',
    name: 'Last Name',
    errorMessage: 'Last Name is required',
  },
];
