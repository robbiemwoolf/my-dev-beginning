<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" class="markdown collapsed"><h1>React state management: State over multiple components</h1><h2>Instructions</h2><p>Add a button to the header which increases the font size of the content. Initialize the font size to 12 and increase it by 2 with each button click.</p>
<h3>Specific instructions</h3><ul>
<li>The button should be <em>after</em> the login button</li>
<li>Within the <code>App</code> component, store the font size as a state variable. The font size will in turn have to be passed to the <code>Content</code> component,  which renders the content for the app, via a prop called <code>fontSize</code>.</li>
<li>For the tests to pass, make sure you use <code>Increase Font size</code> when declaring the font size button (e.g., <code>&lt;button onClick={handleFontSizeIncrease}&gt;Increase Font Size&lt;/button&gt;</code>).</li>
</ul>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>