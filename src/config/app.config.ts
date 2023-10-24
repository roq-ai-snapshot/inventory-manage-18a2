interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Inventory Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Inventory Manager', 'Sales Representative', 'Supply Chain Manager'],
  tenantName: 'Organization',
  applicationName: 'Inventory Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View products in inventory',
    'Purchase products',
    'View own purchase history',
    'Edit personal information',
  ],
  ownerAbilities: [
    'Manage inventory records',
    'Update inventory quantity',
    'Check inventory status',
    'Manage supply chain information',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/a9f96a66-2fe7-4fa2-b36e-d4bfaa093f4d',
};
