select user_name, user_lastname, user_phone from users
where user_id = $1
order by user_id;