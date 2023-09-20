import React, { useState } from "react";
import styled from "styled-components";

const DatesAndTime = ({ finishBooking }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDayName, setSelectedDayName] = useState("");
  const [onTimeSelectPage, setOnTimeSelectPage] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateClick = (dayDate) => {
    setSelectedDate(dayDate);
  };
  const timeSelectPageHandler = () => {
    setOnTimeSelectPage(!onTimeSelectPage);
    if (selectedTime != null) {
      setSelectedTime(null);
    }
  };

  const finishHandler = () => {
    finishBooking(selectedDate, selectedTime);
  };

  const renderTimeSlots = () => {
    const timeSlots = [];
    const startTime = new Date(selectedDate);
    startTime.setHours(10, 0, 0); // Start from 10:00 AM

    const endTime = new Date(selectedDate);
    endTime.setHours(16, 0, 0); // End at 4:00 PM

    const numRows = 3;
    const numCols = 4;

    const timeInterval = (endTime - startTime) / (numRows * numCols);

    for (let row = 0; row < numRows; row++) {
      const rowCells = [];

      for (let col = 0; col < numCols; col++) {
        const slotTime = new Date(
          startTime.getTime() + (row * numCols + col) * timeInterval
        );
        const isSelected =
          selectedTime && selectedTime.getTime() === slotTime.getTime();
        rowCells.push(
          <TimeSlot
            key={slotTime.toISOString()}
            onClick={() => handleTimeSlotClick(slotTime)}
            isSelected={isSelected}
          >
            {slotTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </TimeSlot>
        );
      }

      timeSlots.push(<tr key={row}>{rowCells}</tr>);
    }

    return timeSlots;
  };

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTime(timeSlot);
    console.log("Selected time slot:", timeSlot.toLocaleTimeString());
  };

  const renderCalendar = () => {
    const calendar = [];
    const startDate = new Date(currentDate);

    // Find the previous Monday
    while (startDate.getDay() !== 1) {
      startDate.setDate(startDate.getDate() - 1);
    }

    const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri"]; // Define day names

    // Create the row for day names
    const dayNameRow = (
      <tr>
        {dayNames.map((dayName, idx) => (
          <TableHeader key={idx}>{dayName}</TableHeader>
        ))}
      </tr>
    );

    calendar.push(dayNameRow); // Add the day names row to the calendar

    for (let week = 0; week < 3; week++) {
      const weekDays = [];

      for (let day = 0; day < 5; day++) {
        const dayDate = new Date(startDate);

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
            {dayDate.toLocaleDateString().slice(0)}{" "}
          </TableCell>
        );

        startDate.setDate(startDate.getDate() + 1);
      }

      calendar.push(<tr key={startDate.toDateString()}>{weekDays}</tr>);

      startDate.setDate(startDate.getDate() + 2); // Skip Saturday and Sunday
    }

    return calendar;
  };

  return (
    <CalendarContainer>
      {onTimeSelectPage && (
        <>
          <Title>
            Selected Date: {selectedDate.toLocaleDateString()} (
            {selectedDate.toLocaleDateString("en-US", { weekday: "long" })})
          </Title>
          <br />
        </>
      )}
      {selectedTime != null ? (
        <Title>
          Selected Time:{" "}
          {selectedTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Title>
      ) : !onTimeSelectPage ? (
        <Title>Select Date</Title>
      ) : (
        <Title>Select Available Time</Title>
      )}

      {!onTimeSelectPage ? (
        <CalendarTable>
          <tbody>{renderCalendar()}</tbody>
        </CalendarTable>
      ) : (
        selectedDate && (
          <TimeTable>
            <tbody>{renderTimeSlots()}</tbody>
          </TimeTable>
        )
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
                {selectedTime != null && (
                  <FinishButton onClick={finishHandler}>
                    Finish Booking
                  </FinishButton>
                )}
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
  width: 400px;
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
  padding: 8px 3px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#a0d2eb" : "transparent"};
`;

const NextWrapper = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h2 {
    cursor: pointer;
    color: green;
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
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
  width: 80%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow-x: hidden; /* Hide horizontal scrollbar */
`;
const TimeSlot = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#a0d2eb" : "transparent"};
  /* Add additional styling for the selected time slot */
  &:hover {
    background-color: ${(props) => (props.isSelected ? "#a0d2eb" : "#e6f7ff")};
  }
`;

const Title = styled.div`
  width: 90%;
  text-align: center;
`;
