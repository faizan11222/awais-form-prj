import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Subscription_8 = () => {
    const itemsArr = [
        'proTag',
        'bis jeden Montag Abend',
        'bis jeden Dienstag Abend',
        'bis jeden Mittwoch Abend',
        'bis jeden Donnerstag Abend',
        'bis jeden Freitag Abend',
        'bis jeden Samstag Abend',
        'bis jeden Sonntag Abend'

    ]
    const [requireCheck, setrequireCheck] = useState(false);
    const [enabled, setenabled] = useState('proTag');
    return (
        <div>
            <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                Sie können regelmäßige Restmengen oder Leerfahrten anbieten. Sprechen Sie uns hierzu gerne an.
            </Typography>
            <div>
                <FormControlLabel checked={requireCheck} onChange={() => setrequireCheck(!requireCheck)} sx={{ fontSize: "2px" }} control={<Checkbox />} label="Kontingent-Modus aktivieren" />
            </div>
            <div className='row m-0'>
                <div className='col-4'>
                    <TextField id="standard-basic" sx={{ width: "100%" }} type="number" label="Anzahl der erlaubten Buchungen" required={requireCheck} variant="standard" />
                </div>
                <div className='col-4 row'>
                    <div className='col-12'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Vorlaufzeit-Berechnung</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={enabled}
                                variant="standard"
                                label="Einzugsgebiet"
                                // defaultChecked={itemsArr[0]}
                                onChange={(e) => setenabled(e.target.value)
                                }
                            >
                                {
                                    itemsArr.map((data, index) => (
                                        <MenuItem key={index} value={data}>{data}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    {
                        enabled === 'proTag' &&
                        <div className='col-12'>
                            <FormControlLabel sx={{ fontSize: "2px" }} control={<Checkbox />} label="Samstage zählen zum nächsten Tag" />
                            <FormControlLabel sx={{ fontSize: "2px" }} control={<Checkbox />} label="Sonntage zählen zum nächsten Tag" />
                            <FormControlLabel sx={{ fontSize: "2px" }} control={<Checkbox />} label="Feiertage zählen zum nächsten Tag" />
                        </div>

                    }
                </div>

            </div>
        </div>
    )
}

export default Subscription_8