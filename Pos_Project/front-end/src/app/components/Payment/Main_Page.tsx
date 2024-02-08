// import First_Article_Buttons from './Transaction/Article_Buttons/First_Article_Buttons/First_Article_Buttons'
// import Second_Article_Buttons from './Transaction/Article_Buttons/Second_Article_Buttons/Second_Article_Buttons'
// import Checkout from './Checkout/Chekout'
// import Transaction_Details from './Transaction/Transaction_Details'
// import {useEffect} from 'react'
// import {Toaster} from 'react-hot-toast'
// import {useDispatch} from 'react-redux'
// import {open_Web_Socket} from '../../../redux/WebSocket/WebSocket_Actions'

// const Main_Page: React.FC = () => {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(open_Web_Socket())
//   }, [])

//   return (
//     <>
//       <div className='row g-5 g-xl-8'>
//         <Toaster position='top-center' />
//         <div className='col-xl-8'>
//           <div>
//             <Transaction_Details className='card-xl-stretch mb-5 mb-xl-8' />
//             <First_Article_Buttons className='card-xl-stretch mb-5 mb-xl-8' prefix='uniqueprefix1'/>
//             <Second_Article_Buttons className='card-xl-stretch mb-5 mb-xl-8' prefix2='uniqueprefix2'/>
//           </div>
//         </div>
//         <div className='col-xl-4'>
//           <Checkout className='card-xl-stretch mb-xl-8' />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Main_Page
// import First_Article_Buttons from './Transaction/Article_Buttons/First_Article_Buttons/First_Article_Buttons'
// import Second_Article_Buttons from './Transaction/Article_Buttons/Second_Article_Buttons/Second_Article_Buttons'
// import Checkout from './Checkout/Chekout'
// import Transaction_Details from './Transaction/Transaction_Details'
// import {useEffect} from 'react'
// import {Toaster} from 'react-hot-toast'
// import {useDispatch} from 'react-redux'
// import {open_Web_Socket} from '../../../redux/WebSocket/WebSocket_Actions'

// const Main_Page: React.FC = () => {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(open_Web_Socket())
//   }, [])

//   return (
//     <>
//       <div className='row g-5 g-xl-8'>
//         <Toaster position='top-center' />
//         <div className='col-xl-8'>
//           <div>
//             <Transaction_Details className='card-xl-stretch mb-5 mb-xl-8' />
//             <First_Article_Buttons className='card-xl-stretch mb-5 mb-xl-8' prefix='uniqueprefix1'/>
//             <Second_Article_Buttons className='card-xl-stretch mb-5 mb-xl-8' prefix2='uniqueprefix2'/>
//           </div>
//         </div>
//         <div className='col-xl-4'>
//           <Checkout className='card-xl-stretch mb-xl-8' />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Main_Page







// import First_Article_Buttons from './Transaction/Article_Buttons/First_Article_Buttons/First_Article_Buttons'
// import Second_Article_Buttons from './Transaction/Article_Buttons/Second_Article_Buttons/Second_Article_Buttons'
// import Checkout from './Checkout/Chekout'
// import Transaction_Details from './Transaction/Transaction_Details'
// import { useEffect, useState } from 'react'
// import { Toaster } from 'react-hot-toast'
// import { useDispatch } from 'react-redux'
// import { open_Web_Socket } from '../../../redux/WebSocket/WebSocket_Actions'

// const Main_Page: React.FC = () => {
//   const dispatch = useDispatch()
//   const [transactionData, setTransactionData] = useState({
//     epan: 'dkkd',
//     licence_plate: 'jd',
//     card_type: 'dk',
//     entry_time: 'qm',
//     duration_stay: 'ql',
//   });

//   const [mainAppState, setMainAppState] = useState<any>(null);

//   const handleDataFromTransactionDetails = (data: any) => {
//     console.log('Data received in the main app component:', data);
//     setMainAppState(data);
//   };


//   useEffect(() => {
//     dispatch(open_Web_Socket())
//   }, [])


//   return (
//     <>
//       <div className='row g-5 g-xl-8'>
//         <Toaster position='top-center' />
//         <div className='col-xl-8'>
//           <div>
//             <Transaction_Details TransactionData={transactionData} className='card-xl-stretch mb-5 mb-xl-8' onButtonClick={handleDataFromTransactionDetails} />
//             <First_Article_Buttons transactionData={transactionData} className='card-xl-stretch mb-5 mb-xl-8' prefix='uniqueprefix1' />
//             <Second_Article_Buttons className='card-xl-stretch mb-5 mb-xl-8' prefix2='uniqueprefix2' />
//           </div>
//         </div>
//         <div className='col-xl-4'>
//           <Checkout className='card-xl-stretch mb-xl-8' />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Main_Page


// const handleButtonClick = () => {
//   const newData = {
//     epan: 'newEPAN',
//     licence_plate: 'newLicensePlate',
//     card_type: 'newCardType',
//     entry_time: 'newEntryTime',
//     duration_stay: 'newDurationStay',
//   };

//   setTransactionData(newData);
// };






import First_Article_Buttons from './Transaction/Article_Buttons/First_Article_Buttons/First_Article_Buttons'
import Second_Article_Buttons from './Transaction/Article_Buttons/Second_Article_Buttons/Second_Article_Buttons'
import Checkout from './Checkout/Chekout'
import Transaction_Details from './Transaction/Transaction_Details'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { open_Web_Socket } from '../../../redux/WebSocket/WebSocket_Actions'

const Main_Page: React.FC = () => {
  const dispatch = useDispatch();
  const [transactionData, setTransactionData] = useState({
    epan: '',
    licence_plate: '',
    card_type: '',
    entry_time: '',
    duration_stay: '',
  });

  const [mainAppState, setMainAppState] = useState<any>(null);

  const handleDataFromTransactionDetails = (data: any) => {
    console.log('Data received in the main app component from Transaction_Details:', data);
    setTransactionData(data);
  };

  useEffect(() => {
    dispatch(open_Web_Socket());
  }, []);

  return (
    <>
      <div className='row g-5 g-xl-8'>
        <Toaster position='top-center' />
        <div className='col-xl-8'>
          <div>
            <Transaction_Details TransactionData={transactionData} className='card-xl-stretch mb-5 mb-xl-8' onButtonClick={handleDataFromTransactionDetails} />
            {/* <Transaction_Details TransactionData={transactionData} className='card-xl-stretch mb-5 mb-xl-8'/> */}
            <First_Article_Buttons transactionData={transactionData} className='card-xl-stretch mb-5 mb-xl-8' prefix='uniqueprefix1' />
            <Second_Article_Buttons className='card-xl-stretch mb-5 mb-xl-8' prefix2='uniqueprefix2' />
          </div>
        </div>
        <div className='col-xl-4'>
          <Checkout className='card-xl-stretch mb-xl-8' />
        </div>
      </div>
    </>
  );
};

export default Main_Page;
