import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ status, domain, modified, children, className }) => {
    return (
        <div className={`list_item ${className}`}>
            <div className={`item status ${status === 'Private' ? 'private' : status === 'Disabled' ? 'disabled' : status === 'Active' ? 'active' : ''}`}>
                <div className="status_icon"></div>
                {status}
            </div>
            <div className="item domain">
                <a href='/' target="_blank" rel="noreferrer">{domain}</a>
            </div>
            <div className="item modified">
                {modified}
            </div>
            <div className="item actions">
                {children}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/elipsis-horizontal.svg`} alt="ellipsis menue"
                    className="icon actions_menueBtn"
                />
            </div>
        </div>
    );
};

ListItem.propTypes = {
    status: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    modified: PropTypes.string
};

export default ListItem;