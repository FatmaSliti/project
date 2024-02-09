// import OrdersThisMonthCard from './OrdersThisMonthCard'

// const mydata = [
//   {
//     price: 8014,
//     title: 'CASH_TURNOVER',
//   },
//   {
//     price: 3000,
//     title: 'Cash Turnover',
//   },
//   {
//     price: 3000,
//     title: 'Cash Turnover',
//   },
//   {
//     price: 600,
//     title: 'Cash total',
//   },
//   {
//     price: 600,
//     title: 'Cash total',
//   },
// ]

// const Card: React.FC = () => {
//   return (
//     <div className='card-body row'>
//       {mydata.map((data, index) => (
//         <OrdersThisMonthCard
//           key={index}
//           price={data.price}
//           title={data.title}
//         />
//       ))}
//     </div>
//   )
// }

// export default Card







// // {
// //   price: 8014,
// //     title: 'CASH_TURNOVER',
// //       progressBarTitle: '1500.3 to Goal',
// //         badgeValue: '5.5',
// //           progressBarValue: '80',
// //             progressBarWidth: '80',
// //   },




import React, { useEffect, useState } from 'react';
import OrdersThisMonthCard from './OrdersThisMonthCard';

const Card: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/report/shift_report');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(Object.entries(jsonData.headerpart));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='card-body row'>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        data.map(([title, price], index) => (
          <OrdersThisMonthCard
            key={index}
            price={price}
            title={title}
          />
        ))
      )}
    </div>
  );
};

export default Card;
