def even_multiples list_of_numbers
    list_of_numbers.select {|num| num.even? && (num % 5).zero?}
end

p even_multiples [14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5]