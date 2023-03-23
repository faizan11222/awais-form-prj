import { Checkbox, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import DynamicField from "../../../common/DynamicField";

const Precalculation_5 = () => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        Frachtpflichtigkeit der Sendung
      </Typography>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Typography variant="caption">
            Bei Sendungen, die schwerer sind, als sie groß sind, rechnen wir mit
            dem frachtpflichtigen Gewicht. Mit wie vielen Lademetern pro Tonne
            sollen wir rechnen?
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Im/t</InputAdornment>
              ),
            }}
            label="Frachtpflichtiges Gewicht (lm/t)"
            style={{ width: "calc(100% - 4px)" }}
            type="number"
            variant="standard"
          />
        </div>
      </div>
      <div className="my-5">
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          Frachtpflichtigkeit bei Übergrößen
        </Typography>
        <Typography variant="caption">
          Für große Packstücke können wir die Lademeter abweichend berechnen,
          falls diese zur Preisermittlung die ganze Breite der Ladefläche
          einnehmen sollen.
        </Typography>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Checkbox checked={check} onChange={(e) => setCheck(!check)} />
            Alternative Lademeter-Berechnung aktiv
          </div>
          {check && (
            <div className="ms-5">
              <Typography variant="caption">
                Bei Packstücken, die länger als 240cm sind, wird deren Länge als
                Lademeter verwendet.
              </Typography>
              <div>
                <Typography variant="caption">
                  Bei allen anderen Paketstücken, die mindestens{" "}
                  <span style={{ textDecoration: "underline" }}>125 cm </span>
                  lang sind, wird deren Breite als Lademeter verwendet.
                </Typography>
              </div>
              <div className="mt-3">
                <Typography variant="caption">
                  Beispiel 1: Ein Packstück mit den Maßen 150cm x 300cm nimmt 3
                  Lademeter ein.
                </Typography>
              </div>
              <div>
                <Typography variant="caption">
                  Beispiel 2: Ein Packstück mit den Maßen 150cm x 80cm nimmt 0,8
                  Lademeter ein (wenn der Schwellenwert auf 125cm gesetzt ist).
                </Typography>
              </div>
            </div>
          )}
          <div className="mt-5">
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Preisnachlass
            </Typography>
            <Typography variant="caption">
              Sie können einen Discount hinterlegen, der dem Kunden angezeigt
              wird (Streichpreis oder Sonderangebot).
            </Typography>
            <div className="row">
              <div className="col-xs-12 col-md-4 py-1">
                <Checkbox /> Preisnachlass aktiv
              </div>
              <div className="col-xs-12 col-md-4 py-1">
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  label="Preisnachlass"
                  style={{ width: "calc(100% - 4px)" }}
                  type="number"
                  variant="standard"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Anfahrtzuschlag
            </Typography>
            <Typography variant="caption">
              Pauschaler Zuschlag in Euro für gewünschte Postleitzahlen (z.B.
              für Inselabholungen oder für Abholungen aus Gebieten, in denen die
              Vorlaufkosten höher sind)
            </Typography>
            <DynamicField price />
          </div>
          <div className="mt-5">
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Entladezuschlag
            </Typography>
            <Typography variant="caption">
              Pauschaler Zuschlag in Euro für gewünschte Postleitzahlen (z.B.
              für Inselabholungen oder für Abholungen aus Gebieten, in denen die
              Vorlaufkosten höher sind)
            </Typography>
            <DynamicField price />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precalculation_5;
