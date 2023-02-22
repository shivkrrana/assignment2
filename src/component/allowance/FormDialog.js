import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Stack } from '@mui/system';
import allowancesData from './allowancesData';
import { useForm } from 'react-hook-form';
import { BsAsterisk } from "react-icons/bs";
import { FormHelperText, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';

export default function FormDialog() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const state = useSelector(state => state.allowance)
  const handleClose = () => {
    dispatch({ type: "SHOW_POPUP", payload: false })
  };

  function onSubmit(data) {
    if(data)
    handleClose();
    localStorage.setItem('allowances', JSON.stringify(data))
    dispatch({type:"ALLOWANCE_DATA",payload:data})
  }

  return (
    <Stack >
      <Dialog open={state} onClose={handleClose} maxWidth >
        <Stack direction='row' sx={{ justifyContent: "space-between",alignItems:"center", padding: "0 10px" }}>
          <DialogTitle sx={{fontWeight:"600"}}>Allowances</DialogTitle>
          <CloseIcon onClick={handleClose} sx={{cursor:"pointer",color:"#878787"}}/>
        </Stack>
        <DialogContent sx={{ padding: "10px 45px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>

            {
              allowancesData.map((item) => {
                return (
                  <Grid container columnSpacing={6} sx={{alignItems:"center",width:"800px"}}>
                    <Grid item md={1}>
                    {item.validation.required.value ? <BsAsterisk color="red" fontSize="10px" /> : null}
                    </Grid>
                    <Grid item md={7}>
                    {item.label}
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={Boolean(errors[item.label])}>
                       <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="Yes"  sx={{marginRight:"30px"}} {...register(item.label, item.validation)} control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" {...register(item.label, item.validation)} control={<Radio />} label="No" />
                      </RadioGroup>
                      <FormHelperText>{errors[item.label]?.message}</FormHelperText>
                    </FormControl>
                    </Grid>
                  </Grid>

                )
              })
            }

            <Stack sx={{ display: "flex", alignItems: "center" ,margin:"20px 0"}}>
              <Button sx={{ padding: "10px 80px", backgroundColor: "hsl(249deg 68% 29%)" }} type="submit" variant="contained" >Save</Button>
            </Stack>

          </form>
        </DialogContent>


      </Dialog>
    </Stack>
  );
}