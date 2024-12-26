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
        'Quickstart guide/configure-your-price',
        'Quickstart guide/subscribe-a-customer',
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
          'Plans and subscriptions/modifying-subscriptions',
        ],
      },
      {
        type: 'category',
        label: 'Invoicing',
        items:[
          'Invoicing/introduction',
          'Invoicing/structure-and-lifecycle',
          'Invoicing/configure-payments-and-collection',
          'Invoicing/adjust-draft-invoices',
          'Invoicing/credit-issued-invoices'
        ]
      },
      {
        type: 'category',
        label: 'Revenue reporting',
        items: [
          'Revenue reporting/revenue-reporting-methodology',
          'Revenue reporting/revenue-recognition',
          'Revenue reporting/revenue-pivots'
        ],
      },
    ],
  };
  
  export default sidebarsGuides;
  