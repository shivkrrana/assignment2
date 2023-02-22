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
import { FormHelperText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';

export default function FormDialog() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const state = useSelector(state => state.allowance)
  const handleClose = () => {
    dispatch({ type: "SHOW_POPUP", payload: false })
  };
  const allow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "800px"
  }

  function onSubmit(data) {
    if(data)
    handleClose();
    localStorage.setItem('allowances', JSON.stringify(data))
    dispatch({type:"ALLOWANCE_DATA",payload:data})
  }

  return (
    <Stack >
      <Dialog open={state} onClose={handleClose} maxWidth >
        <Stack direction='row' sx={{ justifyContent: "space-between", padding: "0 10px" }}>
          <DialogTitle>Allowances</DialogTitle>
          <CloseIcon onClick={handleClose} />
        </Stack>
        <DialogContent sx={{ padding: "10px 45px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>

            {
              allowancesData.map((item) => {
                return (
                  <Stack direction='row' sx={allow}>
                    <Stack direction='row' sx={{ alignItems: "center", fontSize: "15px" }}>
                      {item.validation.required.value ? <BsAsterisk color="red" fontSize="10px" /> : null}  {item.label}
                    </Stack>
                    <FormControl error={Boolean(errors[item.label])}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="yes" sx={{ margin: "0 30px" }} {...register(item.label, item.validation)} control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" {...register(item.label, item.validation)} control={<Radio />} label="No" />
                      </RadioGroup>
                      <FormHelperText>{errors[item.label]?.message}</FormHelperText>
                    </FormControl>
                  </Stack>
                )
              })
            }

            <Stack sx={{ display: "flex", alignItems: "center" }}>
              <Button sx={{ padding: "10px 80px", backgroundColor: "hsl(249deg 68% 29%)" }} type="submit" variant="contained" >Save</Button>
            </Stack>

          </form>
        </DialogContent>


      </Dialog>
    </Stack>
  );
}