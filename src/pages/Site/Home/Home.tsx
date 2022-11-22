import React, { FC, useEffect, useState } from "react";
import { isBooleanObject } from "util/types";
import { getProduct } from "../../../services/productService/ProductService";

type Props = {};
type typeData = {
  category: string;
  name: string;
  desc: string;
  id: string;
  image: string;
  price: string;
  quantity: number;
};
const Home: FC<Props> = () => {
  const [data, setData] = useState<typeData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchErorr, setFetchErorr] = useState<boolean>(false);
  useEffect(() => {
    let isCancel = false;
    const fetchProduct = async () => {
      setLoading(true);
      const res = await getProduct();
      if (res && res.status === 200) {
        setData(res.data);
      } else {
        setFetchErorr(true);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      <ul>
        {data.length > 0 &&
          !fetchErorr &&
          data.map((item) => {
            return (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                <img src={item.image} />
              </li>
            );
          })}
        {fetchErorr && <h2>Không có data</h2>}
      </ul>
    </div>
  );
};
export default Home;
