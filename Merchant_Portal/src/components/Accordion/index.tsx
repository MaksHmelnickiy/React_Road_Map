import React from 'react';

import { useUpdateEffect } from '@private/hooks';

import { appReactMemo } from 'hocs';

import { ContentContainer, Header } from './styled';

export interface IAccordionHeaderProps {
  isOpen: boolean;
  openHandler: (state?: boolean) => void;
  contentHeight: number | null;
}

export interface IAccordionProps {
  children?: React.ReactNode;
  className?: string;
  isInitialOpen?: boolean;
  isOpen?: boolean;
  header: React.ReactNode | ((props: IAccordionHeaderProps) => React.ReactNode);
  onClick?: (props: { isOpen: boolean }) => void;
}

const Accordion: React.FC<IAccordionProps> = ({
  header,
  isInitialOpen = false,
  isOpen = false,
  className,
  children,
  onClick,
}) => {
  const [open, setOpen] = React.useState(isInitialOpen);
  const [contentHeight, setContentHeight] = React.useState(isInitialOpen ? null : 0);

  const contentRef = React.useRef<HTMLDivElement>(null);
  const hasOpen = React.useRef(isInitialOpen);
  const [animFinished, setAminFinished] = React.useState(true);

  const openHandler = React.useCallback((newState: boolean) => {
    if (newState) {
      // open accordion if new state is true
      setAminFinished(false);
      setOpen(true);
      if (!hasOpen.current) {
        hasOpen.current = true;
      }
    } else {
      // close accordion if new state is false
      setContentHeight(0);
      setTimeout(() => setOpen(false), 300);
    }
  }, []);

  const onCustomHeaderOpen = React.useCallback(
    (newState?: boolean) => {
      openHandler(newState === undefined ? !open : newState);
    },
    [open]
  );

  const onHeaderHandler = React.useCallback(() => {
    openHandler(!open);
  }, [open]);

  React.useEffect(() => {
    onClick?.({ isOpen: open });
  }, [open]);

  useUpdateEffect(() => {
    openHandler(isOpen);
  }, [isOpen]);

  useUpdateEffect(() => {
    if (!contentRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current && contentHeight) {
        setContentHeight(contentRef.current?.scrollHeight);
      }
    });
    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, [contentRef.current, contentHeight]);

  const onMountContent = React.useCallback(
    (node: HTMLDivElement) => {
      if (!node || !open) {
        return;
      }

      setContentHeight(node.scrollHeight);
    },
    [open]
  );

  const onEnd = () => {
    setAminFinished(true);
  };

  return (
    <div className={className}>
      {typeof header === 'function' ? (
        header({ isOpen: open, openHandler: onCustomHeaderOpen, contentHeight })
      ) : (
        <Header onClick={onHeaderHandler}>{header}</Header>
      )}

      {hasOpen.current && (
        <ContentContainer
          ref={onMountContent}
          $height={contentHeight}
          $animFinished={animFinished} // to set overflow only when dropdown in closing and closed
          onTransitionEnd={onEnd}
        >
          <div ref={contentRef}>{children}</div>
        </ContentContainer>
      )}
    </div>
  );
};

export default appReactMemo(Accordion);
