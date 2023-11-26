import styled, { css } from 'styled-components';

import Button from 'components/Button';
import { getButtonTheme } from 'components/Button/styled';

const actionStyle = css`
  width: 100%;
  justify-content: flex-start;
  padding: 5px 20px;
  border-radius: 0 !important;
`;

export const ActionButton = styled(Button)`
  ${actionStyle};
`;

export const DeleteButton = styled(Button)`
  ${actionStyle};
  ${getButtonTheme(['stylization', 'actions', 'deleteButton'])}
`;
