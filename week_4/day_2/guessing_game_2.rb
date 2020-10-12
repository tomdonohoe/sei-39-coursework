secret = rand 1..10
puts "the num to guess is: #{secret}"

print "guess a number between 1 - 10: "
guess = gets.chomp.to_i

puts "your guess is: #{guess}"

while guess != secret
    print "wrong. guess again: "
    guess = gets.chomp.to_i
end

puts "you got it"