require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'bcrypt'
require_relative 'db/data_access.rb'
also_reload 'db/data_access.rb'

enable :sessions


def logged_in?
  true if session[:user_id]
end


# only works when logged in
def current_user
  find_user_by_id(session[:user_id])
end


get '/' do
  dishes = get_all_dishes
  erb :index, locals: {
    dishes: dishes
  }
end


get '/dishes/new' do
  unless logged_in?
    redirect '/login'
  end

  erb :upload
end


get '/dishes/:id' do # : is a wild card and id is a variable and is accessed in params
  dish_details = find_dish_by_id params['id']
  user = find_user_by_id dish_details['user_id']

  erb :details, locals: {
    dish_details: dish_details,
    user: user
  }
end


post '/dishes' do
  redirect '/login' unless logged_in?

  create_dish params['name'], params['image'], current_user['id']
  redirect '/'
end


delete '/dishes/:id' do
  delete_dish_by_id params['id']

  redirect '/'
end


get '/dishes/:id/edit' do
  dish_details = find_dish_by_id params['id']

  erb :edit, locals: {
    dish_details: dish_details
  }
end


patch '/dishes/:id' do
  edit_dish_by_id params['id']

  redirect "/dishes/#{params['id']}"
end


get '/login' do
  erb :login
end


post '/login' do
  user = find_user_by_email params['email']

  if BCrypt::Password.new(user['password_digest']) == params['password']
    session[:user_id] = user['id']
    redirect '/'
  else
    erb :login
  end 
end


delete '/logout' do
  session[:user_id] = nil
  redirect '/login'
end