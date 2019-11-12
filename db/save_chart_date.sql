insert into results (
date varchar(70),
amount decimal(10, 2),
type_of_debt varchar(20),
balance decimal(10, 2),
rate decimal(10, 2),
payment decimal(10,2),
savings decimal(10,2),
disposable decimal(10,2)
)
values (
    $1, $2, $3, $4, $5, $6, $7, $8
);

returning *; 