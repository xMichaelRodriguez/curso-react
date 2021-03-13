import React, { useState } from "react";
import { messages } from "../../helpers/messges";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import { NavbarScreen } from "../ui/NavbarScreen";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";

moment.locale("es");
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const events = [
  {
    title: "Cumplenos",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgColor: "#fafafafa",
    notes: "cumpleannos",
    user: {
      _id: new Date().getTime(),
      name: "Michael",
    },
  },
];

export const CalendarScreen = () => {
  const [lastView, setlastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const eventStyleGetters = (event, start, end, isSelected) => {
    const styles = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacidy: 0.8,
      color: "white",
    };

    return {
      styles,
    };
  };

  const onDoubleClick = (e) => {
    console.log(e);
  };
  const onSelectEvent = (e) => {
    console.log(e);
  };
  const onViewChange = (e) => {
    localStorage.setItem("lastView", e);
    setlastView(e);
  };
  return (
    <div className="calendar-screen mb-2">
      <NavbarScreen />
      <div className="container-fluid">
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventStyleGetters}
          components={{ event: CalendarEvent }}
          onDoubleClickEvent={onDoubleClick}
          onView={onViewChange}
          view={lastView}
          onSelectEvent={onSelectEvent}
        />
      </div>
      <CalendarModal />
    </div>
  );
};
