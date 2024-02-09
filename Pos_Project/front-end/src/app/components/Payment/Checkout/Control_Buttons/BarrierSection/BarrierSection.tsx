// import React, { useState } from 'react'
// import { ButtonsData } from '../BarrierSection/ButtonsData'
// import { useIntl } from 'react-intl'

// interface Icon {
//   img: string
//   title: string
// }

// const BarrierSection: React.FC = () => {
//   const intl = useIntl();
//   const [clickedButton, setClickedButton] = useState<number | null>(null);

//   const handleButtonClick = (index: number) => {
//     setClickedButton((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const renderIconRow = (icons: Icon[], startIndex: number) => (
//     <div className='row'>
//       {icons.map((icon: Icon, index: number) => (
//         <div key={index} className='col-md-6 my-1'>
//           <label
//             className={`btn w-100 p-4 d-flex justify-content-center align-items-center gap-3  ${clickedButton === startIndex + index ? 'clicked' : ''}`}
//             style={{
//               boxSizing: 'border-box',
//               border: clickedButton === startIndex + index ? '2px solid #3E97FF' : '2px solid #D8D8E5',
//               borderRadius: '9px',
//               // transition: 'border-width 0.3s ease-in-out',
//             }}
//             onClick={() => handleButtonClick(startIndex + index)}
//           >
//             <img src={icon.img} alt='' className='icon-img' />
//             <span className='fw-bold' style={{ fontSize: '14px' }}>
//               {intl.formatMessage({ id: icon.title })}
//             </span>
//           </label>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       <div className='card mb-5 shadow-sm '>
//         <div
//           className='d-flex flex-column gap-xxl-0 px-4 py-4'
//           data-kt-buttons='true'
//           data-kt-buttons-target='[data-kt-button]'
//         >
//           {renderIconRow(ButtonsData.slice(0, 2), 0)}
//           {renderIconRow(ButtonsData.slice(2, 4), 2)}
//         </div>
//       </div>
//       <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
//         <div className='modal-dialog modal-dialog-centered mw-900px'>
//           <div className='modal-content'></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BarrierSection;






// import React, { useState } from 'react';
// import { useIntl } from 'react-intl';
// import { ButtonsData } from '../BarrierSection/ButtonsData'

// interface Icon {
//   img: string;
//   title: string;
// }

// const BarrierSection: React.FC = () => {
//   const intl = useIntl();
//   const [clickedButton, setClickedButton] = useState<number | null>(null);

//   const handleButtonClick = async (index: number) => {
//     setClickedButton((prevIndex) => (prevIndex === index ? null : index));
//     try {
//       let endpoint = '';
//       switch (index) {
//         case 0:
//           endpoint = '/close-barrier';
//           break;
//           case 1:
//           endpoint = '/open-barrier';
//           break;
//         case 2:
//           endpoint = '/lock-barrier';
//           break;
//         case 3:
//           endpoint = '/unlock-barrier';
//           break;
//         default:
//           // default case
//           break;
//       }

//       if (endpoint) {
//         const response = await fetch(`http://127.0.0.1:8000${endpoint}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           // we can optionally send data in the request body if needed
//           // body: JSON.stringify({}),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to process button click');
//         }

//         // Extract and log response message
//         const responseData = await response.json();
//         console.log('Response message:', responseData.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const renderIconRow = (icons: Icon[], startIndex: number) => (
//     <div className='row'>
//       {icons.map((icon: Icon, index: number) => (
//         <div key={index} className='col-md-6 my-1'>
//           <label
//             className={`btn w-100 p-4 d-flex justify-content-center align-items-center gap-3  ${clickedButton === startIndex + index ? 'clicked' : ''
//               }`}
//             style={{
//               boxSizing: 'border-box',
//               border: clickedButton === startIndex + index ? '2px solid #3E97FF' : '2px solid #D8D8E5',
//               borderRadius: '9px',
//             }}
//             onClick={() => handleButtonClick(startIndex + index)}
//           >
//             <img src={icon.img} alt='' className='icon-img' />
//             <span className='fw-bold' style={{ fontSize: '14px' }}>
//               {intl.formatMessage({ id: icon.title })}
//             </span>
//           </label>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       <div className='card mb-5 shadow-sm '>
//         <div
//           className='d-flex flex-column gap-xxl-0 px-4 py-4'
//           data-kt-buttons='true'
//           data-kt-buttons-target='[data-kt-button]'
//         >
//           {renderIconRow(ButtonsData.slice(0, 2), 0)}
//           {renderIconRow(ButtonsData.slice(2, 4), 2)}
//         </div>
//       </div>
//       <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
//         <div className='modal-dialog modal-dialog-centered mw-900px'>
//           <div className='modal-content'></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BarrierSection;






import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { ButtonsData } from '../BarrierSection/ButtonsData';

interface Icon {
  img: string;
  title: string;
}

const BarrierSection: React.FC = () => {
  const intl = useIntl();
  const [clickedButton, setClickedButton] = useState<number | null>(null);
  const [requestSuccess, setRequestSuccess] = useState<boolean>(false);

  const handleButtonClick = async (index: number) => {
    setClickedButton((prevIndex) => (prevIndex === index ? null : index));
    try {
      let endpoint = '';
      switch (index) {
        case 0:
          endpoint = '/close-barrier';
          break;
        case 1:
          endpoint = '/open-barrier';
          break;
        case 2:
          endpoint = '/lock-barrier';
          break;
        case 3:
          endpoint = '/unlock-barrier';
          break;
        default:
          // default case
          break;
      }

      if (endpoint) {
        // Send request to backend
        const response = await fetch(`http://127.0.0.1:8000${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // You can optionally send data in the request body if needed
          // body: JSON.stringify({}),
        });

        if (!response.ok) {
          throw new Error('Failed to process button click');
        }

        // Extract and log response message
        const responseData = await response.json();
        console.log('Response message:', responseData.message);

        // Set requestSuccess to true on successful response
        setRequestSuccess(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderIconRow = (icons: Icon[], startIndex: number) => (
    <div className='row'>
      {icons.map((icon: Icon, index: number) => (
        <div key={index} className='col-md-6 my-1'>
          <label
            className={`btn w-100 p-4 d-flex justify-content-center align-items-center gap-3  ${clickedButton === startIndex + index ? 'clicked' : ''}`}
            style={{
              boxSizing: 'border-box',
              border: clickedButton === startIndex + index ? '2px solid #3E97FF' : '2px solid #D8D8E5',
              borderRadius: '9px',
            }}
            onClick={() => {
              handleButtonClick(startIndex + index);
            }}
          >
            <img src={icon.img} alt='' className='icon-img' />
            <span className='fw-bold' style={{ fontSize: '14px' }}>
              {intl.formatMessage({ id: icon.title })}
            </span>
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {!requestSuccess && (
        <div className='card mb-5 shadow-sm '>
          <div
            className='d-flex flex-column gap-xxl-0 px-4 py-4'
            data-kt-buttons='true'
            data-kt-buttons-target='[data-kt-button]'
          >
            {renderIconRow(ButtonsData.slice(0, 2), 0)}
            {renderIconRow(ButtonsData.slice(2, 4), 2)}
          </div>
        </div>
      )}
      <div className={`modal fade ${requestSuccess ? 'show' : ''}`} tabIndex={-1} id='kt_modal_1'>
        <div className='modal-dialog modal-dialog-centered mw-900px'>
          <div className='modal-content'></div>
        </div>
      </div>
    </>
  );
};

export default BarrierSection;

