import { CustomInput, Input, MainText, Text } from "./UploadFile.styled";

const UploadFile: React.FC = () => {
  return (
    <>
      <Input type="file" />
      <CustomInput>
        <MainText>Drop file or click to upload</MainText>
        <Text>.png,.jpeg</Text>
      </CustomInput>
    </>
  );
};

export default UploadFile;
