import React from 'react';

import SideBarSelect from './../sidebar-select'

import './sidebar.css'

const SideBar = () => {
  return <div className='sidebar'>
    <SideBarSelect/>
    <SideBarSelect/>
  </div>;
};

export default SideBar;
