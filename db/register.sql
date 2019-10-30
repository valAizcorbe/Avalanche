insert into users (
user_email,
user_password,
user_name,
user_lastname,
user_phone
)
values (
    $1, $2, $3, $4, $5
)

returning *;