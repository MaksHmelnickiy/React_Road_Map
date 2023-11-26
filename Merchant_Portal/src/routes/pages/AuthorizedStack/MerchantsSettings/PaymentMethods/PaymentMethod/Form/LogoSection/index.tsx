import React from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';

import * as DOMPurify from 'dompurify';
import { useFormikContext } from 'formik';

import Button from 'components/Button';
import FieldWrapper from 'components/Form/FieldWrapper';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import {
  IPaymentMethodForm,
  SIZE_ERROR,
  THREE_MB,
  TYPE_ERROR,
  validateSVG,
} from '../helpers';

import { DEFAULT_ICONS } from './defaultLogos';
import {
  ClickLink,
  DefaultIcons,
  DropHelpInfo,
  DropText,
  DropZone,
  Error,
  HiddenInput,
  LimitationRules,
  LogoInfo,
  StyledCheckbox,
  StyledRadioSelect,
  StyledRandomImgPreview,
  UploadedLogo,
  ZoneBg,
  ZoneBody,
} from './styled';

const LogoSection = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'paymentMethods.form' });
  const {
    values: { logo },
    setFieldValue,
  } = useFormikContext<IPaymentMethodForm>();

  const [isDefault, setIsDefault] = React.useState(false);
  const defaultBlockHeight = React.useRef<null | number>(null);
  const uploadedLogo = React.useRef<null | string>(null);
  const [dropError, setDropError] = React.useState<null | string>(null);

  const handleFileRead = (event: ProgressEvent<FileReader>) => {
    const content = (event.target?.result as string) || '';

    const sanitized = DOMPurify.sanitize(content);

    const isSvgValid = validateSVG(sanitized);

    if (isSvgValid) {
      uploadedLogo.current = content;
      setDropError(null);
      setFieldValue('logo', content);
    } else {
      setDropError(t('logoUpload.errors.invalid'));
    }
  };

  const onDrop = React.useCallback((files: File[]) => {
    if (!files.length) {
      return;
    }

    const [file] = files;
    const reader = new FileReader();

    reader.onload = handleFileRead;
    reader.readAsText(file);
  }, []);

  const onDropRejected = (files: FileRejection[]) => {
    const [rejectedFile] = files;
    const [{ code }] = rejectedFile.errors;

    if (code) {
      switch (code) {
        case TYPE_ERROR:
          return setDropError(t('logoUpload.errors.type'));
        case SIZE_ERROR:
          return setDropError(t('logoUpload.errors.size'));
        default:
          return setDropError(t('logoUpload.errors.invalid'));
      }
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropRejected,
    onDrop,
    maxSize: THREE_MB,
    accept: {
      'image/svg': ['.svg'],
    },
    maxFiles: 1,
    disabled: isDefault,
  });

  const defaultIconHandler = React.useCallback(() => {
    setIsDefault((state) => !state);
    setDropError(null);
    if (logo) {
      setFieldValue('logo', null);
    }
  }, [logo]);

  const onMount = React.useCallback((node: HTMLDivElement) => {
    if (!defaultBlockHeight.current && node) {
      defaultBlockHeight.current = node.scrollHeight;
    }
  }, []);

  const removeUploadedLogo = React.useCallback(() => {
    uploadedLogo.current = null;
    setFieldValue('logo', null);
  }, []);

  const renderZoneContent = () => {
    if (!logo && !uploadedLogo.current) {
      return (
        <DropZone {...getRootProps()} disabled={isDefault}>
          <ZoneBg key={dropError} $isError={!!dropError} $isDragActive={isDragActive} />
          <HiddenInput {...getInputProps()} />
          <ZoneBody>
            <ICONS_MAP.UploadFile />
            <DropHelpInfo>
              <DropText size='md' variant='bold'>
                <ClickLink>{`${t('logoUpload.click')} `}</ClickLink>
                {t('logoUpload.dragAndDrop')}
              </DropText>
              <LimitationRules size='xs'>{t('logoUpload.limitation')}</LimitationRules>
            </DropHelpInfo>
          </ZoneBody>
        </DropZone>
      );
    }

    if (uploadedLogo.current) {
      return (
        <UploadedLogo disabled={isDefault}>
          <LogoInfo>
            <StyledRandomImgPreview src={uploadedLogo.current} />
          </LogoInfo>
          <Button
            variant='icon'
            startIcon={<ICONS_MAP.Delete />}
            iconSize={20}
            onClick={removeUploadedLogo}
            disabled={isDefault}
          />
        </UploadedLogo>
      );
    }
  };

  return (
    <FieldWrapper title={t('logo')}>
      {renderZoneContent()}
      <StyledCheckbox
        checked={isDefault}
        onChange={defaultIconHandler}
        label={t('logoUpload.useDefaultLogo')}
      />
      <DefaultIcons
        ref={onMount}
        $isVisible={isDefault}
        $height={defaultBlockHeight.current}
      >
        <StyledRadioSelect name='logo' value={logo || ''} data={DEFAULT_ICONS} />
      </DefaultIcons>
      <Error>{dropError}</Error>
    </FieldWrapper>
  );
};

export default appReactMemo(LogoSection);
