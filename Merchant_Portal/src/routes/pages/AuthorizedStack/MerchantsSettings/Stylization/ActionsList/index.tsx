import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import { ITheme } from 'api/merchantTerminalThemes/types';
import RBAC from 'components/RBAC';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { useConfirmModal } from 'modals';
import {
  useCreateMerchantTerminalTheme,
  useDeleteMerchantTerminalTheme,
  useGetMerchantThemes,
  useSetMerchantTerminalActiveTheme,
} from 'queries/merchantTerminalThemes';
import { ROUTES } from 'routes/config/constants';

import ModalContent from './ModalContent';
import { ActionButton, DeleteButton } from './styled';

export interface IActionsList {
  theme: ITheme;
  isSystem?: boolean;
  isActive?: boolean;
  maxThemesReached: boolean;
  merchantId: string;
}

const ActionsList = ({
  theme,
  isSystem,
  isActive,
  maxThemesReached,
  merchantId,
}: IActionsList) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { id: themeId, preview } = theme;

  const { data: merchant } = useGetMerchantThemes(merchantId);

  const { mutate: activateTheme } = useSetMerchantTerminalActiveTheme({
    id: merchantId,
    themeId,
  });

  const { mutate: deleteTheme } = useDeleteMerchantTerminalTheme({
    id: merchantId,
    themeId,
  });

  const { mutate: createTheme } = useCreateMerchantTerminalTheme();

  const [showConfirmModal] = useConfirmModal();

  const onApply = React.useCallback(() => {
    showConfirmModal({
      title: t('stylization.modals.apply.title'),
      confirmText: t('stylization.modals.apply.confirm'),
      confirmBtnType: 'danger',
      message: (
        <ModalContent
          message={t('stylization.modals.apply.message')}
          variant='apply'
          preview={preview}
        />
      ),
      onConfirm: activateTheme,
    });
  }, [preview]);

  const onDelete = React.useCallback(() => {
    showConfirmModal({
      title: t('stylization.modals.delete.title'),
      confirmText: t('stylization.modals.delete.confirm'),
      confirmBtnType: 'danger',
      message: (
        <ModalContent
          message={
            isActive
              ? t('stylization.modals.delete.activeMessage')
              : t('stylization.modals.delete.message')
          }
          variant='delete'
          preview={preview}
        />
      ),
      onConfirm: deleteTheme,
    });
  }, [preview]);

  const onEdit = React.useCallback(() => {
    const { PATH, PARAMS } =
      ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION.SUB_PATH.THEME.SUB_PATH
        .EDIT;
    const themePath = generatePath(PATH, {
      [PARAMS.ID]: merchantId,
      [PARAMS.THEME_ID]: themeId,
    });
    navigate(themePath);
  }, [merchantId, themeId]);

  const onClone = React.useCallback(() => {
    if (!merchant) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,unused-imports/no-unused-vars
    const { name, id: _id, isSystem, ...merchantTheme } = theme;

    const existedThemeCopy = merchant.themes.reduce<number>((prev, item) => {
      const matchRegex = new RegExp(
        `${name.replace(/(\()Copy (\d+)(\))/g, '\\(Copy $2\\)')} \\(Copy (\\d+)\\)`
      );
      const match = item.name.match(matchRegex);
      if (!match) {
        return prev;
      }
      const copyNumber = match?.[1];
      if (copyNumber) {
        const currentNumber = Number(copyNumber);
        if (currentNumber > prev) {
          return currentNumber;
        }
      }
      return prev;
    }, 0);

    createTheme({
      id: merchantId,
      theme: {
        ...merchantTheme,
        name: `${name} (Copy ${existedThemeCopy + 1})`,
      },
    });
  }, [merchantId, merchant, theme]);

  return (
    <>
      <RBAC list={[PERMISSIONS.CAN_SET_ACTIVE_PAYMENT_PAGE_STYLIZATION]}>
        {!isActive && (
          <ActionButton
            variant='icon'
            startIcon={<ICONS_MAP.Apply />}
            iconSize={14}
            onClick={onApply}
          >
            {t('common.apply')}
          </ActionButton>
        )}
      </RBAC>
      <RBAC list={[PERMISSIONS.CAN_CHANGE_PAYMENT_PAGE_STYLIZATION]}>
        {!isSystem && !isActive && (
          <ActionButton
            variant='icon'
            startIcon={<ICONS_MAP.Edit />}
            iconSize={20}
            onClick={onEdit}
          >
            {t('common.edit')}
          </ActionButton>
        )}
      </RBAC>
      <RBAC list={[PERMISSIONS.CAN_COPY_PAYMENT_PAGE_STYLIZATION]}>
        {!maxThemesReached && (
          <ActionButton
            variant='icon'
            startIcon={<ICONS_MAP.Copy />}
            iconSize={18}
            onClick={onClone}
          >
            {t('common.clone')}
          </ActionButton>
        )}
      </RBAC>
      <RBAC list={[PERMISSIONS.CAN_DELETE_PAYMENT_PAGE_STYLIZATION]}>
        {!isSystem && (
          <DeleteButton
            variant='icon'
            startIcon={<ICONS_MAP.Delete />}
            iconSize={20}
            onClick={onDelete}
          >
            {t('common.delete')}
          </DeleteButton>
        )}
      </RBAC>
    </>
  );
};

export default appReactMemo(ActionsList);
