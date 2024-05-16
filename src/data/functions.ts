export function getImgUrl(name: string) {
  return `${import.meta.env.BASE_URL}assets/images/${name}`;
}

/* export function getImgUrl(name: any) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}
 */
export const scrollToSection = (elementRef: {
  current: { offsetTop: any };
}) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};
