import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import {
  ROUTING_RULESET_OPERATION_KEYS,
  ROUTING_RULESET_OPERATIONS,
  UNLIMITED,
} from 'api/routingRuleset/constants';
import { IRoutingRuleset } from 'api/routingRuleset/types';
import { TRANSACTIONS_TYPE_VARIANTS } from 'api/transactions/contants';
import Switch from 'components/Controls/Switch';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import MultiItemsCell from 'components/Grids/DataGrid/MultiItemsCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import Tag from 'components/Tags/Tag';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { ROUTES } from 'routes/config/constants';
import {
  getFormattedCountry,
  getFormattedDate,
  getHMfromMilliseconds,
} from 'utils/common';

export const useRoutingRulesetGridData = (
  data?: IRoutingRuleset[]
): IColumn<IRoutingRuleset>[] => {
  const { t } = useTranslation();

  const getDictionaryNaming = useGetDictionaryNaming();

  const getAmountOperationText = (
    operation: ROUTING_RULESET_OPERATIONS,
    minValue?: number,
    maxValue?: number
  ) => {
    if (!operation || (!Number.isFinite(minValue) && !Number.isFinite(maxValue))) {
      return '-';
    }
    const operationSign = ROUTING_RULESET_OPERATION_KEYS[operation];

    if (!operationSign) {
      const prefix =
        operation === ROUTING_RULESET_OPERATIONS.NOT_BETWEEN ? `${t('common.not')} ` : '';
      return `${prefix}[${minValue} - ${maxValue}]`;
    }
    return `${operationSign} ${minValue}`;
  };

  const routingRulesColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'merchantName',
        title: t('routingRuleset.columns.merchantName'),
        minWidth: 180,
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'name',
        title: t('routingRuleset.columns.name'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'merchantTerminalName',
        title: t('routingRuleset.columns.merchantTerminalName'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { merchantTerminalId, merchantTerminalName } = params.item;
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;

          const path = generatePath(PATH, {
            [PARAMS.ID]: merchantTerminalId.toString(),
          });

          return (
            <RowCell {...params}>
              <Link to={path}>{merchantTerminalName}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'cashierPaymentMethodName',
        title: t('routingRuleset.columns.cashierPaymentMethodName'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'terminalLinkDescription',
        title: t('routingRuleset.columns.terminalLinkDescription'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { terminalLinkId, terminalLinkDescription } = params.item;
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.TERMINAL_LINK;

          const path = generatePath(PATH, {
            [PARAMS.ID]: terminalLinkId.toString(),
          });

          return (
            <RowCell {...params}>
              <Link to={path}>{terminalLinkDescription}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'priority',
        title: t('routingRuleset.columns.priority'),
        minWidth: 100,
        width: {
          unit: UNITS.PIXEL,
          value: 100,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'ratio',
        title: t('routingRuleset.columns.ratio'),
        minWidth: 100,
        width: {
          unit: UNITS.PIXEL,
          value: 100,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'enabled',
        title: t('routingRuleset.columns.enabled'),
        minWidth: 100,
        width: {
          unit: UNITS.PIXEL,
          value: 100,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              <Switch readonly checked={params.item.enabled} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'transactionType',
        title: t('routingRuleset.columns.transactionType'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { transactionType } = params.item;

          const tagVariant = TRANSACTIONS_TYPE_VARIANTS[transactionType];

          return (
            <RowCell {...params}>
              {transactionType.length > 0 ? (
                <Tag
                  variant={tagVariant}
                  label={getDictionaryNaming('transactionTypes', transactionType)}
                />
              ) : (
                '-'
              )}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'amount',
        title: t('routingRuleset.columns.amount'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { operation, minValue, maxValue } = params.item.amount;
          const amountOperationText = getAmountOperationText(
            operation,
            minValue,
            maxValue
          );
          return <RowCell {...params}>{amountOperationText}</RowCell>;
        },
      },
      {
        dataKey: 'customerDpCount',
        title: t('routingRuleset.columns.customerDpCount'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'txCcy',
        title: t('routingRuleset.columns.txCcy'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <MultiItemsCell {...params} list={params.item.txCcy} />;
        },
      },
      {
        dataKey: 'txAmount',
        title: t('routingRuleset.columns.txAmount'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { operation, minValue, maxValue } = params.item.txAmount;
          const amountOperationText = getAmountOperationText(
            operation,
            minValue,
            maxValue
          );
          return <RowCell {...params}>{amountOperationText}</RowCell>;
        },
      },
      {
        dataKey: 'customerCountry',
        title: t('routingRuleset.columns.customerCountry'),
        width: {
          unit: UNITS.PIXEL,
          value: 200,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { operation, countryCode } = params.item.customerCountry;
          const operationName = getDictionaryNaming('operations', operation);
          return (
            <RowCell {...params}>
              {`${operationName} ${getFormattedCountry(countryCode)}`}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'customerCountryGroup',
        title: t('routingRuleset.columns.customerCountryGR'),
        width: {
          unit: UNITS.PIXEL,
          value: 200,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { operation, countryGroupName } = params.item.customerCountryGroup;
          const operationName = getDictionaryNaming('operations', operation);
          return <RowCell {...params}>{`${operationName} ${countryGroupName}`}</RowCell>;
        },
      },
      {
        dataKey: 'binCountry',
        title: t('routingRuleset.columns.binCountry'),
        width: {
          unit: UNITS.PIXEL,
          value: 200,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { operation, countryCode } = params.item.binCountry;
          const operationName = getDictionaryNaming('operations', operation);
          return (
            <RowCell {...params}>
              {`${operationName} ${getFormattedCountry(countryCode)}`}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'binRange',
        title: t('routingRuleset.columns.binRange'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'cardNetwork',
        title: t('routingRuleset.columns.cardNetwork'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { cardNetwork } = params.item;
          const supportedBrands = Object.entries(cardNetwork).reduce<string[]>(
            (list, [key, value]) => {
              if (value) {
                list.push(getDictionaryNaming('cardNetworks', key));
              }
              return list;
            },
            []
          );
          return <MultiItemsCell {...params} list={supportedBrands} />;
        },
      },
      {
        dataKey: 'paymentProviderCurrency',
        title: t('routingRuleset.columns.paymentProviderCurrency'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'useCurrencyConversion',
        title: t('routingRuleset.columns.useCurrencyConversion'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'schedule',
        title: t('routingRuleset.columns.schedule'),
        minWidth: 100,
        width: {
          unit: UNITS.PIXEL,
          value: 100,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'paymentMethod',
        title: t('routingRuleset.columns.paymentMethod'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { paymentMethod } = params.item;

          const text = getDictionaryNaming('paymentMethodMap', paymentMethod);

          return <RowCell {...params}>{text || paymentMethod || '-'}</RowCell>;
        },
      },
      {
        dataKey: 'metadata',
        title: t('routingRuleset.columns.metadata'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { metadata } = params.item;

          const dataText = Object.entries(metadata).reduce(
            (prev, [key, value]) =>
              value
                ? `${t(`routingRuleset.metadataKeys.${key}` as never)} [${value}]`
                : prev,
            '-'
          );

          return <RowCell {...params}>{dataText}</RowCell>;
        },
      },
      {
        dataKey: 'routingSchemaName',
        title: t('routingRuleset.columns.routingSchemaName'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'activeRoutingSchema',
        title: t('routingRuleset.columns.activeRoutingSchema'),
        minWidth: 100,
        width: {
          unit: UNITS.PIXEL,
          value: 100,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'excludedFromCascading',
        title: t('routingRuleset.columns.excludedFromCascading'),
        minWidth: 130,
        width: {
          unit: UNITS.PIXEL,
          value: 130,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              <Switch readonly checked={params.item.excludedFromCascading} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'customerIp',
        title: t('routingRuleset.columns.customerIp'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { operation = '', countryCodes } = params.item.customerIp;
          const operationName = getDictionaryNaming('operations', operation);

          const countries = countryCodes.map((item) => getFormattedCountry(item));

          if (operation === 'in' || operation === 'ni') {
            return (
              <MultiItemsCell
                {...params}
                list={countries}
                countDisplayItems={0}
                renderFirstItem={() => <>{operationName}</>}
                tagPrefix=''
              />
            );
          }

          return (
            <RowCell {...params}>
              {countries.length ? `${operationName} ${countries.join(', ')}` : '-'}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'binCountryGroup',
        title: t('routingRuleset.columns.binCountryGroup'),
        minWidth: 180,
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { operation, countryGroupName } = params.item.binCountryGroup;
          const operationName = getDictionaryNaming('operations', operation);

          return <RowCell {...params}>{`${operationName} ${countryGroupName}`}</RowCell>;
        },
      },
      {
        dataKey: 'billingInfo',
        title: t('routingRuleset.columns.billingInfo'),
        minWidth: 100,
        width: {
          unit: UNITS.PIXEL,
          value: 100,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              <Switch readonly checked={params.item.billingInfo} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'customerDpAmount',
        title: t('routingRuleset.columns.customerDpAmount'),
        minWidth: 110,
        width: {
          unit: UNITS.PIXEL,
          value: 110,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerWdCount',
        title: t('routingRuleset.columns.customerWdCount'),
        minWidth: 110,
        width: {
          unit: UNITS.PIXEL,
          value: 110,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerWdAmount',
        title: t('routingRuleset.columns.customerWdAmount'),
        minWidth: 110,
        width: {
          unit: UNITS.PIXEL,
          value: 110,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerCcDpCount',
        title: t('routingRuleset.columns.customerCcDpCount'),
        minWidth: 110,
        width: {
          unit: UNITS.PIXEL,
          value: 110,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerCcDpAmount',
        title: t('routingRuleset.columns.customerCcDpAmount'),
        minWidth: 110,
        width: {
          unit: UNITS.PIXEL,
          value: 110,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerCcWdCount',
        title: t('routingRuleset.columns.customerCcWdCount'),
        minWidth: 110,
        width: {
          unit: UNITS.PIXEL,
          value: 110,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerCcWdAmount',
        title: t('routingRuleset.columns.customerCcWdAmount'),
        minWidth: 110,
        width: {
          unit: UNITS.PIXEL,
          value: 110,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerUccDpCount',
        title: t('routingRuleset.columns.customerUccDpCount'),
        minWidth: 140,
        width: {
          unit: UNITS.PIXEL,
          value: 140,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerUccDpAmount',
        title: t('routingRuleset.columns.customerUccDpAmount'),
        minWidth: 140,
        width: {
          unit: UNITS.PIXEL,
          value: 140,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerUccWdCount',
        title: t('routingRuleset.columns.customerUccWdCount'),
        minWidth: 140,
        width: {
          unit: UNITS.PIXEL,
          value: 140,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerUccWdAmount',
        title: t('routingRuleset.columns.customerUccWdAmount'),
        minWidth: 140,
        width: {
          unit: UNITS.PIXEL,
          value: 140,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'cashierPaymentMethodCode',
        title: t('routingRuleset.columns.cashierPaymentMethodCode'),
        width: {
          unit: UNITS.PIXEL,
          value: 200,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'exchangeRateAdjustment',
        title: t('routingRuleset.columns.exchangeRateAdjustment'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerDaysFromReg',
        title: t('routingRuleset.columns.customerDaysFromReg'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerRegBeforeDate',
        title: t('routingRuleset.columns.customerRegBeforeDate'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {getFormattedDate(params.item.customerRegBeforeDate, [
                'hour',
                'minute',
                'second',
              ])}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'customerDaysFromFtd',
        title: t('routingRuleset.columns.customerDaysFromFtd'),
        minWidth: 130,
        width: {
          unit: UNITS.PIXEL,
          value: 130,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'timerEnabled',
        title: t('routingRuleset.columns.timerEnabled'),
        minWidth: 100,
        width: {
          unit: UNITS.PIXEL,
          value: 100,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              <Switch readonly checked={params.item.timerEnabled} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'failRetryCount',
        title: t('routingRuleset.columns.failRetryCount'),
        minWidth: 130,
        width: {
          unit: UNITS.PIXEL,
          value: 130,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'failRecoveryPeriod',
        title: t('routingRuleset.columns.failRecoveryPeriod'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {getHMfromMilliseconds(params.item.failRecoveryPeriod)}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'processedRetryCount',
        title: t('routingRuleset.columns.processedRetryCount'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'processedRecoveryPeriod',
        title: t('routingRuleset.columns.processedRecoveryPeriod'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {params.item.processedRecoveryPeriod === UNLIMITED
                ? t('routingRuleset.columns.unlimited')
                : getHMfromMilliseconds(params.item.processedRecoveryPeriod)}
            </RowCell>
          );
        },
      },
    ] as IColumn<IRoutingRuleset>[];
  }, []);

  return !data ? [] : routingRulesColumns;
};
