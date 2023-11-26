import React from 'react';

import Accordion from 'components/Accordion';
import { appReactMemo } from 'hocs';
import Header from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/FormBody/Sections/Schedule/Header';
import {
  ScheduleContainer,
  StyledSection,
} from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/styled';
import { getWeekDaysOption } from 'utils/dateHelpers';

import ScheduleBlock from './ScheduleBlock';

const Schedule = () => {
  const weekDays = React.useMemo(() => {
    const days = getWeekDaysOption();
    return days.map((day) => ({
      label: day.toUpperCase(),
      value: day,
    }));
  }, []);

  return (
    <StyledSection keyPrefix='routingRuleset.form.sections' sectionKey='schedule'>
      <Accordion header={(props) => <Header {...props} />}>
        <ScheduleContainer>
          {weekDays?.map((option, index) => (
            <ScheduleBlock key={index} {...option} />
          ))}
        </ScheduleContainer>
      </Accordion>
    </StyledSection>
  );
};

export default appReactMemo(Schedule);
