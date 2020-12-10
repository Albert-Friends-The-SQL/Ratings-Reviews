## PostgreSQL Results ##

**SELECT Query**


*Query*:

```sql
`SELECT users.*, reviews.* from reviews INNER JOIN users ON reviews.user_id = users.id WHERE product_id = 3973699;`
```

*Result*:

   user_name    |    id    | product_id |           review_title            |            description            |                        review_date                        | verified  | size | width | comfort | quality | value | helpfuly | helpfuln | recommended | user_id
----------------+----------+------------+-----------------------------------+-----------------------------------+-----------------------------------------------------------+-----------+------+-------+---------+---------+-------+----------+----------+-------------+---------
 Duncan_Olson93 | 16275648 |    3973699 | Persevering responsive middleware | Customizable content-based access | Mon Dec 07 2020 21:05:59 GMT-0800 (Pacific Standard Time) | undefined |    4 |     1 |       2 |       3 |     1 |       23 |       43 | No          | 4170803
 Tania.Rogahn   |  3789700 |    3973699 | Multi-tiered holistic benchmark   | Down-sized analyzing installation | Tue Dec 08 2020 11:35:03 GMT-0800 (Pacific Standard Time) | undefined |    5 |     4 |       2 |       4 |     2 |       42 |       38 | Yes         | 2468379
(2 rows)




**Simple SELECT Query for Individual Review**

*Query*: `SELECT * from reviews WHERE product_id = 3973699;`

    id    | product_id |           review_title            |            description            |                        review_date                        | verified  | size | width | comfort | quality | value | helpfuly | helpfuln | recommended | user_id
----------+------------+-----------------------------------+-----------------------------------+-----------------------------------------------------------+-----------+------+-------+---------+---------+-------+----------+----------+-------------+---------
 16275648 |    3973699 | Persevering responsive middleware | Customizable content-based access | Mon Dec 07 2020 21:05:59 GMT-0800 (Pacific Standard Time) | undefined |    4 |     1 |       2 |       3 |     1 |       23 |       43 | No          | 4170803
  3789700 |    3973699 | Multi-tiered holistic benchmark   | Down-sized analyzing installation | Tue Dec 08 2020 11:35:03 GMT-0800 (Pacific Standard Time) | undefined |    5 |     4 |       2 |       4 |     2 |       42 |       38 | Yes         | 2468379
(2 rows)