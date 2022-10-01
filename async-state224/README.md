<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" class="markdown collapsed"><h1>React state management: Asynchronous state</h1><h2>Instructions</h2><p>Fix the <code>IncrementButtons</code> component so that the counts are updated properly:</p>
<ul>
<li>Clicking the <code>One</code> button should increment the counter from value by 1 and set the heading to <code>Last Pressed: One</code>. </li>
<li>Clicking the <code>Two</code> button should increment the counter value by 2 and set the heading to <code>Last Pressed: Two</code>.</li>
<li><code>setCount()</code> can only be called with the <code>count</code> variable incremented by <code>1</code> each time, meaning if you want to increment <code>count</code> by <code>2</code>, then you'd have to call <code>setCount()</code> twice.</li>
</ul>
<h2>Tips</h2><ul>
<li>Do not change the rendering of the component. You need to fix how the state is updated.</li>
<li>Start by looking at the web preview and pressing the buttons to see how you get unexpected results.</li>
<li>Log the <code>lastPressed</code> variable to the console right after <code>setLastPressed()</code>. Is its value what you'd expect to see every time you click either button?</li>
</ul>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>