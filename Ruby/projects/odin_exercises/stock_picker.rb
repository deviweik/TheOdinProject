# def stock_picker(prices)
def stock_picker()
  prices = Array.new(10) { rand(1...100) }
  diff = prices[1] - prices[0]
  profit = 0
  purchase = 0
  sell = 0
  nested_purchase = 0
  nested_sell = 0
  prices.each_with_index do |price, day| 
    prices.each_with_index do |comp_price, comp_day|
      if comp_day > day
        if (comp_price - price) > diff
          nested_purchase = day
          nested_sell = comp_day
          diff = comp_price - price
        end
      end
    end
    if diff > profit
      purchase = nested_purchase
      sell = nested_sell
      profit = diff
    end
  end
  p prices
  p [purchase, sell]
end

def stock_picker_average()
  results = []

  10000.times do
    prices = Array.new(100) { rand(1...100) }
    diff = prices[1] - prices[0]
    profit = 0
    purchase = 0
    sell = 0

    prices.each_with_index do |price, day| 
      prices.each_with_index do |comp_price, comp_day|
        if comp_day > day
          if (comp_price - price) > diff
            purchase = day
            sell = comp_day
            diff = comp_price - price
          end
        end
      end

      if diff > profit
        profit = diff
      end
    end

    results << (sell - purchase)
  end

  average_profit = results.sum(0.0) / results.size
  p average_profit
end


stock_picker_average()

# stock_picker()

# stock_picker([17,3,6,9,15,8,6,1,10])
# => [1,4] # for a profit of $15 - $3 == $12