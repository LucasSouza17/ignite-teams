import { ButtonIcon } from "@components/ButtonIcon";
import * as S from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>

      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </S.Container>
  );
}
