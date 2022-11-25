import { FormHelperText, Grid, IconButton, Stack, Typography } from "@mui/material";
import {styled} from "@mui/material/styles"
import {PhotoCamera} from "@mui/icons-material"
import ControlTextField from "../../../Atom/Form/ControlTextField";
import ControlSelect2 from "../../../Atom/Form/ControlSelect2";
import Buttons from "../../../Atom/Button/Button";
// 


const BaseFormProduct = (props: any) => {
    const {fakeOptions,fakeCategoey,form,onSubmit}=props;
    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
      } = form
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
    <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ControlTextField id="outlined-basic"  label="Product Name" name="name" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField id="outlined-basic"  label="Quantity" name="quantity" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField id="outlined-basic"  label="Discount" name="discount" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField id="outlined-basic"  label="Price" name="price" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
         <ControlSelect2  options={fakeOptions}  label="Status" name="status" control={control}/>
        </Grid>
        <Grid item xs={12} md={6}>
         <ControlSelect2  options={fakeCategoey}label="Category" name="category" control={control}/>
        </Grid>
        <Grid item xs={12} md={12}>
          <ControlTextField  id="outlined-multiline-flexible"
          rows={4}
          multiline
          label="Description" name="description" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="subtitle1">Choose File</Typography>
              <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden {...register("file")} type="file"  />
                <PhotoCamera />
              </IconButton>
          </Stack>
          <FormHelperText sx={{color:"#d32f2f"}} variant="outlined">{errors.file?.message &&errors.file?.message }</FormHelperText>
        </Grid>
    </Grid>
    <Buttons type="submit">Submit</Buttons>
  </Form>
  )
}
const Form = styled("form")({
    maxWidth:"1000px",
    margin:"0 auto"
    })
export default BaseFormProduct