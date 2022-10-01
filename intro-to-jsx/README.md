<h1>Rendering in React: Introduction to JSX</h1>
<h2>Instructions</h2>
<p>To complete this practice, you will add three HTML elements to the <code>index.js</code> file and create a particular string.</p>
<h3>Setup</h3>
<p>In the <code>App.js</code> file, you currently have three variables:</p>
<ul>
<li><code>shirts</code>: Number of shirts purchased</li>
<li><code>pants</code>: Number of pants purchased</li>
<li><code>website</code>: A website URL</li>
</ul>
<h3>Task</h3>
<p>Complete the code in <code>App.js</code> using React to render the following:</p>
<ul>
<li>A paragraph element, which contains the following text, where <code>x</code> is the number of shirts, <code>y</code> is the number of pants, and <code>z</code> is the total number of items.<blockquote>
<p>Purchased x shirts and y pants for a total of z items</p>
</blockquote>
</li>
<li>The paragraph element should have a <code>className</code> attribute. The <code>className</code> attribute should have a value of <code>paragraph</code>.</li>
<li>A link element, with the <code>href</code> attribute pointing to the value of the <code>website</code> variable. The text of the link should just say "Website".</li>
<li>A main element which wraps the above paragraph and link.</li>
</ul>
<p><em><strong>Note:</strong> Use the variables <code>shirts</code>, <code>pants</code>, and <code>website</code> rather than hardcoding the values yourself.</em></p>
<p>When you render the application, you should see the text below:</p>
<blockquote>
<p>Purchased 4 shirts and 6 pants for a total of 10 items<br>
<a href="https://www.thinkful.com/" target="_blank" rel="noopener">Website</a></p>
</blockquote>