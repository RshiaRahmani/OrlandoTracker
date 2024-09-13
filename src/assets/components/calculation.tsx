import { ReactNode } from "react";


interface Product {
  branch: ReactNode;
  price: ReactNode;
  name: string;
  category: string;
  expirationDate: string; // Date stored as a string in the format 'YYYY-MM-DD'
}

interface CalcProps {
  products: Product[];
}

const Calculator = ({ products }: CalcProps) => {
  // Function to calculate days left until expiration
  const calculateDaysLeft = (expirationDate: string): number => {
    const currentDate = new Date();
    const expDate = new Date(expirationDate);
    const timeDifference = expDate.getTime() - currentDate.getTime(); // Difference in milliseconds
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert to days

    return daysLeft;
  };

  // Sort products by days left (ascending order)
  const sortedProducts = [...products].sort((a, b) => {
    const daysLeftA = calculateDaysLeft(a.expirationDate);
    const daysLeftB = calculateDaysLeft(b.expirationDate);
    return daysLeftA - daysLeftB;
  });

  return (
    <>
    

    <div className="rounded-xl bg-gray-700 mt-5 bg-zinc-900 content-center justify-center overflow-x-auto text-xs md:text-lg">
  <table className="table-auto min-w-full border-separate [border-spacing:0.95rem]">
    <thead>
      <tr>
        <th >Item</th>
        <th>Category</th>
        <th>Exp. Date</th>
        <th className="hidden md:block">Price</th>
        <th>branch</th>
        <th >Time left</th>
      </tr>
    </thead>
    <tbody >
      {sortedProducts.map((product, index) => {
        const daysLeft = calculateDaysLeft(product.expirationDate);
        const isExpired = daysLeft < 0;

        return (
          <tr key={index} >
            <td >{product.name}</td>
            <td>{product.category}</td>
            <td>{product.expirationDate}</td>
            <td  className="hidden md:block">₺{product.price}</td>
            <td>{product.branch ? product.branch : "-"} </td>
            <td className={isExpired ? 'text-red-500' : ''}>
              {isExpired ? 'Expired' : `${daysLeft} Days`}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

    </>
  );
};

export default Calculator;
