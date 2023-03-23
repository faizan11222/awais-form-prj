import { Checkbox, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";

const ExclusionCriteria_4 = () => {
  return (
    <div>
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        Gesamte Ladung
      </Typography>
      <Typography variant="caption">
        Welche Bedingungen muss die Gesamtladung erfüllen?
      </Typography>
      <div className="my-2">
        <div className="row">
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimales Gewicht"
            />
          </div>
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximales Gewicht"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ml</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimale Lademeter"
            />
          </div>
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ml</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Lademeter"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimale Höhe"
            />
          </div>
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Höhe"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    m<sup>3</sup>
                  </InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximales Ladevolumen"
            />
          </div>
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg/lm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximales Gewicht pro Lademeter"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Stk.</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Packstück-Anzahl"
            />
          </div>
        </div>
      </div>

      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        Packstücke
      </Typography>
      <Typography variant="caption">
        Welche Maße dürfen die einzelnen Packstücke höchstens besitzen?
      </Typography>

      <div className="mt-4">
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimale Länge"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Länge"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimale Höhe"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Höhe"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimale Breite"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Breite"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimales Gewicht"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximales Gewicht"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-xs-12 col-md-6">
            <Checkbox /> Packstücke müssen unterfahrbar sein
          </div>
          <div className="col-xs-12 col-md-6">
            <Checkbox /> Packstücke müssen palettiert sein
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusionCriteria_4;
