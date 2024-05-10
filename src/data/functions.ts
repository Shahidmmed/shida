export function getImgUrl(name: any) {
  return `/src/assets/${name}`;
}

export const scrollToSection = (elementRef: {
  current: { offsetTop: any };
}) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};
