import { TFormProduct } from "utils/Validate/FormProduct";

export interface CommonResponse<D = any> {
  data: D | null;
  errorDetail: string | null;
  httpStatusCode: number;
  message: string | null;
  messageCode: string | null;
  success: boolean;
  total: number;
}

export interface ResponseActionProduct {
  product: TFormProduct;
  message: string | null;
}
