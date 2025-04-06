<div>
  <h1>React OTP Input Component</h1>
  
  <h2>Quick Reference</h2>
  
  <h3>Core Setup</h3>
  <pre><code>const [otp, setOtp] = useState(Array(length).fill(""));
const refs = useRef([]);</code></pre>

  <h3>Auto-Focus</h3>
  <pre><code>useEffect(() => { refs.current[0].focus(); }, []);</code></pre>

  <h3>Key Handler Pattern</h3>
  <pre><code>const handleKeyDown = (e, index) => {
  // Arrow keys: move focus
  // Backspace: clear + move left 
  // Numbers: set value + move right
};</code></pre>

  <h3>Render Pattern</h3>
  <pre><code>{otp.map((digit, i) => (
  &lt;input
    key={i}
    ref={el => refs.current[i] = el}
    value={digit}
    onKeyDown={(e) => handleKeyDown(e, i)}
  />
))}</code></pre>

  <h3>Quick Tips</h3>
  <ul>
    <li>Always spread state array before modifying</li>
    <li>Check array bounds before focusing</li>
    <li>Use <code>isNaN</code> for number validation</li>
  </ul>
</div>
