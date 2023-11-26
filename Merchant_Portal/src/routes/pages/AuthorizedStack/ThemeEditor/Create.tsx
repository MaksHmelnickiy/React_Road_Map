import React from 'react';
import { generatePath, Navigate, useNavigate, useParams } from 'react-router-dom';

import { ITheme } from 'api/merchantTerminalThemes/types';
import Loader from 'components/Loader';
import {
  useCreateMerchantTerminalTheme,
  useGetMerchantThemes,
  useSetMerchantTerminalActiveTheme,
  useUpdateMerchantTerminalTheme,
} from 'queries/merchantTerminalThemes';
import { ROUTES } from 'routes/config/constants';
import Editor from 'routes/pages/AuthorizedStack/ThemeEditor/Editor';
import { LoaderContainer } from 'routes/styled';

const CreateUserTheme = () => {
  const { id = '' } = useParams<{ id: string }>();
  const { data: merchant, isLoading } = useGetMerchantThemes(id);
  const navigate = useNavigate();

  const {
    mutate: createMerchantTheme,
    data,
    isLoading: isCreatingTheme,
    isSuccess: isCreatedTheme,
  } = useCreateMerchantTerminalTheme();

  const {
    mutate: updateMerchantTheme,
    isLoading: isUpdatingTheme,
    isSuccess: isUpdatedTheme,
    isIdle: notUpdated,
  } = useUpdateMerchantTerminalTheme();

  const { mutate: activateTheme, isLoading: isApplyingTheme } =
    useSetMerchantTerminalActiveTheme({ id, themeId: data?.id });

  const onSave = React.useCallback(
    (theme: ITheme) => {
      if (isCreatedTheme) {
        updateMerchantTheme({ id, theme: { ...theme, id: data?.id } });
      } else {
        createMerchantTheme({ id, theme });
      }
    },
    [isCreatedTheme, data?.id]
  );

  const applyTheme = React.useCallback(() => {
    activateTheme(undefined, {
      onSuccess: () => {
        const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION;
        navigate(generatePath(PATH, { [PARAMS.ID]: id }));
      },
    });
  }, []);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  const theme = merchant?.themes?.find((theme) => theme.isSystem);

  if (!theme) {
    const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION;
    return <Navigate to={generatePath(PATH, { [PARAMS.ID]: id })} replace />;
  }

  return (
    <Editor
      isNew={!isCreatedTheme}
      layoutTheme={theme}
      isSaved={
        !isCreatedTheme || notUpdated ? isCreatedTheme : isCreatedTheme && isUpdatedTheme
      }
      onSave={onSave}
      isSaving={isCreatingTheme || isUpdatingTheme}
      isApplying={isApplyingTheme}
      onApply={applyTheme}
      merchantTerminalId={id}
    />
  );
};

export default CreateUserTheme;
