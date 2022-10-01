<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" class="markdown collapsed"><h1>Rendering in React: Assessment</h1><h2>Instructions</h2><p>Your task is to build a React App for a profile page. It should contain a profile picture, name, and birthday at the top. Below, it should have a list of hobbies and a table of the daily schedule. Here is an example of what it might look like.</p>
<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded"><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/f9c0c6f475a7d6d357f070e269501876-ple_profile_page.png" alt="Example profile page"></div></zoomable-image></p>
<p>Use the starter code provided in the <code>src</code> folder.  As you can see, the following component files are provided for you to add your solution:</p>
<ul>
<li><p><code>Header.js</code>: This file contains the <code>Header</code> component. You should write code here so that <code>Header</code> renders the image of the kitten, its name, and birthday. It should also accept <code>name</code>, <code>imageSrc</code>, and <code>birthday</code> as props.</p>
</li>
<li><p><code>HobbyList.js</code>: This file contains the <code>HobbyList</code> component. You should write code here so that <code>HobbyList</code> renders the "Hobbies" heading and a list of the kitten's hobbies (e.g., "watching birds", "napping"). It should accept a <code>hobbies</code> array as a prop.</p>
</li>
<li><p><code>Activity.js</code>:  This file contains the <code>Activity</code> component. You should write code here so that <code>Activity</code> renders the time and description for each activity (e.g., "8:00 am wake up").  It should accept <code>time</code> and <code>description</code> as props.</p>
</li>
<li><p><code>ActivityList.js</code>:  This file contains the <code>ActivityList</code> component. You should write code here so that <code>ActivityList</code> renders a list of <code>Activity</code> components. It should accept an <code>activities</code> array as a prop.</p>
</li>
<li><p><code>App.js</code>: This file contains the <code>App</code> component, which is a wrapper for the other components. You will have to complete this component so that it renders the app properly.</p>
</li>
</ul>
<p>The tests will be looking for the specific variable names and values defined in <code>App.js</code>.</p>
<h3>Specific instructions</h3><ul>
<li>Don't assume anything about the list lengths. Your app should accommodate different values for the variables (<code>name</code>, <code>birthday</code>, <code>imageSrc</code>, <code>hobbies</code>, <code>dailyActivities</code>)</li>
<li>If the <code>hobbies</code> list is empty, you should display nothing for hobbies.</li>
<li>If the <code>dailyActivities</code> list is empty, you should display nothing for the schedule.</li>
<li>Style the components using inline styling and/or CSS files. It does not need to match the appearance of the example image. Note that the automated tests will <em>not</em> be assessing the styling aspect of the assignment, so just try to achieve a reasonable layout.</li>
</ul>
<h2>Success criteria</h2><ul>
<li>Functionality:<ul>
<li>Image is displayed</li>
<li>Name and birthday are displayed</li>
<li>Hobbies are displayed in a list labeled "Hobbies"</li>
<li>"Hobbies" does not appear when hobbies list is empty</li>
<li>Schedule is displayed in a list</li>
</ul>
</li>
<li>React Code Organization:<ul>
<li>Uses the single-responsibility components</li>
<li>Each component is in its own file</li>
<li><code>App</code> component is just a wrapper for the other components</li>
<li>Data needed for the components is passed through props</li>
</ul>
</li>
</ul>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>