# require "pry"
require "stock_quote"

api_key = "pk_eb0f605ff9da40e3b851d8c65472e2b7"
StockQuote::Stock.new(api_key: api_key)

print "enter a stock ticker: "
symbol = gets.chomp

stock = StockQuote::Stock.quote(symbol)

puts stock.latest_price

# binding.pry
