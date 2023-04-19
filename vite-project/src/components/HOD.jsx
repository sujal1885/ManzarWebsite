import React from "react";
import { Box,Grid,Typography} from "@mui/material";
import HODI from '../assets/HOD.png'

function HOD(){
    return(
        <>
            <Box>
                <Grid container spacing={1}>
                    <Grid item md={7} sm={12}
                        sx={{
                            backgroundColor:'#5858AF',
                            marginTop:'8px',
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
                        <Typography
                            sx={{
                                color:'white',
                                margin:'5%',
                                fontSize:'22px',
                                marginRight:'15%',
                                marginBottom:'10%',
                                '@media (max-width: 900px)': {
                                    marginTop:'70%',
                                    textAlign:'center',    
                                }
                            }}
                        >
                             To continually improve the education environment, in order to develop graduates with strong academic and technical background needed to achieve distinction in the discipline. The excellence is expected in various domains like workforce, higher studies or lifelong learning. To strengthen links between industry through partnership and collaborative development works.
                        </Typography>
                    </Grid>
                    <Grid item md={5} sm={12}
                        sx={{
                            marginTop:'2%',
                            position:'absolute',
                            marginLeft:'52%',
                            '@media (max-width: 900px)': {
                                marginLeft:'20%',
                                marginTop:'20%',    
                            }
                        }}
                    >
                        <img src={HODI} alt="HOD" 
                            style={{
                                height:'85%',
                                width:'80%',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default HOD