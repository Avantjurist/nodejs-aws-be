export const formatJSONResponse = (response: any) => ({
  statusCode: 200,
  body: JSON.stringify(response),
});
