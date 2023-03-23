import { MenuItem, TextField, Typography } from "@mui/material";
import React from "react";

const Basic = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <TextField
            label="title"
            style={{ width: "calc(100% - 4px)" }}
            variant="standard"
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <TextField
            label="subtitle"
            style={{ width: "calc(100% - 4px)" }}
            variant="standard"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-6">
          <TextField
            label="Internal title"
            style={{ width: "calc(100% - 4px)" }}
            variant="standard"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12 col-md-4">
          <Typography variant="subtitle2">Art of Transport</Typography>
          <TextField
            label="Transport-Art"
            select
            style={{ width: "calc(100% - 4px)" }}
            variant="standard"
          >
            <MenuItem value="direct drive">direct drive</MenuItem>
            <MenuItem value="general cargo">general cargo</MenuItem>
          </TextField>
        </div>
        <div className="col-sm-12 col-md-4">
          <Typography variant="subtitle2">Tariff Status</Typography>
          <TextField
            label="Status"
            select
            style={{ width: "calc(100% - 4px)" }}
            variant="standard"
          >
            <MenuItem value="inactive">inactive</MenuItem>
            <MenuItem value="active">active</MenuItem>
          </TextField>
        </div>
      </div>
    </div>
  );
};

export default Basic;
