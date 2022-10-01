<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" multi-language="true" class="markdown collapsed"><h1>Robust server structure: API testing with Supertest</h1><h2>Instructions</h2><p>You're given an API server that is fully working with three distinct routes, a not-found handler, and an error handler. However, the developer who created this API missed a few key tests, so you've been tasked this sprint with writing these additional tests to ensure adequate test coverage for the most essential features of the API.</p>
<p>To pass this assessment, you will need to write tests for a few API endpoints, as described below. </p>
<p>Complete the following tasks to pass the tests and this assessment.</p>
<h3>Existing files</h3><table>
<thead>
<tr>
<th>File path</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>src/app.js</code></td>
<td>Contains the code for the express application. You don't need to edit this file.</td>
</tr>
<tr>
<td><code>src/server.js</code></td>
<td>Contains the code to start the express application. You don't need to edit this file.</td>
</tr>
<tr>
<td><code>src/data/todos-data.js</code></td>
<td>Stores several todos used as the initial todos data for <code>app.js</code>. Feel free to add or remove data as necessary, but keep the same shape of the data.</td>
</tr>
<tr>
<td><code>test/app.test.js</code></td>
<td>Contains the tests your code will run against. You will need to add your tests to this file.</td>
</tr>
</tbody>
</table>
<h3>Tasks</h3><p>In the <code>app.test.js</code> file, you will write tests to:</p>
<ol>
<li>Ensure that the <code>POST /todos</code> endpoint handles a request containing the todo data by <ul>
<li>assigning a new id to the note</li>
<li>storing the note</li>
<li>and returning a <code>201</code> status code and the stored note as JSON on success</li>
</ul>
</li>
<li>Ensure that the <code>POST /todos</code> endpoint returns a <code>400</code> status code if the <code>title</code> property is missing or empty in the incoming request body </li>
<li>Ensure that the <code>GET /todos/:todoId</code> handler returns an error if the <code>:todoId</code> does not exist</li>
<li>Ensure that the API returns the correct error message if the user tries  to visit a route that is not defined:<div class="language-tabset"><div class="language-tab language-javascript"><pre><code class="lang-javascript"><span class="hljs-string">`Not found: <span class="hljs-subst">${req.originalUrl}</span>`</span>;
</code></pre>
</div></div></li>
</ol>
<p><em><strong>Note:</strong> If you are having trouble getting your tests to pass but you think you've gotten it right, make sure to check for punctuation and spelling. The tests are looking for</em> exact <em>string matches.</em></p>
<h3>Existing routes</h3><p>The server contains the following routes:</p>
<h4><code>GET /todos</code></h4><p>This route will respond to a <code>GET</code> request with an array of existing todos. Here's an example:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: [
    {
      <span class="hljs-string">"id"</span>: <span class="hljs-number">1</span>,
      <span class="hljs-string">"title"</span>: <span class="hljs-string">"Take out the trash"</span>,
      <span class="hljs-string">"completed"</span>: <span class="hljs-literal">false</span>
    },
    {
      <span class="hljs-string">"id"</span>: <span class="hljs-number">2</span>,
      <span class="hljs-string">"title"</span>: <span class="hljs-string">"Clean the windows"</span>,
      <span class="hljs-string">"completed"</span>: <span class="hljs-literal">false</span>
    },
  ]
}
</code></pre>
</div></div><ul>
<li>If a todo is added, it is included in the array returned by this route.</li>
</ul>
<h4><code>POST /todos</code></h4><p>This route responds to a <code>POST</code> request and creates a new todo if the request is valid.</p>
<h4><code>GET /todos/:todoId</code></h4><p>This route responds to a <code>GET</code> request with the todo for the provided <code>todoId</code>.</p>
<ul>
<li>If the <code>todoId</code> matches an existing todo, it responds with the todo.</li>
<li>If the <code>todoId</code> <em>doesn't</em> match an existing note, respond with the following message.</li>
</ul>
<div class="language-tabset"><div class="language-tab language-javascript"><pre><code class="lang-javascript"><span class="hljs-string">`Todo id not found: <span class="hljs-subst">${req.params.todoId}</span>`</span>;
</code></pre>
</div></div><h3>Error handling</h3><p>If the user goes to a route that isn't defined, the server responds with the following message:</p>
<div class="language-tabset"><div class="language-tab language-javascript"><pre><code class="lang-javascript"><span class="hljs-string">`Not found: <span class="hljs-subst">${req.originalUrl}</span>`</span>;
</code></pre>
</div></div></div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>