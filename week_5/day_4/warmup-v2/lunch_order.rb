lunch_orders = []

def get_user_input
    gets.chomp
end

def ask_order_name
    print "Add your name for your order: "
    get_user_input
end

def ask_order_item order_name
    print "what would you like to order, #{order_name}: "
    get_user_input
end

def upsell
    print "would you like to add another item to your order? (y/n): "
    get_user_input
end

def read_customer_order lunch_orders
    puts "All orders: #{lunch_orders.last[:order]}"
end

def served_all_customers?
    print "is there more customers (y/n): "
    if get_user_input == "y"
        false
    end
    true
end

def make_order_string arr
    order_sentence = ''
    if arr.length == 1
        order_sentence = arr.first
    else
        arr.each_with_index do |order_item, index|
            if index == (arr.length - 1) 
                order_sentence << "& #{order_item}."
            elsif index == (arr.length - 2)
                order_sentence << "#{order_item} "
            else
                order_sentence << "#{order_item}, "
            end
        end
    end
    order_sentence
end

loop do
    order_name = ask_order_name
    lunch_orders << {name: order_name, order: []}    
    loop do
        order_item = ask_order_item order_name
        lunch_orders.each do |customer| 
            if customer[:name] == order_name
                customer[:order] << order_item
            end
        end
        if upsell == "n"
            break
        end
    end
    read_customer_order lunch_orders

    if served_all_customers?
        break
    end
end

lunch_orders.each do |customer|
    puts "#{customer[:name]} ordered a #{make_order_string customer[:order]}"
end