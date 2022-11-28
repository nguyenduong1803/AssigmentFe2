import { Grid,Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Buttons from '../../../../components/Atom/Button/Button'

type Props = {}

export default function FilterCategory({}: Props) {
  return (
    <Grid container mt={3} >
        <Grid item xs={6}>
            <Typography variant='h4' fontWeight="600" >Brand New Products</Typography>
            <Typography variant='subtitle1'  >Browse the huge variety of our products</Typography>
        </Grid>
        <Grid item xs={6}>
            <Stack direction="row" spacing={4} justifyContent="flex-end">
                <Buttons variant='contained' size='large'>Chair</Buttons>
                <Buttons size='large'>Chair</Buttons>
                <Buttons size='large'>Chair</Buttons>
                <Buttons size='large'>Chair</Buttons>
            </Stack>
        </Grid>
    </Grid>
  )
}