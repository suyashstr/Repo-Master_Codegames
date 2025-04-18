import React from "react";
import { Tab, Tabs } from "@mui/material";
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import Header from "../Header";
import swal from "sweetalert";
import Milestonefive from "../Python/Milestonefive";
import Milestonefour from "../Python/Milestonefour";
import Milestonesix from "../Python/Milestonesix";
import Milestoneone from "../Python/Milestoneone";
import Milestonetwo from "../Python/Milestonetwo"
import Milestonethree from "../Python/Milestonethree";


function Sweet() {
    swal("PLease Completed The Above Level");
}


function Pyhton() {
    const userdata = useSelector((state) => state.profile);
    const lives = useSelector((state) => state.point);
    console.log("userdate", userdata);
    console.log("LEARN POints", lives);
    const [value, setValue] = React.useState(0);
    const levels = useSelector((state) => state.levels);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

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
                        {children}
                    </Box>
                )}
            </div>
        );
    }

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
    return (
        <Box style={{ display: "flex" }} >
            <Header />

            <Tabs orientation="vertical" onChange={handleChange} style={{ width: "10%", marginTop: "12%" }}>
                <Tab label="Level 1" {...a11yProps(0)}></Tab>
                <Tab label="Level 2" {...a11yProps(1)}></Tab>
                <Tab label="Level 3" {...a11yProps(2)}></Tab>
                <Tab label="Level 4" {...a11yProps(3)}></Tab>
                <Tab label="Level 5" {...a11yProps(4)}></Tab>
                <Tab label="Level 6" {...a11yProps(5)}></Tab>

            </Tabs>



            <TabPanel value={value} index={0} style={{ marginTop: "2rem" }}><Milestoneone /></TabPanel>
            <TabPanel value={value} index={1} style={{ marginTop: "2rem" }}><Milestonetwo /></TabPanel>
            <TabPanel value={value} index={2} style={{ marginTop: "2rem" }}><Milestonethree /></TabPanel>
            <TabPanel value={value} index={3} style={{ marginTop: "2rem" }}><Milestonefour /></TabPanel>
            <TabPanel value={value} index={4} style={{ marginTop: "2rem" }}><Milestonefive /></TabPanel>
            <TabPanel value={value} index={5} style={{ marginTop: "2rem" }}><Milestonesix /></TabPanel>

        </Box>
    )
}

export default Pyhton;