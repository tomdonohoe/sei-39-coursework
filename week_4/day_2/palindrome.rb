word = 'a toyota'

if word.gsub(' ', '') == word.gsub(' ', '').reverse
    puts "it's a palidrome"
else 
    puts "no it is not a palidrome"
end