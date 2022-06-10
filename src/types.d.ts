export type OrderType = {
  from: {
    currency: string
    amount: number
  }
  to: {
    currency: string
    amount: number
  }
  orderdate: Date
}
