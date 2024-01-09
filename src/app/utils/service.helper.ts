export function parseServiceName (name: string) {
  const lowercase = name.toLowerCase();

  switch (lowercase) {
    case "kds":
      return "KDS";
    case "pos":
      return "POS";
    case "inventory":
      return "Inventory";
    case "menu-builder":
        return "Menu Builder";
    case "hr":
      return "HR";
    case "reviews":
      return "Reviews";
    default:
      return "";
  }
}