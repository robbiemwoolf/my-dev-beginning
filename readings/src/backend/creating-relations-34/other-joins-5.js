// Creating Relations 34

// Other Joins 34.5

    // overview: Most of the time, you need a result set that is formed from combining data from several tables in your database. In the previous lesson, you learned how to perform an inner join that returns the rows with matching values in both tables. In this lesson, you will learn about outer joins. You'll get familiar with the different types of outer joins—LEFT JOIN, RIGHT JOIN, and FULL JOIN—that you can perform in PostgreSQL to query data for a variety of scenarios.

    // 1SELECT
    // 2  d.department_id AS id,
    // 3  d.department_name AS department,
    // 4  e.first_name,
    // 5  e.last_name
    // 6FROM
    // 7  departments d
    // 8  JOIN -- Recall that the default `JOIN` type is an `INNER JOIN`
    // 9  employees e
    // 10  ON d.manager = e.employee_id;

    // Because the departments table is listed first in the FROM clause, it is considered to be on the left of the join, whereas the employees table is on the right.

    // A LEFT JOIN brings back all rows on the left side of a join, even if it doesn't match any rows on the right. If no matches are found, the right-side columns are returned with NULL values.

    // A RIGHT JOIN will include all rows on the right of a join, regardless of whether it matches a row on the left or not. In cases where it does not match, left columns are returned with NULL values.

    // A RIGHT JOIN will include all rows on the right of a join, regardless of whether it matches a row on the left or not. In cases where it does not match, left columns are returned with NULL values.