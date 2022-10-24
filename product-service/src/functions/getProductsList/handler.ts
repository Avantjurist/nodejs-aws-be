import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import { PRODUCT_MOCK } from "src/mocks/product.mock";

const getProductsList: any = async () => formatJSONResponse(PRODUCT_MOCK);

export const main = middyfy(getProductsList);
