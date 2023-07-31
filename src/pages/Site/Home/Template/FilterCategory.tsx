import { Grid,Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Buttons from '../../../../components/Atom/Button/Button'
import { getCategory } from 'services/categoryService/CategoryService'
import { useQuery } from 'react-query'
import { ICategory } from 'Types/Interface/Category'

type Props = {
  setCategory: Dispatch<SetStateAction<string>>;
}

export default function FilterCategory(props: Props) {
  const { setCategory  } = props;
  const [check,setCheck] = useState(0)
  const { data } = useQuery("categories", () => getCategory());
  const handleSetCheck = (index: number) => {
    setCheck(index);
    if (index === 0) {
      setCategory("");
      return;
    }
    setCategory(data.data[index]._id);
  };
  return (
    <Grid container mt={3} >
        <Grid item xs={6}>
            <Typography variant='h4' fontWeight="600" >Brand New Products</Typography>
            <Typography variant='subtitle1'  >Browse the huge variety of our products</Typography>
        </Grid>
        <Grid item xs={6}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Buttons
                onClick={() => handleSetCheck(0)}
                variant={check ===0?'contained':'outlined'}
                >
                  All
                </Buttons>
            {data &&
          data.data.map((item: ICategory, index: number) => {
            return (
              <Buttons
                onClick={() => handleSetCheck(index+1)}
                key={item._id}
                name={item.categoryName}
                variant={check ===index +1 ?'contained':'outlined'}
                id={item._id}>
                  {item.categoryName}
                </Buttons>
            );
          })}
            </Stack>
        </Grid>
    </Grid>
  )
}