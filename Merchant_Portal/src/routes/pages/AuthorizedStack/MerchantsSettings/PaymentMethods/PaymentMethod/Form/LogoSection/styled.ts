import { radioSelectClasses } from '@private/components';
import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css, keyframes } from 'styled-components';

import Checkbox from 'components/Controls/Checkbox';
import FormikRadioSelect from 'components/Form/FormikRadioSelect';
import RandomImgPreview from 'components/RandomImgPreview';
import Typography from 'components/Typography';

const prefix = ['merchantSettings', 'paymentMethods', 'form', 'dropZone'];

const blinkingAnimation = keyframes`
   0%   {
     ${getBorderBase([...prefix, 'hover'])};
     background: ${getPrefixedVar(prefix, 'base', 'bg')};
   }  
  
    100% {
      ${getBorderBase([...prefix, 'error'])};
      background: ${getPrefixedVar(prefix, 'error', 'bg')};
    }
`;

export const DropZone = styled.div<{
  disabled: boolean;
}>`
  position: relative;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 124px;
  padding: 16px;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: default;
    `}
`;

export const ZoneBody = styled.div`
  position: relative;
  z-index: 1;
`;

export const ZoneBg = styled.div<{
  $isDragActive: boolean;
  $isError: boolean;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-style: dashed;
  ${getBorderBase([...prefix, 'base'])};
  background: ${getPrefixedVar(prefix, 'base', 'bg')};
  transition: all 0.3s ease;
  z-index: 0;

  ${({ $isDragActive }) =>
    $isDragActive &&
    css`
      ${getBorderBase([...prefix, 'hover'])};
      background: ${getPrefixedVar(prefix, 'hover', 'bg')};
    `}

  ${({ $isError }) =>
    $isError &&
    css`
      animation: ${blinkingAnimation} 0.4s 0s ease 4 alternate;
    `}
`;

export const HiddenInput = styled.input`
  display: none;
  visibility: hidden;
  opacity: 0;
  z-index: -10;
  position: absolute;
  left: -10000px;
  top: -10000px;
`;

export const DropHelpInfo = styled.div`
  margin-top: 12px;
`;

export const DropText = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'dropText')};
`;

export const ClickLink = styled.span`
  color: ${getPrefixedVar(prefix, 'clickLink')};
`;

export const LimitationRules = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'limitationRules')};
  margin-top: 4px;
`;

export const Error = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  height: 18px;
  max-height: 18px;
  ${getFontBase([...prefix, 'errorMessage'])}
`;

export const StyledCheckbox = styled(Checkbox)`
  margin-top: 24px;
`;

export const DefaultIcons = styled.div<{
  $isVisible: boolean;
  $height: number | null;
}>`
  height: 0px;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  ${({ $isVisible, $height }) =>
    $isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      margin-top: 32px;
      height: ${$height}px;
    `}
`;

export const StyledRadioSelect = styled(FormikRadioSelect)`
  ${radioSelectClasses.radioGroup} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 40px;
    gap: 24px 20px;
  }

  ${radioSelectClasses.radioContainer} {
    height: 100%;
  }

  ${radioSelectClasses.customComponent} {
    display: flex;
    height: 100%;
    width: 100%;

    svg {
      height: 100%;
      width: auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
`;

export const UploadedLogo = styled.div<{ disabled: boolean }>`
  height: 48px;
  max-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const LogoInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const StyledRandomImgPreview = styled(RandomImgPreview)`
  height: 100%;
`;
