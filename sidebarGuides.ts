const sidebarsGuides = {
    guidesSidebar: [  
      'overview',
      'core-concepts',
    {
      type: 'category',
      label: 'Quickstart-guide',
      items: [
        'Quickstart guide/introduction',
        'Quickstart guide/ingest-an-event',
      ],
    },
      'login-and-authentication',
      'using-postman',
      'sdk',
      {
        type: 'category',
        label: 'Events and metrics',
        items: [
          'Events and metrics/ingest-usage-events',
          'Events and metrics/integrate-with-s3-or-gcs-cloud-storage',
        ],
      },
      {
        type: 'category',
        label: 'Plans and subscriptions',
        items: [
          'Plans and subscriptions/build-your-product-catalog',
          'Plans and subscriptions/creating-subscriptions',
        ],
      },
    ],
  };
  
  export default sidebarsGuides;
  