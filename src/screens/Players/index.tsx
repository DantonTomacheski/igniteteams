import React, { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { FlatList, Text } from "react-native";

import EmptyList from "@components/EmptyList";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import PlayersCards from "@components/PlayersCards";
import Input from "@components/Input";

import * as S from "./styles";
import { Button } from "@components/Button";

type RouteParams = {
  className: string;
};

const Players: React.FC = () => {
  const route = useRoute();
  const { className } = route.params as RouteParams;

  const [team, setTeam] = useState("TIME A");
  const [text, setText] = useState("");
  const [players, setPlayers] = useState<string[]>([
    "Danton",
    "Jogador 2",
    "Jogador 3",
    "Jogador 4",
  ]);

  const handleAddName = () => {
    if (!text) {
      alert("Você precisa digitar um nome valido");
      return;
    }

    setPlayers([...players, text]);
    setText("");
  };

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title={className}
        subtitle="adicione a galera e separe os times"
      />
      <S.Form typeForm="PRIMARY">
        <Input
          placeholder="Nome do participante"
          value={text}
          autoCorrect={false}
          onChangeText={setText}
        />
        <ButtonIcon icon="add" type="PRIMARY" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["TIME A", "TIME B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              active={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayersCards name={item} onRemove={() => {}} />
        )}
        contentContainerStyle={
          players.length === 0 ? { flex: 1 } : { paddingBottom: 100 }
        }
        ListEmptyComponent={
          <EmptyList message="Você não adicionou nenhum player ainda" />
        }
        showsVerticalScrollIndicator={false}
      />

      <Button text="Remover turma" variation="secondary" />
    </S.Container>
  );
};

export { Players };
