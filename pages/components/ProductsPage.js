// components/ProductPage.js
import ProductsPageCss from '../../styles/ProductsPage.module.css'; // CSS modülümüzü içe aktarıyoruz.
import Head from 'next/head'; // Head bileşenini içe aktarıyoruz.
function ProductPage({ post }) {
    // Burada `post` aslında `products` veri setimiz olacak.
    const products = post; // `post` yerine doğrudan `products` olarak da adlandırılabilir.
  
    return (
      <div>
        <Head>
          <title>Ürün Listesi</title>
          <meta name="description" content="Ürün listesi" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={ProductsPageCss.title}>Ürün Listesi</h1>
        <div>
          {products && Object.values(products).map((product) => (
            <div key={product.id}>
              <h2 className='productName'>{product.name}</h2>
              <style jsx>{`
              .productName {
                color: #333;
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
              }
              `}</style>
              
              <p>Model: {product.model}</p>
              <p>Stokta kalan: {product.stock}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductPage;