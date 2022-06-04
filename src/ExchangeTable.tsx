import { Card, Grid, Table } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { ExItem } from "./types";
import { DatePicker } from "@mantine/dates";

export const ExchangeTable: React.FC = () => {
  const [dbEntries] = useLocalStorage<ExItem[]>({
    key: "mexchange",
    defaultValue: [],
  });

  const rows = dbEntries.map((row, index) => (
    <tr key={JSON.stringify(row)}>
      <td>{index + 1}</td>
      <td>{row.from.currency}</td>
      <td>{row.from.amount}</td>
      <td>{row.to.currency}</td>
      <td>{row.to.amount}</td>
    </tr>
  ));

  return (
    <Card shadow="xs" p="lg">
      {/* <Grid align="flex-end">
        <Grid.Col xs={3}>
          <DatePicker placeholder="Pick date" label="Event date" required />
        </Grid.Col>
      </Grid> */}
      <Table horizontalSpacing="lg">
        <thead>
          <tr>
            <th>#</th>
            <th>Currency From</th>
            <th>Amount</th>
            <th>Currency To</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Card>
  );
};
