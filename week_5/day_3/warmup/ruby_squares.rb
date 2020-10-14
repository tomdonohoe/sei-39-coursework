require "pry"

def get_squares num_array
    perfect_squares = num_array.select {|num| (Math.sqrt(num) % 1).zero?}
    perfect_squares.uniq.sort
end 

binding.pry