type TOrderData = {
  sellerStore?: string,
  shippingMethod?: string,
  externalOrderNumber?: number,
  buyerFullName?: string,
  buyerPhoneNumber?: number,
  buyerEmail?: string,
  shippingAddress?: string,
  shippingCity?: string,
  shippingRegion?: string,
  shippingCountry?: string,
  lineItems?: TProduct[],
}
type TProduct = {
  productName: string,
  productQty: string,
  productWeight: number
}
type TShippingRules = {
  pack_promise_min?: string,
  pack_promise_max?: string,
  ship_promise_min?: string,
  delivery_promise_min?: string,
  delivery_promise_max?: string,
  ready_pickup_promise_min?: string,
  ready_pickup_promise_max?: string,
}
type TOrder = {
  id: string,
  sellerStore?: string,
  externalOrderNumber?: number,
  buyerFullName?: string,
  buyerPhoneNumber?: number,
  buyerEmail?: string,
  shippingAddress?: string,
  shippingCity?: string,
  shippingRegion?: string,
  shippingCountry?: string,
  lineItems?: TProduct[],
  creationDate?: string,
  internalOrderNumber?: number,
  rules?: TShippingRules
}

export {
  TOrder,
  TOrderData,
  TProduct
};
