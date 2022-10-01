<div markdown="fileTab.file.challenge.instructions" class="markdown collapsed"><h1>Rendering in React: Conditional rendering</h1><h2>Instructions</h2><h4>Part 1: <code>Clock</code> Component</h4><p>Complete the <code>Clock</code> component in <code>Clock.js</code> to be a simple clock that only displays <code>Good Morning!</code>, <code>Good Afternoon!</code>, or <code>Good Evening!</code>.</p>
<p>It should display:</p>
<ul>
<li><code>Good Morning!</code> if the current time is before 12 PM (<code>12:00</code>),</li>
<li><code>Good Afternoon!</code> if the current time is between 12 PM (<code>12:00</code>) and 6 PM (<code>18:00</code>)</li>
<li><code>Good Evening!</code> if the current time is after 6 PM (<code>18:00</code>)</li>
</ul>
<h4>Part 2: <code>App</code> Component</h4><p>Complete the <code>App</code> component in <code>App.js</code> so that it displays the <code>Clock</code>. It should take a <code>loggedIn</code> prop and only display the <code>Clock</code> if <code>loggedIn</code> is <code>true</code>. If <code>loggedIn</code> is <code>false</code>, it should render nothing.</p>
<h2>Tips</h2><p>You can use the <code>Date</code> object to get the current time. The <code>getHours</code> method will return just the hours.</p>
</div>