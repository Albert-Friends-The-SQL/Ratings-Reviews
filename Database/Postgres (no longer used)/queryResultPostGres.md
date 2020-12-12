## PostGres Query Efficiency ##

# Select From Reviews With User Join #

*Query* : `EXPLAIN ANALYZE SELECT users.user_name, reviews.* from reviews INNER JOIN users ON reviews.user_id = users.id WHERE product_id = 12345678;`

# Result #

```text
                                                        QUERY PLAN
--------------------------------------------------------------------------------------------------------------------------
 Nested Loop  (cost=0.87..54.32 rows=4 width=192) (actual time=0.029..0.030 rows=0 loops=1)
   ->  Index Scan using product on reviews  (cost=0.44..20.51 rows=4 width=179) (actual time=0.010..0.010 rows=0 loops=1)
         Index Cond: (product_id = 12345678)
   ->  Index Scan using users_pkey on users  (cost=0.43..8.45 rows=1 width=17) (never executed)
         Index Cond: (id = reviews.user_id)
 Planning Time: 0.260 ms
 Execution Time: 0.060 ms
(7 rows)
:
```

# Second Select Statement For Specific Review #

*Query* : `EXPLAIN ANALYZE SELECT * from reviews WHERE id = 3747173;`

# Result #

```text

                                                       QUERY PLAN
------------------------------------------------------------------------------------------------------------------------
 Index Scan using reviews_pkey on reviews  (cost=0.44..8.46 rows=1 width=179) (actual time=0.014..0.015 rows=1 loops=1)
   Index Cond: (id = 3747173)
 Planning Time: 0.181 ms
 Execution Time: 0.036 ms
(4 rows)
```