<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" multi-language="true" class="markdown collapsed"><h1>Node and Express: Router middleware</h1><p>This lesson should take you about 25 minutes. If you spend longer than that on this lesson, reach out for help!</p>
<h2>Instructions</h2><p>Your goal for this lesson is to get the tests to pass. To do so, you will be building a middleware function and placing it in the right place in the pipeline.</p>
<h3>File structure and setup</h3><p>In the <code>utils/</code> folder, there is a file called <code>validateNameLength.js</code> that includes a function of the same name.</p>
<h3>Create middleware</h3><p>The <code>validateNameLength()</code> function should assess the length of the <code>name</code> route parameter. Then:</p>
<ol>
<li><p>If the name is three characters or longer, move on to the next step of the middleware pipeline.</p>
</li>
<li><p>If the name is less than three characters long, trigger the error-handling middleware function with the following message:</p>
<pre><code>"Name length is too short."
</code></pre></li>
</ol>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>