import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

const ShiftReportTable: React.FC = () => {
  const [data, setData] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const intl = useIntl()

  interface Item {
    ArticleID: number
    lpn: string
    price: number
    carteType: string
    duration: string
  }

  useEffect(() => {
    fetchData()
  }, [])

  // const fetchData = async () => {
  //   setIsLoading(true)
  //   try {
  //     const response = await fetch('http://127.0.0.1:8000/report/shift_report')
  //     if (!response.ok) {
  //       setFetchError(true)
  //     } else {
  //       const jsonData = await response.json()
  //       setData(jsonData)
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //     setFetchError(true) // Set fetch error flag on error
  //   } finally {
  //     setIsLoading(false) // Always set loading to false after fetch
  //   }
  // }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/report/shift_report');
      if (!response.ok) {
        setFetchError(true);
      } else {
        const jsonData = await response.json();
        setData(jsonData.data); // Extract 'data' from the response object
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setFetchError(true); // Set fetch error flag on error
    } finally {
      setIsLoading(false); // Always set loading to false after fetch
    }
  };

  return (
    <div className='card-body'>
      <div className='card'>
        <div className='card-header card-header-stretch border-bottom border-gray-200'>
          <div className='card-title'>
            <h3 className='fw-bold m-0'>{intl.formatMessage({ id: 'SHIFT.TABLE.TITLE' })}</h3>
          </div>
          <div className='card-toolbar m-0'>
            <ul className='nav nav-stretch nav-line-tabs border-transparent' role='tablist'></ul>
          </div>
        </div>
        <div className='tab-content'>
          <div
            id='kt_billing_months'
            className='card-body p-0 tab-pane fade show active'
            role='tabpanel'
            aria-labelledby='kt_billing_months'
          >
            <div className='table-responsive'>
              <table className='table table-row-bordered align-middle gy-4 gs-9'>
                <thead className='border-bottom border-gray-200 fs-6 fw-bold bg-light bg-opacity-75'>
                  <tr>
                    <td className=' min-w-150px'>
                      {intl.formatMessage({ id: 'SHIFT.TABLE.HEADER.ARTICLE_ID' })}
                    </td>
                    <td className=' min-w-150px'>LPN</td>
                    <td className=' min-w-150px'>
                      {intl.formatMessage({ id: 'SHIFT.TABLE.HEADER.PRICE' })}
                    </td>
                    <td className=' min-w-150px'>
                      {intl.formatMessage({ id: 'SHIFT.TABLE.HEADER.CARTE_TYPE' })}
                    </td>
                    <td className=' min-w-100px'>
                      {intl.formatMessage({ id: 'SHIFT.TABLE.HEADER.DURATION' })}
                    </td>
                  </tr>
                </thead>
                <tbody className='fw-semibold text-gray-600'>
                  {fetchError ? (
                    <tr>
                      <td colSpan={5} className='text-center'>Error fetching data.</td>
                    </tr>
                  ) : isLoading ? (
                    <tr>
                      <td colSpan={5} className='text-center'>Data is Loading...</td>
                    </tr>
                  ) : data.length === 0 ? (
                    <tr>
                      <td colSpan={5} className='text-center'>No data found.</td>
                    </tr>
                  ) : (
                    data.map((item) => (
                      <tr key={item.ArticleID}>
                        <td>{item.ArticleID}</td>
                        <td>{item.lpn}</td>
                        <td className='text-success'>${item.price}</td>
                        <td>{item.carteType}</td>
                        <td>{item.duration}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShiftReportTable
