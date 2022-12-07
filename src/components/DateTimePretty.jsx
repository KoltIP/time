import React from "react";
import DateTime from './DateTime';

const DateTimePretty = (props) => {
    
    let period = "назад";


    let date = props.date;
    let currentDate = new Date(date);
    let today = new Date();
    


    let subYear = today.getFullYear() - currentDate.getFullYear();
    if (subYear === 0)
    {
        let subMonth = today.getMonth() - currentDate.getMonth();
        if (subMonth === 0)
        {
            let subDay = today.getDate() - currentDate.getDate();
            console.log(subDay);
            if (subDay === 0)
            {
                let subHour= today.getHours() - currentDate.getHours();
                if (subHour === 0)
                {
                    let subMinute= today.getMinutes() - currentDate.getMinutes();
                    if (subMinute === 0)
                    {
                        let subSecond = today.getSeconds() - currentDate.getSeconds();
                        if (subSecond === 0)
                            period = "сейчас";
                        else
                            period = subSecond + " секунд " + period;
                    }
                    else
                        period = subMinute + " минут " + period;
                }
                else
                    period = subHour + " часов " + period;
            }
            else            
                period = subDay + " дней " + period;            
        }
        else        
            period = subMonth + " месяцев " + period;
    }
    else
        period = subYear + " лет " + period;
    
        

    
    return (
        <DateTime  date={period}/>
    )
}

export default DateTimePretty;