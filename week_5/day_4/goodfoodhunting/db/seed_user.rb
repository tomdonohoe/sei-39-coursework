require 'bcrypt'
require 'pg'
require_relative 'data_access.rb'

email = 'tom@gmail.com'
password_digest = BCrypt::Password.create("pudding")


sql = "INSERT INTO users (email, password_digest) VALUES ('#{email}', '#{password_digest}');"

run_sql sql