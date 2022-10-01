<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" class="markdown collapsed"><h1>React state management: Complex forms</h1><h2>Instructions</h2><p>Build the <code>RSVPForm</code> component in <code>RSVPForm.jsx</code> to be a form with the following fields, in this order:</p>
<ol>
<li><strong>Name</strong> input field.</li>
<li>Dropdown with the following age ranges: <code>Prefer not to say</code>, <code>0-19</code>, <code>20-39</code>, <code>40-59</code>, <code>60+</code>.</li>
<li><strong>New Member</strong> checkbox, set to unchecked by default.</li>
<li><strong>Comment</strong> input field.</li>
<li><strong>Submit</strong> button.</li>
</ol>
<p>Upon submission, log each value <em>together, in a single statement</em>, to the console, and clear the fields in the form.</p>
<h3>Example</h3><p>For example, imagine the following is inputted into the form:</p>
<ol>
<li>Name: <code>John</code></li>
<li>Age: <code>60+</code></li>
<li>New Member: <code>checked</code></li>
<li>Comment: left empty</li>
</ol>
<p>The following should be what is logged to the console.</p>
<pre><code>"John", "60+", true, ""
</code></pre><p><em><strong>Note:</strong> Remember that you can log multiple items by passing multiple arguments into a <code>console.log()</code> statement, such as <code>console.log("John", "60+")</code>.</em></p>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>