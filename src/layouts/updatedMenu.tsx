import { Icon } from '@iconify/react'

export const menuItems = [
  { text: 'Dashboard', i18nKey: 'menu.dashboard', icon: <Icon icon='ri:dashboard-line' />, path: '/dashboard' },
  {
    text: 'Organization Master',
    i18nKey: 'menu.organizationMaster',
    icon: <Icon icon='ri:building-line' />,
    subItems: [
      { text: 'Organization Master', i18nKey: 'menu.organizationMasterItem', path: '/organization-master' },
      { text: 'Branch Master', i18nKey: 'menu.branchMaster', path: '/branch-master' },
      { text: 'Users', i18nKey: 'menu.users', path: '/users' },
      { text: 'Fiscal Year', i18nKey: 'menu.fiscalYear', path: '/fiscal-year' },
      { text: 'Business Unit/Cost Center', i18nKey: 'menu.businessUnit', path: '/business-unit' },
      { text: 'Department', i18nKey: 'menu.department', path: '/department' },
      { text: 'Role & Permission', i18nKey: 'menu.rolePermission', path: '/role-permission' },
      { text: 'Notification & Alert Configuration', i18nKey: 'menu.notificationAlertConfig', path: '/notification-config' },
      { text: 'Multi-Language Setup', i18nKey: 'menu.multiLanguageSetup', path: '/multi-language' },
      { text: 'Email/WhatsApp Template Setup', i18nKey: 'menu.templateSetup', path: '/template-setup' },
      { text: 'Warehouse Master', i18nKey: 'menu.warehouseMaster', path: '/warehouse-master' }
    ]
  },
  {
    text: 'CRM & Lead Management',
    i18nKey: 'menu.crmLeadManagement',
    icon: <Icon icon='ri:user-add-line' />,
    subItems: [
      { text: 'Lead Master', i18nKey: 'menu.leadMaster', path: '/crm/leads' },
      { text: 'Contact Manager', i18nKey: 'menu.contactManager', path: '/crm/contacts' },
      { text: 'Follow-Up / Reminder Tracker', i18nKey: 'menu.followupReminder', path: '/crm/followup' },
      { text: 'Opportunity Pipeline', i18nKey: 'menu.opportunityPipeline', path: '/crm/opportunity' },
      { text: 'Quotation / Proposal Management', i18nKey: 'menu.quotationProposal', path: '/crm/invoices/:id' },
      { text: 'Lead Source & Campaign Tracker', i18nKey: 'menu.leadSourceCampaign', path: '/crm/campaign' },
      { text: 'CRM Reports', i18nKey: 'menu.crmReports', path: '/crm/reports' }
    ]
  },
  {
    text: 'Accounts & Finance',
    i18nKey: 'menu.accountsFinance',
    icon: <Icon icon='ri:calculator-line' />,
    subItems: [
      { text: 'Chart of Accounts', i18nKey: 'menu.chartOfAccounts', path: '/accounts/chart' },
      { text: 'Account Master', i18nKey: 'menu.accountMaster', path: '/accounts/account-master' },
      { text: 'Opening Balances', i18nKey: 'menu.openingBalances', path: '/accounts/opening-balance' },
      {
        text: 'Journal Vouchers',
        i18nKey: 'menu.journalVouchers',
        subItems: [
          { text: 'Single Journal', i18nKey: 'menu.singleJournal', path: '/accounts/journal/single' },
          { text: 'Multi Journal', i18nKey: 'menu.multiJournal', path: '/accounts/journal/multi' },
          { text: 'Recurring Journal', i18nKey: 'menu.recurringJournal', path: '/accounts/journal/recurring' },
          { text: 'Journal with Tax', i18nKey: 'menu.journalWithTax', path: '/accounts/journal/tax' },
          { text: 'Contra Entry', i18nKey: 'menu.contraEntry', path: '/accounts/journal/contra' },
          { text: 'Adjustment Entry', i18nKey: 'menu.adjustmentEntry', path: '/accounts/journal/adjustment' },
          { text: 'Auto-Reversal Journal', i18nKey: 'menu.autoReversalJournal', path: '/accounts/journal/reversal' }
        ]
      },
      {
        text: 'Payment & Receipt Entry',
        i18nKey: 'menu.paymentReceiptEntry',
        subItems: [
          { text: 'Bank Payment', i18nKey: 'menu.bankPayment', path: '/accounts/payment/bank' },
          { text: 'Cash Payment', i18nKey: 'menu.cashPayment', path: '/accounts/payment/cash' },
          { text: 'Receipt Entry', i18nKey: 'menu.receiptEntry', path: '/accounts/receipt' }
        ]
      },
      { text: 'Credit Note / Debit Note', i18nKey: 'menu.creditDebitNote', path: '/accounts/credit-debit' },
      { text: 'Bank Reconciliation', i18nKey: 'menu.bankReconciliation', path: '/accounts/reconciliation' },
      { text: 'TDS / TCS Management', i18nKey: 'menu.tdsTcsManagement', path: '/accounts/tds-tcs' },
      { text: 'Ledger Reports', i18nKey: 'menu.ledgerReports', path: '/accounts/ledger' },
      { text: 'Trial Balance', i18nKey: 'menu.trialBalance', path: '/accounts/trial-balance' },
      { text: 'Profit & Loss', i18nKey: 'menu.profitLoss', path: '/accounts/profit-loss' },
      { text: 'Balance Sheet', i18nKey: 'menu.balanceSheet', path: '/accounts/balance-sheet' },
      { text: 'Financial Year Lock/Unlock', i18nKey: 'menu.financialYearLockUnlock', path: '/accounts/year-lock' }
    ]
  },
  {
    text: 'Sales & Billing',
    i18nKey: 'menu.salesBilling',
    icon: <Icon icon='ri:shopping-cart-2-line' />,
    subItems: [
      { text: 'Customer Master', i18nKey: 'menu.customerMaster', path: '/sales/customer' },
      { text: 'Sales Quotation', i18nKey: 'menu.salesQuotation', path: '/sales/quotation' },
      { text: 'Sales Order', i18nKey: 'menu.salesOrder', path: '/sales/order' },
      { text: 'Proforma Invoice', i18nKey: 'menu.proformaInvoice', path: '/sales/proforma' },
      { text: 'Tax Invoice (Goods / Services)', i18nKey: 'menu.taxInvoice', path: '/sales/invoices' },
      { text: 'Packing Slip', i18nKey: 'menu.packingSlip', path: '/sales/packing' },
      { text: 'Sales Return', i18nKey: 'menu.salesReturn', path: '/sales/return' },
      { text: 'Credit Note (Sales)', i18nKey: 'menu.creditNoteSales', path: '/sales/credit-note' },
      { text: 'Customer Outstanding Report', i18nKey: 'menu.customerOutstandingReport', path: '/sales/outstanding' },
      { text: 'Customer Ledger', i18nKey: 'menu.customerLedger', path: '/sales/ledger' },
      { text: 'Recurring Invoice Setup', i18nKey: 'menu.recurringInvoiceSetup', path: '/sales/recurring' },
      { text: 'Sales Analysis Report', i18nKey: 'menu.salesAnalysisReport', path: '/sales/analysis' }
    ]
  },
  {
    text: 'Purchase & Expense',
    i18nKey: 'menu.purchaseExpense',
    icon: <Icon icon='mdi:cube-outline' />,
    subItems: [
      { text: 'Supplier Master', i18nKey: 'menu.supplierMaster', path: '/purchase/supplier' },
      { text: 'Purchase Request (Indent)', i18nKey: 'menu.purchaseRequest', path: '/purchase/request' },
      { text: 'Purchase Quotation', i18nKey: 'menu.purchaseQuotation', path: '/purchase/quotation' },
      { text: 'Purchase Order', i18nKey: 'menu.purchaseOrder', path: '/purchase/order' },
      { text: 'GRN (Goods Receipt Note)', i18nKey: 'menu.grn', path: '/purchase/grn' },
      { text: 'Purchase Bill Entry', i18nKey: 'menu.purchaseBillEntry', path: '/vouchers' },
      { text: 'Purchase Return', i18nKey: 'menu.purchaseReturn', path: '/purchase/return' },
      { text: 'Debit Note (Purchase)', i18nKey: 'menu.debitNotePurchase', path: '/purchase/debit-note' },
      { text: 'Supplier Outstanding', i18nKey: 'menu.supplierOutstanding', path: '/purchase/outstanding' },
      { text: 'Supplier Ledger', i18nKey: 'menu.supplierLedger', path: '/purchase/ledger' },
      { text: 'Recurring Expense Setup', i18nKey: 'menu.recurringExpenseSetup', path: '/purchase/recurring' },
      { text: 'Purchase Reports', i18nKey: 'menu.purchaseReports', path: '/purchase/reports' }
    ]
  },
  {
    text: 'Inventory Management',
    i18nKey: 'menu.inventoryManagement',
    icon: <Icon icon='ri:book-2-line' />,
    subItems: [
      { text: 'Item / Product Master', i18nKey: 'menu.itemProductMaster', path: '/products' },
      { text: 'Category Master', i18nKey: 'menu.categoryMaster', path: '/category-master' },
      { text: 'Batch / Lot / Serial Setup', i18nKey: 'menu.batchLotSerialSetup', path: '/batch-master' },
      { text: 'Opening Stock Entry', i18nKey: 'menu.openingStockEntry', path: '/inventory/opening' },
      { text: 'Material Inward', i18nKey: 'menu.materialInward', path: '/inventory/inward' },
      { text: 'Material Outward', i18nKey: 'menu.materialOutward', path: '/inventory/outward' },
      { text: 'Stock Adjustment Entry', i18nKey: 'menu.stockAdjustmentEntry', path: '/inventory/adjustment' },
      { text: 'Stock Transfer', i18nKey: 'menu.stockTransfer', path: '/inventory/transfer' },
      { text: 'Physical Stock Verification', i18nKey: 'menu.physicalStockVerification', path: '/inventory/verification' },
      { text: 'Barcode / QR Label Print', i18nKey: 'menu.barcodeQrLabelPrint', path: '/inventory/barcode-master' },
      { text: 'Stock Ledger', i18nKey: 'menu.stockLedger', path: '/inventory/ledger' },
      { text: 'Reorder Level / Minimum Stock Alert', i18nKey: 'menu.reorderLevelMinimumStockAlert', path: '/inventory/reorder' },
      { text: 'Stock Valuation Report', i18nKey: 'menu.stockValuationReport', path: '/inventory/valuation' },
      { text: 'Expiry Stock / Near Expiry', i18nKey: 'menu.expiryStockNearExpiry', path: '/warranty-master' },
      { text: 'Price Management', i18nKey: 'menu.priceManagement', path: '/price-master' },
      { text: 'Unit Master', i18nKey: 'menu.unitMaster', path: '/uom-master' }
    ]
  },
  {
    text: 'Manufacturing / Job Work',
    i18nKey: 'menu.manufacturingJobWork',
    icon: <Icon icon='mdi:industrial' />,
    subItems: [
      { text: 'Process Master', i18nKey: 'menu.processMaster', path: '/manufacturing/process' },
      { text: 'BOM (Bill of Materials)', i18nKey: 'menu.bom', path: '/bom-master' },
      { text: 'Recipe Master', i18nKey: 'menu.recipeMaster', path: '/recipe-master' },
      { text: 'Production Order Entry', i18nKey: 'menu.productionOrderEntry', path: '/manufacturing/order' },
      { text: 'Stage-wise Job Processing', i18nKey: 'menu.stageWiseJobProcessing', path: '/manufacturing/stage' },
      { text: 'Material Issue to Production', i18nKey: 'menu.materialIssueToProduction', path: '/manufacturing/issue' },
      { text: 'WIP Tracking', i18nKey: 'menu.wipTracking', path: '/manufacturing/wip' },
      { text: 'Finished Goods Receipt', i18nKey: 'menu.finishedGoodsReceipt', path: '/manufacturing/finished' },
      { text: 'Job Work Outward', i18nKey: 'menu.jobWorkOutward', path: '/manufacturing/outward' },
      { text: 'Job Work Inward', i18nKey: 'menu.jobWorkInward', path: '/manufacturing/inward' },
      { text: 'Wastage / Scrap Report', i18nKey: 'menu.wastageScrapReport', path: '/manufacturing/wastage' },
      { text: 'Production Efficiency Report', i18nKey: 'menu.productionEfficiencyReport', path: '/manufacturing/efficiency' }
    ]
  },
  {
    text: 'Dispatch & Logistics',
    i18nKey: 'menu.dispatchLogistics',
    icon: <Icon icon='ri:truck-line' />,
    subItems: [
      { text: 'Packing List Generation', i18nKey: 'menu.packingListGeneration', path: '/dispatch/packing' },
      { text: 'Dispatch Order', i18nKey: 'menu.dispatchOrder', path: '/dispatch/order' },
      { text: 'Transporter Master', i18nKey: 'menu.transporterMaster', path: '/dispatch/transporter' },
      { text: 'Vehicle & Driver Entry', i18nKey: 'menu.vehicleDriverEntry', path: '/dispatch/vehicle' },
      { text: 'Delivery Entry with LR Details', i18nKey: 'menu.deliveryEntryWithLRDetails', path: '/dispatch/delivery' },
      { text: 'E-Way Bill Upload / Entry', i18nKey: 'menu.eWayBillUploadEntry', path: '/dispatch/e-way' },
      { text: 'Dispatch Status Tracking', i18nKey: 'menu.dispatchStatusTracking', path: '/dispatch/tracking' },
      { text: 'Customer Dispatch Register', i18nKey: 'menu.customerDispatchRegister', path: '/dispatch/register' }
    ]
  },
  {
    text: 'Taxation & Compliance',
    i18nKey: 'menu.taxationCompliance',
    icon: <Icon icon='ri:file-list-2-line' />,
    subItems: [
      { text: 'GST Setup', i18nKey: 'menu.gstSetup', path: '/tax/gst-setup' },
      { text: 'HSN / SAC Mapping', i18nKey: 'menu.hsnSacMapping', path: '/tax/hsn-sac' },
      { text: 'TDS / TCS Configuration', i18nKey: 'menu.tdsTcsConfiguration', path: '/tax/tds-tcs' },
      { text: 'Reverse Charge Entry', i18nKey: 'menu.reverseChargeEntry', path: '/tax/reverse-charge' },
      { text: 'Tax Journal Entries', i18nKey: 'menu.taxJournalEntries', path: '/tax/journal' },
      { text: 'GST Reports', i18nKey: 'menu.gstReports', path: '/tax/gst-reports' },
      { text: 'Tax Summary Reports', i18nKey: 'menu.taxSummaryReports', path: '/tax/summary-reports' }
    ]
  },
  {
    text: 'POS / Retail / Trading',
    i18nKey: 'menu.posRetailTrading',
    icon: <Icon icon='ri:store-2-line' />,
    subItems: [
      { text: 'POS Billing', i18nKey: 'menu.posBilling', path: '/pos' },
      { text: 'Quick Item Scan', i18nKey: 'menu.quickItemScan', path: '/pos/scan' },
      { text: 'Hold / Resume Billing', i18nKey: 'menu.holdResumeBilling', path: '/pos/hold' },
      { text: 'Counter Closing Report', i18nKey: 'menu.counterClosingReport', path: '/pos/closing' },
      { text: 'Cash / Card / Wallet Payments', i18nKey: 'menu.cashCardWalletPayments', path: '/pos/payments' },
      { text: 'Barcode Print & Scan', i18nKey: 'menu.barcodePrintScan', path: '/barcode-master' },
      { text: 'E-commerce Sync', i18nKey: 'menu.eCommerceSync', path: '/pos/e-commerce' },
      { text: 'Loyalty & Membership Setup', i18nKey: 'menu.loyaltyMembershipSetup', path: '/pos/loyalty' }
    ]
  },
  {
    text: 'Utilities / Tools',
    i18nKey: 'menu.utilitiesTools',
    icon: <Icon icon='ri:settings-3-line' />,
    subItems: [
      { text: 'Data Import (Excel/CSV)', i18nKey: 'menu.dataImport', path: '/utilities/import' },
      { text: 'Data Export (Excel/PDF)', i18nKey: 'menu.dataExport', path: '/utilities/export' },
      { text: 'Backup & Restore', i18nKey: 'menu.backupRestore', path: '/utilities/backup' },
      { text: 'Fiscal Year Switch', i18nKey: 'menu.fiscalYearSwitch', path: '/utilities/fiscal-switch' },
      { text: 'Company Switch', i18nKey: 'menu.companySwitch', path: '/utilities/company-switch' },
      { text: 'User Activity Logs', i18nKey: 'menu.userActivityLogs', path: '/utilities/activity-logs' },
      { text: 'WhatsApp Notification Logs', i18nKey: 'menu.whatsappNotificationLogs', path: '/utilities/whatsapp-logs' },
      { text: 'Email Integration Logs', i18nKey: 'menu.emailIntegrationLogs', path: '/utilities/email-logs' },
      { text: 'Sync Logs (API/E-commerce)', i18nKey: 'menu.syncLogs', path: '/utilities/sync-logs' },
      { text: 'Settings', i18nKey: 'menu.settings', path: '/settings' }
    ]
  },
  {
    text: 'Reports & Dashboards',
    i18nKey: 'menu.reportsDashboards',
    icon: <Icon icon='ri:line-chart-line' />,
    subItems: [
      { text: 'Sales Dashboard', i18nKey: 'menu.salesDashboard', path: '/reports/sales-dashboard' },
      { text: 'Purchase Dashboard', i18nKey: 'menu.purchaseDashboard', path: '/reports/purchase-dashboard' },
      { text: 'Stock Dashboard', i18nKey: 'menu.stockDashboard', path: '/reports/stock-dashboard' },
      { text: 'Finance Dashboard', i18nKey: 'menu.financeDashboard', path: '/reports/finance-dashboard' },
      { text: 'HR Dashboard', i18nKey: 'menu.hrDashboard', path: '/reports/hr-dashboard' },
      { text: 'CRM Funnel Dashboard', i18nKey: 'menu.crmFunnelDashboard', path: '/reports/crm-dashboard' },
      { text: 'Custom Report Builder', i18nKey: 'menu.customReportBuilder', path: '/reports/builder' },
      { text: 'MIS Reports', i18nKey: 'menu.misReports', path: '/reports/mis' },
      { text: 'Export All Reports (PDF/Excel)', i18nKey: 'menu.exportAllReports', path: '/reports/export' }
    ]
  },
  ...(import.meta.env.VITE_MODE === 'development'
    ? [
        {
          text: 'Components',
          i18nKey: 'menu.components',
          icon: <Icon icon='ri:code-line' />,
          subItems: [
            { text: 'Data Table', i18nKey: 'menu.dataTable', path: '/components/table', color: 'success.main' },
            { text: 'Form Components', i18nKey: 'menu.formComponents', path: '/components/form', color: 'error.main' },
            { text: 'Layout Components', i18nKey: 'menu.layoutComponents', path: '/components/layout', color: 'warning.main' },
            { text: 'Navigation Components', i18nKey: 'menu.navigationComponents', path: '/components/navigation', color: 'info.main' },
            { text: 'Other Components', i18nKey: 'menu.otherComponents', path: '/components/other', color: 'text.secondary' }
          ]
          // color: 'error.main'
        }
      ]
    : [])
]
