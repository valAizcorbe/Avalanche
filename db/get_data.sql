select date, amount, type_of_debt, balance, rate, payment from data 
where user_data_id = $1
order by user_data_id;