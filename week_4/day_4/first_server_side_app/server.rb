require "sinatra"
require "sinatra/reloader"

get '/cake' do 
    # response
    "here is your cake"
end

get '/pudding' do 
    "here is your pudding #{rand 1..10}"
end

get '/crappy-calculator' do 
    # built in hash
    # access query string with params method
    "<h1>#{params["num1"].to_i + params["num2"].to_i}</h1>"
end

