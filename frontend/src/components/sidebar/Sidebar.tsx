import React from 'react';
import ISidebar from '../../interfaces/ISidebar';
import './Sidebar.scss';

interface Props {
  sidebar: ISidebar;
}

const Sidebar = ({ sidebar: { title, subtitleMain, subtitleSide, logoPath, mainLinks, sideLinks, footerItems } }: Props) => {
  const renderLinks = (links: { id: number, name: string, url?: string, icon: string }[]): React.ReactNode => {
    return (
      links.map((l): React.ReactNode => {
        return (
          <div className='sidebar-links-item'>
            <a className='sidebar-links-link' key={l.id} href={l.url}>
              <img className="sidebar-icon" src={l.icon} alt="logo" />
              <span className='sidebar-links-title'>{l.name}</span>
            </a>
          </div>
        )
      })
    )
  }
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <a className='sidebar-links-link' href='/'>
            <img className="sidebar-header-logo" src={logoPath} alt="logo" />
            <div className="sidebar-header-title">{title}</div>
          </a>
        </div>
        <div className='sidebar-main'>
          <div className='sidebar-subtitle'>{subtitleMain.toUpperCase()}</div>
          {renderLinks(mainLinks)}
        </div>
        <div className='sidebar-side'>
        <div className='sidebar-subtitle'>{subtitleSide.toUpperCase()}</div>
          {renderLinks(sideLinks)}
        </div>
        <div className='sidebar-footer'>
          <div className='sidebar-footer-items'>
            {renderLinks(footerItems)}
          </div>
          <button className='btn btn-primary-outline sidebar-footer-expand-btn' type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar;