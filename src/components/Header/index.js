import React from 'react';
import { Dropdown } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import './style.css';

const PagesDropdown = (title) => (
    <Dropdown text={title}>
      <Dropdown.Menu className='dropdown'>
        <Dropdown.Item text='Full Width Content' />
        <Dropdown.Item text='Content + Left Sidebar' />
        <Dropdown.Item text='Content + Right Sidebar' />
        <Dropdown.Item text='Content + Both Sidebars' />
        <Dropdown.Item text='Contact' />
        <Dropdown.Item text='404' />
        <Dropdown.Item text='Testimonials' />
        <Dropdown.Item text='About Us' />
        <Dropdown.Item text='Team Member' />
        <Dropdown.Item text='FAQ' />        
      </Dropdown.Menu>
    </Dropdown>
  )

export default function Header() {
    return(
        <header>
            <div>
                <h4>Homepage</h4>
                <h4>{PagesDropdown('Pages')}</h4>
                <h4>{PagesDropdown('Elements')}</h4>
                <h4>{PagesDropdown('Portfolio layouts')}</h4>
                <h4>{PagesDropdown('Gallery layouts')}</h4>
                <h4>Link text</h4>
                <h4>A very long link text</h4>
            </div>
        </header>
    );
}