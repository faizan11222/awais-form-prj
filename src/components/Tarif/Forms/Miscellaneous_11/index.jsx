import { Alert, Button, Checkbox, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import styled from '@emotion/styled';
const EditorWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  min-height: 140px;
  margin: 20px 0;
`;




const Miscellaneous_11 = () => {

    const [select1, setselect1] = useState('Private Kunden');
    const [select2, setselect2] = useState('Bis 16:00 am Vortag der Fahrt (default)');
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleKeyCommand = (command, state) => {
        const newState = RichUtils.handleKeyCommand(state, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    const toggleBold = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    const toggleItalic = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    };

    const toggleUnderline = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    };
    return (
        <div>
            <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Gewünschte Kunden
                </Typography>
                <Typography variant="caption">
                    Wer darf Transporte dieses Tarifs buchen?
                </Typography>
                <div className='row m-0 mt-3'>
                    <div className='col-4'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Kundengruppe</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={select1}
                                variant="standard"
                                label="Kundengruppe"
                                onChange={(e) => setselect1(e.target.value)}
                            >
                                <MenuItem value='Private Kunden'>Private Kunden</MenuItem>
                                <MenuItem value='Gewerbliche Kunden'>Gewerbliche Kunden</MenuItem>
                                <MenuItem value='Private Kunden'>Private wie auch gewerbliche Kunden</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {
                        select1 === 'Gewerbliche Kunden' &&
                        <div className='col-8'>
                            <FormControlLabel control={<Checkbox />} label="SteuerId/UstId Pflicht" /><br />
                            <Typography variant="caption">
                                Wenn ausgewählt müssen auch Einzelunternehmer eine Steuer oder Umsatzsteuer Id angeben.
                            </Typography>
                        </div>
                    }
                </div>
            </div>
            <div className='mt-5'>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Stornierungsfristen
                </Typography>
                <Typography variant="caption">
                    Bitte geben Sie Ihre Stornierungszeiten an.
                </Typography>
                <div className='row m-0 mt-3'>
                    <div className='col-4'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Stornierungszeit</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="standard"
                                label="Kundengruppe"
                                value={select2}
                                onChange={(e) => setselect2(e.target.value)}
                            >
                                <MenuItem value='Bis 16:00 am Vortag der Fahrt (default)'>Bis 16:00 am Vortag der Fahrt (default)</MenuItem>
                                <MenuItem value='Bis 9h vor Fahrt'>Bis 9h vor Fahrt</MenuItem>
                                <MenuItem value='Bis 1h nach Eingang der Buchung'>Bis 1h nach Eingang der Buchung</MenuItem>
                                <MenuItem value='Bis 3h nach Eingang der Buchung'>Bis 3h nach Eingang der Buchung</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Pflichtfelder
                </Typography>
                <Typography variant="caption">
                    Welche dieser Felder muss ein Kunde bei der Buchung unbedingt angeben?
                </Typography>
                <div className='row m-0 mt-3'>
                    <div className='col-3'><FormControlLabel control={<Checkbox />} label="Absender E-Mail" /></div>
                    <div className='col-3'><FormControlLabel control={<Checkbox />} label="Empfänger E-Mail" /></div>
                    <div className='col-3'><FormControlLabel control={<Checkbox />} label="Absender Telefon" /></div>
                    <div className='col-3'><FormControlLabel control={<Checkbox />} label="Empfänger Telefon" /></div>
                </div>
            </div>
            <div className='mt-5'>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Mitteilung an den Kunden
                </Typography>
                <Typography variant="caption">
                    In diesem Feld können Sie eine Mitteilung an den Auftraggeber schreiben. Der Text wird im Rahmen des Buchungsprozesses sowie auf der Auftragsbestätigung angezeigt.
                </Typography>
                <EditorWrapper>
                    <div>
                        <Button sx={{ color: "black" }} onClick={toggleBold}><FormatBoldIcon /></Button>
                        <Button sx={{ color: "black" }} onClick={toggleItalic}><FormatItalicIcon /></Button>
                        <Button sx={{ color: "black" }} onClick={toggleUnderline}><FormatUnderlinedIcon /></Button>
                    </div>
                    <Divider sx={{ margin: "10px 0" }} />
                    <Editor
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange={setEditorState}
                    />
                </EditorWrapper>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Versicherung
                </Typography>
                <Typography variant="caption">
                    Wir haben standardmäßig die AdSp 2017 für Sie hinterlegt. In Ihren Einstellungen unter "Versicherung" können Sie die Aufpreise für Ihre zusätzliche Transportversicherung hinterlegen.
                </Typography>
                <div className='mt-3'><FormControlLabel control={<Checkbox />} label="zusätzliche Transportversicherung zubuchbar" /></div>
                <div className=''><FormControlLabel control={<Checkbox />} label="Warenwert muss immer angegeben werden" /></div>
                <div className='mt-4'>
                    <Typography variant="caption">
                        Zusätzlich können Sie Ihre Kunden darauf hinweisen, ob sich der Versicherungsschutz auf neue oder gebrauchte Waren bezieht.
                    </Typography>
                    <div className='mt-3'><FormControlLabel control={<Checkbox />} label="Neuware versichert" /></div>
                    <div className='mt-3'><FormControlLabel control={<Checkbox />} label="Gebrauchte Ware versichert" /></div>
                </div>
                <div className='mt-4'>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Kraftstoffzuschlag
                    </Typography>
                    <Typography variant="caption">
                        Wählen Sie hier aus einem Ihrer bereits hinterlegten Kraftstoffzuschläge. Ihre Kunden sehen den prozentualen Zuschlag als Einzelposition innerhalb des Auftrags. In Ihren Speditions-Einstellungen unter "Kraftstoffzuschlag" können Sie neue Zuschläge einrichten und jederzeit anpassen.
                    </Typography>
                </div>
                <Alert className='my-3' severity="warning">Für Ihre Spedition sind noch keine Kraftstoffzuschläge angelegt. Diese können Sie in den Speditionseinstellungen verwalten.</Alert>
                <div className='mt-4'>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Fahrzeug
                    </Typography>
                    <Typography variant="caption">
                        Spezifizieren Sie Ihr Angebot
                    </Typography>
                    <div className='mt-3'><FormControlLabel control={<Checkbox />} label="von der Seite beladbar" /></div>
                    <div className='mt-3'><FormControlLabel control={<Checkbox />} label="von oben beladbar" /></div>
                </div>
                <div className='mt-4'>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Ladebordwand
                    </Typography>
                    <Typography variant="caption">
                        Müssen Privatkunden zwingend Ladebordwand und Avisierung dazubuchen?
                    </Typography>
                    <div className='mt-3'><FormControlLabel control={<Checkbox />} label="Ladebordwand und Avisierung sind erforderlich" /></div>
                </div>
                <div className='mt-4'>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Zolldokumente
                    </Typography>
                    <Typography variant="caption">
                        Geben Sie Ihren Kunden direkt mit, über welche Webseite oder an welche E-Mail-Adresse sie Ihre zollrelevanten Dokumente mit Ihnen teilen sollen. Wir übermitteln die jeweilige Adresse direkt bei Auftragsvergabe an den Auftraggeber.
                    </Typography>
                    <TextField id="standard-basic" sx={{ width: "100%" }} type="text" label="Zolldokumente Inbox (E-Mail oder Upload Url)" variant="standard" />
                </div>
            </div>

        </div>
    )
}

export default Miscellaneous_11