import OrdersThisMonthCard from './OrdersThisMonthCard'

const mydata = [
  {
    price: 8014,
    title: 'CASH_TURNOVER',
  },
  {
    price: 3000,
    title: 'Cash Turnover',
  },
  {
    price: 3000,
    title: 'Cash Turnover',
  },
  {
    price: 600,
    title: 'Cash total',
  },
  {
    price: 600,
    title: 'Cash total',
  },
]

const Card: React.FC = () => {
  return (

    <div className='card-body row'>
      {mydata.map((data, index) => (
        <OrdersThisMonthCard
          key={index}
          price={data.price}
          title={data.title}
        />
      ))}
    </div>
  )
}

export default Card


// {
//   price: 8014,
//     title: 'CASH_TURNOVER',
//       progressBarTitle: '1500.3 to Goal',
//         badgeValue: '5.5',
//           progressBarValue: '80',
//             progressBarWidth: '80',
//   },
