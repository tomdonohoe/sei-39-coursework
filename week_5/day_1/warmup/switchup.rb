require "pry"

def switch_up str   
    str_switched_up = []
    str.chars.each do |letter|
        if letter == letter.upcase
            str_switched_up.push letter.downcase
        else 
            str_switched_up.push letter.upcase
        end
    end
    str_switched_up.join
end

binding.pry 