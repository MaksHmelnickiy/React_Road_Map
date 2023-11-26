import React from 'react';

import { appReactMemo } from 'hocs';
import { IGradientColor } from 'utils/types';

import { Container, EndThumb, Slider, StartThumb } from './styled';

export type TRangeVariants = 'start' | 'end';

interface IGradientSlider {
  color: string;
  gradient: IGradientColor;
  onSelectColor: (variant: TRangeVariants) => void;
  onChange: (props: { variant: TRangeVariants; degree: number }) => void;
  activeRange: TRangeVariants;
}

const GradientSlider = ({
  color,
  gradient,
  onSelectColor,
  onChange,
  activeRange,
}: IGradientSlider) => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const startThumbRef = React.useRef<HTMLDivElement>(null);
  const endThumbRef = React.useRef<HTMLDivElement>(null);
  const thumbStart = React.useRef(0);
  const variant = React.useRef<TRangeVariants>('start');

  const [thumbPositions, setThumbPositions] = React.useState({
    start: 0,
    end: 0,
  });

  const { startColorHsl, endColorHsl, startColorPercent, endColorPercent } = gradient;

  const getUnit = () => {
    const slider = sliderRef.current;
    const startThumb = startThumbRef.current;
    if (!slider || !startThumb) {
      return 0;
    }

    const sliderWidth = slider.clientWidth - startThumb.offsetWidth;
    return sliderWidth / 100;
  };

  const transferDegreeToPosition = (position: number) => {
    const unit = getUnit();
    return position * unit;
  };

  const transferPositionToDegree = (position: number) => {
    const unit = getUnit();
    return Math.round(position / unit);
  };

  React.useLayoutEffect(() => {
    setThumbPositions({
      start: transferDegreeToPosition(startColorPercent),
      end: transferDegreeToPosition(endColorPercent),
    });
  }, []);

  const onMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    let thumb = startThumbRef.current;

    const type = variant.current;

    if (type === 'end') {
      thumb = endThumbRef.current;
    }

    if (!slider || !thumb) {
      return;
    }

    let newLeft = e.clientX - thumbStart.current - slider.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    const rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    setThumbPositions((state) => ({
      ...state,
      [type]: newLeft,
    }));

    const degree = transferPositionToDegree(newLeft);
    onChange({ variant: type, degree });
  }, []);

  const onMouseUp = React.useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }, []);

  const onMouseDown = (type: TRangeVariants) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    let thumb = startThumbRef.current;

    if (type === 'end') {
      thumb = endThumbRef.current;
    }

    if (!thumb) {
      return;
    }

    const shiftX = e.clientX - thumb.getBoundingClientRect().left;
    thumbStart.current = shiftX;
    variant.current = type;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onColorSelect = (variant: TRangeVariants) => () => onSelectColor(variant);

  return (
    <Container>
      <Slider ref={sliderRef} bg={color}>
        <StartThumb
          ref={startThumbRef}
          $bg={startColorHsl}
          $isActive={activeRange === 'start'}
          onMouseDown={onMouseDown('start')}
          onClick={onColorSelect('start')}
          $position={thumbPositions.start}
        />
        <EndThumb
          ref={endThumbRef}
          $bg={endColorHsl}
          $isActive={activeRange === 'end'}
          onMouseDown={onMouseDown('end')}
          onClick={onColorSelect('end')}
          $position={thumbPositions.end}
        />
      </Slider>
    </Container>
  );
};

export default appReactMemo(GradientSlider);
