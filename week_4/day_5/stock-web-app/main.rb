require "sinatra"
require "sinatra/reloader"
require "stock_quote"

api_key = "pk_eb0f605ff9da40e3b851d8c65472e2b7"
StockQuote::Stock.new(api_key: api_key)

get '/' do
    # erb - embedded ruby html
    # erb specific to sinatra framework 
    erb :index # erb will look for templates in the views directory.
end

get '/stock' do
    ticker = params['ticker']
    stock = StockQuote::Stock.quote(ticker)

    erb :stock, locals: {
        price: stock.latest_price,
        name: stock.company_name
    }
end