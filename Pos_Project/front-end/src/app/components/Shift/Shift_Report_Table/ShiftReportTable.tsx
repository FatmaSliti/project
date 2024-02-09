import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ShiftReportTable: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null); // State to track selected item for modal
  const [searchLPN, setSearchLPN] = useState(''); // State to track search LPN
  const intl = useIntl();

  interface Item {
    ArticleID: number;
    lpn: string;
    price: number;
    carteType: string;
    duration: string;
    receipt: any;
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on searchLPN when it changes
    if (searchLPN.trim() === '') {
      // If search LPN is empty, show all data
      setFilteredData(data);
    } else {
      // Otherwise, filter data by LPN
      setFilteredData(data.filter(item => item.lpn.toLowerCase().includes(searchLPN.toLowerCase())));
    }
  }, [searchLPN, data]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/report/shift_report');
      if (!response.ok) {
        setFetchError(true);
      } else {
        const jsonData = await response.json();
        setData(jsonData.data);
        setFilteredData(jsonData.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setFetchError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReceiptClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleSearch = () => {
    setFilteredData(data.filter(item => item.lpn.toLowerCase().includes(searchLPN.toLowerCase())));
  };

  const handlePrint = async () => {
    if (selectedItem) {
      try {
        const response = await fetch('http://127.0.0.1:8000/print-from-transaction-details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedItem),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data.message); // Backend message
          handleCloseModal(); // Close the modal after printing successfully
        } else {
          console.error('Error printing:', response.statusText);
        }
      } catch (error) {
        console.error('Error printing:', error);
      }
    }
  };


  return (
    <div className='card-body'>
      <div className='card'>
        <div className='card-header card-header-stretch border-bottom border-gray-200' >
          <div className='d-flex align-items-center justify-content-between'>
            <div className='col'>
              <div className='card-title'>
                <h3 className='fw-bold m-0'>{intl.formatMessage({ id: 'SHIFT.TABLE.TITLE' })}</h3>
              </div>
            </div>
            <div className='col'>
              <div className='input-group'>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by LPN"
                  value={searchLPN}
                  onChange={(e) => setSearchLPN(e.target.value)}
                />
                <button className="btn btn-secondary" type="button" onClick={handleSearch}>Search</button>
              </div>
            </div>
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
                    <td className='min-w-100px'>
                      Receipt
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
                  ) : filteredData.length === 0 ? (
                    <tr>
                      <td colSpan={5} className='text-center'>No data found.</td>
                    </tr>
                  ) : (
                    filteredData.map((item) => (
                      <tr key={item.ArticleID}>
                        <td>{item.ArticleID}</td>
                        <td>{item.lpn}</td>
                        <td className='text-success'>${item.price}</td>
                        <td>{item.carteType}</td>
                        <td>{item.duration}</td>
                        <td>
                          <button className="btn btn-secondary" onClick={() => handleReceiptClick(item)}>
                            Receipt
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for displaying item details */}
      <Modal show={selectedItem !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Receipt Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <div style={{ fontSize: '14px' }}>
              <p>Article ID: {selectedItem.ArticleID}</p>
              <p>LPN: {selectedItem.lpn}</p>
              <p>Price: ${selectedItem.price}</p>
              <p>Carte Type: {selectedItem.carteType}</p>
              <p>Duration: {selectedItem.duration}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlePrint}>
            Print
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ShiftReportTable;
