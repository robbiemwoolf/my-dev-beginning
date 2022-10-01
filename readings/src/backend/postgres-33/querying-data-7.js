// Progress 33

// Querying Data 33.7

    // overview: A query is any command used to retrieve data from a table. In SQL, queries are almost always made using the SELECT statment.

// Querying Data

    // Now that some data exists in the database, you need a way to retrieve that data. 

    // You can use the SQL SELECT statment to retrieve rows from a table. This command has a lot of options, but the basic syntax of the SELECT statement is as follows:
        /*
        SELECT <column list>
        FROM <table name>;
        */

    // In the previous lessons, you used this statement with an asterisk * as the column list. The * is simply a shortcut for all columns. However, it is advisable to explicitly list the columns that you want to retrieve and never select more than you need.

// The WHERE clause

    // You do not want all of the data in the table. To restrict the rows that are returned by a SELCT statment, use the WHERE clause. The basic syntax is as follows:

    /*
    SELECT <column list>
    FROM <table name>
    WHERE <conditions>;
    */

    // The conditions are boolean expressions - statments taht evaluate to either TRUE or FALSE for each row in the results.

// DO THIS: Find Articles Written By Dwight Schrute

    /*
    SELECT title
    FROM articles
    WHERE author='Dwight Schrute';
    */

// Searching For NULL

    // The key concept for understanding how null values behave in boolean expressions is that NULL is neither TRUE nor FALSE.

    // Comparisons like NULL = NULL and NULL <> NULL are NULL instead of TRUE.

    // TIP: <> is a comparison operator that means "not equal to."

    // SQL has IS NULL, which returns TRUE when compared to a null value. The opposite, IS NOT NULL, returns FALSE when compared to a null value.

// DO THIS: Find Articles With A Null Body

    // Execute the following SQL to find all articles where the body field is NULL:

    /*
    SELECT title
    FROM articles
    WHERE body IS NULL;
    */

    // Execute the following SQL to find all articles with a non-null body value:

    /*
    SELECT title
    FROM articles
    WHERE body IS DISTINCT FROM NULL;
    */

    // Execute the following SQL to find all articles with a null body value or a body value that is not equal to some-value:

    /*
    SELECT title
    FROM articles
    WHERE body IS DISTINCT FROM 'some-value';
    */

    // The above SQL will find any article where the body value is DISTINCT FROM 'some-value'. Because NULL is distinct from some-value, null values are included in the results.

// Products

    // To fully exercise the range of options available in the SELECT statement, you will use an existing dataset of products. This dataset contains thousands of products.

    // Next, you will create a new table named products and import all of the data into the table by running one script.

// DO THIS: Execute The products.sql script

    //