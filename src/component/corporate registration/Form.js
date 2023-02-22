
import { Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useForm } from "react-hook-form";
import { BsAsterisk } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import formData from "./formData";
function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const history = useNavigate()
    function onSubmit(data) {
        history('/')
        localStorage.setItem('register', JSON.stringify(data));
        dispatch({ type: "REGISTER_DATA", payload: data })
    }
    function valid(index) {
        if (index === 0)
            return (
                {
                    required: {
                        value: true,
                        message: "This field is Required"
                    }
                }
            )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container columnSpacing={3}>
                {
                    ['Business Description', 'Corporate Philosophy'].map((item, index) => {
                        return (
                            <Grid item md={6}>
                                <Stack>
                                    <InputLabel sx={{ fontWeight: "500", fontSize: "13px", marginBottom: "3px" }}>{item} {index === 0 ? <BsAsterisk color="red" fontSize="10px" /> : null}</InputLabel>
                                    <TextField size="small" multiline rows={4}
                                        {...register(item, valid(index))}
                                        error={Boolean(errors[item])}
                                        helperText={errors[item]?.message} ></TextField>
                                </Stack>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={7} my={3}>
                {
                    formData.map((item, index) => {
                        return (
                            <Grid item md={4}>
                                <Stack >
                                    <InputLabel sx={{ fontWeight: "500", fontSize: "13px", marginBottom: "3px" }}>{item.label} {item.validation.required.value ? <BsAsterisk color="red" fontSize="10px" /> : null}</InputLabel>
                                    <TextField type={item.type} size="small" {...register(item.label, item.validation)}
                                        error={Boolean(errors[item.label])}
                                        helperText={errors[item.label]?.message}
                                    />
                                </Stack>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group" sx={{ fontWeight: "500", fontSize: "13px", marginBottom: "3px" }}>Foreign Owned</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group" row
                >
                    <FormControlLabel value="Yes" {...register('Foriegn Owned')} control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" {...register('Foriegn Owned')} control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>

            <Stack sx={{ display: "flex", alignItems: "center" }}>
                <Button sx={{ padding: "10px 80px", backgroundColor: "hsl(249deg 68% 29%)" }} type="submit" variant="contained">Save</Button>
            </Stack>

        </form>
    )
}

export default Form;