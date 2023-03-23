import React, { useState } from "react";
import { Checkbox, InputAdornment, TextField, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DistributionChannelsInputs_2 = () => {
  return (
    <div className="row mt-4">
      <div className="col-xs-12 col-md-4">
        <Typography variant="subtitle2">Surcharge (relative)</Typography>
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          label="in %"
          style={{ width: "calc(100% - 4px)" }}
          variant="standard"
          type="number"
        />
      </div>
      <div className="col-xs-12 col-md-4">
        <Typography variant="subtitle2">Surcharge (absolute)</Typography>
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>,
          }}
          label="in €"
          style={{ width: "calc(100% - 4px)" }}
          type="number"
          variant="standard"
        />
      </div>
      <div className="col-xs-12 col-md-4">
        <Typography variant="subtitle2">max. surcharge (absolute)</Typography>
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>,
          }}
          label="in €"
          style={{ width: "calc(100% - 4px)" }}
          type="number"
          variant="standard"
        />
      </div>
    </div>
  );
};

const DistributionChannels = () => {
  const [check, setCheck] = useState({
    marketplace: false,
    pro: false,
    for_you: false,
    connect: false,
    lite: false,
    sales_assistant: false,
  });
  return (
    <div>
      <Typography variant="body2">
        Select the sales channels through which this tariff should be played
        out.
      </Typography>
      <Typography variant="body2">
        If you set a markup (percentage or absolute), it will be applied to the
        rate table prices for that channel.
      </Typography>
      <div className="my-5">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.marketplace}
                onClick={(e) => setCheck({ marketplace: e.target.checked })}
              />
              marketplace
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The tariff is displayed on the public marketplace Pamyra.de.
            </Typography>
            {check.marketplace && <DistributionChannelsInputs_2 />}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.pro}
                onClick={(e) => setCheck({ pro: e.target.checked })}
              />
              PRO
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The tariff is only displayed to commercial, credit-checked
              frequent mailers with the payment method invoice. If you have any
              questions, please contact us on 0361/380 300 81.
            </Typography>
            {check.pro && <DistributionChannelsInputs_2 />}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.for_you}
                onClick={(e) => setCheck({ for_you: e.target.checked })}
              />
              4You
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The tariff is displayed on your own website or in the test
              environment set up for you. If you are not yet a 4You customer,
              contact us on 0361/380 300 82. Further information:
              https://www.pamyra.de/spedition-digitalisiert.
            </Typography>
            {check.for_you && <DistributionChannelsInputs_2 />}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.connect}
                onClick={(e) => setCheck({ connect: e.target.checked })}
              />
              Connect
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The tariff is made available in the virtual network Pamyra
              Connect. Other freight forwarders can sell this tariff under their
              own name and automatically include you as a subcontractor. If you
              have any questions, please contact us on 0361/380 300 82.
            </Typography>
            {check.connect && <DistributionChannelsInputs_2 />}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.lite}
                onClick={(e) => setCheck({ lite: e.target.checked })}
              />
              Lite
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Der Tarif wird auf Ihrer Pamyra Lite Website ausgespielt.
            </Typography>
            {check.lite && <DistributionChannelsInputs_2 />}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.sales_assistant}
                onClick={(e) => setCheck({ sales_assistant: e.target.checked })}
              />
              Sales Assistant
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The tariff can be selected in the Sales Assistant and will be
              played out as an offer on your own website or in the test
              environment set up for you. If you are not yet a Sales Assistant
              customer, please contact us on 0361/380 300 82. Further
              information: https://www.pamyra.de/spedition-digitalisiert.
            </Typography>
            {check.sales_assistant && <DistributionChannelsInputs_2 />}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default DistributionChannels;
