import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import ISidebar from './interfaces/ISidebar';

function App() {

  const sidebarDetails: ISidebar = {
    title: 'MySidebar',
    subtitleMain: 'main subtitle',
    subtitleSide: 'side subtitle',
    logoPath: require('./static/icons/home-page.png'),
    mainLinks: [
      {
        id: 1,
        name: 'Google',
        url: 'https://www.google.co.uk/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 2,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 3,
        name: 'Extra extra loooooooooooooong link',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 4,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 5,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 6,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 7,
        name: 'Looooooooooooooooooooooooong link',
        icon: require('./static/icons/world-wide-web.png'),
        sublinks: [
          {
            id: 1,
            name: 'Google',
            url: 'https://www.google.co.uk/',
            icon: require('./static/icons/world-wide-web.png')
          },
          {
            id: 2,
            name: 'Wiki',
            url: 'https://en.wikipedia.org/wiki/Main_Page',
            icon: require('./static/icons/world-wide-web.png')
          },
          {
            id: 3,
            name: 'Wiki',
            url: 'https://en.wikipedia.org/wiki/Main_Page',
            icon: require('./static/icons/world-wide-web.png')
          },
          {
            id: 4,
            name: 'Wiki',
            url: 'https://en.wikipedia.org/wiki/Main_Page',
            icon: require('./static/icons/world-wide-web.png')
          },
          {
            id: 5,
            name: 'Wiki',
            url: 'https://en.wikipedia.org/wiki/Main_Page',
            icon: require('./static/icons/world-wide-web.png')
          },
          {
            id: 6,
            name: 'Wiki',
            url: 'https://en.wikipedia.org/wiki/Main_Page',
            icon: require('./static/icons/world-wide-web.png')
          },
          {
            id: 7,
            name: 'Wiki',
            url: 'https://en.wikipedia.org/wiki/Main_Page',
            icon: require('./static/icons/world-wide-web.png')
          },
          {
            id: 8,
            name: 'Wiki',
            url: 'https://en.wikipedia.org/wiki/Main_Page',
            icon: require('./static/icons/world-wide-web.png')
          },
          {
            id: 9,
            name: 'Wiki',
            url: 'https://en.wikipedia.org/wiki/Main_Page',
            icon: require('./static/icons/world-wide-web.png')
          },
          {
            id: 10,
            name: 'Wiki',
            url: 'https://en.wikipedia.org/wiki/Main_Page',
            icon: require('./static/icons/world-wide-web.png')
          }
        ]
      },
      {
        id: 8,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 9,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 10,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 11,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 12,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 13,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 14,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 15,
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: require('./static/icons/world-wide-web.png'),
        sublinks: [
          {
            id: 1,
            name: 'Google',
            url: 'https://www.google.co.uk/',
            icon: require('./static/icons/world-wide-web.png')
          },
          {
            id: 2,
            name: 'Wiki',
            url: 'https://en.wikipedia.org/wiki/Main_Page',
            icon: require('./static/icons/world-wide-web.png')
          }
        ]
      }
    ],
    sideLinks: [
      {
        id: 1,
        name: 'Wiki',
        url: 'https://en.wikipedia.org/wiki/Main_Page',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 3,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 4,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 5,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 6,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 7,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 8,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 9,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 10,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 11,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 12,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 13,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 14,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 15,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 16,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 17,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 18,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 19,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 20,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 21,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      },
      {
        id: 22,
        name: 'GitHub',
        url: 'https://github.com/',
        icon: require('./static/icons/world-wide-web.png')
      }
    ],
    footerItems: [
      {
        id: 1,
        name: 'Footer item 1',
        icon: require('./static/icons/world-wide-web.png')
      }
    ]
  }

  return (
    <div className="App">
      <Sidebar sidebar={sidebarDetails} />
    </div>
  );
}

export default App;
