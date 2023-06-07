import * as S from "./styles";

type Props = {
  message: string;
};

export function ListEmpty({ message }: Props) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
