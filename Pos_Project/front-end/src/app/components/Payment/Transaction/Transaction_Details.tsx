// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, {useEffect, useState} from 'react'
// import {useIntl} from 'react-intl'
// import Transaction_Table from './Transaction_Table/Transaction_Table'
// import {useSelector} from 'react-redux'
// import Search_Card from './Search_Card/Search_Card'

// type Props = {
//   className: string
// }
// const Transaction_Details: React.FC<Props> = ({className}) => {
//   const {data} = useSelector((state: any) => state.Websocket_Reducers)
//   const image = data?.ticket_data?.image
  
//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col'>
//               <div
//                 className='bgi-position-center h-100 bgi-no-repeat bgi-size-contain'
//                 style={{backgroundImage: image ? `url("${image}")` : `url('media/svg/files/blank-image.svg')`}}
//               />
//             </div>
//             <div className='col-7'>
//               <Transaction_Table />
//             </div>
//           </div>
//           <div className='separator separator mt-8'></div>
//           <div className='mt-6'>
//             <Search_Card />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Transaction_Details
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import Transaction_Table from './Transaction_Table/Transaction_Table'
import { useSelector } from 'react-redux'
import Search_Card from './Search_Card/Search_Card'


interface TransactionData {
  epan: string;
  licence_plate: string;
  card_type: string;
  entry_time: string;
  duration_stay: string;
}

interface Props {
  className: string;
  TransactionData: TransactionData;
  // onButtonClick: () => void;
  onButtonClick: (data: any) => void;
}

const Transaction_Details: React.FC<Props> = ({ className, TransactionData, onButtonClick }) => {
  const [transactionDetailsData, setTransactionDetailsData] = useState<any>(null);

  const handleDataFromChild = (data: any) => {
    console.log('Data received in transaction details:', data);
    setTransactionDetailsData(data);
  };

  const { data } = useSelector((state: any) => state.Websocket_Reducers)
  const image = data?.ticket_data?.image

  return (
    <div className={`card ${className}`}>
      <div className='card-body'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div
                className='bgi-position-center h-100 bgi-no-repeat bgi-size-contain'
                style={{ backgroundImage: image ? `url("${image}")` : `url('media/svg/files/blank-image.svg')` }}
              />
            </div>
            <div className='col-7'>
              <Transaction_Table onButtonClick={handleDataFromChild} />
              {/* <Transaction_Table TransactionData={TransactionData}  /> */}
            </div>
          </div>
          <div className='separator separator mt-8'></div>
          <div className='mb-4 mt-6'>
            <Search_Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction_Details
