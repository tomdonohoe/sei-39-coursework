# do end they are special ruby blocks

5.times do 
    puts 'hello'
    puts 'bye'
end

1.upto 10 do |n|
    puts "#{n} not sure"
end

# principle of least surprise - matz
120.downto 100 do |n|
    puts "#{n} not sure"
end


letters = ['a', 'b', 'c', 'd']

letters.each do |letter|
    puts letter
end