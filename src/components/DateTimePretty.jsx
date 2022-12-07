import React from "react";
import DateTime from './DateTime';

const DateTimePretty = (props) => {
    
    let period = "назад";


    let date = props.date;
    let currentDate = new Date(date);
    let today = new Date();
    



    let subMonth = today.getMonth() - currentDate.getMonth();
    if (subMonth ===0)
    {
        let subDay = today.getDate() - currentDate.getDate();
        if (subDay ===0)
        {
            let subHour= today.getHours() - currentDate.getHours();
            if (subHour)
            {
                let subMinute= today.getMinutes() - currentDate.getMinutes();
                if (subMinute)
                {
                    let subSecond = today.getSeconds() - currentDate.getSeconds();
                    if (subSecond === 0)
                        period = "сейчас";
                    else
                        period = subSecond + "секунд" + period;
                }
                else
                    period = subMinute + "минут" + period;
            }
            else
                period = subHour + "часов" + period;
        }
        else            
            period = subMonth + "дней" + period;
        
    }
    else        
        period = subMonth + "месяцев" + period;
    
        

    
    return (
        <DateTime date={props.date} period={period}/>
    )
}

export default DateTimePretty;