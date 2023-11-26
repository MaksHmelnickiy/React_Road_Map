import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import { IClientForm } from 'api/clients/types';
import FormikDatePicker from 'components/Form/FormikDatePicker';
import FormikSelect from 'components/Form/FormikSelect';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';
import { useGetTerminalLinksList } from 'queries/terminalsLinks';

import { NAVIGATION_OPTIONS } from '../helpers';
import { DoubleColumn } from '../styled';

const Additional = () => {
  const { t } = useTranslation();

  const { values } = useFormikContext<IClientForm>();

  const { merchantTerminalId } = values;

  const { data: terminalLinkList, isLoading: isLoadingLinkList } =
    useGetTerminalLinksList({
      merchantTerminalId,
    });

  const datePickerConfig = React.useMemo(
    () => ({
      settingsConfig: { hideTime: true },
    }),
    []
  );

  return (
    <Section sectionKey={NAVIGATION_OPTIONS.ADDITIONAL} keyPrefix='client.form.sections'>
      <DoubleColumn>
        <FormikSelect
          size='sm'
          label={t('client.form.fields.terminalLinkId')}
          name='terminalLinkId'
          options={terminalLinkList || []}
          disabled={!merchantTerminalId || !terminalLinkList?.length}
          loading={isLoadingLinkList}
        />
        <FormikDatePicker
          label={t('client.form.fields.registrationDate')}
          placeholder={t('common.singleDate')}
          variant='datepicker'
          name='registrationDate'
          sizeVariant='sm'
          inputMask='yyyy-MM-dd'
          valueMask='yyyy-MM-dd'
          settingsConfig={datePickerConfig.settingsConfig}
        />
      </DoubleColumn>
    </Section>
  );
};

export default appReactMemo(Additional);
