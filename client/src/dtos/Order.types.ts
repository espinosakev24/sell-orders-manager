type TOrderItem = {
  id: string
  sellerStore: string,
  shippingMethod: string,
  externalOrderNumber: number,
  creationDate: string,
}
type TSellOrder = {
  sellerStore: string,
  shippingMethod: string,
  externalOrderNumber: number,
  creationDate: string,
}

export type {
  TOrderItem,
  TSellOrder,
};
