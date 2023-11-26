import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import FormikSelect from 'components/Form/FormikSelect';
import { appReactMemo } from 'hocs';
import { useGetMerchantRoutingRulesets, useGetMerchantsScope } from 'queries/merchants';

import { DoubleColumn, EnabledSwitch, StyledSection, TripleColumn } from '../../styled';
import { IRoutingRulesetForm } from '../../utils/types';

// interface INewRuleset {
//   isNew?: boolean;
// }

const NewRuleset = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const {
    values: { merchantId, merchantTerminalId, routingSchemaId },
    setFieldValue,
  } = useFormikContext<IRoutingRulesetForm>();

  const { data: merchantsScope, isLoading: isLoadingScope } = useGetMerchantsScope();
  const { data: routingRulesets, isLoading: isLoadingRulesets } =
    useGetMerchantRoutingRulesets(merchantTerminalId);

  const { organizations = [], merchantsMap = {} } = merchantsScope || {};
  const hasSingleOrganization = organizations.length === 1;
  const organizationExists = !!organizations.length;

  React.useEffect(() => {
    if (organizationExists && hasSingleOrganization) {
      const [merchantId] = organizations;
      setFieldValue('merchantId', merchantId);
    }
  }, [organizations]);

  const onChangeMerchantId = React.useCallback(() => {
    if (merchantTerminalId) {
      setFieldValue('merchantTerminalId', null, false);
    }
  }, [merchantTerminalId]);

  const onChangeMerchantTerminalId = React.useCallback(() => {
    if (routingSchemaId) {
      setFieldValue('routingSchemaId', null, false);
    }
  }, [routingSchemaId]);

  const Container =
    hasSingleOrganization && organizationExists ? DoubleColumn : TripleColumn;
  const enabledSwitch = <EnabledSwitch name='enabled' label={t('fields.enabled')} />;

  return (
    <StyledSection
      keyPrefix='routingRuleset.form.sections'
      sectionKey='newRoutingRuleset'
      customComponent={enabledSwitch}
    >
      <Container>
        {!hasSingleOrganization && organizationExists && (
          <FormikSelect
            name='merchantId'
            options={organizations}
            onChange={onChangeMerchantId}
            label={t(`fields.organization`)}
            loading={isLoadingScope}
          />
        )}
        <FormikSelect
          name='merchantTerminalId'
          options={(merchantId && merchantsMap[merchantId]) || []}
          label={t(`fields.merchant`)}
          loading={isLoadingScope}
          disabled={!merchantId}
          enablePreselect
          onChange={onChangeMerchantTerminalId}
        />
        <FormikSelect
          name='routingSchemaId'
          options={routingRulesets || []}
          label={t(`fields.routingScheme`)}
          disabled={!merchantTerminalId}
          enablePreselect
          loading={isLoadingRulesets}
        />
      </Container>
    </StyledSection>
  );
};

export default appReactMemo(NewRuleset);
