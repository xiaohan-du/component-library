import React, { useState } from 'react';
import ISidebar from '../../interfaces/ISidebar';
import './Sidebar.scss';
interface Props {
  sidebar: ISidebar;
}

const Sidebar = ({ sidebar: { title, subtitleMain, subtitleSide, logoPath, mainLinks, sideLinks, footerItems } }: Props) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const triggerCollapse = () => {
    setIsCollapse(!isCollapse);
  }

  const renderLinks = (
    links: {
      id: number,
      name: string,
      url?: string,
      icon: string,
      sublinks?: {
        id: number,
        name: string,
        url?: string,
        icon: string
      }[]
    }[]): React.ReactNode => {
    return (
      links.map((l): React.ReactNode => {
        if (!Array.isArray(l.sublinks) || !l.sublinks.length) {
          return (
            <div className='sidebar-links-item' key={l.id}>
              <a className='sidebar-links-link' href={l.url} title={l.name}>
                <img className="sidebar-icon" src={l.icon} alt="logo" />
                <span
                  className={isCollapse ? `sidebar-links-title d-none` : `sidebar-links-title`}
                >
                  {l.name}
                </span>
              </a>
            </div>
          )
        } else {
          return (
            <div className='sidebar-links-item sidebar-links-item-dropdown' key={l.id}>
              <button title={l.name} className='btn dropdown-toggle sidebar-links-link sidebar-links-dropdown' data-bs-toggle="dropdown" type="button" key={l.id}>
                <div>
                  <img className="sidebar-icon" src={l.icon} alt="logo" />
                  <span className='sidebar-links-title'>{l.name}</span>
                </div>
              </button>
              <ul className="dropdown-menu sidebar-links-dropdown-menu">
                {
                  l.sublinks.map((s): React.ReactNode => {
                    return (
                      <li className='sidebar-links-dropdown-item-li' key={s.id}>
                        <a className="dropdown-item sidebar-links-dropdown-item" href={s.url} title={s.name}>
                          <img className="sidebar-icon" src={s.icon} alt="logo" />
                          <span className='sidebar-links-subtitle'>{s.name}</span>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          )
        }
      })
    )
  }

  return (
    <>
      <div className={isCollapse ? `sidebar-collapse sidebar` : `sidebar`}>
        <div className='sidebar-header'>
          <a className='sidebar-links-link' href='/'>
            <img className="sidebar-header-logo" src={logoPath} alt="logo" />
            <div
              className={isCollapse ? `sidebar-header-title d-none` : `sidebar-header-title`}
            >
              {title}
            </div>
          </a>
        </div>
        <div className='sidebar-main'>
          <div
            className={isCollapse ? `sidebar-subtitle d-none` : `sidebar-subtitle`}
          >
            {subtitleMain.toUpperCase()}
          </div>
          {renderLinks(mainLinks)}
        </div>
        <div className='sidebar-side'>
          <div
            className={isCollapse ? `sidebar-subtitle d-none` : `sidebar-subtitle`}
          >{subtitleSide.toUpperCase()}</div>
          {renderLinks(sideLinks)}
        </div>
        <div className='sidebar-footer'>
          <div className={isCollapse ? `sidebar-footer-items sidebar-footer-items-collapse invisible` : `sidebar-footer-items`}>
            {renderLinks(footerItems)}
          </div>
          <button
            className={isCollapse ? `btn btn-primary-outline sidebar-footer-expand-btn sidebar-footer-expand-btn-collapse` : `btn btn-primary-outline sidebar-footer-expand-btn`}
            type="button"
            onClick={triggerCollapse}
          >
            {isCollapse ?
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z" />
              </svg>
            }
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar;