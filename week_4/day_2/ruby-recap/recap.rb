require "pry" # allow us to pause using binding.pry

# variables 

# assignments - naming - dynamic typed
name = 'Tom'
age = 26
poor = false

# reassignment
poor = false
age = "one million"
age = 27

# equality / comparision - strictly typed - unlike js 5 == "5" is false
puts 5 == 5 # true
puts "5" == "5" # true
puts 5 == "5" # false

puts 5 == "5".to_i # true


binding.pry