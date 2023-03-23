import styled from '@emotion/styled'
import { InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import { Calendar } from "react-multi-date-picker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const RunTimes_6 = () => {
    const [checked, setChecked] = useState(false);
    const [fields, setfields] = useState('');
    const [date, setDate] = useState(new Date());
    return (
        <StyledRunTimes_6>
            <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Bürozeiten
                </Typography>
                <Typography variant="caption">
                    In welchem Zeitraum ist Ihr Büro besetzt?
                </Typography>
                <div className='row m-0'>
                    <div className='col-4'>
                        <TextField
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Geöffnet von" required variant="standard"
                        />
                    </div>
                    <div className='col-4'>
                        <TextField
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Geöffnet bis" required variant="standard"
                        />
                    </div>
                    <div className='col-4 row m-0'>
                        <div className='col-12'>
                            <FormControlLabel sx={{ fontSize: "2px" }} control={<Checkbox defaultChecked />} label="auch Samstag besetzt" />
                        </div>
                        <div className='col-12'>
                            <FormControlLabel sx={{ fontSize: "2px" }} control={<Checkbox defaultChecked />} label="auch Sonntag besetzt" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Abholung
                </Typography>
                <Typography variant="caption">
                    Zeitfenster, indem Ihre Fahrer beim Kunden eintreffen könnten
                </Typography>
                <div className='row m-0'>
                    <div className='col-4'>
                        <TextField
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Zeitfenster Abholung von" required variant="standard"
                        />
                    </div>
                    <div className='col-4'>
                        <TextField
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Zeitfenster Abholung bis" required variant="standard"
                        />
                    </div>
                    <div className='col-4 row m-0'>
                        <div className='col-12'>
                            <FormControlLabel sx={{ fontSize: "2px" }} control={<Checkbox defaultChecked />} label="Touren samstags möglich" />
                        </div>
                        <div className='col-12'>
                            <FormControlLabel sx={{ fontSize: "2px" }} control={<Checkbox defaultChecked />} label="Touren sonntags möglich" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='row m-0'>
                    <div className='col-4'>
                        <FormControlLabel checked={checked} onChange={() => setChecked(!checked)} sx={{ fontSize: "2px" }} control={<Checkbox defaultChecked />} label="Flexible Abholung" />
                    </div>
                    <div className='col-4'>
                        <TextField
                            disabled={!checked}
                            InputProps={{ endAdornment: <InputAdornment position="end">Tage</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Größe des Zeitfensters *" required variant="standard"
                        />
                    </div>
                </div>
                <Typography variant="caption">
                    Beachten Sie die weiteren Optionen zur Abholung unter “Zubuchbare Leistungen”
                </Typography>
            </div>

            <div >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, margin: "42px 0 0 0" }}>
                    Zustellung
                </Typography>
                <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                    Wann können Zustellungen stattfinden?
                </Typography>
                <div className='row m-0'>
                    <div className='col-4'>
                        <TextField
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Zeitfenster Zustellung von" required variant="standard"
                        />
                    </div>
                    <div className='col-4'>
                        <TextField
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Zeitfenster Zustellung bis" required variant="standard"
                        />
                    </div>
                </div>
                <Typography variant="caption">
                    Beachten Sie die weiteren Optionen zur Zustellung unter “Zubuchbare Leistungen”
                </Typography>
            </div>




            <div >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, margin: "42px 0 0 0" }}>
                    Regellaufzeit
                </Typography>
                <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                    Wieviele Tage vergehen im Normalfall zwischen Abholung und Zustellung?
                </Typography>
                <div className='row m-0'>
                    <div className='col-4'>
                        <TextField
                            InputProps={{ endAdornment: <InputAdornment position="end">Tage</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Regellaufzeit minimal " required variant="standard"
                        />
                    </div>
                    <div className='col-4'>
                        <TextField
                            InputProps={{ endAdornment: <InputAdornment position="end">Tage</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Regellaufzeit maximal " required variant="standard"
                        />
                    </div>
                    <div className='col-4 row m-0'>
                        <div className='col-12'>
                            <FormControlLabel sx={{ fontSize: "2px" }} control={<Checkbox defaultChecked />} label="Regellaufzeiten Info" />
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, margin: "42px 0 0 0" }}>
                    Vorlaufzeit
                </Typography>
                <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                    Wie lange benötigen Sie für die Disposition?
                </Typography>
                <div className='row m-0 mt-3'>
                    <div className='col-4'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Vorlaufzeit-Berechnung</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={fields}
                                variant="standard"
                                label="Einzugsgebiet"
                                onChange={(e) => setfields(e.target.value)
                                }
                            >
                                <MenuItem value="Feste Vorlaufzeit">Feste Vorlaufzeit</MenuItem>
                                <MenuItem value="Same Day Obergrenze">Same Day Obergrenze</MenuItem>
                                <MenuItem value="Feste PLZ-Bereiche">Next Day Obergrenze</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {
                        fields === 'Feste Vorlaufzeit' &&
                        <div className='col-4'>
                            <TextField
                                InputProps={{ endAdornment: <InputAdornment position="end">Stunden</InputAdornment> }}
                                id="standard-basic" sx={{ width: "100%" }} type="number" label="Vorlaufzeit" required variant="standard"
                            />
                        </div>
                    }
                    {
                        fields === 'Same Day Obergrenze' &&
                        <>
                            <div className='col-4'>
                                <TextField
                                    InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                                    id="standard-basic" sx={{ width: "100%" }} type="number" label="Abholung am selben Tag wenn Beauftragung bis " required variant="standard"
                                />
                            </div>
                            <div className='col-4'>
                                <TextField
                                    InputProps={{ endAdornment: <InputAdornment position="end">Stunden</InputAdornment> }}
                                    id="standard-basic" sx={{ width: "100%" }} type="number" label="Zusätzliche Vorlaufzeit" required variant="standard"
                                />
                            </div>
                        </>
                    }
                    {
                        fields === 'Feste PLZ-Bereiche' &&
                        <div className='col-4'>
                            <TextField
                                InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                                id="standard-basic" sx={{ width: "100%" }} type="number" label="Abholung am nächsten Tag wenn Beauftragung bis" required variant="standard"
                            />
                        </div>
                    }
                </div>
            </div>
            <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, margin: "42px 0 0 0" }}>
                    Feiertagskalender
                </Typography>
                <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                    Der für Ihr Bundesland gültige Feiertagskalender ist automatisch hinterlegt. Sie können weitere Tage wie z.B. Ferientage durck Klick eintragen.
                </Typography>
            </div>
            <div className='mt-4'>
                <Calendar value={date} onChange={setDate} multiple />
            </div>

        </StyledRunTimes_6>
    )
}

export default RunTimes_6

const StyledRunTimes_6 = styled.div`
    
`