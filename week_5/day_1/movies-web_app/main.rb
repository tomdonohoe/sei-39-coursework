require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do 
    erb :index
end

get "/movie" do
    def get_movie_info movie_title
        api_key = '2f6435d9'
        HTTParty.get "https://omdbapi.com/?t=#{movie_title}&apikey=#{api_key}"
    end

    movie_info = get_movie_info params["title"]

    erb :movies, locals: {
        'title': movie_info['Title'],
        'year': movie_info['Year'],
        'director': movie_info['Director'],
        'runtime': movie_info['Runtime']
    }
end