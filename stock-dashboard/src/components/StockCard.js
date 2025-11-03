import { Card, CardContent, Typography } from '@mui/material';

export default function StockCard({ symbol, price }) {
  return (
    <Card sx={{ width: 180, margin: 1, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6">{symbol}</Typography>
        <Typography variant="h5" color="green">${price}</Typography>
      </CardContent>
    </Card>
  );
}
