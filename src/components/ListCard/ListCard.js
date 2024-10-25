import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon/SVGIcon';
import Button from '../Button/Button';
import Tracker from '../ItemTracker/ItemTracker';
import Dropdown from '../Dropdown/Dropdown';
import ListItem from '../ListItem/ListItem';

const ListCard = ({name, items, children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
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
    <div className="card">
      <div className="card_header">
        <div className="card_header_left">
          <h2>{children}</h2>
          <Tracker className="status" data={statuses}>Live</Tracker>
        </div>
      
        {name == 'liveSite' ?
          <Button className='btn upload_btn'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/upload-white.svg`}
              alt="Upload file"
            />
            Upload file
          </Button>
        :
          <Button className='btn add_btn'>
            <SVGIcon
              className="add_btn_icon"
              svg_url={`${process.env.PUBLIC_URL}/assets/icons/plus-circle.svg`}
            />
            Add New
          </Button>
        }
      
      </div>
    
      {name == 'liveSite' ? <div className='drop_box_container'>
        <div className='drop_box'>
          <SVGIcon
            className='card_icon'
            svg_url={`${process.env.PUBLIC_URL}/assets/icons/document-plus.svg`}
          />
          <h4>or drag and drop your files here</h4>
          <p>HTML, PDF, PHP or ZIP – Maximum file size 75 MB</p>
        </div>
      </div> : ''}
      <div className="card_body">
        <div className="card_body_header">
          <div className='item status'>{name == 'liveSite' ? "Status" : "Linked"}</div>
          <div className='item domain'>Domain</div>
          <div className='item modified'>Last Modified</div>
          <div className='item actions'>Actions</div>
        </div>
        <div className='card_list'>
          {currentItems.map((item, index) => (
            <ListItem
              key={startIndex + index}
              data={name == 'liveSite' ? "listItem" : "domainItem"}
              status={item.Status}
              domain={item.Domain}
              modified={formatDate(item.Modified)}
              className={index % 2 === 1 ? "grey" : ""}
            >
              <div className='actions_list'>
                <button className="editBtn">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/pencil-square.svg`} alt="Edit" className="actionIcon"/>
                </button>
                <button className="pingBtn">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/chart-bar.svg`} alt="ping" className="actionIcon"/>
                </button>
                <button className="linkBtn">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/link.svg`} alt="link" className="actionIcon"/>
                </button>
                <button className="ellipsisBtn">
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/elipsis-vertical.svg`} alt="menue" className="actionIcon"/>
                </button>
              </div>
            </ListItem>
          ))}
        </div>
        {totalPages > 1 && (
          <div className='pagination'>
            <Button className='startBtn' onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>{'<<'}</Button>
            <Button className='prevBtn' onClick={handlePrevPage} disabled={currentPage === 1}>{'<'}</Button>
            <span className='pagination-text'>
              <div className='pagination-current'>
                {`${currentPage}`}
              </div>
              {` of ${totalPages}`}
            </span>
            <Button className='nextBtn' onClick={handleNextPage} disabled={currentPage === totalPages}>{'>'}</Button>
            <Button className='endBtn' onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>{'>>'}</Button>
            <span className='pagination_dropdown_container'>Show <Dropdown
              className='pagination_dropdown'
              defaultOption={`${currentPage}`}
              options={Array.from({ length: totalPages }, (_, index) => index + 1)}
              onSelect={(value) => {setCurrentPage(value)}}
            /></span>
          </div>
        )}
      </div>
    </div>
  );
};

ListCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Status: PropTypes.string.isRequired,
      Domain: PropTypes.string.isRequired,
      Modified: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListCard;
