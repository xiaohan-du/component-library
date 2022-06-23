import React from 'react';
import ISidebar from '../../interfaces/ISidebar';
import './Sidebar.scss';

interface Props {
  sidebar: ISidebar;
}

const Sidebar = ({ sidebar: { title, logoPath, mainLinks, sideLinks, footerItems } }: Props) => {
  const renderLinks = (links: { id: number, name: string, url?: string, icon: string }[]): React.ReactNode => {
    return (
      links.map((l): React.ReactNode => {
        return (
          <a className='sidebar-links-item' key={l.id} href={l.url}>
            <img className="sidebar-icon" src={l.icon} alt="logo" />
            {l.name}
          </a>
        )
      })
    )
  }
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <a className='sidebar-links-item' href='/'>
            <img className="sidebar-header-logo" src={logoPath} alt="logo" />
            <div className="sidebar-header-title">{title}</div>
          </a>
        </div>
        <div className='sidebar-main'>
          {renderLinks(mainLinks)}
        </div>
        <div className='sidebar-side'>
          {renderLinks(sideLinks)}
        </div>
        <div className='sidebar-footer'>
          <div className='sidebar-footer-items'>
            {renderLinks(footerItems)}
          </div>
          <button className='btn btn-success sidebar-footer-expand-btn' type="button">Expand</button>
        </div>
      </div>
    </>
  )
}

export default Sidebar;