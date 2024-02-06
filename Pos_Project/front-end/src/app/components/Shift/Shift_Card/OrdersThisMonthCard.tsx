interface OrdersThisMonthCardProps {
  title: string
  progressBarTitle: string
  price: number
  badgeValue: string
  progressBarValue: string
  progressBarWidth: string
}

const OrdersThisMonthCard: React.FC<OrdersThisMonthCardProps> = ({
  title,
  progressBarTitle,
  price,
  badgeValue,
  progressBarValue,
  progressBarWidth,
}) => {
  return (
    <div className="col">
    <div className='card card-flush '>
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <div className='d-flex align-items-center'>
            <span className='fs-4 fw-semibold text-gray-400 me-1 align-self-start'>kwd</span>
            <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'>{price}</span>
            <span className='badge badge-light-success fs-base'>
              <i className='ki-duotone ki-arrow-up fs-5 text-success ms-n1'>
                <span className='path1' />
                <span className='path2' />
              </i>
              {badgeValue}
            </span>
          </div>
          <span className='text-gray-400 pt-1 fw-semibold fs-6'>{title}</span>
        </div>
      </div>
      {/*begin::Progress*/}
      <div
        className='d-flex align-items-center flex-column mt-3 '
        style={{padding: '1rem 2.25rem 2rem'}}
      >
        <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
          <span className='fw-semibold fs-6'>{progressBarTitle}</span>
          <span className='fw-bold fs-6 text-gray-400'>{progressBarValue}%</span>
        </div>
        <div className='h-5px mx-3 w-100 bg-light mb-3'>
          <div
            className='bg-success rounded h-5px'
            role='progressbar'
            style={{width: `${progressBarWidth}%`}}
            // aria-valuenow={62}
            // aria-valuemin={0}
            // aria-valuemax={100}
          />
        </div>
      </div>
      {/*end::Progress*/}
    </div>   </div>
  )
}

export default OrdersThisMonthCard
