export const footerConfig: {
  header: string;
  links: {
    label: string;
    redirectTo: string;
    type?: 'other' | 'direction' | 'mail' | 'phone';
    icon?: string;
  }[];
}[] = [
  {
    header: 'Quick Links',
    links: [
      { label: 'Home', redirectTo: '' },
      { label: 'About Us', redirectTo: '' },
      { label: 'Contact Us', redirectTo: '' },
    ],
  },
  {
    header: 'Products',
    links: [
      { label: 'Home', redirectTo: '' },
      { label: 'About Us', redirectTo: '' },
      { label: 'Contact Us', redirectTo: '' },
    ],
  },
  {
    header: 'Company',
    links: [
      {
        label:
          'Dreamspace Designs Headquarters, 1234 Inspiration Avenue.  Creative City, CC 90210',
        redirectTo: '40.712776%2C-74.005974',
        icon: '/assets/svgs/direction.svg',
        type: 'direction',
      },
      {
        label: 'info@dreamspacedesigns.com',
        redirectTo: 'info@dreamspacedesigns.com',
        icon: '/assets/svgs/mail.svg',
        type: 'mail',
      },
      {
        label: '91 1235673922',
        redirectTo: '91 1235673922',
        type: 'phone',
        icon: '/assets/svgs/phone.svg',
      },
    ],
  },
];
