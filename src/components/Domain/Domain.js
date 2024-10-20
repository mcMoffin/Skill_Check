import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Tracker from '../Tracker/Tracker';
import Item from '../List_Item/List_Item';

const Domain = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const statuses = items.map(item => item.Status);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: '2-digit'
    });
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div className="live_site">
      <div className="live_site_header">
        <div className="live_site_header_left">
          <h2>Live Site</h2>
          <Tracker className="status" data={statuses}>Live</Tracker>
        </div>
        <Button className='add_btn hidden'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/circle-plus.svg`}
            alt="Upload file"
            width={24}
            height={24}
          />
          Upload file
        </Button>
      </div>
    
      <div className="live_site_body">
        <div className="live_site_body_header">
          <div className='item status'>Status</div>
          <div className='item domain'>Domain</div>
          <div className='item modified'>Last Modified</div>
          <div className='item actions'>Actions</div>
        </div>
        <div className='live_site_list'>
          {currentItems.map((item, index) => (
            <Item
              key={startIndex + index}
              status={item.Status}
              domain={item.Domain}
              modified={formatDate(item.Modified)}
              className={index % 2 === 1 ? "grey" : ""}
            >
              <div className='actions_list'>
                <button className="upBtn">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/arrow-up-on-square.svg`} alt="upSquare" className="icon"/>
                </button>
                <button className="infoBtn">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/information-circle.svg`} alt="info" className="icon"/>
                </button>
                <button className="delete">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/trash.svg`} alt="delete" className="icon"/>
                </button>
              </div>
            </Item>
          ))}
        </div>
        <div className='pagination'>
          <Button className='startBtn' onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>{'<<'}</Button>
          <Button className='prevBtn' onClick={handlePrevPage} disabled={currentPage === 1}>{'<'}</Button>
          <span>
            {`${currentPage} of ${totalPages}`}
          </span>
          <Button className='nextBtn' onClick={handleNextPage} disabled={currentPage === totalPages}>{'>'}</Button>
          <Button className='endBtn' onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>{'>>'}</Button>
        </div>
        
      </div>
    </div>
  );
};

Domain.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Status: PropTypes.string.isRequired,
      Domain: PropTypes.string.isRequired,
      Modified: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Domain;
