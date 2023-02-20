import React,{useState} from 'react';

export default function About()
{
    const [pageStyle,setStyle]=useState({
        color:'black',
        backgroundColor: 'pink'
    })
    const [btntext,setbtntext]=useState("Toggle Theme")

    const toggleStyle=()=>
    {
        console.log("clicked")
        if(pageStyle.color === 'black')
        {
        setStyle({
            color:'white',
            backgroundColor:'black'
        })
        setbtntext("Light Mode")
        }
        else
        {
            setStyle({

                color:'black',
                backgroundColor:'pink'
            }) 
            setbtntext("Dark Mode")
        }
        
    }
  return (
    <div className="container" style={pageStyle}>
    <h1>ABOUT US</h1>
    <div className="accordion my-4" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body" >
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
    </div>
    <div className="container my-2">
       <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle}/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
</div>
    </div>
  </div>
  );
}
