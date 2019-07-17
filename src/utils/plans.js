import { client } from '../apollo/client'
import { USER_PAYMENTS } from '../gql/user'

const BILLING_PRICE_TYPE = {
  year: '/y',
  month: '/mo',
}

export const formatPrice = (price, name, billing) => {
  if (name === 'FREE') return ['$0']
  if (!price) return ['Custom']

  return [`$${parseInt(price / 100, 10)}`, BILLING_PRICE_TYPE[billing]]
}

export const findNeuroPlan = ({ name }) => name === 'SANapi'

export const getCurrentNeuroSubscription = user => {
  if (!user) return
  const { subscriptions: subs } = user

  return subs.find(
    ({
      plan: {
        product: { name },
      },
    }) => name === 'SANapi',
  )
}

export const getBilling = () =>
  client.query({ query: USER_PAYMENTS, fetchPolicy: 'network-only' })