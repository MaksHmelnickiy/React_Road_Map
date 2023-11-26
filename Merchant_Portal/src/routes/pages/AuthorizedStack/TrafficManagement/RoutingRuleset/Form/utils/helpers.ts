export const adjustmentValidator = (newValue: string) => {
  const isValid = /^-?([0-9]{1,2}|100)?\.?([0-9]{1,2})?$/.test(newValue);
  if (!isValid) {
    return false;
  }
  const value = Number(newValue);
  const isGreaterThenMax = value > 100;
  const isLessThenMin = value < -99;
  if (isGreaterThenMax || isLessThenMin) {
    return false;
  }
  return true;
};
