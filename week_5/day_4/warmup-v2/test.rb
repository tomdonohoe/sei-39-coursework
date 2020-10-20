require 'pry'

items = ['burger', 'chips', 'coke']

def make_order_string arr
    order_sentence = ''
    arr.each_with_index do |order_item, index|
        if index == (arr.length - 1) 
            order_sentence << "& #{order_item}."
        elsif index == (arr.length - 2)
            order_sentence << "#{order_item} "
        else
            order_sentence << "#{order_item}, "
        end
    end
    order_sentence
end

binding.pry