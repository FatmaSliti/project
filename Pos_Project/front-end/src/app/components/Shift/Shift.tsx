import Card from './Shift_Card/Card'
import ShiftReportTable from './Shift_Report_Table/ShiftReportTable'

const Shift: React.FC = () => {
  return (
    <>
      <div className='card'>
        <Card />
      </div>

      <div className='card mt-6'>
        <ShiftReportTable />
      </div>
    </>
  )
}

export default Shift
