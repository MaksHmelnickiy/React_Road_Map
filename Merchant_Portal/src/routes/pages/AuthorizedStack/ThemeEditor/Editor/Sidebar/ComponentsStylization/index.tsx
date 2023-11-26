import React from 'react';
import { useTranslation } from 'react-i18next';

import Accordion from 'components/Accordion';
import Tooltip from 'components/Tooltip';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { useSidebarContext } from 'routes/pages/AuthorizedStack/ThemeEditor/Editor/Sidebars/SidebarsContext';
import { normalizeCamelCaseName } from 'utils/common';
import { IComponentProperty, ISelectedComponent } from 'utils/types';

import { useEditorContext } from '../../EditorContext';
import AccordionTitle from '../AccordionTitle';

import { Container, InnerComponents, PropertyBody, Title } from './styled';
import { useGetComponentProperties } from './useGetComponentProperties';

interface IGetComponent {
  name: string;
  componentPath: string;
  value: unknown;
  index: number;
  selectedPath?: string;
  selectComponent: (props: ISelectedComponent) => void;
}

const Hint = ({ isVisible }: { isVisible: boolean }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'themeEditor' });

  if (!isVisible) {
    return null;
  }

  return (
    <Tooltip component={t('selectToEdit')} immediateAnimation openDelay={200}>
      <span>
        <ICONS_MAP.Edit width={16} />
      </span>
    </Tooltip>
  );
};

const getComponent = ({
  name,
  value,
  index,
  selectComponent,
  componentPath,
  selectedPath,
}: IGetComponent) => {
  const normalName = normalizeCamelCaseName(name);

  const { innerProperties, componentProperties } = useGetComponentProperties(
    value as IComponentProperty
  );

  if (!innerProperties.length && !componentProperties.length) {
    return null;
  }

  if (
    (Object.hasOwnProperty.call(value, 'value') &&
      !(value as IComponentProperty)?.editable) ||
    name === 'typography'
  ) {
    return null;
  }

  const onSelectComponent = () => {
    selectComponent({
      component: Object.fromEntries(componentProperties),
      componentPath,
    });
  };

  if (!innerProperties.length) {
    return (
      <PropertyBody
        key={index}
        $isActive={selectedPath === componentPath}
        onClick={onSelectComponent}
      >
        {normalName}
        <Hint isVisible={!!componentProperties.length} />
      </PropertyBody>
    );
  }

  return (
    <Accordion
      key={index}
      isInitialOpen={false}
      header={({ isOpen, openHandler }) => (
        <AccordionTitle
          isOpen={isOpen}
          onButtonClick={openHandler}
          onTitleClick={componentProperties.length ? onSelectComponent : undefined}
          isActive={selectedPath === componentPath}
          title={
            <Title>
              {normalName}
              <Hint isVisible={!!componentProperties.length} />
            </Title>
          }
        />
      )}
    >
      <InnerComponents>
        {innerProperties.map(([name, value], index) =>
          getComponent({
            selectComponent,
            index,
            name,
            value,
            componentPath: `${componentPath}.${name}`,
            selectedPath,
          })
        )}
      </InnerComponents>
    </Accordion>
  );
};

const ComponentsStylization = () => {
  const { merchantTheme } = useEditorContext();

  const { selectComponent, componentConfig } = useSidebarContext();

  const componentsList = React.useMemo(
    () => Object.entries(merchantTheme.theme.components as Record<string, unknown>),
    [merchantTheme.theme.components]
  );

  return (
    <Container>
      {componentsList.map(([name, value], index) =>
        getComponent({
          selectComponent,
          index,
          name,
          value,
          componentPath: name,
          selectedPath: componentConfig?.componentPath,
        })
      )}
    </Container>
  );
};

export default appReactMemo(ComponentsStylization);
