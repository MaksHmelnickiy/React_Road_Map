import React from 'react';
import { useTranslation } from 'react-i18next';

import { ITag } from '@private/components';
import { Form, Formik, useFormikContext } from 'formik';
import { FormikHelpers } from 'formik/dist/types';

import { IUserForm } from 'api/users/types';
import BreadCrumb from 'components/BreadCrumb';
import ActionsButtons from 'components/Form/ActionsButtons';
import FieldWrapper from 'components/Form/FieldWrapper';
import FormikCountryPhoneInput from 'components/Form/FormikCountryPhoneInput';
import FormikInput from 'components/Form/FormikInput';
import FormikSwitch from 'components/Form/FormikSwitch';
import PreselectedField from 'components/Form/PreselectedField';
import SelectModalEnter from 'components/SelectModalEnter';
import TransferEnter from 'components/Transfers/TransferEnter';
import { ISelectedTreeOption, ITreeItem } from 'components/Transfers/TransferTree/types';
import TransferWrapper from 'components/Transfers/TransferWrapper';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { useGetMerchantsScope } from 'queries/merchants';
import { useGetRoles } from 'queries/rolesPermissions';
import { PageContainer } from 'routes/pages/AuthorizedStack/styled';
import FullAccessSwitcher from 'routes/pages/AuthorizedStack/Users/User/Form/FullAccessSwitcher';

import { ViewTitle } from '../../../styled';

import { Content, Header, Row } from './styled';
import { useRolesModal } from './useRolesModal';

interface IFormContent {
  title: string;
  isEdit?: boolean;
  onBack: () => void;
}

const TransferForm = ({ title, isEdit, onBack }: IFormContent) => {
  const { t } = useTranslation('translation', { keyPrefix: 'users.form' });

  const { data: rolesList } = useGetRoles();
  const { data: merchantsScope } =
    useGetMerchantsScope<ITreeItem<'merchantTerminals'>[]>(true);

  const { values, setFieldValue } = useFormikContext<IUserForm>();

  const saveRoles = React.useCallback((roles: string[]) => {
    setFieldValue('roleName', roles);
  }, []);

  const [showRolesModal] = useRolesModal();

  const openRolesModal = React.useCallback(() => {
    showRolesModal({
      options:
        rolesList?.map(({ role }) => ({
          label: role,
          value: role,
        })) || [],
      selectedList: values.roleName,
      onFinish: saveRoles,
    });
  }, [values.roleName, rolesList]);

  const selectedMerchants = React.useMemo(() => {
    if (values.scope.fullAccess) {
      return [];
    }
    const merchantTerminals: ITag[] = [];
    values.scope.merchants.forEach((merchant) => {
      merchant.merchantTerminals?.forEach((terminal) =>
        merchantTerminals.push({
          label: terminal.name,
        })
      );
    });

    return merchantTerminals;
  }, [values.scope]);

  const saveMerchants = React.useCallback((merchants: ISelectedTreeOption[]) => {
    setFieldValue('scope', {
      fullAccess: false,
      merchants,
    });
  }, []);

  const transferData = React.useMemo(
    () => [
      {
        key: 'merchants',
        iconHeader: ICONS_MAP.UserFull,
        dataListName: t('merchants'),
        selectDataText: t('selectMerchants'),
        treeData: {
          data: merchantsScope || [],
          initialSelected: values.scope.merchants,
          onChange: saveMerchants,
          parentKey: 'organization',
          iconsMap: {
            organization: <ICONS_MAP.Hierarchy />,
            merchantTerminals: <ICONS_MAP.UserFull />,
          },
        },
      },
    ],
    [values.scope.merchants, merchantsScope]
  );

  return (
    <TransferWrapper data={transferData} title={title}>
      {({ openTransfer }) => (
        <PageContainer>
          <Header>
            <ViewTitle>{title}</ViewTitle>
            <BreadCrumb />
          </Header>
          <Form>
            <Content>
              <FieldWrapper title={t('personalInfo')}>
                <Row>
                  <FormikInput
                    sizeVariant='sm'
                    name='firstName'
                    label={t('firstName')}
                    placeholder={t('firstName')}
                    maxLength={256}
                  />
                  <FormikInput
                    sizeVariant='sm'
                    name='lastName'
                    label={t('lastName')}
                    placeholder={t('lastName')}
                    maxLength={256}
                  />
                </Row>
                <Row>
                  {isEdit ? (
                    <PreselectedField label={t('login')} value={values.login} />
                  ) : (
                    <FormikInput
                      sizeVariant='sm'
                      name='login'
                      label={t('login')}
                      placeholder={t('login')}
                    />
                  )}
                  <FormikCountryPhoneInput
                    label={t('phone')}
                    phoneName='phoneNumber'
                    codeName='phoneCountryCode'
                    countryPlaceholder={t('countryCode')}
                    phonePlaceholder={t('phone')}
                  />
                </Row>
              </FieldWrapper>
              <FieldWrapper title={t('status')} notInput>
                <FormikSwitch name='enabled' />
              </FieldWrapper>
              <FullAccessSwitcher />
              <SelectModalEnter
                title={t('role')}
                selectTitle={t('roleSelect')}
                selectedList={values.roleName}
                onClick={openRolesModal}
                isEdit={isEdit}
              />
              <TransferEnter
                title={t('merchants')}
                onOpen={() => openTransfer('merchants')}
                selectTitle={t('selectMerchants')}
                tagList={selectedMerchants}
                disabled={values.scope.fullAccess}
              />
              <ActionsButtons isEdit={isEdit} onBack={onBack} />
            </Content>
          </Form>
        </PageContainer>
      )}
    </TransferWrapper>
  );
};

interface IUserFormProps {
  title: string;
  initialValues: IUserForm;
  onSubmit: (values: IUserForm, helpers: FormikHelpers<IUserForm>) => void;
  isEdit?: boolean;
  onBack: () => void;
}

const UserForm = ({ title, initialValues, onSubmit, isEdit, onBack }: IUserFormProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <TransferForm title={title} isEdit={isEdit} onBack={onBack} />
    </Formik>
  );
};

export default appReactMemo(UserForm);
