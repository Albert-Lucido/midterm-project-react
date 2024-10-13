import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const NavbarItem = [
  {
    title: 'DISPLAY ALL ITEMS',
    path: '/',
    icon: <FaIcons.FaList />,
    cName: 'nav-text'
  },
  {
    title: 'ADD ITEM',
    path: '/Add',
    icon: <MdIcons.MdAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'DISPLAY ITEMS BY CATEGORY',
    path: '/DisplayCategory',
    icon: <FaIcons.FaFilter />,
    cName: 'nav-text'
  },
  {
    title: 'DISPLAY LOW STOCK ITEMS',
    path: '/DisplayLow',
    icon: <IoIcons.IoMdWarning />,
    cName: 'nav-text'
  },
  {
    title: 'REMOVE ITEM',
    path: '/Remove',
    icon: <MdIcons.MdRemoveCircle />,
    cName: 'nav-text'
  },
  {
    title: 'SEARCH ITEM',
    path: '/Search',
    icon: <FaIcons.FaSearch />,
    cName: 'nav-text'
  },
  {
    title: 'SORT ITEMS',
    path: '/Sort',
    icon: <FaIcons.FaSort />,
    cName: 'nav-text'
  },
  {
    title: 'UPDATE ITEM',
    path: '/Update',
    icon: <MdIcons.MdUpdate />,
    cName: 'nav-text'
  }
];