const products = [
    { id: 1, name: 'Laptop', model: 'XPS 15', stock: 20 },
    { id: 2, name: 'Smartphone', model: 'Galaxy S21', stock: 35 },
    { id: 3, name: 'Tablet', model: 'iPad Pro', stock: 15 },
    { id: 4, name: 'Headphone', model: 'WH-1000XM4', stock: 50 },
    { id: 5, name: 'Camera', model: 'EOS R5', stock: 7 },
    { id: 6, name: 'Smartwatch', model: 'Series 6', stock: 25 },
    { id: 7, name: 'Monitor', model: 'UltraSharp 32', stock: 10 },
    { id: 8, name: 'Keyboard', model: 'MX Keys', stock: 40 },
    { id: 9, name: 'Mouse', model: 'MX Master 3', stock: 30 },
    { id: 10, name: 'External Hard Drive', model: 'My Passport 4TB', stock: 22 },
];

export default function handler(req, res) {
    res.status(200).json( products );
  }