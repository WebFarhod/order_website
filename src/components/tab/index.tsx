import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Switch,
} from "@mui/material";
import { IDataType } from "../../types/dataType";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  data: {
    price: string;
    image?: string;
    isSelect: boolean;
    include?: string[];
  };
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TabPanel(props: TabPanelProps) {
  const { value, index, data, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" spacing={3} p={2}>
            <Typography
              fontSize={"1rem"}
              px={2}
              py={1}
              borderRadius={1}
              bgcolor={"rgb(0,122,204)"}
            >
              {data.price}$ Narxi
            </Typography>
            {data?.include &&
              data?.include.map((item) => <Typography>{item}</Typography>)}
          </Stack>
          {data.image && (
            <Box
              component="img"
              borderRadius={1}
              src={data.image}
              height="50vh"
            />
          )}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface IProps {
  data: IDataType;
  onTabSelectChange: (tab: number, checked: boolean) => void;
  onTabSelectDefalut: () => void;
}

const TabsComponent: React.FC<IProps> = ({
  data,
  onTabSelectChange,
  onTabSelectDefalut,
}) => {
  const { title, tabs, isSelect } = data;

  const [value, setValue] = React.useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Accordion
      expanded={isSelect}
      elevation={5}
      sx={{
        p: 3,
        // bgcolor: isSelect ? " rgb(30,30,30)" : " rgb(37, 37, 38)",
        bgcolor: isSelect ? " rgb(37,37,38)" : " rgb(37, 37, 38)",
        color: "white",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="panel3-content"
        id="panel3-header"
        onClick={onTabSelectDefalut}
        // onClick={() => console.log("hg")}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          <Typography variant="h4" p={2}>
            {title}
          </Typography>
          <Switch {...label} checked={isSelect} />
        </Stack>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          // flexGrow: 1,
          display: "flex",
          height: "auto",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider", width: "300px" }}
        >
          {tabs.map((tab, index) => (
            <Tab
              iconPosition="start"
              key={index}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Switch
                    {...label}
                    checked={tab.isSelect}
                    onClick={() => onTabSelectChange(index, !tab.isSelect)}
                  />
                  <Typography color={"white"} fontSize={"1rem"}>
                    {tab.name}
                  </Typography>
                </Box>
              }
              {...a11yProps(index)}
              sx={{
                borderRadius: "4px",
                textAlign: "left",
                alignItems: "center",
                justifyContent: "flex-start",
                // bgcolor: index == value ? "rgb(37,37,38)" : "transparent",
                bgcolor: index == value ? "rgb(30,30,30)" : "transparent",
              }}
            />
          ))}
        </Tabs>
        {tabs.map((tabPanel, index) => (
          <TabPanel key={index} value={value} index={index} data={tabPanel} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default TabsComponent;
