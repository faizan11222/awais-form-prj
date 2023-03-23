import { TextField, Typography } from '@mui/material'
import React from 'react'

const OrderSubmission_12 = () => {
  return (
    <div>
        <Typography variant="subtitle2">Übermittlung hinzufügen</Typography>
        <TextField id="standard-basic" sx={{ width: "100%" }} type="email" label="Enter Email" required variant="standard" />

    </div>
  )
}

export default OrderSubmission_12