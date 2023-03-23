/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Basic_1 from "./Forms/Basic_1";
import { Button, Divider } from "@mui/material";
import CatchmentArea_3 from "./Forms/CatchmentArea_3";
import DistributionChannels_2 from "./Forms/DistributionChannels_2";
import ExclusionCriteria_4 from "./Forms/ExclusionCriteria_4";
import RunTimes_6 from "./Forms/RunTimes_6";

export default function Tarif() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleExpand("panel1")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Basic
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Basic_1 />
          <div className="my-4">
            <Divider />
          </div>
          <Button
            style={{ marginLeft: "85%" }}
            variant="contained"
            color="success"
            onClick={(e) => handleExpand("panel2")(e, true)}
          >
            Further
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleExpand("panel2")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Distribution Channels
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DistributionChannels_2 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel1")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel3")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleExpand("panel3")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Catchment Area
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CatchmentArea_3/>
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel2")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel4")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleExpand("panel4")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Exclusion Criteria
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ExclusionCriteria_4 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel3")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel5")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleExpand("panel5")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Precalculation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel4")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel6")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleExpand("panel6")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Runtimes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <RunTimes_6/>
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel5")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel7")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleExpand("panel7")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Additional Services
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel6")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel8")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleExpand("panel8")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Subscription
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel7")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel9")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleExpand("panel9")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Payment methods
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel8")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel10")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleExpand("panel10")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Rateattribute
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel9")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel11")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel11"}
        onChange={handleExpand("panel11")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Miscellaneous
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel10")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel12")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel12"}
        onChange={handleExpand("panel12")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Order Submission
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "68%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel11")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              //   onClick={(e) => handleExpand("panel")(e, true)}
            >
              CREATE A TARIF
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
