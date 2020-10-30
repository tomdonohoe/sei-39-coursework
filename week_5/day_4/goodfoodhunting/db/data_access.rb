def run_sql query, params = []
    db = PG.connect dbname: 'goodfoodhunting'
    result = db.exec_params query, params
    db.close
    result
end


def find_user_by_email email
  results = run_sql "SELECT * FROM users WHERE email = $1;", [email]
  results[0]
end


def find_user_by_id id
  results = run_sql "SELECT * FROM users WHERE id = $1;", [id]
  results[0]
end


def find_dish_by_id id
  results = run_sql "SELECT * FROM dishes WHERE id = $1;", [id]
  results[0]
end


def get_all_dishes
  results = run_sql "SELECT * FROM dishes;"
  results
end


def get_all_users
  results = run_sql "SELECT * FROM users;"
  results
end


def get_all_comments 
  results = run_sql "SELECT * FROM comments;"
  results
end

def get_all_comments_by_dish_id dish_id 
  results = run_sql "SELECT * FROM comments WHERE dish_id = $1;", [dish_id]
  results
end


def create_dish name, image, user_id
  run_sql "INSERT INTO dishes (name, image_url, user_id) VALUES ($1, $2, $3);", [name, image, user_id]
end


def create_comment content, dish_id, user_id
  run_sql "INSERT INTO comments (content, dish_id, user_id) VALUES ($1, $2, $3);", [content, dish_id, user_id]
end


def delete_dish_by_id id
  run_sql "DELETE FROM dishes WHERE id = $1;", [id]
end


def edit_dish_by_id id
  query = "UPDATE dishes SET name = $1, image_url = $2 WHERE id = $3"
  run_sql query, [params['name'], params['image'], id]
end
