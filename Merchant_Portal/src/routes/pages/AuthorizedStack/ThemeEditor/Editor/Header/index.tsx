import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import Button from 'components/Button';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { ROUTES } from 'routes/config/constants';

import { useEditorContext } from '../EditorContext';

import NameForm from './NameForm';
import {
  Actions,
  ArrowContainer,
  BreadCrumb,
  Container,
  Crumb,
  CrumbItem,
  EditButton,
} from './styled';

export interface IEditorHeader {
  activeTheme?: string;
  onSave: () => void;
  isSaving: boolean;
  isApplying: boolean;
  isSaved: boolean;
  onApply: () => void;
  resetTheme: () => void;
  isEdited: boolean;
  isDefault: boolean;
  isNew?: boolean;
}

const EditorHeader = ({
  activeTheme,
  onSave,
  onApply,
  isSaved,
  isSaving,
  isApplying,
  resetTheme,
  isEdited,
  isDefault,
  isNew,
}: IEditorHeader) => {
  const { id = '' } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isEditingName, setIsEditingName] = React.useState(false);

  const { merchantTheme, updateMerchantTheme } = useEditorContext();

  const onBack = React.useCallback(() => {
    const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION;
    const stylizationPath = generatePath(PATH, {
      [PARAMS.ID]: id,
    });
    navigate(stylizationPath);
  }, [id]);

  const getApplyDisabled = () => {
    const isActive = merchantTheme.id === activeTheme;
    if (isSaving || isApplying || !isSaved || isActive) {
      return true;
    }

    return false;
  };

  const editNameHandler = React.useCallback(() => {
    setIsEditingName((state) => !state);
  }, []);

  const onSaveName = React.useCallback(
    (themeName: string) => {
      updateMerchantTheme({ ...merchantTheme, name: themeName });
      setIsEditingName(false);
    },
    [merchantTheme]
  );

  return (
    <Container>
      <BreadCrumb>
        <Button
          variant='icon'
          startIcon={<ICONS_MAP.LeftArrow />}
          iconSize={14}
          onClick={onBack}
        />
        <CrumbItem onClick={onBack}>
          <ICONS_MAP.Stylization />
          <Crumb as='h6'>{t('stylization.title')}</Crumb>
        </CrumbItem>
        <ArrowContainer>
          <ICONS_MAP.MinimalLeftArrow />
        </ArrowContainer>
        {isEditingName ? (
          <NameForm
            name={merchantTheme.name}
            onApply={onSaveName}
            onCancel={editNameHandler}
          />
        ) : (
          <CrumbItem>
            <Crumb>{merchantTheme.name}</Crumb>
            <EditButton
              variant='icon'
              startIcon={<ICONS_MAP.Edit />}
              iconSize={20}
              onClick={editNameHandler}
            />
          </CrumbItem>
        )}
      </BreadCrumb>
      <Actions>
        <Button
          variant='primary'
          endIcon={<ICONS_MAP.Apply />}
          iconSize={14}
          disabled={getApplyDisabled()}
          onClick={onApply}
        >
          {t('common.apply')}
        </Button>
        <Button
          variant='primary'
          disabled={isNew ? isSaving || isApplying : !isEdited || isSaving || isApplying}
          onClick={onSave}
        >
          {t('common.save')}
        </Button>
        <Button variant='outlined' onClick={resetTheme} disabled={isDefault}>
          {t('common.reset')}
        </Button>
      </Actions>
    </Container>
  );
};

export default appReactMemo(EditorHeader);
