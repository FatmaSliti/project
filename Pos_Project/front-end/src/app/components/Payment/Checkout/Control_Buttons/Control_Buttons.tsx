import React, { useState } from 'react'
import { ButtonsData } from './ButtonsData'
import { useIntl } from 'react-intl'
import BarrierSection from './BarrierSection/BarrierSection'
import { useDispatch, useSelector } from 'react-redux'
import { print_Receipt } from '../../../../../redux/Shift/Shift_Action'

interface ButtonData {
  title: string;
  img: string;
}

const Control_Buttons: React.FC = () => {
  const [selectedButtons, setSelectedButtons] = useState<boolean[]>(Array(3).fill(false));
  const intl = useIntl()
  const { ink_status } = useSelector((state: any) => state.Websocket_Reducers)
  const dispatch = useDispatch()
  const status = ink_status?.ink_status


  // const handleButtonClick = (index: number) => {
  //   setSelectedButtons(index)
  //   if (index === 2) {
  //     dispatch(print_Receipt()); // Replace printAction with your actual action creator
  //   }
  // }

  const handleButtonClick = (index: number) => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[index] = !newSelectedButtons[index];
    setSelectedButtons(newSelectedButtons);
    if (index === 2) {
      dispatch(print_Receipt()); // Replace printAction with your actual action creator
    }
  };

  // const dynamicButtonsData = ButtonsData(status)
  const dynamicButtonsData: ButtonData[] = ButtonsData(status, selectedButtons);


  return (
    <>
      <div className='card mb-5 shadow-sm'>
        <div
          className='d-flex flex-equal gap-4 px-4 py-4'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {dynamicButtonsData.map((data, index: number) => (
            <label
              key={index}
              className={`btn btn-color-gray-600 w-100 py-5 ${selectedButtons[index] ? 'clicked' : ''}`}
              style={{
                backgroundColor: selectedButtons[index] ? '#EEF6FF' : '#F1F1F2',
                border: selectedButtons[index] ? '2px solid #3E97FF' : 'gray',
                color: selectedButtons[index] ? '#3E97FF' : 'gray',
                borderRadius: '12px'
              }}
              onClick={() => handleButtonClick(index)}
            >
              <img src={data.img} alt='imagee' />
              <span className='fw-bold d-block' style={{ fontSize: '16px' }}>
                {intl.formatMessage({ id: data.title })}
              </span>
            </label>
          ))}
        </div>
      </div>
      {selectedButtons[0] && <BarrierSection />}

      {/*      <div id='kt_accordion_1_body_1' className='accordion-collapse collapse'>
        <BarrierSection />
      </div> */}
    </>
  )
}

export default Control_Buttons
