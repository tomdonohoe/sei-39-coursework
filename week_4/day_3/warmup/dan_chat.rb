# https://gist.github.com/epoch/f679458e43cfeff2ca559ebb34b4f269
puts "type below to talk to daniel:\n============================"

loop do
    print "you: "
    user_said = gets.chomp
    if user_said.downcase.include? "bye"
        break
    elsif user_said.include? "?"
        puts "daniel: sure."
    elsif user_said.gsub(" ", "").empty?
        puts "daniel: fine. Be that way!"
    elsif user_said == user_said.upcase
        puts "daniel: woah, chill out!"
    else
        puts "daniel: whatever."
    end
end
