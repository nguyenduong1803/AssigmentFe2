import { Container, Stack } from "@mui/material";
import { IProduct } from "Types/Interface/Product";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByIds } from "services/productService/ProductService";

type Props = {};

function ProductDetail({}: Props) {
  const { id } = useParams();
  const [product, setProduct] = useState<any>();
  console.log(id);
  useEffect(() => {
    (async () => {
      const res = await getProductByIds(id);
      console.log(res);
      setProduct(res.data);
    })();
  }, [id]);
  return (
    <Container sx={{ margin: "30px 0" }}>
      <Stack direction="row" gap={4} maxWidth="100%">
        {product && (
          <>
            <img
              src={product.images[0]}
              style={{ maxWidth: "50%" }}
              alt="san pham"
            />
            <div>
              <div>
                <p>{product.name}</p>
                <p>{product.describe}</p>
                <p>{product.price} VND</p>
                <p>discount: {product.discount} %</p>
              </div>
            </div>
          </>
        )}
      </Stack>
    </Container>
  );
}

export default ProductDetail;
