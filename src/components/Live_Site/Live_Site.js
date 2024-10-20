import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Tracker from '../Tracker/Tracker';
import Item from '../List_Item/List_Item';

const LiveSite = ({ items }) => {
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
        <Button className='upload_btn'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/upload-white.svg`}
            alt="Upload file"
            width={15}
            height={15}
          />
          Upload file
        </Button>
      </div>
    
      <div className='drop_box'>
        <div className='card'>
          <img
            className='card_icon'
            src={`${process.env.PUBLIC_URL}/assets/icons/document-plus.svg`}
            alt="document plus"
            width={24}
            height={24}
          />
          <h4>or drag and drop your files here</h4>
          <h5>HTML, PDF, PHP or ZIP – Maximum file size 75 MB</h5>
        </div>
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
                <button className="editBtn">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/pencil-square.svg`} alt="Edit" className="icon"/>
                </button>
                <button className="pingBtn">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/chart-bar.svg`} alt="ping" className="icon"/>
                </button>
                <button className="linkBtn">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/link.svg`} alt="link" className="icon"/>
                </button>
                <button className="ellipsisBtn">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/elipsis-vertical.svg`} alt="menue" className="icon"/>
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

LiveSite.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Status: PropTypes.string.isRequired,
      Domain: PropTypes.string.isRequired,
      Modified: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LiveSite;
