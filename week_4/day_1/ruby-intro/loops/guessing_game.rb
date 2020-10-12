require "pry" # binding.pry === likke debugger in js

# Guessing game
num_to_guess = rand(1..10)
puts(num_to_guess)
puts('Enter number between 1 & 10:')
user_guess = gets().chomp().to_i

binding.pry # pause here

while user_guess != num_to_guess
    puts('Wrong try again:')
    user_guess = gets().chomp().to_i
end

puts('you are correct')

