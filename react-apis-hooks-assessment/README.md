<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" class="markdown collapsed"><h2>React album app</h2><p>Your task is to build a React app to view the albums owned by users. It should contain a list of users on the left. On the right it should have a list of albums owned by the selected user. As you click through the users, the list of albums should change.</p>
<p>Here is an example of what it might look like with no user selected.</p>
<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 343.896px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/3649ec6dac4e2c42058b09464c092232-xample-no-albums.png" alt="example-no-albums.png" style="width: 640.255px; height: 341.896px; max-width: none;"></div></zoomable-image></p>
<p>When a user is selected, display the albums for that user:</p>
<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="enabled" style="height: 302.036px;"><!----><span class="zoomable-image-controls" ng-if="$ctrl.enabled" style=""> <button class="btn-default btn-sm icon-expand" ng-click="$ctrl.expandOrContract($event)" tooltip="Make this image as large as possible" type="button"></button> <button class="btn-default btn-sm icon-minus" ng-click="$ctrl.zoomOut($event)" ng-disabled="$ctrl.zoomOutDisabled" tooltip="Zoom Out" type="button" disabled="disabled"></button> <button class="btn-default btn-sm" ng-class="{ active: $ctrl.is100 }" ng-click="$ctrl.zoom100($event)" tooltip="Zoom 1:1 pixels" type="button"> 1:1 </button> <button class="btn-default btn-sm icon-plus" ng-click="$ctrl.zoomIn($event)" ng-disabled="$ctrl.zoomInDisabled" tooltip="Zoom In" type="button"></button> </span><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="You can zoom into this image using the controls, or double-clicking on it" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/a5e73b54f3d2d1557105fdb5606cccd7-mple-with-albums.png" alt="example-with-albums.png" style="width: 639.736px; height: 300.036px; max-width: none;"></div></zoomable-image></p>
<h3>Specific instructions</h3><ul>
<li>Load users from <code>https://jsonplaceholder.typicode.com/users</code>.</li>
<li>Load albums from <code>https://jsonplaceholder.typicode.com/albums?userId=${user.id}</code>.</li>
<li>Create additional components that are then used by the <code>App</code> component.</li>
<li>Style the components using inline styling and/or CSS files. It does not need to match the appearance of the example image, but should have a reasonable layout.</li>
<li>The document title should be "Awesome Album App" and should reset to the original document title when the component is cleaned up. You can get the original title by accessing <code>document.title</code> and storing that value.</li>
<li>Pending API calls should be canceled when the user changes.</li>
<li>State should be "lifted up" whenever possible.</li>
<li>Do not make any assumptions about the number of users or number of albums owned by the user.</li>
<li>If no user is selected, the right side should display "Please click on a user name to the left"</li>
<li>List of albums should include the album ID and the album title</li>
</ul>
<p><strong>Note:</strong> When running the tests, you might see messages like <code>Warning: An update to %s inside a test was not wrapped in act(...).</code> These can be ignored and will go away once the test is passing.</p>
<h2>Success criteria</h2><ul>
<li>Functionality:<ul>
<li>Document title is set to "Awesome Album App"</li>
<li>Document title is reset to original title on cleanup</li>
<li>List of user names is displayed</li>
<li>Clicking the user name displays a list of albums owned by the user</li>
<li>Pending API calls are canceled when a new user is selected. Make use of the <code>AbortController</code> and handle abort errors accordingly.</li>
</ul>
</li>
</ul>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>