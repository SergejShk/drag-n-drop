import { useRef, useState } from "react";
import { CustomInput, Input, MainText, Text } from "./UploadFile.styled";

const UploadFile: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setSelectedFile(e.target.files[0].name);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <>
      <Input
        ref={inputRef}
        type="file"
        accept=".png,.jpeg"
        onChange={handleChange}
      />
      <CustomInput onClick={handleClick}>
        {!selectedFile && (
          <>
            <MainText>Drop file or click to upload</MainText>
            <Text>.png,.jpeg</Text>
          </>
        )}

        {selectedFile && <MainText>{selectedFile}</MainText>}
      </CustomInput>
    </>
  );
};

export default UploadFile;
