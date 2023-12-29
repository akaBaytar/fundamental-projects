import React from 'react';

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaInstagram,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.instagram.com/akabaytar/',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: 'https://twitter.com/akaBaytar',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/akabaytar/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://github.com/akaBaytar',
    icon: <FaGithub />,
  },
];
