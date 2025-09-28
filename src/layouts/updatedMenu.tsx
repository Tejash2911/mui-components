import { Icon } from '@iconify/react'

export const menuItems = [
  { text: 'Dashboard', icon: <Icon icon='ri:dashboard-line' />, path: '/dashboard' },
  {
    text: 'Organization Master',
    icon: <Icon icon='ri:building-line' />,
    subItems: [
      { text: 'Organization Master', path: '/organization-master' },
      { text: 'Branch Master', path: '/branch-master' },
      { text: 'Users', path: '/users' },
      { text: 'Fiscal Year', path: '/fiscal-year' },
      { text: 'Business Unit/Cost Center', path: '/business-unit' },
      { text: 'Department', path: '/department' },
      { text: 'Role & Permission', path: '/role-permission' },
      { text: 'Notification & Alert Configuration', path: '/notification-config' },
      { text: 'Multi-Language Setup', path: '/multi-language' },
      { text: 'Email/WhatsApp Template Setup', path: '/template-setup' },
      { text: 'Warehouse Master', path: '/warehouse-master' }
    ]
  },
  {
    text: 'CRM & Lead Management',
    icon: <Icon icon='ri:user-add-line' />,
    subItems: [
      { text: 'Lead Master', path: '/crm/leads' },
      { text: 'Contact Manager', path: '/crm/contacts' },
      { text: 'Follow-Up / Reminder Tracker', path: '/crm/followup' },
      { text: 'Opportunity Pipeline', path: '/crm/opportunity' },
      { text: 'Quotation / Proposal Management', path: '/crm/invoices/:id' },
      { text: 'Lead Source & Campaign Tracker', path: '/crm/campaign' },
      { text: 'CRM Reports', path: '/crm/reports' }
    ]
  },
  {
    text: 'Accounts & Finance',
    icon: <Icon icon='ri:calculator-line' />,
    subItems: [
      { text: 'Chart of Accounts', path: '/accounts/chart' },
      { text: 'Account Master', path: '/accounts/account-master' },
      { text: 'Opening Balances', path: '/accounts/opening-balance' },
      {
        text: 'Journal Vouchers',
        subItems: [
          { text: 'Single Journal', path: '/accounts/journal/single' },
          { text: 'Multi Journal', path: '/accounts/journal/multi' },
          { text: 'Recurring Journal', path: '/accounts/journal/recurring' },
          { text: 'Journal with Tax', path: '/accounts/journal/tax' },
          { text: 'Contra Entry', path: '/accounts/journal/contra' },
          { text: 'Adjustment Entry', path: '/accounts/journal/adjustment' },
          { text: 'Auto-Reversal Journal', path: '/accounts/journal/reversal' }
        ]
      },
      {
        text: 'Payment & Receipt Entry',
        subItems: [
          { text: 'Bank Payment', path: '/accounts/payment/bank' },
          { text: 'Cash Payment', path: '/accounts/payment/cash' },
          { text: 'Receipt Entry', path: '/accounts/receipt' }
        ]
      },
      { text: 'Credit Note / Debit Note', path: '/accounts/credit-debit' },
      { text: 'Bank Reconciliation', path: '/accounts/reconciliation' },
      { text: 'TDS / TCS Management', path: '/accounts/tds-tcs' },
      { text: 'Ledger Reports', path: '/accounts/ledger' },
      { text: 'Trial Balance', path: '/accounts/trial-balance' },
      { text: 'Profit & Loss', path: '/accounts/profit-loss' },
      { text: 'Balance Sheet', path: '/accounts/balance-sheet' },
      { text: 'Financial Year Lock/Unlock', path: '/accounts/year-lock' }
    ]
  },
  {
    text: 'Sales & Billing',
    icon: <Icon icon='ri:shopping-cart-2-line' />,
    subItems: [
      { text: 'Customer Master', path: '/sales/customer' },
      { text: 'Sales Quotation', path: '/sales/quotation' },
      { text: 'Sales Order', path: '/sales/order' },
      { text: 'Proforma Invoice', path: '/sales/proforma' },
      { text: 'Tax Invoice (Goods / Services)', path: '/sales/invoices' },
      { text: 'Packing Slip', path: '/sales/packing' },
      { text: 'Sales Return', path: '/sales/return' },
      { text: 'Credit Note (Sales)', path: '/sales/credit-note' },
      { text: 'Customer Outstanding Report', path: '/sales/outstanding' },
      { text: 'Customer Ledger', path: '/sales/ledger' },
      { text: 'Recurring Invoice Setup', path: '/sales/recurring' },
      { text: 'Sales Analysis Report', path: '/sales/analysis' }
    ]
  },
  {
    text: 'Purchase & Expense',
    icon: <Icon icon='mdi:cube-outline' />,
    subItems: [
      { text: 'Supplier Master', path: '/purchase/supplier' },
      { text: 'Purchase Request (Indent)', path: '/purchase/request' },
      { text: 'Purchase Quotation', path: '/purchase/quotation' },
      { text: 'Purchase Order', path: '/purchase/order' },
      { text: 'GRN (Goods Receipt Note)', path: '/purchase/grn' },
      { text: 'Purchase Bill Entry', path: '/vouchers' },
      { text: 'Purchase Return', path: '/purchase/return' },
      { text: 'Debit Note (Purchase)', path: '/purchase/debit-note' },
      { text: 'Supplier Outstanding', path: '/purchase/outstanding' },
      { text: 'Supplier Ledger', path: '/purchase/ledger' },
      { text: 'Recurring Expense Setup', path: '/purchase/recurring' },
      { text: 'Purchase Reports', path: '/purchase/reports' }
    ]
  },
  {
    text: 'Inventory Management',
    icon: <Icon icon='ri:book-2-line' />,
    subItems: [
      { text: 'Item / Product Master', path: '/products' },
      { text: 'Category Master', path: '/category-master' },
      { text: 'Batch / Lot / Serial Setup', path: '/batch-master' },
      { text: 'Opening Stock Entry', path: '/inventory/opening' },
      { text: 'Material Inward', path: '/inventory/inward' },
      { text: 'Material Outward', path: '/inventory/outward' },
      { text: 'Stock Adjustment Entry', path: '/inventory/adjustment' },
      { text: 'Stock Transfer', path: '/inventory/transfer' },
      { text: 'Physical Stock Verification', path: '/inventory/verification' },
      { text: 'Barcode / QR Label Print', path: '/inventory/barcode-master' },
      { text: 'Stock Ledger', path: '/inventory/ledger' },
      { text: 'Reorder Level / Minimum Stock Alert', path: '/inventory/reorder' },
      { text: 'Stock Valuation Report', path: '/inventory/valuation' },
      { text: 'Expiry Stock / Near Expiry', path: '/warranty-master' },
      { text: 'Price Management', path: '/price-master' },
      { text: 'Unit Master', path: '/uom-master' }
    ]
  },
  {
    text: 'Manufacturing / Job Work',
    icon: <Icon icon='mdi:industrial' />,
    subItems: [
      { text: 'Process Master', path: '/manufacturing/process' },
      { text: 'BOM (Bill of Materials)', path: '/bom-master' },
      { text: 'Recipe Master', path: '/recipe-master' },
      { text: 'Production Order Entry', path: '/manufacturing/order' },
      { text: 'Stage-wise Job Processing', path: '/manufacturing/stage' },
      { text: 'Material Issue to Production', path: '/manufacturing/issue' },
      { text: 'WIP Tracking', path: '/manufacturing/wip' },
      { text: 'Finished Goods Receipt', path: '/manufacturing/finished' },
      { text: 'Job Work Outward', path: '/manufacturing/outward' },
      { text: 'Job Work Inward', path: '/manufacturing/inward' },
      { text: 'Wastage / Scrap Report', path: '/manufacturing/wastage' },
      { text: 'Production Efficiency Report', path: '/manufacturing/efficiency' }
    ]
  },
  {
    text: 'Dispatch & Logistics',
    icon: <Icon icon='ri:truck-line' />,
    subItems: [
      { text: 'Packing List Generation', path: '/dispatch/packing' },
      { text: 'Dispatch Order', path: '/dispatch/order' },
      { text: 'Transporter Master', path: '/dispatch/transporter' },
      { text: 'Vehicle & Driver Entry', path: '/dispatch/vehicle' },
      { text: 'Delivery Entry with LR Details', path: '/dispatch/delivery' },
      { text: 'E-Way Bill Upload / Entry', path: '/dispatch/e-way' },
      { text: 'Dispatch Status Tracking', path: '/dispatch/tracking' },
      { text: 'Customer Dispatch Register', path: '/dispatch/register' }
    ]
  },
  {
    text: 'Taxation & Compliance',
    icon: <Icon icon='ri:file-list-2-line' />,
    subItems: [
      { text: 'GST Setup', path: '/tax/gst-setup' },
      { text: 'HSN / SAC Mapping', path: '/tax/hsn-sac' },
      { text: 'TDS / TCS Configuration', path: '/tax/tds-tcs' },
      { text: 'Reverse Charge Entry', path: '/tax/reverse-charge' },
      { text: 'Tax Journal Entries', path: '/tax/journal' },
      { text: 'GST Reports', path: '/tax/gst-reports' },
      { text: 'Tax Summary Reports', path: '/tax/summary-reports' }
    ]
  },
  {
    text: 'POS / Retail / Trading',
    icon: <Icon icon='ri:store-2-line' />,
    subItems: [
      { text: 'POS Billing', path: '/pos' },
      { text: 'Quick Item Scan', path: '/pos/scan' },
      { text: 'Hold / Resume Billing', path: '/pos/hold' },
      { text: 'Counter Closing Report', path: '/pos/closing' },
      { text: 'Cash / Card / Wallet Payments', path: '/pos/payments' },
      { text: 'Barcode Print & Scan', path: '/barcode-master' },
      { text: 'E-commerce Sync', path: '/pos/e-commerce' },
      { text: 'Loyalty & Membership Setup', path: '/pos/loyalty' }
    ]
  },
  {
    text: 'Utilities / Tools',
    icon: <Icon icon='ri:settings-3-line' />,
    subItems: [
      { text: 'Data Import (Excel/CSV)', path: '/utilities/import' },
      { text: 'Data Export (Excel/PDF)', path: '/utilities/export' },
      { text: 'Backup & Restore', path: '/utilities/backup' },
      { text: 'Fiscal Year Switch', path: '/utilities/fiscal-switch' },
      { text: 'Company Switch', path: '/utilities/company-switch' },
      { text: 'User Activity Logs', path: '/utilities/activity-logs' },
      { text: 'WhatsApp Notification Logs', path: '/utilities/whatsapp-logs' },
      { text: 'Email Integration Logs', path: '/utilities/email-logs' },
      { text: 'Sync Logs (API/E-commerce)', path: '/utilities/sync-logs' },
      { text: 'Settings', path: '/settings' }
    ]
  },
  {
    text: 'Reports & Dashboards',
    icon: <Icon icon='ri:line-chart-line' />,
    subItems: [
      { text: 'Sales Dashboard', path: '/reports/sales-dashboard' },
      { text: 'Purchase Dashboard', path: '/reports/purchase-dashboard' },
      { text: 'Stock Dashboard', path: '/reports/stock-dashboard' },
      { text: 'Finance Dashboard', path: '/reports/finance-dashboard' },
      { text: 'HR Dashboard', path: '/reports/hr-dashboard' },
      { text: 'CRM Funnel Dashboard', path: '/reports/crm-dashboard' },
      { text: 'Custom Report Builder', path: '/reports/builder' },
      { text: 'MIS Reports', path: '/reports/mis' },
      { text: 'Export All Reports (PDF/Excel)', path: '/reports/export' }
    ]
  },
  ...(import.meta.env.VITE_MODE === 'development'
    ? [
        {
          text: 'Components',
          icon: <Icon icon='ri:code-line' />,
          subItems: [
            { text: 'Data Table', path: '/components/table', color: 'success.main' },
            { text: 'Form Components', path: '/components/form', color: 'error.main' },
            { text: 'Layout Components', path: '/components/layout', color: 'warning.main' },
            { text: 'Navigation Components', path: '/components/navigation', color: 'info.main' },
            { text: 'Other Components', path: '/components/other', color: 'text.secondary' }
          ]
          // color: 'error.main'
        }
      ]
    : [])
]
