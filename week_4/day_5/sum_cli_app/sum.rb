require "pry"

total = 0

ARGV.each { |num| total += num.to_i }

puts total

binding.pry