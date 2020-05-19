import { useState } from 'react'
import {
    addMonths,
    subMonths,
    getDaysInMonth,
    getDay,
    endOfMonth,
    setDate,
    startOfMonth,
} from 'date-fns'

export const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
export const WEEKS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const useCalendar = () => {
    const [today, setToday] = useState(new Date())

    const setNextMonth = () => {
        setToday(addMonths(today, 1))
    }

    const setPreMonth = () => {
        setToday(subMonths(today, 1))
    }

    const daysInMonth = () => {
        let month = []
        let currentDate = 1
        let firstDay = getDay(startOfMonth(today))
        let allDays = getDaysInMonth(today)
        let weekNums = Math.ceil((allDays + firstDay) / 7)
        let preMonth = subMonths(today, 1)
        let preDate = endOfMonth(preMonth).getDate() - firstDay + 1
        let nextDate = 1
        let nextMonth = addMonths(today, 1)
        for (let weekNum = 0; weekNum < weekNums; weekNum++) {
            let week = []
            for (let day = 0; day < 7; day++) {
                let dateInfo = {
                    otherMonth: false,
                    date: null,
                }
                if (weekNum === 0 && day < firstDay) {
                    week.push({
                        ...dateInfo,
                        date: setDate(preMonth, preDate),
                        otherMonth: true,
                    })
                    preDate++
                } else if (currentDate > allDays) {
                    week.push({
                        ...dateInfo,
                        date: setDate(nextMonth, nextDate),
                        otherMonth: true,
                    })
                    nextDate++
                } else {
                    week.push({
                        ...dateInfo,
                        date: setDate(today, currentDate),
                        otherMonth: false,
                    })
                    currentDate++
                }
            }
            month.push(week)
        }
        return month
    }

    const days = daysInMonth()
    const selectDate = (date) => {
        setToday(date)
    }
    return {
        today,
        days,
        setNextMonth,
        setPreMonth,
        selectDate,
    }
}
export default useCalendar
