/* eslint-disable camelcase */
interface IOrderItem {
  id: string
  sellerStore: string,
  shippingMethod: string,
  externalOrderNumber: number,
  creationDate: string,
  deleteItem(id: string): void
}
type TSellOrder = {
  sellerStore: string,
  shippingMethod: string,
  externalOrderNumber: number,
  creationDate: string,
}

type TMethod = {
  id: string,
  name: string
}

type TOrderCreation = {
  sellerStore: string,
  shippingMethod: string,
  externalOrderNumber: number,
  buyerFullName: string,
  buyerPhoneNumber: number,
  buyerEmail: string,
  shippingAddress: string,
  shippingCity: string,
  shippingRegion: string,
  shippingCountry: string,
  lineItems: TProduct[],
}
type TProduct = {
  productName: string,
  productQty: number,
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
type TOrderDetails = {
  id: string,
  sellerStore?: string,
  externalOrderNumber?: number | string,
  buyerFullName?: string,
  buyerPhoneNumber?: number,
  buyerEmail?: string,
  shippingAddress?: string,
  shippingCity?: string,
  shippingRegion?: string,
  shippingCountry?: string,
  lineItems?: TProduct[],
  creationDate?: string,
  internalOrderNumber: string,
  rules?: TShippingRules
}
type TOrderDetailItem = {
  property: string,
  value: string | number
}


export type {
  IOrderItem,
  TSellOrder,
  TOrderCreation,
  TOrderDetails,
  TOrderDetailItem,
  TProduct,
  TMethod,
};
