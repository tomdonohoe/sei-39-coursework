# https://gist.github.com/epoch/caa600006c5f2fba43b9629fc69c5791
require "pry"

# Q1
def offer_rose person
    "Would you take this rose, #{person}, in exchange for giving an old beggar woman shelter from the bitter cold?"
end

# Q2
town = {
  residents: ["Maurice", "Belle", "Gaston"],
  castle: {
    num_rooms: 47,
    residents: [
      {
        name: "Robby Benson",
        year_of_birth: 1956
      }
    ],
    guests: ['birds']
  }
}

puts town[:castle][:num_rooms]
town[:castle][:guests].unshift "Belle"
puts town[:castle][:residents].first[:year_of_birth]
town[:castle][:cook] = "Mrs Potts"

# Q3
friends = ["Chip Potts", "Cogsworth", "Lumière", "Mrs. Potts"]
friends.each { |friend| puts "Belle is friends with #{friend}" }

# Q4
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]

age_sum = 0
lost_boys.each { |obj| age_sum += obj[:age].to_i }
puts age_sum

# Q5
children = ['Wendy', 'John', 'Michael'].each_with_index.map {|child, i| "#{i + 1} Darling #{child}" }

# Q6
names = ["Belle", "Cogsworth", "Lumière", "Mrs. Potts"]
short_names = names.select {|name| name.length < 8}

# Q7
def letter_reverse sentence
    reversed = []
    x = sentence.split().each { |word| reversed.push word.reverse}
    reversed.join " "
end

# Q8
def scream num
    if num == 0
        "crickets"
    elsif num.class != Integer
        "must be integer"
    else
        "lol" + "ol" * (num - 1)
    end
end

binding.pry