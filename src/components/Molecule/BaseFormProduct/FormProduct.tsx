import {useState} from "react"
import { FormHelperText, Grid, IconButton, Stack, Typography } from "@mui/material";
import {styled} from "@mui/material/styles"
import {PhotoCamera} from "@mui/icons-material"
// 
import ControlTextField from "../../Atom/Form/ControlTextField";
import { useForm } from "react-hook-form";
import Buttons from "../../Atom/Button/Button";
import {validationProduct} from "../../../utils/Validate/FormProduct"
import { yupResolver } from '@hookform/resolvers/yup';
import ControlSelect2 from "../../Atom/Form/ControlSelect2";
type Props = {};
type FormData = {
  name: string;
  file:File;
  quantity: number | null;
  discount: number | null;
  price: number | null;

};
const fakeOptions=[
  "Còn hàng", "Hết hàng"
]
const fakeCategoey=[
  "Điện thoại", "laptop"
]

const FormProduct = (props: Props) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
      resolver: yupResolver(validationProduct),
      defaultValues: validationProduct.getDefault(),
  });
  const onSubmit = async(data:any)=>{
      console.log(data)
  }
  
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
  );
};
const Form = styled("form")({
maxWidth:"1000px",
margin:"0 auto"
})
export default FormProduct;
