require "sinatra"
require "sinatra/reloader"
require "httparty"

get '/' do
    erb :index
end

get '/people' do
    hackers = ["Ned", "Jian", "Aden", "Felipe", "Stephen", "Sara", "Jimmy", "Linda", "Stuart", "Sam", "Naveen", "Tom", "Peter", "Bern", "Cath", "Allison", "Aden", "Aden"]


    erb :hackers, locals: {hackers: hackers}
end

get '/donate' do
    erb :donate
end

get '/admin' do
    erb :donate, layout: false # or pass a different file layout: 'admin.erb'
end