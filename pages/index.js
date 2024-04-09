import HomePage from './components/HomePage';

const products = {
  1: { id: 1, name: 'Laptop', model: 'XPS 15', stock: 20 },
  2: { id: 2, name: 'Smartphone', model: 'Galaxy S21', stock: 35 },
  10: { id: 10, name: 'External Hard Drive', model: 'My Passport 4TB', stock: 22 },
};

export async function getServerSideProps() {

  return { props: { post: products } }; 
}

export default function Home({ post }) {
  return (
    <>
        <HomePage />
    </>

);
}