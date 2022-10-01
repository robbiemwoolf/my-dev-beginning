<div class="scrollable-container" ng-transclude="" style="user-select: auto;"> <div markdown="fileTab.file.challenge.instructions" multi-language="true" class="markdown collapsed" style="user-select: auto;"><h1 style="user-select: auto;">Node, Express, and PostgreSQL: CRUD with Knex</h1><h2 style="user-select: auto;">Instructions</h2><p style="user-select: auto;">You are a backend developer for a restaurant-finder application called Thinkful Eats, and you've been tasked to query some data about various restaurants in the database. Their backend technology stack is currently in Node.js/Express, PostgreSQL, and Knex. There is currently only one table, <em style="user-select: auto;">restaurants</em>, in the database. It has the following columns:</p>
<ul style="user-select: auto;">
<li style="user-select: auto;"><em style="user-select: auto;">restaurant_id</em> (primary key)</li>
<li style="user-select: auto;"><em style="user-select: auto;">restaurant_name</em> (required string)</li>
<li style="user-select: auto;"><em style="user-select: auto;">cuisine</em> (required string)</li>
<li style="user-select: auto;"><em style="user-select: auto;">address</em> (required string)</li>
</ul>
<p style="user-select: auto;">To complete this assessment, you will need to complete the tasks described below to get the tests to pass.</p>
<h3 style="user-select: auto;">Existing files</h3><p style="user-select: auto;">In this lesson, all the required server routes have already set up for you, so you won't have to edit the <code style="user-select: auto;">src/restaurants/restaurants.router.js</code> file. The test suite will automatically set up a test database, then migrate and seed the database with some test data as well. Take some time to understand the content of the existing files.</p>
<p style="user-select: auto;">You will then have to write Knex queries to complete the functions defined inside the <code style="user-select: auto;">src/restaurants/restaurants.service.js</code> and <code style="user-select: auto;">src/restaurants/restaurants.controller.js</code> files.</p>
<h3 style="user-select: auto;">Tasks</h3><p style="user-select: auto;">In <code style="user-select: auto;">src/restaurants/restaurants.service.js</code>:</p>
<ol style="user-select: auto;">
<li style="user-select: auto;">Complete the <code style="user-select: auto;">create()</code> function to create a new restaurant in the <em style="user-select: auto;">restaurants</em> table, returning all columns of the newly created restaurant in the result.</li>
<li style="user-select: auto;">Complete the <code style="user-select: auto;">destroy()</code> function to delete a restaurant given the restaurant ID.</li>
</ol>
<p style="user-select: auto;">In <code style="user-select: auto;">src/restaurants/restaurants.controller.js</code>:</p>
<ol style="user-select: auto;">
<li style="user-select: auto;">Update the <code style="user-select: auto;">create()</code> route handler to call the <code style="user-select: auto;">create()</code> method of the service and return a <code style="user-select: auto;">201</code> status code along with the newly created restaurant.<ul style="user-select: auto;">
<li style="user-select: auto;">Validate that the request body only contains the properties <code style="user-select: auto;">restaurant_name</code>, <code style="user-select: auto;">cuisine</code>, and <code style="user-select: auto;">address</code>, and validate that each property has a value. Return a <code style="user-select: auto;">400</code> status code if the validation fails.</li>
</ul>
</li>
<li style="user-select: auto;">Update the <code style="user-select: auto;">destroy()</code> route handler to call the <code style="user-select: auto;">delete()</code> method of the service, and return a <code style="user-select: auto;">204</code> status code upon successful restaurant deletion.</li>
</ol>
</div> <score-card-instructions challenge="fileTab.file.challenge" style="user-select: auto;"><!----></score-card-instructions> </div>