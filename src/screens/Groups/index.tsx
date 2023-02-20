import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

import { Button } from "@components/Button";
import EmptyList from "@components/EmptyList";
import GroupCard from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllGroups } from "@storage/group/getAllGroups";

import * as S from "./styles";

const Groups: React.FC = () => {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  async function fetchGroups() {
    try {
      const data = await getAllGroups();
      setGroups(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <EmptyList message="Você não está em nenhuma turma" />
        }
      />
      <Button
        text="Criar nova turma"
        onPress={() => navigation.navigate("NewGroup")}
      />
    </S.Container>
  );
};

export { Groups };
