import styled from 'styled-components';
import { Field } from 'formik';

export const InputText = styled(Field)`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  margin-bottom: 10px;

  &:focus {
    border-color: #007bff;
  }
`;
