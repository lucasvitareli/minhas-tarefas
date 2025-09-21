import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Search" />
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
export default SideBar
