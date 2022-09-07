// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import {ResponsiveByAgeContainer, Vaccination} from './styledComponents'

const VaccinationByAge = props => {
  const {byAge} = props

  return (
    <ResponsiveByAgeContainer>
      <Vaccination>Vaccination by Age</Vaccination>
      <PieChart width={1000} height={400}>
        <Pie data={byAge} cx="50%" cy="30%" outerRadius="60%" dataKey="count">
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>

        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </ResponsiveByAgeContainer>
  )
}
export default VaccinationByAge
