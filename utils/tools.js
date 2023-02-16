export const makeAddressString = (...args) => {
  return args.filter((item) => item.trim() !== "").join(", ");
};

export const dateParsing = (date) => {
  return new Date(date).toLocaleDateString("en-CA");
};

export function downloadFile(url, fileName) {
  const link = document.createElement("a");
  link.download = fileName;
  link.href = url;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const makePriceString = (price) => {
  return `$${price.toFixed(2)}`;
};
