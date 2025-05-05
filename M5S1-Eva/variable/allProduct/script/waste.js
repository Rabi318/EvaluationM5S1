//   <div class="allProductBoxOuter">
//   <!-- for outer border and space  -->
//   <div class="allProdcutBoxInner">
//     <!-- inner box contain the main product info  -->
//     <!-- flex or grid with single col view here  -->
//     <div id="innerProductImage">
//       <img src="" alt="" id="productImage" />
//     </div>

//     <span id="productNameInBox"> </span>

//     <span id="priceInfo">
//       <!-- will auto update manually based on nav application -->
//       <span id="currencySign"></span>
//       <span id="currencyAmount"></span>
//     </span>

//     <!-- it will update only in the case of diff between actual and offer price is zero  -->
//     <span id="actualPriceInfo">
//       <span id="actualPriceInBox"></span>
//       <span id="discountInfoInBox"></span>
//     </span>

//     <div id="footerBox">
//       <span id="likeProduct">
//         <img src="" alt="" id="likeUpdate" />
//         <span id="countNo"></span>
//       </span>

//       <span id="freeShiping">
//         <!-- only if true  -->
//       </span>
//     </div>
//   </div>
// </div>

//! Product Card
const ProductCard = ({ product }) => {
  const [likes, setLikes] = React.useState(0);
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
    </div>
  );
};

//!Product List
const ProductList = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (loading) return <p>Loading Products....</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
