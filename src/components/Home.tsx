import * as React from "react";
import Container from "@mui/material/Container";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {useTheme} from "@mui/material";
import { FaPython } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTypescript, SiGit, SiPostgresql} from 'react-icons/si';

function Home() {
    const theme = useTheme()
    const [expanded, setExpanded] = React.useState<string | false>(false)

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: Boolean) => {
        setExpanded(isExpanded ? panel : false);
    }

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    return (
        <Container>
            <Stack>
                <Typography align="center" sx={{ color: theme.palette.text.primary}} variant="h2">
                    Francisco Fourcade
                </Typography>
            </Stack>
            <Stack sx={{ color: theme.palette.text.primary}}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="h5">Education</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>
                            2019 - Now - Ingenieria en Sistemas de Informacion (Information Systems Engineering)
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>
                            Universidad Tecnologica Nacional - Facultad Regional Cordoba - Expected Graduation date: Dec. 2025
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel2a-content" id="panel2a-header">
                        <Typography variant="h5">Work Experience</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ width: '100%' }}>
                            <Stack spacing={2}>
                                <Item>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary}}>
                                        01/16/2023 - Now - UrbanSim Inc.
                                    </Typography>
                                    <Typography variant="subtitle2">Software development - Urban Data Science</Typography>
                                </Item>
                                <Item>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary}}>
                                        2021 - 2023 - IUCBC
                                    </Typography>
                                    <Typography  variant="subtitle2">Functional Analyst - Data Base Queries</Typography>
                                </Item>
                            </Stack>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel3a-content" id="panel3a-header">
                        <Typography variant="h5">Technical Skills</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <Stack direction="row" spacing={2} sx={{ color: theme.palette.text.primary}}>
                                <Item><FaPython/> Python</Item>
                                <Item><SiJavascript/> JavaScript </Item>
                                <Item><SiReact/> React </Item>
                                <Item><SiTypescript/> Typescript </Item>
                                <Item><SiGit/> GitHub </Item>
                                <Item><SiPostgresql/>Postgresql Data Bases </Item>
                            </Stack>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Container>
    )
}

export default Home;