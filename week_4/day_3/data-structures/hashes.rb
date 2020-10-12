require "pry"

# old hash syntax
# movie = {
#     "title" => "sharknado",
#     "year" => 2000,
#     "stars" => ['sharks', 'tornados'] 
# }

# access
# movie['title']

# new hash syntax
# key is new data type --> symbol 
# -- symbols have one place in memory, unlike strings.
movie = {
    title: "sharknado",
    year: 2000,
    review: {
        score: 5,
        author: 'dt'
    }
}


# can write like this too:
# movie = {
#     :title => "sharknado",
#     :year => 2000
# }


# access value
movie[:title]

binding.pry