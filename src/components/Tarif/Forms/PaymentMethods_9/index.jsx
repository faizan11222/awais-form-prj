import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useState } from 'react'

const PaymentMethods_9 = () => {
    const [value1, setvalue1] = useState(false);
    const [value2, setvalue2] = useState(false);
    const [value3, setvalue3] = useState(false);
    return (
        <div>
            <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                Bitte beachten Sie, dass die Bezahlung zwischen Ihnen und dem Auftraggeber stattfindet. D.h. der Auftraggeber erhält die Rechnung von Ihnen, nicht von uns. Bei Zahlung per Vorkasse teilen wir dem Auftraggeber Ihre Kontodaten und den Verwendungszweck mit.
            </Typography>
            <br />
            {
                value1 || value2 || value3 === false &&
                <Typography variant="body3" sx={{ margin: "0 0 20px 0", color: "red" }}>
                    Mindestens eine Zahlungsmethode auswählen
                </Typography>
            }
            <div>
                <FormControlLabel checked={value1} onChange={() => setvalue1(!value1)} sx={{ fontSize: "2px" }} control={<Checkbox />} label="Rechnung" /><br />
                <FormControlLabel checked={value2} onChange={() => setvalue2(!value2)} sx={{ fontSize: "2px" }} control={<Checkbox />} label="Bar bei Abholung" /><br />
                <FormControlLabel checked={value3} onChange={() => setvalue3(!value3)} sx={{ fontSize: "2px" }} control={<Checkbox />} label="Vorkasse" /><br />
            </div>

        </div>
    )
}

export default PaymentMethods_9