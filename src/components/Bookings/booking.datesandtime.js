import React, { useState } from "react";
import styled from "styled-components";

const DatesAndTime = ({ dateHandler }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDayName, setSelectedDayName] = useState("");
  const [onTimeSelectPage, setOnTimeSelectPage] = useState(false);

  const handleDateClick = (dayDate) => {
    dateHandler(dayDate);
    setSelectedDate(dayDate);
  };
  const timeSelectPageHandler = () => {
    setOnTimeSelectPage(!onTimeSelectPage);
  };

  const renderTimeSlots = () => {
    const timeSlots = [];
    const startTime = new Date(selectedDate);
    startTime.setHours(10, 0, 0); // Start from 10:00 AM

    const endTime = new Date(selectedDate);
    endTime.setHours(16, 0, 0); // End at 4:00 PM

    while (startTime < endTime) {
      const slotTime = new Date(startTime);
      timeSlots.push(
        <TimeSlot
          key={slotTime.toISOString()}
          onClick={() => handleTimeSlotClick(slotTime)}
        >
          {slotTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </TimeSlot>
      );
      startTime.setMinutes(startTime.getMinutes() + 30); // Move to the next 30-minute slot
    }

    return timeSlots;
  };

  const handleTimeSlotClick = (timeSlot) => {
    // Handle the click on a time slot here
    console.log("Selected time slot:", timeSlot.toLocaleTimeString());
  };

  const renderCalendar = () => {
    const calendar = [];
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Start from the beginning of the current week

    for (let week = 0; week < 3; week++) {
      const weekDays = [];

      for (let day = 0; day < 7; day++) {
        const dayDate = new Date(startDate);
        dayDate.setDate(startDate.getDate() + day);

        const isToday = dayDate.toDateString() === new Date().toDateString();
        const isSelected = selectedDate
          ? dayDate.toDateString() === selectedDate.toDateString()
          : false;

        weekDays.push(
          <TableCell
            key={dayDate.toDateString()}
            onClick={() => handleDateClick(dayDate)}
            isSelected={isSelected}
            isToday={isToday}
          >
            {dayDate.toLocaleDateString()}
          </TableCell>
        );
      }

      calendar.push(<tr key={startDate.toDateString()}>{weekDays}</tr>);

      startDate.setDate(startDate.getDate() + 7);
    }

    return calendar;
  };

  return (
    <CalendarContainer>
      <h2>Select Date</h2>
      <CalendarTable>
        <thead>{/* Your table header */}</thead>
        <tbody>{renderCalendar()}</tbody>
      </CalendarTable>
      {selectedDate && onTimeSelectPage && (
        <TimeTable>
          <tbody>{renderTimeSlots()}</tbody>
        </TimeTable>
      )}
      <NextWrapper>
        {selectedDate != null && (
          <>
            {!onTimeSelectPage ? (
              <h2 onClick={timeSelectPageHandler}>Next</h2>
            ) : (
              <FinalizeDiv>
                <BackButton onClick={timeSelectPageHandler}>
                  Back to date selection
                </BackButton>
                <FinishButton>Finish Booking</FinishButton>
              </FinalizeDiv>
            )}
          </>
        )}
      </NextWrapper>
    </CalendarContainer>
  );
};

export default DatesAndTime;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalendarTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#a0d2eb" : "transparent"};
`;

const NextWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h2 {
    cursor: pointer;
    color: green;
    font-size: 18px;
  }
`;
const FinalizeDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BackButton = styled.span`
  color: red;
  cursor: pointer;
  font-family: "Ovo";
  font-weight: bold;
  font-size: 18px;
`;
const FinishButton = styled.span`
  color: green;
  cursor: pointer;
  font-family: "Ovo";
  font-weight: bold;
  font-size: 18px;
`;
const TimeTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-top: 20px;
`;
const TimeSlot = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  background-color: #a0d2eb;
  font-size: 18px;
`;
