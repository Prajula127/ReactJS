// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import {ResponsiveCoverageContainer, Vaccination} from './styledComponents'

const VaccinationCoverage = props => {
  const {coverage} = props

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <ResponsiveCoverageContainer>
      <Vaccination>Vaccination Coverage</Vaccination>
      <BarChart
        width={1000}
        height={500}
        data={coverage}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
          }}
        />

        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.5,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[8, 8, 0, 0]}
          barSize="20%"
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          radius={[8, 8, 0, 0]}
          barSize="20%"
        />
      </BarChart>
    </ResponsiveCoverageContainer>
  )
}
export default VaccinationCoverage
