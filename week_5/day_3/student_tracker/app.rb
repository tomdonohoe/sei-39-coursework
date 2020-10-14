require 'pg' # help you talk to DB
# require 'pry'

db = PG.connect dbname: "school"
sql = "insert into students (name, score) values ('tom', 101);"
db.exec(sql)
result = db.exec("select * from students;") # array of hases for each row
db.close

# binding.pry

result.each do |student| 
    puts "student #{student['name']} scored: #{student['score']}"
end
