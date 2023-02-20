import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { createGroup } from "@storage/group/createGroups";
import React from "react";
import * as S from "./styles";

const NewGroup: React.FC = () => {
  const [className, setClassName] = React.useState<string>("");

  const navigation = useNavigation();

  const handleNewClassName = (text: string) => {
    setClassName(text);
  };

  async function handleValidForm() {
    if (className === "") {
      alert("Preencha o nome da turma");
      return;
    }

    await createGroup(className);
    navigation.navigate("Players", { className });
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          style={{ marginBottom: 20 }}
          value={className}
          onChangeText={handleNewClassName}
        />
        <Button text="Criar" onPress={handleValidForm} />
      </S.Content>
    </S.Container>
  );
};

export { NewGroup };
