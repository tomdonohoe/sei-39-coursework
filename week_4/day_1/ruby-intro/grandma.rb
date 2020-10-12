# print 'Say something to grandma: '
# you_say = gets.chomp
you_say = nil

while you_say != "BYE"
    print "Say something to grandma: "
    you_say = gets.chomp
    if you_say == you_say.upcase
        puts "NO, NOT SINCE #{rand 1930..1940}!"
    else 
        puts "HUH?!  SPEAK UP, SONNY!"
    end
end

# loop do 
#     print "Say something to grandma: "
#     you_say = gets.chomp
#     if you_say == you_say.upcase
#         puts "NO, NOT SINCE #{rand 1930..1940}!"
#     else 
#         puts "HUH?!  SPEAK UP, SONNY!"
#     end

#     if you_say == 'BYE'
#         break
#     end
# end