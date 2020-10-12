require "pry"

print "Enter filename: "
user_selected_file = gets.chomp
num_non_empty_lines = 0

lines = IO.readlines user_selected_file, chomp: true
lines.each do |line|
    if !line.empty?
        num_non_empty_lines += 1 
    end
end

puts "#{num_non_empty_lines} lines"

binding.pry

"" != "" || "" != " "