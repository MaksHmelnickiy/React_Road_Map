import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ITransferOption } from '@private/transfers';

import { PERMISSIONS } from 'api/auth/constants';
import { IRolePayload } from 'api/rolesPermissions/types';
import Loader from 'components/Loader';
import TransferList from 'components/Transfers/TransferList';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { ICreateRoleResult, useGetPermissions } from 'queries/rolesPermissions';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import { PageContainer } from '../../../../styled';

import NameField from './NameField';
import { Container, Header, SaveButton, StyledBack } from './styled';

interface IRoleFrom {
  onSave: ICreateRoleResult['mutate'];
  isSaving: boolean;
  isNew?: boolean;
}

const RoleFrom = ({ onSave, isSaving, isNew }: IRoleFrom) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isEditMode, setIsEditMode] = React.useState(false);
  const [state, setState] = React.useState<IRolePayload>({
    roleName: '',
    permissions: [],
  });
  const [nameError, setNameError] = React.useState('');
  const prevName = React.useRef('');

  const { data: permissionsList, isLoading } = useGetPermissions();

  const activateEditMode = React.useCallback(() => {
    setIsEditMode(true);
    prevName.current = state.roleName;
  }, [isEditMode, state.roleName]);

  const discardChanges = React.useCallback(() => {
    setIsEditMode(false);
    setState((state) => ({ ...state, roleName: prevName.current }));
  }, []);

  const onClear = React.useCallback(() => {
    setState((state) => ({ ...state, roleName: '' }));
  }, []);

  const saveChanges = React.useCallback(() => {
    setIsEditMode(false);
    prevName.current = state.roleName;
  }, [state.roleName]);

  const onNameChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setState((state) => ({
      ...state,
      roleName: value,
    }));
    setNameError('');
  }, []);

  const onSelectPermission = React.useCallback((list: ITransferOption[]) => {
    setState((state) => ({
      ...state,
      permissions: list.map((item) => item.value as PERMISSIONS),
    }));
  }, []);

  const onBack = React.useCallback(() => {
    navigate(ROUTES.SETTINGS.SUB_PATH.ROLES_AND_PERMISSIONS.PATH);
  }, []);

  const onFinish = React.useCallback(() => {
    if (isEditMode) {
      setIsEditMode(false);
    }
    onSave(state, {
      onSuccess: onBack,
      onError: (resp: QueryError) => {
        const { roleName } = getFormErrors({
          getTranslation: t,
          errors: resp?.response?.data?.fieldMessages,
        });
        if (roleName) {
          setNameError(roleName);
          setIsEditMode(true);
        }
      },
    });
  }, [isEditMode, onSave, state]);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <Container>
      <Header>
        <StyledBack
          variant='icon'
          startIcon={<ICONS_MAP.MinimalLeftArrow />}
          iconSize={14}
          onClick={onBack}
        >
          {t('rolesAndPermissions.role.form.back')}
        </StyledBack>
        <NameField
          activateEditMode={activateEditMode}
          discardChanges={discardChanges}
          saveChanges={saveChanges}
          onClear={onClear}
          isEditMode={isEditMode}
          roleName={state.roleName}
          onNameChange={onNameChange}
          error={nameError}
        />
        <SaveButton
          variant='primary'
          onClick={onFinish}
          disabled={isSaving}
          isLoading={isSaving}
        >
          {isNew ? t('common.create') : t('common.save')}
        </SaveButton>
      </Header>
      <PageContainer>
        <TransferList
          data={permissionsList || []}
          dataListName='Permissions'
          icon={ICONS_MAP.UserFull}
          onChange={onSelectPermission}
        />
      </PageContainer>
    </Container>
  );
};

export default appReactMemo(RoleFrom);
