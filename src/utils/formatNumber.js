export const formatNumber = (num) => {
  if (num === null || num === undefined || num === '') return '-';
  const numberString = num.toString();
  const [integerPart, decimalPart] = numberString.split('.');
  
  // Format the integer part according to the Indian numbering system
  const lastThreeDigits = integerPart.slice(-3);
  const otherDigits = integerPart.slice(0, -3);
  const formattedInteger = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + (otherDigits ? "," : "") + lastThreeDigits;
  
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}; 