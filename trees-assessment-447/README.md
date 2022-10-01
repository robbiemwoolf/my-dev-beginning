<div class="scrollable-container" ng-transclude="" style="user-select: auto;"> <div markdown="fileTab.file.challenge.instructions" multi-language="true" class="markdown collapsed" style="user-select: auto;"><h1 style="user-select: auto;">Trees: Assessment</h1><p style="user-select: auto;">Suppose you have a binary tree representing a command structure of the Starship USS Enterprise. The relationships between the officers can be organized using a BST.</p>
<pre style="user-select: auto;"><code style="user-select: auto;">Rank 1:                  10 Captain Picard
                       /                  \
Rank 2:        6 Commander Riker       11 Commander Data
                  /         \               \
Rank 3:       4 Lt. Cmdr.   7 Lt. Cmdr.     12 Lt. Cmdr.
               Worf           LaForge           Crusher
                    \                           \
Rank 4:        5 Lieutenant                  13 Lieutenant
              security-officer                    Selar
</code></pre><p style="user-select: auto;">This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree.</p>
<p style="user-select: auto;">However, to distinguish between people of the same rank, those with more experience are on the right and those with less are on the left (in other words, experience increases from left to right). The higher the officer's ID, the more experience the officer has. You may assume that <em style="user-select: auto;">no</em> officers have the same IDs or experience levels. In the diagram above, the number that precedes the officer's name represents each officer's ID.</p>
<p style="user-select: auto;">To succeed at this challenge, you'll need to demonstrate that you can create algorithms to insert, retrieve, and find information in the tree above.</p>
<h2 style="user-select: auto;">Instructions</h2><p style="user-select: auto;">Your goal for this assessment is to get the tests to pass.</p>
<p style="user-select: auto;">To do so, you will be modifying the existing <code style="user-select: auto;">StarshipEnterprise</code> class to solve various problems.</p>
<h3 style="user-select: auto;">Existing files</h3><table style="user-select: auto;">
<thead style="user-select: auto;">
<tr style="user-select: auto;">
<th style="user-select: auto;">File path</th>
<th style="user-select: auto;">Description</th>
</tr>
</thead>
<tbody style="user-select: auto;">
<tr style="user-select: auto;">
<td style="user-select: auto;"><code style="user-select: auto;">src/StarshipEnterprise.js</code></td>
<td style="user-select: auto;">Contains the definition of the <code style="user-select: auto;">StarshipEnterprise</code> class. The <code style="user-select: auto;">constructor()</code> method has already been completed for you.</td>
</tr>
</tbody>
</table>
<h3 style="user-select: auto;">Tasks</h3><p style="user-select: auto;">Complete the following tasks to pass the tests and this assessment.</p>
<p style="user-select: auto;">In <code style="user-select: auto;">src/StarshipEnterpriseOfficer.js</code>, complete the following methods:</p>
<ol style="user-select: auto;">
<li style="user-select: auto;"><p style="user-select: auto;"><code style="user-select: auto;">assignOfficer()</code>: This method should accept an officer ID and name as its arguments, and assign a new officer to an existing officer based on experience level (as indicated by the officer's ID). If there's no existing officer to assign the new officer to, then the new officer is the captain (e.g., <code style="user-select: auto;">Captain Picard</code>).</p>
</li>
<li style="user-select: auto;"><p style="user-select: auto;"><code style="user-select: auto;">findOfficersWithNoDirectReports()</code>: This method should return an array of officers who do <em style="user-select: auto;">not</em> have direct reports. For example, given the Starship USS Enterprise tree described above, the output would be <code style="user-select: auto;">[ "Lieutenant Security-Officer", "Lt. Cmdr. LaForge", "Lieutenant Selar", ]</code>.</p>
</li>
<li style="user-select: auto;"><p style="user-select: auto;"><code style="user-select: auto;">listOfficersByExperience()</code>: This method should return an array of officers in increasing order of military experience. For example, given the Starship USS Enterprise tree described above, the output would be <code style="user-select: auto;">[ "Lieutenant Selar", "Lt. Cmdr. Crusher", "Commander Data", "Captain Picard", "Lt. Cmdr. LaForge", "Commander Riker", "Lieutenant Security-Officer", "Lt. Cmdr. Worf", ]</code>.</p>
</li>
<li style="user-select: auto;"><p style="user-select: auto;"><code style="user-select: auto;">listOfficersByRank()</code>: Suppose a fierce battle with an enemy ensues. This method should take the tree of commanding officers above and outline the ranking officers in their ranking order so that if officers start dropping like flies, you know who the next person to take over command is. Your method should return an object where each property represents the numerical rank, and each value consists of an array of officers (in any experience order) of a particular rank.</p>
</li>
</ol>
<div class="language-tabset" style="user-select: auto;"><div class="language-tab language-js" style="user-select: auto;"><pre style="user-select: auto;"><code class="lang-js" style="user-select: auto;">{
  <span class="hljs-number" style="user-select: auto;">1</span>: [ <span class="hljs-string" style="user-select: auto;">'Captain Picard'</span> ],
  <span class="hljs-number" style="user-select: auto;">2</span>: [ <span class="hljs-string" style="user-select: auto;">'Commander Riker'</span>, <span class="hljs-string" style="user-select: auto;">'Commander Data'</span> ],
  <span class="hljs-number" style="user-select: auto;">3</span>: [ <span class="hljs-string" style="user-select: auto;">'Lt. Cmdr. Worf'</span>, <span class="hljs-string" style="user-select: auto;">'Lt. Cmdr. LaForge'</span>, <span class="hljs-string" style="user-select: auto;">'Lt. Cmdr. Crusher'</span> ],
  <span class="hljs-number" style="user-select: auto;">4</span>: [ <span class="hljs-string" style="user-select: auto;">'Lieutenant Security-Officer'</span>, <span class="hljs-string" style="user-select: auto;">'Lieutenant Selar'</span> ]
}
</code></pre>
</div></div><p style="user-select: auto;">Once these tasks are complete, all tests should pass.</p>
</div> <score-card-instructions challenge="fileTab.file.challenge" style="user-select: auto;"><!----></score-card-instructions> </div>