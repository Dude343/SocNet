import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined);
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(
        new Date(restoreState("hw9-date", Date.now()))
    );
    const [show, setShow] = useState<boolean>(false);

    const start = () => {
        // запустить часы
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 10);
        setTimerId(id);
    };

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        window.clearInterval(timerId);
        setTimerId(undefined);
    };

    const onMouseEnter = () => {
        // пишут студенты // показать дату если наведена мышка
        setShow(true);
    };
    const onMouseLeave = () => {
        // пишут студенты // спрятать дату если мышка не наведена
        setShow(false);
    };

    const stringTime = date.toLocaleTimeString("ru-RU") || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = date.toLocaleDateString("ru-RU") || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = date.toLocaleDateString("en-US", { weekday: "long" }) || (
        <br />
    ); // пишут студенты
    const stringMonth = date.toLocaleDateString("en-US", { month: "long" }) || (
        <br />
    ); // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={"hw9-watch"}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={"hw9-day"}>{stringDay}</span>,{" "}
                <span id={"hw9-time"}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={"hw9-more"}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={"hw9-month"}>{stringMonth}</span>,{" "}
                            <span id={"hw9-date"}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br />
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={"hw9-button-start"}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={"hw9-button-stop"}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock;
