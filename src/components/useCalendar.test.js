import { renderHook, act } from '@testing-library/react-hooks'
import {
    format,
    subMonths,
    addMonths,
    getDay,
    isSameDay,
    getWeekOfMonth,
    getMonth,
    getYear,
} from 'date-fns'

import useCalendar from './useCalendar'

describe('測試日曆', () => {
    test('是否顯示正確日期', () => {
        const { result } = renderHook(() => useCalendar())
        expect(format(result.current.today, 'dd MM yyyy')).toBe(
            format(new Date(), 'dd MM yyyy'),
        )
        expect(getMonth(result.current.today)).toBe(getMonth(new Date()))
        expect(getYear(result.current.today)).toBe(getYear(new Date()))
    })
    test('加一個月', () => {
        const { result } = renderHook(() => useCalendar())
        act(() => {
            result.current.setNextMonth()
        })
        expect(getMonth(result.current.today)).toBe(
            getMonth(addMonths(new Date(), 1)),
        )
        expect(getYear(result.current.today)).toBe(
            getYear(addMonths(new Date(), 1)),
        )
    })
    test('減一個月', () => {
        const { result } = renderHook(() => useCalendar())
        act(() => {
            result.current.setPreMonth()
        })
        expect(getMonth(result.current.today)).toBe(
            getMonth(subMonths(new Date(), 1)),
        )
        expect(getYear(result.current.today)).toBe(
            getYear(subMonths(new Date(), 1)),
        )
    })
    test('一個月的日期', () => {
        const { result } = renderHook(() => useCalendar())
        const currentWeek = getWeekOfMonth(new Date()) - 1
        const currentDay = getDay(new Date())
        expect(
            isSameDay(
                result.current.days[currentWeek][currentDay]['date'],
                new Date(),
            ),
        ).toBe(true)
    })
})
