export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "Services", href: "/services" },
  { display: "Shop", href: "/shop" },
  { display: "About Us", href: "/about" },
  { display: "Contact", href: "/contact" },
];

export const CONTACT_PHONE = "+1 (555) 123-4567";
export const OPEN_HOURS = "Open 24/7 for Emergencies";
