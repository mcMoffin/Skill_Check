import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ListItem = ({ key, data,status, domain, modified, children, className }) => {
    const regex = /\.([^.\s]+)$/g;
    const matches = domain.match(regex);

    return (
        <div className={`list_item ${className}`}>
            <div className={`item status ${status === 'Private' ? 'private' : status === 'Disabled' ? 'disabled' : status === 'Active' ? 'active' : ''}`}>
                <div className="status_icon"></div>
                {status}
            </div>
            <div className="item domain">
                {data == 'listItem' ?
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/${matches == '.pdf' ? 'pdf-file' : 'folder-plus'}.svg`} alt="ellipsis menue"
                        className="domainIcon"
                    />
                : null}
                <a href='/' target="_blank" rel="noreferrer">{domain}</a>
            </div>
            <div className="item modified">
                {modified}
            </div>
            <div className="item actions">
                {children}
                <Button className="actions_menueBtn">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/elipsis-vertical.svg`} alt="ellipsis menue"
                        className="icon"
                    />
                </Button>
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