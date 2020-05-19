# useCalendar
[demo](https://wildfrontend.github.io/useCalendar/?path=/story/calendar-test--demo)

## Usage

```js

import useCalendar from 'useCalendar'

const Component = () =>{
    const {
        today,
        days,
        setNextMonth,
        setPreMonth,
        selectDate,
    } = useCalendar()
    return <div>....</div>
}

```
## Document



| value        | type             | default               |
| ------------ | ---------------- | --------------------- |
| today        | Date()           | today Date()          |
| days         | arrat[week][day] | current Month array[] |
| setNextMonth | function         | toggle next month     |
| setPreMonth  | funtcion         | toggle pre month      |
| selectDate   | function         | select date           |