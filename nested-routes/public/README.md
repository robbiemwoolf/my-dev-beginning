<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" multi-language="true" class="markdown collapsed"><h1>Nested routes</h1><p>Add any necessary nested routes to the <code>&lt;User /&gt;</code> and <code>&lt;UserPosts /&gt;</code> components.<br>
Also update any links to make sure they use the URL from the nearest parent <code>Route</code>.</p>
<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 588px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/450631f37500fc6832eb3d46c9a47000-assessment.gif" alt="assessment.gif" style="width: 625.864px; height: 586px; max-width: none;"></div></zoomable-image></p>
<p>No need to change <code>&lt;App /&gt;</code>, <code>&lt;Users /&gt;</code>, or <code>&lt;UserProfile /&gt;</code>.</p>
<p>Use this starter code for the application. You will, of course, need to add appropriate logic to make the application work.</p>
<h1>Specific instructions</h1><ul>
<li>No need to add <code>&lt;Router&gt;</code>, it has been added to <code>index.js</code>.</li>
<li>Please do not remove the <code>data-testid={...}</code> attributes as they are used by the tests.</li>
<li><code>/</code> displays <code>Users</code>.</li>
<li><code>/users/:userId</code> displays <code>User</code> and <code>UserProfile</code>.<ul>
<li>"Profile" and "Posts" links use the Route URL.</li>
</ul>
</li>
<li><code>/users/:userId/posts</code> displays <code>User</code> and <code>UserPosts</code>.<ul>
<li>Links to posts should use the Route URL.</li>
</ul>
</li>
<li><code>/users/:userId/posts/:postId</code> displays <code>User</code>, <code>UserPosts</code>, and <code>UserPost</code>.</li>
</ul>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>