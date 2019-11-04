insert into data (user_data_id, date, amount, type_of_debt, balance, rate, payment)
values ($1, $2, $3, $4, $5, $6, $7)

-- select * from data order by user_data_id;
returning *;