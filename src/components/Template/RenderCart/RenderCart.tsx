import { Stack } from '@mui/system'
import React from 'react'
import CartItem from '../../Atom/CartItem/CartItem'

type Props = {}

const RenderCart = (props: Props) => {
  return (
    <Stack spacing={1}>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </Stack>
  )
}
export default RenderCart