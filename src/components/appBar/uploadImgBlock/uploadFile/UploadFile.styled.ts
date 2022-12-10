import styled from "styled-components";

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const CustomInput = styled.div`
  cursor: pointer;
  width: 260px;
  height: 160px;
  border: 1px dashed #00979e;
  border-radius: 4px;
  background-color: #d4f5f7;
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
`;

export const MainText = styled.p`
  font-size: 20px;
  line-height: 20px;
  color: #00525b;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 16px;
  color: #00525b;
`;
