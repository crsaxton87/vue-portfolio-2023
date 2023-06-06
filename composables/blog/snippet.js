export const snippet = (text) => {
  if (window.innerWidth >= 1800) {
    return text.substring(0, 500) + "...";
  }
  if (window.innerWidth >= 1536) {
    return text.substring(0, 300) + "...";
  }
  if (window.innerWidth >= 1280) {
    return text.substring(0, 400) + "...";
  }
  if (window.innerWidth >= 1024) {
    return text.substring(0, 400) + "...";
  }
  if (window.innerWidth >= 768) {
    return text.substring(0, 250) + "...";
  }
  if (window.innerWidth >= 640) {
    return text.substring(0, 400) + "...";
  } else return text.substring(0, 400) + "...";
};
