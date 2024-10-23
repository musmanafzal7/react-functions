import React from 'react';
import './calendar.css'

const Calendar = props => {

    return (
        <>
            <section>
                <div className="grid grid-cols-7 text-center font-semibold	 p-2 ">
                    <label>Sunday 2</label>
                    <label>Sunday 9</label>
                    <label>Sunday 16</label>
                    <label>Sunday 23</label>
                    <label>Sunday 30</label>
                    <label>Sunday 7</label>
                    <label>Sunday 14</label>
                </div>
                <div className="grid grid-cols-7 text-center">
                    <div className="calendar-card rounded-tl-lg">
                        <div className="card-inner card-danger">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card rounded-tr-lg ">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-7 text-center">
                    <div className="calendar-card ">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card ">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-7 text-center">
                    <div className="calendar-card ">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card-inner card-default">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card ">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-7 text-center">
                    <div className="calendar-card ">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card ">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-7 text-center">
                    <div className="calendar-card rounded-bl-lg ">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card-inner card-success">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card">
                        <div className="card-inner card-default">
                            <span></span>
                        </div>
                    </div>
                    <div className="calendar-card rounded-br-lg ">
                        <div className="card">
                            <span></span>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Calendar;