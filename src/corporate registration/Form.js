
import { Button, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useForm } from "react-hook-form";
import { BsAsterisk } from "react-icons/bs";
import formData from "./formData";
function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit(data) {
        localStorage.setItem('register',JSON.stringify(data));
    }
    function valid() {
        return (
            {
                required: {
                    value: true,
                    message: "This field is required"
                }
            }
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container columnSpacing={3}>
                <Grid item md={6}>
                    <Stack>
                        <InputLabel>Business Description <BsAsterisk color="red" fontSize="10px" /></InputLabel>
                        <TextField size="small" multiline rows={4}
                            {...register("Business Description", { required: "this field is required" })}
                            error={Boolean(errors["Business Description"])}
                            helperText={errors["Business Description"]?.message} ></TextField>
                    </Stack>
                </Grid>

                <Grid item md={6}>
                    <Stack>
                        <InputLabel>Corporate Philosophy</InputLabel>
                        <TextField size="small" multiline rows={4} {...register("Corporate Philosophy")} ></TextField>
                    </Stack>
                </Grid>
            </Grid>

            <Grid container rowSpacing={3} columnSpacing={7} my={3}>

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
                <FormLabel id="demo-controlled-radio-buttons-group">Foreign Owned</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group" row
                >
                    <FormControlLabel value="yes" {...register('Foriegn Owned')} control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" {...register('Foriegn Owned')} control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>

            <Stack sx={{ display: "flex", alignItems: "center" }}>
                <Button sx={{ padding: "10px 80px" ,backgroundColor:"hsl(249deg 68% 29%)"}} type="submit"  variant="contained">Save</Button>
            </Stack>

        </form>
    )
}

export default Form;