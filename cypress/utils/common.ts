/**
 * Creates a string suitable for use as a slug. eg. "Hot Honey Chicken" > "hot-honey-chicken"
 */
export const stringToSlug = (value: string): string => {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-');
};
