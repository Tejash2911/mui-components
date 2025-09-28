export interface TreeNode {
  id: string
  name: string
  children: TreeNode[]
}

export const treeData: TreeNode[] = [
  {
    id: '1',
    name: 'Bright Horizon Solutions',
    children: [
      {
        id: '11',
        name: 'Executive Management',
        children: [
          {
            id: '111',
            name: 'CEO Office',
            children: [
              {
                id: '1111',
                name: 'Sarah Johnson - CEO',
                children: []
              },
              {
                id: '1112',
                name: 'Executive Assistant',
                children: []
              }
            ]
          },
          {
            id: '112',
            name: 'CFO Office',
            children: [
              {
                id: '1121',
                name: 'Michael Chen - CFO',
                children: []
              },
              {
                id: '1122',
                name: 'Financial Controller',
                children: []
              }
            ]
          },
          {
            id: '113',
            name: 'COO Office',
            children: [
              {
                id: '1131',
                name: 'Operations Strategy',
                children: []
              },
              {
                id: '1132',
                name: 'Process Improvement',
                children: []
              }
            ]
          }
        ]
      },
      // {
      //   id: '12',
      //   name: 'Operations',
      //   children: [
      //     {
      //       id: '121',
      //       name: 'Production',
      //       children: [
      //         {
      //           id: '1211',
      //           name: 'Manufacturing',
      //           children: [
      //             {
      //               id: '12111',
      //               name: 'Assembly Line A',
      //               children: []
      //             },
      //             {
      //               id: '12112',
      //               name: 'Assembly Line B',
      //               children: []
      //             }
      //           ]
      //         },
      //         {
      //           id: '1212',
      //           name: 'Quality Control',
      //           children: []
      //         },
      //         {
      //           id: '1213',
      //           name: 'Maintenance',
      //           children: []
      //         }
      //       ]
      //     },
      //     {
      //       id: '122',
      //       name: 'Supply Chain',
      //       children: [
      //         {
      //           id: '1221',
      //           name: 'Procurement',
      //           children: []
      //         },
      //         {
      //           id: '1222',
      //           name: 'Logistics',
      //           children: []
      //         },
      //         {
      //           id: '1223',
      //           name: 'Warehouse',
      //           children: []
      //         },
      //         {
      //           id: '1224',
      //           name: 'Demand Planning',
      //           children: []
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   id: '13',
      //   name: 'Sales & Marketing',
      //   children: [
      //     {
      //       id: '131',
      //       name: 'Sales',
      //       children: [
      //         {
      //           id: '1311',
      //           name: 'Enterprise Sales',
      //           children: []
      //         },
      //         {
      //           id: '1312',
      //           name: 'SMB Sales',
      //           children: []
      //         },
      //         {
      //           id: '1313',
      //           name: 'Channel Partners',
      //           children: []
      //         },
      //         {
      //           id: '1314',
      //           name: 'Inside Sales',
      //           children: []
      //         }
      //       ]
      //     },
      //     {
      //       id: '132',
      //       name: 'Marketing',
      //       children: [
      //         {
      //           id: '1321',
      //           name: 'Digital Marketing',
      //           children: []
      //         },
      //         {
      //           id: '1322',
      //           name: 'Content Creation',
      //           children: []
      //         },
      //         {
      //           id: '1323',
      //           name: 'Brand Management',
      //           children: []
      //         },
      //         {
      //           id: '1324',
      //           name: 'Field Marketing',
      //           children: []
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        id: '14',
        name: 'Technology',
        children: [
          {
            id: '141',
            name: 'Software Development',
            children: [
              {
                id: '1411',
                name: 'Frontend Team',
                children: [
                  {
                    id: '14111',
                    name: 'React Squad',
                    children: []
                  },
                  {
                    id: '14112',
                    name: 'UI/UX Squad',
                    children: []
                  }
                ]
              },
              {
                id: '1412',
                name: 'Backend Team',
                children: [
                  {
                    id: '14121',
                    name: 'API Squad',
                    children: []
                  },
                  {
                    id: '14122',
                    name: 'Data Services Squad',
                    children: []
                  }
                ]
              },
              {
                id: '1413',
                name: 'DevOps Team',
                children: []
              }
            ]
          },
          {
            id: '142',
            name: 'IT Infrastructure',
            children: [
              {
                id: '1421',
                name: 'Network Administration',
                children: []
              },
              {
                id: '1422',
                name: 'System Administration',
                children: []
              }
            ]
          },
          {
            id: '143',
            name: 'Security',
            children: [
              {
                id: '1431',
                name: 'Application Security',
                children: []
              },
              {
                id: '1432',
                name: 'Cloud Security',
                children: []
              },
              {
                id: '1433',
                name: 'Compliance',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: '15',
        name: 'Human Resources',
        children: [
          {
            id: '151',
            name: 'Recruitment',
            children: []
          },
          {
            id: '152',
            name: 'Employee Relations',
            children: []
          },
          {
            id: '153',
            name: 'Training & Development',
            children: []
          },
          {
            id: '154',
            name: 'Compensation & Benefits',
            children: []
          }
        ]
      }
      // {
      //   id: '16',
      //   name: 'Finance & Accounting',
      //   children: [
      //     {
      //       id: '161',
      //       name: 'Accounts Payable',
      //       children: []
      //     },
      //     {
      //       id: '162',
      //       name: 'Accounts Receivable',
      //       children: []
      //     },
      //     {
      //       id: '163',
      //       name: 'Payroll',
      //       children: []
      //     },
      //     {
      //       id: '164',
      //       name: 'Tax & Compliance',
      //       children: []
      //     },
      //     {
      //       id: '165',
      //       name: 'Financial Planning & Analysis',
      //       children: []
      //     }
      //   ]
      // }
    ]
  }
]
