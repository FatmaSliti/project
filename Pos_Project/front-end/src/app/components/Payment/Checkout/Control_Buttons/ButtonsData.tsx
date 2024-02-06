export const ButtonsData = (status, selectedButtons) => [
  {
    title: 'CHEKOUT.BARRIER.BUTTON',
    img: `media/buttons/${selectedButtons[0] ? 'new-' : ''}Barrier.svg`,
  },
  {
    title: status === 'ink_out' ? 'NO INK' : 'CHEKOUT.PRINT.BUTTON',
    img: status === 'ink_out' ? '' : `media/buttons/${selectedButtons[1] ? 'new-' : ''}Print.svg`,
  },
  {
    title: 'CHEKOUT.RECEIPT.BUTTON',
    img: `media/buttons/${selectedButtons[2] ? 'new-' : ''}Receipt.svg`,
  },
];
