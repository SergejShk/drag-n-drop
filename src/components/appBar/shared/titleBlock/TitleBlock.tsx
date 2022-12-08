import styled from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #00525b;
  padding-bottom: 10px;
  border-bottom: 1px solid #00979e;
`;

interface IProps {
  children: React.ReactNode;
}

const TitleBlock: React.FC<IProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default TitleBlock;
