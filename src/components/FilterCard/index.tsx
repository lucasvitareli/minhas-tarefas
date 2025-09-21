import * as S from './styles'

/* Defines the props and exports to the FilterCard styled component.*/
export type Props = {
  active?: boolean
}

const FilterCard = (props: Props) => (
  <S.Card active={props.active}>
    <S.Counter>3</S.Counter>
    <S.Label>Pending Tasks</S.Label>
  </S.Card>
)

export default FilterCard
