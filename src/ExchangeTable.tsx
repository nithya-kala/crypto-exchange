import { Card, Grid, Table } from '@mantine/core'
import { OrderType } from './types'
import { DatePicker } from '@mantine/dates'
import { Calendar } from 'tabler-icons-react'

type MyProps = {
  orders: OrderType[]
  ordDate: Date | null
  onDtChange(dt: Date | null): void
}

export const ExchangeTable: React.FC<MyProps> = (props) => {
  const rows = props.orders.map((row, index) => (
    <tr key={JSON.stringify(row)}>
      <td>{index + 1}</td>
      <td>{row.from.currency}</td>
      <td>{row.from.amount}</td>
      <td>{row.to.currency}</td>
      <td>{row.to.amount}</td>
      <td>{row.orderdate.toString()}</td>
    </tr>
  ))

  return (
    <Card shadow="xs" p="lg">
      <Card.Section p="lg">
        <Grid align="flex-end">
          <Grid.Col xs={3}>
            <DatePicker
              transitionDuration={0}
              placeholder="Pick date"
              label="Event date"
              icon={<Calendar size={16} />}
              value={props.ordDate}
              onChange={props.onDtChange}
            />
          </Grid.Col>
        </Grid>
        <Table horizontalSpacing="lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Currency From</th>
              <th>Amount</th>
              <th>Currency To</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Card.Section>
    </Card>
  )
}
