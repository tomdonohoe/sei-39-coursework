

def serve request
    if File.file? request
        request
    else
        "we dont have"
    end
end

loop do 
    puts "listening for a request..."
    request = gets.chomp
    puts serve request
end