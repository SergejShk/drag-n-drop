import { Dispatch, SetStateAction, useState } from "react";
import SubTitle from "../../shared/subTitle/SubTitle";
import { Button, Input } from "./AddText.styled";

interface IProps {
  setTextItems: Dispatch<SetStateAction<string>>;
}

const AddText: React.FC<IProps> = ({ setTextItems }) => {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTextItems(text);
    setText("");
  };

  return (
    <>
      <SubTitle>Text</SubTitle>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={text} onChange={onChangeInput} />
        <Button type="submit">Add text</Button>
      </form>
    </>
  );
};

export default AddText;
