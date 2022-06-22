import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Exchange } from './Exchange'
import { ExchangeTable } from './ExchangeTable'
import { OrderType } from './types'
import { Container, createStyles, Text, Title } from '@mantine/core'

if (process.env.HOST_ENV === 'ghpages') {
  axios.defaults.baseURL = 'https://api.nithis.in'
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}))

function App() {
  const { classes } = useStyles()
  const [orders, setOrders] = useState<OrderType[]>([])
  const [ordDate, onDtChange] = useState<Date | null>(null)

  const fetchOrders = () =>
    axios
      .get('/api/get-orders', { params: { ordDate: ordDate } })
      .then((res) => setOrders(res.data))

  const onAddOrder = (order: OrderType) => {
    axios.post(`/api/insert-order`, order).then((res) => {
      return fetchOrders()
    })
  }

  useEffect(() => {
    fetchOrders()
  }, [ordDate])

  setInterval(() => console.log('Entered Live Data'), 60 * 1000)

  return (
    <Container size="md" pt={10} pb={10} className={classes.wrapper}>
      <Title className={classes.title}>Crypto Exchange App</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Every once in a while, you’ll see a Golbat that’s missing some fangs.
          This happens when hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </Container>

      <Exchange onAddOrder={onAddOrder} />
      <ExchangeTable
        orders={orders}
        ordDate={ordDate}
        onDtChange={onDtChange}
      />
    </Container>
  )
}

export default App
