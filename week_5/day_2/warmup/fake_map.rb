require "pry"

def make_fake_map num_vals, num_rows
    map = []
    num_rows.times {map.push Array.new num_vals, "A"}
    map[rand 0..(num_rows-1)][rand 0..(num_vals-1)] = "X"
    map
end

binding.pry