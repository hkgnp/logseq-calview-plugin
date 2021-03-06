import React from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  DateNavigator,
  TodayButton,
  Toolbar,
  MonthView,
  WeekView,
  ViewSwitcher,
  AllDayPanel,
} from "@devexpress/dx-react-scheduler-material-ui";

const Calendar = (props: {
  schedulerData: any[];
  currentDate: Date;
  currentDateChange: any;
}) => {
  const { schedulerData, currentDate, currentDateChange } = props;
  const { startDayHour, endDayHour } = logseq.settings;

  return (
    <Scheduler data={schedulerData}>
      <ViewState
        currentDate={currentDate}
        onCurrentDateChange={currentDateChange}
      />
      <DayView startDayHour={startDayHour} endDayHour={endDayHour} />
      <WeekView startDayHour={startDayHour} endDayHour={endDayHour} />
      <MonthView />
      <Appointments />
      <AllDayPanel />
      <Toolbar />
      <DateNavigator />
      <TodayButton />
      <ViewSwitcher />
    </Scheduler>
  );
};

export default Calendar;
