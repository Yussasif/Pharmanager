import React from 'react'
import Container from '../../../components/Container'
import PrescriptionTable from '../../../components/tables/PrescriptionTable/PrescriptionTable'
const DispensaryTable: React.FC = () => {
  return (
    <Container type='blue-border'>
        <div style={{
            padding: '2em'
        }}>

            <PrescriptionTable/>
        </div>
    </Container>
  )
}

export default DispensaryTable
