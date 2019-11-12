update users
set user_name = $1, user_lastname = $2, user_phone = $3
where user_id = $4;

select * from users where user_id = $4;