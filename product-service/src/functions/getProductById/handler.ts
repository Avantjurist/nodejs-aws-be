import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import { PRODUCT_MOCK } from "src/mocks/product.mock";

const getProductById: any = async (event) => {
  const productById = PRODUCT_MOCK.find(
    ({ uuid }) => uuid === event?.pathParameters?.id
  );

  if (!productById) {
    return formatJSONResponse("Product not found");
  }

  return formatJSONResponse(productById);
};

export const main = middyfy(getProductById);
