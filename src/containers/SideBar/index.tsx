import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { changeTerm } from '../../store/reducers/filter'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Search"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
        <S.Filters>
          <FilterCard text="Pending" counter={1} />
          <FilterCard text="Done" counter={2} />
          <FilterCard text="Urgent" counter={3} />
          <FilterCard text="Important" counter={4} />
          <FilterCard text="Normal" counter={5} />
          <FilterCard active text="All" counter={6} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
export default SideBar
