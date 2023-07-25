const mapping: Record<string, string> = {
  admins: 'admin',
  customers: 'customer',
  organizations: 'organization',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
