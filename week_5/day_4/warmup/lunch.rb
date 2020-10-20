# https://gist.github.com/kasun-maldeni/249d1377150b7ef43775cfa7950eefec
orders = {}

def get_user_input
    gets.chomp
end

def get_order_name
    print "Enter name for order: "
    get_user_input
end

def get_order name
    print "#{name} wants to order: "
    get_user_input
end

def up_sell 
    print "Add another item to the order? (y/n): "
    get_user_input
end

def is_more_customers
    print "new person (y/n): "
    get_user_input
end

def print_order arr
    arr.join ', '
end

loop do 
    name = get_order_name
    orders[:name] = []
        loop do
            order = get_order name
            orders[:name].push order
            if up_sell == "n"
                puts "#{name} ordered a: #{print_order orders[:name]}"
                break
            end
        end
    more_customers = is_more_customers
    if more_customers == 'n'
        break
    end
end