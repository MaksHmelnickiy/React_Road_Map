import React from 'react';
import { generatePath, Navigate, useNavigate, useParams } from 'react-router-dom';

import { ITheme } from 'api/merchantTerminalThemes/types';
import Loader from 'components/Loader';
import {
  useGetMerchantThemes,
  useSetMerchantTerminalActiveTheme,
  useUpdateMerchantTerminalTheme,
} from 'queries/merchantTerminalThemes';
import { ROUTES } from 'routes/config/constants';
import Editor from 'routes/pages/AuthorizedStack/ThemeEditor/Editor';
import { LoaderContainer } from 'routes/styled';

const EditUserTheme = () => {
  const { id = '', themeId = '' } = useParams<{ id: string; themeId: string }>();
  const { data: merchant, isLoading } = useGetMerchantThemes(id);
  const navigate = useNavigate();

  const theme = merchant?.themes?.find((item) => item.id === themeId);

  const {
    mutate: updateMerchantTheme,
    isLoading: isUpdatingTheme,
    isSuccess: isUpdatedTheme,
  } = useUpdateMerchantTerminalTheme();

  const { mutate: activateTheme, isLoading: isApplyingTheme } =
    useSetMerchantTerminalActiveTheme({ id, themeId });

  const onSave = React.useCallback((theme: ITheme) => {
    updateMerchantTheme({ id, theme });
  }, []);

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

  if (!theme) {
    const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION;
    return <Navigate to={generatePath(PATH, { [PARAMS.ID]: id })} replace />;
  }

  return (
    <Editor
      layoutTheme={theme}
      activeTheme={merchant?.activeTheme}
      onSave={onSave}
      isSaving={isUpdatingTheme}
      isApplying={isApplyingTheme}
      isSaved={isUpdatedTheme}
      onApply={applyTheme}
      merchantTerminalId={id}
    />
  );
};

export default EditUserTheme;
