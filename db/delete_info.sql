delete from users where user_id = $1;

select * from users
order by user_id;