<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" class="markdown collapsed"><h1>React state management: Assessment</h1><p>Build an app where the user can make text and image posts. This will resemble Tumblr or Twitter, but with a single user.</p>
<p>A user can type in the text of a text post. For an image post, they should put the URL of an image.</p>
<p>The user should be able to add a new post, edit a post, and delete a post.</p>
<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded"><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/a18a6396e8c58c27aa75a6f7e602c4b1-example.gif" alt="Creeate and delete post app"></div></zoomable-image></p>
<p>This project has starter code you can use for the application. You will, of course, need to add handlers and other logic to make this code work.</p>
<h1>Specific instructions</h1><p>Find the <code>TODO</code> comments in the code and create the necessary functionality. Below is a list of specific items you will need to complete for this lesson.</p>
<ul>
<li>Create at least one additional component that is used by the <code>PostList</code> component.</li>
<li>A text post displays the text of the post.</li>
<li>An image post displays the image, not the URL.</li>
<li>It does not need to match the appearance of the example image, but should have a reasonable layout.</li>
<li>Feel free to add handlers and other attributes to starter code as needed.</li>
<li><code>&lt;form name="create"&gt;</code> should have the following:<ul>
<li>A <code>name="create"</code> attribute</li>
<li>One child <code>&lt;button&gt;</code> with a <code>type="submit"</code> attribute</li>
<li>One child <code>&lt;select&gt;</code> with a <code>name="type"</code> attribute</li>
<li>One child <code>&lt;textarea&gt;</code> or <code>&lt;input&gt;</code> (not both at the same time) with a <code>name="content"</code> attribute</li>
</ul>
</li>
<li>Post should have the following:<ul>
<li><code>className="post"</code></li>
<li>A <strong>Delete</strong> button: <code>&lt;button name="delete"&gt;Delete&lt;/button&gt;</code></li>
</ul>
</li>
</ul>
<h1>Success criteria</h1><ul>
<li>Functionality:<ul>
<li>User can make a text post</li>
<li>User can make an image post</li>
<li>User can delete posts</li>
<li>Some CSS is used to make the appearance reasonable</li>
</ul>
</li>
<li>React code organization:<ul>
<li>Uses multiple components that play well together</li>
<li>Post data is contained in the state, which is "lifted up"</li>
</ul>
</li>
<li>General code organization:<ul>
<li>Minimal code duplication</li>
</ul>
</li>
</ul>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>