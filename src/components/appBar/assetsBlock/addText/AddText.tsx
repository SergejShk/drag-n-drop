import styled from "styled-components";
import SubTitle from "../../shared/subTitle/SubTitle";

const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  font-size: 16px;
  color: #343a40;
  background-color: #fff;
  border: 1px solid #00979e;
  border-radius: 4px;
  margin: 10px 0;
`;

const Button = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  min-height: 33px;
  font-size: 13px;
  line-height: 11px;
  letter-spacing: 0.012em;
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  color: #fff;
  background-color: #00979e;
  border: 1px solid #00979e;
`;

const AddText: React.FC = () => {
  return (
    <>
      <SubTitle>Text</SubTitle>

      <Input type="text" />
      <Button type="button">Add text</Button>
    </>
  );
};

export default AddText;
