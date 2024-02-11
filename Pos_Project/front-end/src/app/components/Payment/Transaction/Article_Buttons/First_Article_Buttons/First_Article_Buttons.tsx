// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { ObjectId } from 'mongodb';

// type Props = {
//   className: string;
//   prefix: string;
//   transactionData: any;
// };

// interface ButtonData {
//   _id: ObjectId;
//   img: string;
//   title: string;
//   action: { url: string; activeinpayment: boolean };
// }

// const First_Article_Buttons: React.FC<Props> = ({ className, prefix, transactionData }) => {
//   const [buttonsData, setButtonsData] = useState<ButtonData[]>([]);
//   const [clickedButton, setClickedButton] = useState<number | null>(null);

//   const handleButtonClick = async (buttonId) => {
//     try {
//       console.log('Transaction Data before fetch:', transactionData);
//       const response = await fetch('http://127.0.0.1:8000/button-click', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: buttonsData[buttonId]._id,
//           transactionData: transactionData,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Transaction Data after fetch:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//     setClickedButton(buttonId);
//   };

//   useEffect(() => {
//     const fetchButtonsData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/get_buttons_data');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setButtonsData(data.buttons);
//         console.log(data.buttons);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchButtonsData();
//   }, []);

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body' style={{ position: 'relative', margin: '0 20px', padding: '2rem 4rem' }}>
//         <div className={`swiper-button-next ${prefix}-swiper-button-next`} style={{ color: 'black', fontWeight: 'bold', transform: 'scale(0.3)', position: 'absolute', right: 0, top: '50%' }}></div>
//         <div className={`swiper-button-prev ${prefix}-swiper-button-prev`} style={{ color: 'black', fontWeight: 'bold', transform: 'scale(0.3)', position: 'absolute', left: 0, top: '50%' }}></div>
//         <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           spaceBetween={10}
//           slidesPerView={5}
//           navigation={{
//             nextEl: `.${prefix}-swiper-button-next`,
//             prevEl: `.${prefix}-swiper-button-prev`,
//           }}
//           style={{ textAlign: 'center' }}
//         >
//           {buttonsData.length > 0 &&
//             buttonsData.map((button, index) => (
//               <SwiperSlide key={`${prefix}-${index}`}>
//                 <button
//                   className={`btn btn-outline btn-flex flex-column pt-9 pb-7 page-bg show rounded-4`}
//                   style={{
//                     width: 148,
//                     height: 150,
//                     border: clickedButton === index ? '3.45px solid #3E97FF' : '1.58px solid #D8D8E5',
//                   }}
//                   onClick={() => handleButtonClick(index)}
//                 >
//                   <div className='mb-3'>
//                     <img src={button.img} className='w-50px' alt='' />
//                   </div>
//                   <div className=''>
//                     <span className='text-gray-800 fw-bold d-block pt-1' style={{ fontSize: '18px', lineHeight: '22px' }}>
//                       {button.title}
//                     </span>
//                   </div>
//                 </button>
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;



// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { ObjectId } from 'mongodb';

// type Props = {
//   className: string;
//   prefix: string;
//   transactionData: any;
// };

// interface ButtonData {
//   _id: ObjectId;
//   img: string;
//   title: string;
//   action: { url: string; activeinpayment: boolean };
// }

// const First_Article_Buttons: React.FC<Props> = ({ className, prefix, transactionData }) => {
//   const [buttonsData, setButtonsData] = useState<ButtonData[]>([]);
//   const [clickedButton, setClickedButton] = useState<number | null>(null);

//   const handleButtonClick = async (buttonId) => {
//     try {
//       console.log('Transaction Data before fetch:', transactionData);
//       const response = await fetch('http://127.0.0.1:8000/button-click', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: buttonsData[buttonId]._id,
//           transactionData: transactionData,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Transaction Data after fetch:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//     setClickedButton(buttonId);
//   };

//   useEffect(() => {
//     const fetchButtonsData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/get_buttons_data');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setButtonsData(data.buttons);
//         console.log(data.buttons);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchButtonsData();
//   }, []);

