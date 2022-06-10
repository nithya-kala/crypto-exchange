import { Button, Card, Center, Container, Grid, TextInput } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import React, { useState } from 'react'
import axios from 'axios'
import {
  CurrencyBitcoin,
  CurrencyDollar,
  CurrencyDollarCanadian,
  CurrencyDollarSingapore,
  CurrencyEthereum,
  CurrencyEuro,
  CurrencyLitecoin,
  CurrencyPound,
  CurrencyRipple,
  CurrencyRupee,
  CurrencyYen,
  CurrencyFrank,
} from 'tabler-icons-react'
import { CurrencyPicker, CxOption } from './CurrencyPicker'
import { OrderType } from './types'

const currencyOpts: CxOption[] = [
  { label: 'USD', image: <CurrencyDollar /> },
  { label: 'EUR', image: <CurrencyEuro /> },
  { label: 'GBP', image: <CurrencyPound /> },
  { label: 'SGD', image: <CurrencyDollarSingapore /> },
  { label: 'CAD', image: <CurrencyDollarCanadian /> },
  { label: 'YEN', image: <CurrencyYen /> },
  { label: 'INR', image: <CurrencyRupee /> },
  { label: 'MYR', image: <CurrencyFrank /> },
]

const cryptoOpts: CxOption[] = [
  { label: 'Bitcoin', image: <CurrencyBitcoin /> },
  { label: 'Ethereum', image: <CurrencyEthereum /> },
  { label: 'Ripple', image: <CurrencyRipple /> },
  { label: 'Litecoin', image: <CurrencyLitecoin /> },
]

type MyProps = {
  onAddOrder(order: OrderType): void
}

const Exchange: React.FC<MyProps> = (props) => {
  const [currFrom, setCurrFrom] = useState(cryptoOpts[0])
  const [amount1, setAmount1] = useState(10)
  const [currTo, setCurrTo] = useState(currencyOpts[0])
  const [amount2, setAmount2] = useState(20)

  const save = () => {
    const order: OrderType = {
      from: { currency: currFrom.label, amount: amount1 },
      to: { currency: currTo.label, amount: amount2 },
      orderdate: new Date(),
    }

    props.onAddOrder(order)
  }

  return (
    <Card shadow="xs" p="lg" style={{ marginBottom: 10 }}>
      <Card.Section p="lg">
        <Center>
          <h2>Exchange</h2>
        </Center>

        <Grid align="flex-end">
          <Grid.Col xs={3}>
            <label>Currency from </label>
            <CurrencyPicker
              options={cryptoOpts}
              selected={currFrom}
              onChange={setCurrFrom}
            />
          </Grid.Col>
          <Grid.Col xs={2}>
            <label>Amount </label>
            <TextInput
              type="number"
              placeholder="amount"
              value={amount1}
              onChange={(e) => setAmount1(parseInt(e.target.value))}
            />
          </Grid.Col>
          <Grid.Col xs={1} style={{ alignSelf: 'center' }}>
            <label className="equals">=</label>
          </Grid.Col>
          <Grid.Col xs={3}>
            <label>Currency to </label>
            <CurrencyPicker
              options={currencyOpts}
              selected={currTo}
              onChange={setCurrTo}
            />
          </Grid.Col>
          <Grid.Col xs={2}>
            <label>Amount </label>
            <TextInput
              type="number"
              placeholder="amount"
              value={amount2}
              onChange={(e) => setAmount2(parseInt(e.target.value))}
            />
          </Grid.Col>
          <Grid.Col xs={1}>
            <Button color="green" onClick={() => save()}>
              Save
            </Button>
          </Grid.Col>
        </Grid>
      </Card.Section>
    </Card>
  )
}

export { Exchange }
