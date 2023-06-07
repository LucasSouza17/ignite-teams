import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleCreateNewGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Nova turma", "Informe o nome da turma.");
      }

      await groupCreate(group);
      navigation.navigate("players", {
        group,
      });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova turma", error.message);
      } else {
        Alert.alert("Nova turma", "Não foi possível criar uma nova turma.");
        console.log(error);
      }
    }
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />

        <Highlight title="Nova turma" subtitle="crie a turma para adicionar as pessoas" />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleCreateNewGroup} />
      </S.Content>
    </S.Container>
  );
}
