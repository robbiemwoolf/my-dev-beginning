<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" multi-language="true" class="markdown collapsed"><h1>Robust server structure: Static data practice</h1><p>Your task is to build an API server for users and states. It should handle the following routes:</p>
<ul>
<li><code>/users</code> returns an array of users in the form <code>{ data: Array }</code>.</li>
<li><code>/users/:userId</code> returns a single user by <code>id</code> in form <code>{ data: {} }</code> or <code>User ID not found: ${userId}</code> if the user doesn't exist.</li>
<li><code>/states</code> returns the states data in the form <code>{ data: Array }</code>.</li>
<li><code>/states/:stateCode</code> returns the states data in the form <code>{ data: { stateCode: String, name: String } }</code> or <code>State code not found: ${stateCode}</code> if the state code doesn't exist.</li>
<li>Any other path returns: <code>Not found: ${req.originalUrl}</code></li>
</ul>
<p>Use the existing data files located in <code>src/data</code> for the responses. Feel free to add or remove data from the files as necessary, but keep the same shape of the data.</p>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>