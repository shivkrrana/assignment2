import { Box } from "@mui/system";
import "./main.css"
import Header from "./Header";
import Body from "./body";
import { useSelector } from "react-redux";

function MainPage() {
    const registerData = useSelector(state=>state.registerData)
    const allowanceData = useSelector(state=>state.allowancePopup)
    
    return (
        <Box>
            <Header title='Corporate Information' link='/register'/>
            <Box>
                {
                    registerData?Object.keys(registerData).map(key => {
                        return (
                            registerData[key]?<Body text={key} value={registerData[key]} width1='20%' width2='80%' />:null
                        )
                    }):null
                }
            </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "50%", marginRight: "30px" }}>
                    <Header title='Allowances' popup="true"/>
                    {
                        allowanceData?Object.keys(allowanceData).map(key => {
                            return (
                                <Body text={key} value={allowanceData[key]} />
                            )
                        }):null
                    }
                </Box>
                <Box sx={{ width: "50%" }}>
                    <Box>
                        <Header title='Others' />
                        <Body text='Retention Rate Of New Graduate Hires' value='Over 50%' />
                        <Body text='Work Style ( Overseas Bases )' value='Yes' />
                        <Body text='Working Environment' value='Not Working' />
                    </Box>
                    <Box>
                        <Header title='Holidays' />
                        <Body text='Summer Holidays' value='Yes' />
                        <Body text='Golden Weeks' value='Yes' />
                        <Body text='Other Holidays' value='Yes' />
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default MainPage;