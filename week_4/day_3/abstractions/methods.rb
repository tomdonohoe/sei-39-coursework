require "pry"
# ruby methods
# implicit return
# - methods always return nil or the last expression

# def check_palidrome(word)
#     if word.gsub(' ', '') == word.gsub(' ', '').reverse
#         "it's a palidrome"
#     else
#         "no it is not a palidrome"
#     end
# end

def palidrome? word
    word.gsub(' ', '') == word.gsub(' ', '').reverse
end

# check_palidrome - calls method - dont need ()


binding.pry