import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "../GridComponent/Grid";
import "./tab.css";
import List from "../ListComponent/List";


//tab mui component
export default function Tabs({ data }) {
  const [tabValue, setTabValue] = useState("grid");  //by default grid

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  //create theme used to change the color
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <div style={{ minHeight: "90vh" }}>
      <ThemeProvider theme={theme}>
        <TabContext value={tabValue}>
          <div>
            <TabList variant="fullWidth" onChange={handleChange}>
              <Tab
                label="Grid"
                value={"grid"}
                sx={style}
                className="tabHeading"
              />
              <Tab
                label="List"
                value={"list"}
                sx={style}
                className="tabHeading"
              />
            </TabList>
          </div>
          {/* grid  */}
          <TabPanel value={"grid"} className="tabPanel">
            <div className="grid-flex">
              {data.map((item, index) => (
                <Grid coin={item} key={index} delay={(index % 5) * 0.1} />
              ))}
            </div>
          </TabPanel>
          {/* list  */}
          <TabPanel value={"list"} className="tabPanel">
            <table className="list-flex">
              {data.map((item, i) => (
                <List coin={item} key={i} delay={(i % 7) * 0.1} />
              ))}
            </table>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}