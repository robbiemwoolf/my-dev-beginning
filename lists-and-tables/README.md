<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" class="markdown collapsed"><h1>Rendering in React: Lists and tables</h1><h2>Instructions</h2><p>Complete the <code>Roster</code> component in <code>Roster.js</code>.</p>
<p>The <code>roster</code> prop is a list of objects for the enrolled students. For each student, there is an object with <code>firstName</code>, <code>lastName</code>, and <code>location</code>.</p>
<p>Here is an example of the <code>roster</code> prop.</p>
<div class="language-tabset"><div class="language-tab language-js"><pre><code class="lang-js"><span class="hljs-keyword">const</span> roster = [
  { id: <span class="hljs-number">1</span>, firstName: <span class="hljs-string">"John"</span>, lastName: <span class="hljs-string">"Smith"</span>, location: <span class="hljs-string">"California"</span> },
  { id: <span class="hljs-number">2</span>, firstName: <span class="hljs-string">"April"</span>, lastName: <span class="hljs-string">"White"</span>, location: <span class="hljs-string">"Nebraska"</span> },
  { id: <span class="hljs-number">3</span>, firstName: <span class="hljs-string">"Jane"</span>, lastName: <span class="hljs-string">"Doe"</span>, location: <span class="hljs-string">"Florida"</span> },
];
</code></pre>
</div></div><p>The component should display the students in the class in either an <code>ol</code> or <code>table</code>, depending on the value of <code>detailed</code>.</p>
<p>If <code>detailed</code> is <code>false</code>, the roster should display all the first names, in the same order as in the <code>roster</code> array, as an ordered list.</p>
<blockquote>
<ol>
<li>John</li>
<li>April</li>
<li>Jane</li>
</ol>
</blockquote>
<p>If <code>detailed</code> is <code>true</code>, the roster should display all the information in a table, in the same order as in the <code>roster</code> array.</p>
<blockquote>
<table>
<thead>
<tr>
<th>ID</th>
<th>First Name</th>
<th>Last Name</th>
<th>Location</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>John</td>
<td>Smith</td>
<td>California</td>
</tr>
<tr>
<td>2</td>
<td>April</td>
<td>White</td>
<td>Nebraska</td>
</tr>
<tr>
<td>3</td>
<td>Jane</td>
<td>Doe</td>
<td>Florida</td>
</tr>
</tbody>
</table>
</blockquote>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>