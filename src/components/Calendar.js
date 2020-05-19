import React from 'react'
import { format, getDate, isSameDay } from 'date-fns'
import useCalendar, { WEEKS } from './useCalendar'
import * as S from './Calendar.emotion'

const Calendar = () => {
    const calendar = useCalendar()
    return (
        <div>
            <S.Calendar>
                <thead>
                    <tr>
                        <td colSpan="100%">
                            <button onClick={calendar.setPreMonth}>
                                pre Month
                            </button>
                            {format(calendar.today, 'dd MM yyyy')}
                            <button onClick={calendar.setNextMonth}>
                                next Month
                            </button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {WEEKS.map((title, i) => {
                            return <td key={i}>{title}</td>
                        })}
                    </tr>
                    {calendar.days.map((week, i) => {
                        return (
                            <tr key={i}>
                                {week.map((date, i) => {
                                    const otherMonth = date.otherMonth
                                    const isSelected = isSameDay(
                                        calendar.today,
                                        date.date,
                                    )
                                    const className = `${
                                        otherMonth && 'other'
                                    } ${isSelected && 'selected'}`
                                    const selectedToday = () => {
                                        calendar.selectDate(date.date)
                                    }
                                    return (
                                        <td
                                            key={i}
                                            className={className}
                                            onClick={selectedToday}
                                        >
                                            {getDate(date.date)}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </S.Calendar>
        </div>
    )
}

export default Calendar
