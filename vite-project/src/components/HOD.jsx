import React from "react";
import { Box,Grid,Typography} from "@mui/material";
import HODI from '../assets/HOD.png'

function HOD(){
    return(
        <>
            <Box>
                <Grid container spacing={1} style={{margin:'0'}}>
                    <Grid item md={7} sm={12}
                        sx={{
                            backgroundColor:'#5858AF',
                            height:'max-content',
                        }}
                    >
                        <Typography
                            sx={{
                                color:'white',
                                margin:'5%',
                                fontSize:'40px',
                                marginRight:'10%',
                                fontWeight:'700'
                            }}
                        >
                            Our Vision...
                        </Typography>
                        <Grid classname='inside-content' item md={5} sm={12}
                            sx={{
                                display:'none',
                            '@media (max-width: 900px)': {
                                display: 'block',
                                textAlign:'center'
                            }
                            }}
                        >
                            <img src={HODI} alt="HOD" 
                                style={{
                                    width:'50vh',
                                }}
                            />
                        </Grid>
                        
                        <Typography
                            sx={{
                                color:'white',
                                margin:'5%',
                                fontSize:'22px',
                                marginRight:'15%',
                                marginBottom:'10%',
                                
                                '@media (max-width: 900px)': {
                                    textAlign:'center',    
                                }
                            }}
                        >
                             To continually improve the education environment, in order to develop graduates with strong academic and technical background needed to achieve distinction in the discipline. The excellence is expected in various domains like workforce, higher studies or lifelong learning. To strengthen links between industry through partnership and collaborative development works.
                        </Typography>
                    </Grid>
                    <Grid classname='outside-content' item md={5} sm={12}
                        sx={{
                            
                            padding:'0',
                            margin:'auto 0',
                            height:'max-content',
                            position:'relative',
                            left:'-5%',
                            '@media (max-width: 900px)': {
                                display: 'none'
                            }
                        }}
                    >
                        <img src={HODI} alt="HOD" 
                            style={{
                                width:'50vh',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default HOD