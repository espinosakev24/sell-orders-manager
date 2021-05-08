type TOrderData = {
    name: string
}
type TProduct = {
  productName: string,
  productQty: string,
  productWeight: number
}
type TOrder = {
  id: string,
  name: string,
  sellerStore?: string,
  externalOrderNumber?: number,
  buyerFullName?: string,
  buyerPhoneNumber?: string,
  buyerEmail?: string,
  shippingAddress?: string,
  shippingCity?: string,
  shippingRegion?: string,
  shippingCountry?: string,
  lineItems?: TProduct[],

}

export {
  TOrder,
  TOrderData,
  TProduct
};
