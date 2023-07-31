import {
  FormHelperText,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { PhotoCamera } from "@mui/icons-material";
import ControlTextField from "../../../../../components/Atom/Form/ControlTextField";
import ControlSelect2 from "../../../../../components/Atom/Form/ControlSelect2";
import Buttons from "../../../../../components/Atom/Button/Button";
import { useEffect, useState } from "react";
import { IProduct } from "Types/Interface/Product";
import { getProduct } from "services/productService/ProductService";
import { getCategory } from "services/categoryService/CategoryService";
//
const BaseFormProduct = (props: any) => {
  const [categories, setCategories] = useState([])
  const { fakeOptions, form, onSubmit } = props;
  const [urlImage, setUrlImage] = useState<string>("");

  const {
    control,
    handleSubmit,
    register,
    watch,
    data,
    formState: { errors },
  } = form;
  const [file, named] = watch(["file", "name"]);

  useEffect(() => {
    if (file && file[0]) {
        setUrlImage(URL.createObjectURL(file[0]));
    }
    const subscription = watch((value: IProduct) => {
      // console.log(value.name);
    });
    (async()=>{
      const res = await getProduct({search: named})
      console.log(res)
    })()
    return () => subscription.unsubscribe();
  }, [file, named]);
  const fetchCategory = async()=>{
    const res = await getCategory();
    console.log(res)
    setCategories(res.data)
  }
  useEffect(() => {
    fetchCategory()
  },[]);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ControlTextField
            id="outlined-basic"
            label="Product Name"
            name="name"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField
            id="outlined-basic"
            label="Quantity"
            name="quantity"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField
            id="outlined-basic"
            label="Discount"
            name="discount"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField
            id="outlined-basic"
            label="Price"
            name="price"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlSelect2
            options={fakeOptions}
            label="Status"
            name="status"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlSelect2
            labelPath="categoryName"
            valuePath="_id"
            options={categories}
            label="Category"
            name="categories"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ControlTextField
            id="outlined-multiline-flexible"
            rows={4}
            multiline
            label="Description"
            name="describe"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="subtitle1">Choose File</Typography>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden {...register("file")} type="file" />
              <PhotoCamera />
            </IconButton>
            {urlImage && <img width="150px" height="150px" src={urlImage} />}
          </Stack>
          <FormHelperText sx={{ color: "#d32f2f" }} variant="outlined">
            {errors.file?.message && errors.file?.message}
          </FormHelperText>
        </Grid>
      </Grid>
      <Buttons type="submit">Submit</Buttons>
    </Form>
  );
};
const Form = styled("form")({
  maxWidth: "1000px",
  margin: "0 auto",
});
export default BaseFormProduct;
