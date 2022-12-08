import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const Title = styled.h3`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color: #00525b;
  margin-top: 20px;
`;

const SubTitle: React.FC<IProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default SubTitle;
