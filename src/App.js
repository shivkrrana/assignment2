import * as React from 'react';
import Box from '@mui/material/Box';
import FormDialog from './component/allowance/FormDialog'
import Form from './component/corporate registration/Form';
import FixedDrawer from './component/drawer/Drawer';
import MainPage from './component/main/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Box sx={{display:"flex"}} bgcolor="primary">
      <FixedDrawer />
      <Box
        component="main" 
        sx={{ flexGrow: 1, bgcolor: 'background.default', m: 3 }}
      >
        <FormDialog/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/register' element={<Form/>}></Route>
        </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}