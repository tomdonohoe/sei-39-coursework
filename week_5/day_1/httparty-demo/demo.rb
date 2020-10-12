require "httparty"
require "pry"

# response = HTTParty.get "https://omdbapi.com/?t=jaws&apikey=#{api_key}"

def get_movie_info movie_title
    api_key = '2f6435d9'
    HTTParty.get "https://omdbapi.com/?t=#{movie_title}&apikey=#{api_key}"
end

puts get_movie_info("jaws")["Title"]

binding.pry