//   return (
//     <div className={`card ${className}`}>
//       <div className='card-body' style={{ position: 'relative', margin: '0 20px', padding: '2rem 4rem' }}>
//         <div className={`swiper-button-next ${prefix}-swiper-button-next`} style={{ color: 'black', fontWeight: 'bold', transform: 'scale(0.3)', position: 'absolute', right: 0, top: '50%' }}></div>
//         <div className={`swiper-button-prev ${prefix}-swiper-button-prev`} style={{ color: 'black', fontWeight: 'bold', transform: 'scale(0.3)', position: 'absolute', left: 0, top: '50%' }}></div>
//         <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           spaceBetween={10}
//           slidesPerView={5}
//           navigation={{
//             nextEl: `.${prefix}-swiper-button-next`,
//             prevEl: `.${prefix}-swiper-button-prev`,
//           }}
//           style={{ textAlign: 'center' }}
//         >
//           {buttonsData.length > 0 &&
//             buttonsData.map((button, index) => (
//               <SwiperSlide key={`${prefix}-${index}`}>
//                 <button
//                   className={`btn btn-outline btn-flex flex-column pt-9 pb-7 page-bg show rounded-4`}
//                   style={{
//                     width: 148,
//                     height: 150,
//                     // border: clickedButton === index ? '3.45px solid #3E97FF' : '1.58px solid #D8D8E5',
//                     backgroundColor: clickedButton === index ? '#3e97ff' : '',

//                   }}
//                   onClick={() => handleButtonClick(index)}
//                 >
//                   <div className='mb-3'>
//                     <img src={button.img} className='w-50px' alt='' />
//                   </div>
//                   <div className=''>
//                     <span className='text-gray-800 fw-bold d-block pt-1' style={{ fontSize: '18px', lineHeight: '22px' }}>
//                       {button.title}
//                     </span>
//                   </div>
//                 </button>
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default First_Article_Buttons;

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ObjectId } from 'mongodb';

type Props = {
  className: string;
  prefix: string;
  transactionData: any;
};

interface ButtonData {
  _id: ObjectId;
  img: string;
  title: string;
  action: { url: string; activeinpayment: boolean };
}

const First_Article_Buttons: React.FC<Props> = ({ className, prefix, transactionData }) => {
  const [buttonsData, setButtonsData] = useState<ButtonData[]>([]);
  const [clickedButton, setClickedButton] = useState<number | null>(null);

  const handleButtonClick = async (buttonId) => {
    try {
      // console.log('Transaction Data before fetch:', transactionData);
      const response = await fetch('http://127.0.0.1:8000/button-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: buttonsData[buttonId]._id,
          transactionData: transactionData,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Transaction Data after fetch:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    setClickedButton(buttonId);
    setTimeout(() => setClickedButton(null), 300); // Remove clicked class after 300ms
  };

  useEffect(() => {
    const fetchButtonsData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/get_buttons_data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setButtonsData(data.buttons);
        console.log(data.buttons);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchButtonsData();
  }, []);

  return (
    <div className={`card ${className}`}>
      <div className='card-body' style={{ position: 'relative', margin: '0 20px', padding: '2rem 4rem' }}>
        <div className={`swiper-button-next ${prefix}-swiper-button-next`} style={{ color: 'black', fontWeight: 'bold', transform: 'scale(0.4)', position: 'absolute', right: 0, top: '50%' }}></div>
        <div className={`swiper-button-prev ${prefix}-swiper-button-prev`} style={{ color: 'black', fontWeight: 'bold', transform: 'scale(0.4)', position: 'absolute', left: 0, top: '50%' }}></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation={{
            nextEl: `.${prefix}-swiper-button-next`,
            prevEl: `.${prefix}-swiper-button-prev`,
          }}
          style={{ textAlign: 'center' }}
        >
          {buttonsData.length > 0 &&
            buttonsData.map((button, index) => (
              <SwiperSlide key={`${prefix}-${index}`}>
                <button
                  className={`btn btn-outline btn-flex flex-column pt-9 pb-7 page-bg show rounded-4`}
                  style={{
                    width: 148,
                    height: 150,
                    // backgroundColor: clickedButton === index ? '#3591f8' : '',
                    // backgroundColor: clickedButton === index ? '#D5E8FF' : '',
                    // color: clickedButton === index ? 'white' : 'black',
                    border: clickedButton === index ? '3.45px solid #3E97FF' : '1.58px solid #D8D8E5',
                  }}
                  onClick={() => handleButtonClick(index)}
                >
                  <div className='mb-3'>
                    <img src={button.img} className='w-50px' alt='' />
                  </div>
                  <div className=''>
                    <span className=' fw-bold d-block pt-1' style={{ fontSize: '18px', lineHeight: '22px' }}>
                      {button.title}
                    </span>
                  </div>
                </button>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default First_Article_Buttons;
