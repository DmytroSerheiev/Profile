import styled from 'styled-components';

export const InputText = styled.input`
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

export const SelectInput = styled.select`
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

// Стили для подсказок
export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: ${({ hasValue }) => (hasValue ? '-22px' : '10px')};
  left: 12px;
  background-color: #fff;
  padding: 0 4px;
  font-size: 14px;
  color: #999;
  transition: top 0.2s ease, font-size 0.2s ease;
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 2px;
`;
