interface ISidebar {
  title: string;
  subtitleMain: string;
  subtitleSide: string;
  logoPath: string;
  mainLinks: { 
    id: number,
    name: string, 
    url: string,
    icon: string
  }[];
  sideLinks: { 
    id: number,
    name: string, 
    url: string,
    icon: string
  }[];
  footerItems: {
    id: number,
    name: string,
    url?: string,
    icon: string
  }[];
}

export default ISidebar;