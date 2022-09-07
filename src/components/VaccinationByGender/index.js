// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import {ResponsiveByGenderContainer, Vaccination} from './styledComponents'

const VaccinationByGender = props => {
  const {byGender} = props

  return (
    <ResponsiveByGenderContainer>
      <Vaccination>Vaccination by gender</Vaccination>
      <PieChart width={1000} height={400}>
        <Pie
          data={byGender}
          cx="50%"
          cy="60%"
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </ResponsiveByGenderContainer>
  )
}
export default VaccinationByGender
