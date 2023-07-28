import { render, screen } from "@testing-library/react";
import React from "react";
import Rockets from "../components/Rocket";

test ('render test ', ()=>{
    render( <h1>Hi Buddy</h1>  );
    const helloElement = screen.getByText('Hi Buddy');
    expect(helloElement).toBeInTheDocument();
})

let store;
describe('Test for Rockets Page',()=>{
    test ('Should there be a Reserve Rocket button or Cancel Reservation', ()=>{
        render(  <Rockets/> );
        const reserveBtn = screen.getByText('Reserve Rocket');
        const cancelBtn = screen.getByText('Cancel Reservation')
        expect(reserveBtn).toBeInTheDocument();
    })
})