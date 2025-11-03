import React, { useEffect, useState, useContext } from "react";
import { connectSocket, disconnectSocket } from "../services/socketService";
import { AuthContext } from "../contexts/AuthContext";
import { Grid, Container } from "@mui/material";
import StockCard from "../components/StockCard";
import Header from "../components/Header";    
import { Typography } from "@mui/material";


const SUPPORTED_SYMBOLS = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [open, setOpen] = useState(false);
  const [subscribedStocks, setSubscribedStocks] = useState([...SUPPORTED_SYMBOLS]);
  const { token } = useContext(AuthContext);

  const handleSubscribe = (symbol) => {
    setSubscribedStocks(prev =>
      prev.includes(symbol)
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  };

  useEffect(() => {
    setStocks([]);
    if (token && subscribedStocks.length > 0) {
      connectSocket((update) => {
        setStocks(prev =>
          prev.some(s => s.symbol === update.symbol)
            ? prev.map(s => s.symbol === update.symbol ? update : s)
            : [...prev, update]
        );
      }, token, subscribedStocks);
    }
    return () => disconnectSocket();
  }, [token, subscribedStocks]);

  return (
    <>
      <Header title="Stock Dashboard" open={open} setOpen={setOpen} />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Live Stock Dashboard</Typography>
        <div style={{ marginBottom: "16px" }}>
          <strong>Subscribe to stocks:</strong>
          {SUPPORTED_SYMBOLS.map(symbol => (
            <label key={symbol} style={{ margin: "0 10px" }}>
              <input
                type="checkbox"
                checked={subscribedStocks.includes(symbol)}
                onChange={() => handleSubscribe(symbol)}
              />
              {symbol}
            </label>
          ))}
        </div>
        <Grid container spacing={2}>
          {stocks.map((stock) => (
            <Grid item key={stock.symbol} xs={12} sm={6} md={3}>
              <StockCard symbol={stock.symbol} price={stock.price} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
