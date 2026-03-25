export function createPageUrl(pageName: string): string {
  const routes: Record<string, string> = {
    Home: "/",
    WelshIcons: "/icons",
    IconDetail: "/icons/detail",
    Locations: "/locations",
    Timeline: "/timeline",
    QRCards: "/qr-cards",
  };
  return routes[pageName] ?? `/${pageName.toLowerCase()}`;
}
