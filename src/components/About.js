import React, { useState } from 'react'


export default function About() {

    const [setStyle, setMyStyle] = useState({
        color : "rgb(40 40 40)",
        backgroundColor : "white",
    })

    const [btnText, btnTextChange] = useState("Enable Dark Mode")
    
    const toggleStyle = () => {
        if(setStyle.color === "rgb(40 40 40)") {

            setMyStyle({
                color : "white",
                backgroundColor : "rgb(40 40 40)",
                transition : "0.5s",
            })
            btnTextChange ("Enable Light Mode")
        }else {
            setMyStyle({
                color : "rgb(40 40 40)",
                backgroundColor : "white",
                transition : "0.5s",
            })
            btnTextChange ("Enable Dark Mode")

        }
    }
  return (
    <div className='container' style={setStyle}>
        <h1>About Us</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item" style={setStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={setStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
            </div>
            <div className="accordion-item" style={setStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={setStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item" style={setStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={setStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
            </div>
            <div className="container py-2">
                <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div>
    </div>
  )
}
