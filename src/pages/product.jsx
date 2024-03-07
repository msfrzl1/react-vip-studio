import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image: "/images/shoes-1.jpg",
    name: "New Shoes",
    description: `orem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit voluptas fuga praesentium eum maxime repellendus vitae! Sapiente quibusdam molestiae architecto? Quibusdam dolores neque corrupti illum.`,
    price: 1000000,
  },
  {
    id: 2,
    image: "/images/shoes-1.jpg",
    name: "Old Shoes",
    description: `orem ipsum dolor sit amet consectetur, adipisicing elit.`,
    price: 500000,
  },
  {
    id: 3,
    image: "/images/shoes-1.jpg",
    name: "Old Shoes",
    description: `orem ipsum dolor sit amet consectetur, adipisicing elit.`,
    price: 500000,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.some((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex justify-end bg-blue-500 text-white items-center px-5 h-20">
        {email}
        <Button classname="ml-5 bg-red-500" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex justify-center py-5">
        <div className="w-8/12 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className="w-7/12 mr-5">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

          <table className="text-left table-auto w-full border border-slate-300 my-5 rounded shadow  text-sm bg-slate-50">
            <thead className="uppercase border-b-2">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>Rp {product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                    <td>{item.qty}</td>
                    <td>Rp {(product.price * item.qty).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
