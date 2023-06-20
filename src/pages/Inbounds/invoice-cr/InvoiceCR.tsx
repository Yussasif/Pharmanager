import React from 'react'
import { Box} from '@mui/material'
import GraphArea from '../../../components/GraphArea'
import ReportChart from '../../../components/ReportChart'
import classes from './invoice.module.scss'

const InvoiceCR: React.FC = () => {
  return (
    <div className={classes.block}>
      <Box sx={{
        display: 'flex'
      }}>
        <GraphArea/>
        <GraphArea/>
        <GraphArea/>
        <GraphArea/>
      </Box>
      <Box sx={{
        display: 'flex'
      }}>
        <ReportChart/>
        <ReportChart/>
        <ReportChart/>
      </Box>
    </div>
  )
}

export default InvoiceCR
