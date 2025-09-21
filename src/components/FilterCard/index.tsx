import * as S from './styles'

/* Defines the props and exports to the FilterCard styled component.*/
export type Props = {
  active?: boolean
  counter?: number
  text?: string
}

const FilterCard = ({ active, counter, text }: Props) => (
  <S.Card active={active}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{text}</S.Label>
  </S.Card>
)

export default FilterCard
