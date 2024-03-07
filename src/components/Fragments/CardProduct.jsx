import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-xs bg-gray-800 border rounded-lg shadow p-5 my-2 mx-2 flex flex-col justify-between">{children}</div>;
};

const Header = ({ image }) => {
  return (
    <a href="">
      <img src={image} alt="shoes" />
    </a>
  );
};

const Body = ({ children, name }) => {
  return (
    <div className="py-5 h-full">
      <h1 className="text-xl font-bold text-white tracking-tight">{name}</h1>
      <p className="text-md text-white">{children}</p>
    </div>
  );
};

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-s font-bold text-white">Rp {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</span>
      <Button classname="bg-red-600" onClick={() => handleAddToCart(id)}>
        Add Card
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
