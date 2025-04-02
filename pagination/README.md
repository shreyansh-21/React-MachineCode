<h1>React Pagination with <code>useState</code> and <code>useEffect</code></h1>

<p>
  This project demonstrates a simple <strong>pagination system</strong> in React using 
  the <code>useState</code> and <code>useEffect</code> hooks. It fetches a list of 100 products 
  from the <strong>DummyJSON API</strong> and displays them <strong>10 per page</strong>.
</p>

<hr>

<h2>📜 Step-by-Step Guide to Pagination</h2>

<h3>1️⃣ Setting Up State Variables</h3>
<p>We need two state variables:</p>
<ul>
  <li><strong><code>products</code></strong> → Stores the fetched product list</li>
  <li><strong><code>page</code></strong> → Tracks the currently selected page</li>
</ul>

<pre><code>
const [products, setProducts] = useState([]);
const [page, setPage] = useState(1);
</code></pre>

<hr>

<h3>2️⃣ Fetching Data from API</h3>
<p>
  We use <code>useEffect</code> to fetch data from 
  <a href="https://dummyjson.com" target="_blank">DummyJSON</a> <strong>once</strong> when the component mounts.
</p>

<pre><code>
useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  const res = await fetch(`https://dummyjson.com/products?limit=100`);
  const data = await res.json();
  
  if (data && data.products) {
    setProducts(data.products);
  }
};
</code></pre>

<hr>

<h3>3️⃣ Displaying Products Per Page</h3>
<p>
  - We use <code>slice()</code> to show <strong>only 10 products per page</strong>.<br>
  - The range of products displayed is calculated as:
</p>
<pre>
  Start Index = (page * 10) - 10
  End Index = page * 10
</pre>

<pre><code>
{products.slice(page * 10 - 10, page * 10).map((prod) => (
  <span className="products__single" key={prod.id}>
    <img src={prod.thumbnail} alt={prod.title} />
    <span>{prod.title}</span>
  </span>
))}
</code></pre>

<hr>

<h3>4️⃣ Pagination Logic</h3>
<p>
  To <strong>change pages</strong>, we define <code>selectPageHandler()</code>:
</p>
<ul>
  <li>✔ Only updates page if it's within a valid range</li>
  <li>✔ Prevents setting the same page again</li>
</ul>

<pre><code>
const selectPageHandler = (selectedPage) => {
  if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
    setPage(selectedPage);
  }
};
</code></pre>

<hr>

<h3>5️⃣ Creating Pagination Buttons</h3>
<ul>
  <li>The <strong>left arrow (◀)</strong> moves <strong>back a page</strong></li>
  <li>The <strong>right arrow (▶)</strong> moves <strong>forward a page</strong></li>
  <li>Clicking a <strong>numbered page</strong> directly navigates to that page</li>
  <li><strong>Disabled class (<code>pagination__disable</code>)</strong> is applied when navigation isn't possible</li>
</ul>

<pre><code>
{products.length > 0 && (
  <div className="pagination">
    {/* Previous Page */}
    <span onClick={() => selectPageHandler(page - 1)} 
      className={page > 1 ? "" : "pagination__disable"}>◀</span>

    {/* Page Numbers */}
    {[...Array(products.length / 10)].map((_, i) => (
      <span key={i} 
        className={page === i + 1 ? "pagination__selected" : ""}
        onClick={() => selectPageHandler(i + 1)}>
        {i + 1}
      </span>
    ))}

    {/* Next Page */}
    <span onClick={() => selectPageHandler(page + 1)} 
      className={page < products.length / 10 ? "" : "pagination__disable"}>▶</span>
  </div>
)}
</code></pre>

<hr>


<p>
  This is a <strong>clean and reusable pagination component</strong> you can use in any React project! 🚀
</p>
