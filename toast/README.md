<p>
    <strong>hoverValue == 0 &amp;&amp; index &lt; starValue</strong>
</p>
<ul>
    <li>Checks if <code>hoverValue</code> is <code>0</code> (meaning the user is not hovering over any star).</li>
    <li>If <code>hoverValue</code> is <code>0</code>, it further checks if <code>index &lt; starValue</code>.</li>
    <li>If both conditions are true, the star gets the <code>"gold"</code> class.</li>
</ul>

<p>
    <strong>index &lt; hoverValue</strong>
</p>
<ul>
    <li>Checks if the index of the star is less than the current <code>hoverValue</code>.</li>
    <li>This means that when the user hovers over a star, all stars before (and including) it will get the <code>"gold"</code> class.</li>
</ul>

<p>
    <strong>Final Logic (<code>||</code> OR operator)</strong>
</p>
<ul>
    <li>If either <code>(hoverValue == 0 &amp;&amp; index &lt; starValue)</code> is true OR <code>index &lt; hoverValue</code> is true, the <code>"gold"</code> class is applied to the star.</li>
    <li>Otherwise, the class is an empty string (<code>""</code>), meaning the star remains unstyled.</li>
</ul>

<p>
    <strong>Summary:</strong>
</p>
<ul>
    <li>If the user has not hovered (<code>hoverValue == 0</code>), then stars up to <code>starValue</code> (the saved rating) are colored gold.</li>
    <li>If the user is hovering (<code>hoverValue &gt; 0</code>), then stars up to <code>hoverValue</code> are colored gold.</li>
    <li>Once the user moves the mouse away, the rating reverts to the saved <code>starValue</code>.</li>
</ul>
