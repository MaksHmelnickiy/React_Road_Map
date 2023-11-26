import { IAppliedFilterValue, INumberRange } from 'components/FiltersButton/types';

export const isFilterNumberRange = (
  value: IAppliedFilterValue
): value is INumberRange => {
  const isObject = value instanceof Object;
  const hasMinMax =
    Object.hasOwnProperty.call(value, 'min') && Object.hasOwnProperty.call(value, 'max');

  return isObject && hasMinMax;
};
