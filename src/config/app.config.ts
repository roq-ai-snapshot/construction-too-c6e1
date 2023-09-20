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
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage company information', 'Manage tools', 'Manage rental requests'],
  getQuoteUrl: 'https://app.roq.ai/proposal/6258d026-77c7-4095-a5c7-17cf3c4cb46e',
};
