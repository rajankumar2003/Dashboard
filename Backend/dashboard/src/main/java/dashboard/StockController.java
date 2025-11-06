package dashboard;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stocks")
public class StockController {
    private final StockService stockService;
    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping("/supported")
    public List<String> getSupportedSymbols() {
        return Arrays.asList("GOOG", "TSLA", "AMZN", "META", "NVDA");
    }

    @GetMapping("/prices")
    public List<StockPrice> getPrices() {
        return stockService.getAllPrices();
    }
}
