import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
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
    price: number;
    image?: string;
    // isSelect: boolean;
    include?: string[];
  };
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TabPanel(props: TabPanelProps) {
  const { value, index, data, ...other } = props;

  return (
    <Box
      width="100%"
      role="tabpanel"
      px={3}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Stack
          width="100%"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={3}
          px={3}
        >
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Stack direction="column" spacing={3}>
              {data?.include && (
                <Stack
                  direction="row"
                  spacing={3}
                  justifyItems="center"
                  alignItems="center"
                >
                  <>
                    <Typography variant="subtitle1" fontSize={25}>
                      O'z ichiga oladi:
                    </Typography>
                    {data?.include.map((item) => (
                      <Typography
                        key={item}
                        variant="body1"
                        fontSize={20}
                        px={2}
                        py={1}
                        borderRadius={3}
                        sx={{ bgcolor: "rgb(45,45,48)" }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </>
                </Stack>
              )}
              {/* {data?.addition && (
                <Stack
                  direction="row"
                  spacing={3}
                  justifyItems="center"
                  alignItems="center"
                >
                  <>
                    <Typography variant="subtitle1" fontSize={25}>
                      Qo`shimcha imkoniyatlar:
                    </Typography>
                    {data?.addition.map((item) => (
                      <Typography
                        key={item}
                        variant="body1"
                        fontSize={20}
                        px={2}
                        py={1}
                        borderRadius={3}
                        sx={{ bgcolor: "rgb(45,45,48)" }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </>
                </Stack>
              )} */}
            </Stack>
            <Typography
              fontSize={"1rem"}
              px={2}
              py={1}
              borderRadius={1}
              bgcolor={"rgb(0,122,204)"}
            >
              Narxi {data.price}$
            </Typography>
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            {data.image && (
              <Box
                component="img"
                borderRadius={1}
                src={data.image}
                height="50vh"
              />
            )}
          </Stack>
        </Stack>
      )}
    </Box>
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
  const [price, setPrice] = React.useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const totalPrice = data.tabs
      .filter((tab) => tab.isSelect)
      .reduce((sum, tab) => sum + tab.price, 0);
    setPrice(totalPrice);
  }, [data]);

  return (
    <Accordion
      expanded={isSelect}
      elevation={5}
      sx={{
        // p: 0,
        bgcolor: isSelect ? " rgb(30,30,30)" : " rgb(37, 37, 38)",
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
      <AccordionDetails sx={{ p: 0 }}>
        <Stack direction="column" justifyContent="flex-start" spacing={1}>
          <Stack p={3} direction="row">
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
                      <Typography color={"white"} fontSize={"1rem"}>
                        {tab.name}
                      </Typography>
                      <Switch
                        {...label}
                        checked={tab.isSelect}
                        onClick={() => onTabSelectChange(index, !tab.isSelect)}
                      />
                    </Box>
                  }
                  {...a11yProps(index)}
                  sx={{
                    borderRadius: "4px",
                    textAlign: "left",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    bgcolor: index == value ? "rgb(37,37,38)" : "transparent",
                    // bgcolor: index == value ? "rgb(30,30,30)" : "transparent",
                  }}
                />
              ))}
            </Tabs>

            {tabs.map((tabPanel, index) => (
              <TabPanel
                key={index}
                value={value}
                index={index}
                data={tabPanel}
              />
            ))}
          </Stack>
          <Divider sx={{ bgcolor: "gray" }} />
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            px={3}
            py={1}
          >
            <Typography fontSize={"1.3rem"} px={2} py={1} borderRadius={1}>
              {data.title} narxi:
            </Typography>
            <Typography
              fontSize={"1.3rem"}
              px={4}
              py={1}
              borderRadius={1}
              bgcolor={"rgba(0,122,204,0.4)"}
            >
              {price}$
            </Typography>
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default TabsComponent;
