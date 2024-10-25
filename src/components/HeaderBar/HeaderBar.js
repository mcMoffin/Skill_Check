import React, { useState } from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';

const HeaderBar = () => {
    const dropdownOptions = {
        default_option:{
            value: 'default',
            text: 'Tiiny Plan',
            className: 'tp',
            href: '/',
            img: {
                src: `${process.env.PUBLIC_URL}/assets/logos/bnb_logo.png`,
                alt: 'BNB Logo'
            }
        },
        option_list: [
            {
                value: 'Account',
                text: 'My Account',
                className: 'user',
                href: '/',
                img: {
                    src: `${process.env.PUBLIC_URL}/assets/icons/user-circle.svg`,
                    alt: 'user'
                }
            },
                {
                value: 'Upgrade',
                text: 'Upgrade Subscription',
                className: 'upgrade',
                href: '/',
                img: {
                    src: `${process.env.PUBLIC_URL}/assets/icons/rocket.svg`,
                    alt: 'Rocket Icon'
                }
            },
            {
                value: 'My Team',
                text: 'My Team',
                className: 'team',
                href: '/',
                img: {
                    src: `${process.env.PUBLIC_URL}/assets/icons/user-group.svg`,
                    alt: 'Group Icon'
                }
            },
            {
                value: 'Settings',
                text: 'Settings',
                className: 'settings',
                href: '/',
                img: {
                    src: `${process.env.PUBLIC_URL}/assets/icons/cog-8-teeth.svg`,
                    alt: 'Cog Icon'
                }
            },
            {
                value: 'Sign Out',
                text: 'Sign Out',
                className: 'sign-out',
                href: '/',
                img: {
                    src: `${process.env.PUBLIC_URL}/assets/icons/arrow-right-end-on-rectangle.svg`,
                    alt: 'Sign Out Icon'
                }
            }
        ]
    };

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header>
            <div className="header_left">
                <img
                    src="../assets/logo.png"
                    className="logo"
                    alt="logo"
                />
    
        <nav className={isNavOpen ? 'open' : ''}>
            <ul>
                <li>
                <a href="/">
                    <img src="/assets/icons/chat-bubble-left.svg" width={15} height={15} alt="Support icon" />
                    <span>Support</span>
                </a>
                </li>
                <li>
                <a href="/">
                    <img src="/assets/icons/open-book.svg" width={15} height={15} alt="Help Guide icon" />
                    <span>Help Guide</span>
                </a>
                </li>
                <li>
                <a href="/">
                    <img src="/assets/icons/bolt.svg" width={15} height={15} alt="Integrations icon" />
                    <span>Integrations</span>
                </a>
                </li>
            </ul>
        </nav>
    </div>

    <div className="header_right">
                <Dropdown
                    className={"user_settings"}
                    defaultOption={dropdownOptions.default_option}
                    options={dropdownOptions.option_list}
                    onSelect={() => { console.log('clicked') }}
                />
        <Button className="hidden gradient-button">
        <span>Upgrade</span>
        <SVGIcon
            id="arrow"
            className='icon gradient-icon'
            svg_url={`${process.env.PUBLIC_URL}/assets/icons/right_arrow.svg`}
        />
        </Button>
    </div>
        <Button className="hamburger" onClick={toggleNav}>☰</Button>
    </header>
    );
};

export default HeaderBar;