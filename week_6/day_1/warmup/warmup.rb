def grid_builder num_columns, num_rows
    grid = ''
    num_rows.times do |row_index|
        if row_index.even?
            x = "#"
            y = " "
        else
            x = " "
            y = "#"
        end
        (num_columns + 1).times do |column_index|
            if column_index == (num_columns)
                grid += "\n"
            else    
                if column_index % 2 == 0
                    grid += x
                else
                    grid += y
                end 
            end
        end
    end
    grid
end

# puts grid_builder(16, 8)
# puts "---^-^----"
# puts grid_builder(32, 16)
# puts "---^-^----"
# puts grid_builder(64, 32)
# puts "---^-^----"
# puts grid_builder(6, 4)