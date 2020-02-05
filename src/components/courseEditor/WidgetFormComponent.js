import React from "react";
const WidgetForm = () =>
    <div>
    <div className="row form-group">
        <h3 className="col-lg-7">Heading widget</h3>
        <span className="col-lg-5 row justify-content-lg-end">
                                 <button type="button" className="btn bg-warning mx-1"><i
                                     className="fas fa-arrow-up"/></button>
                                <button type="button" className="btn bg-warning mx-1"><i
                                    className="fas fa-arrow-down"/></button>
                                <select className="form-control col-4 mx-1">
                                    <option>
                                        Heading
                                    </option>
                                    <option>
                                        Slide
                                    </option>
                                     <option>
                                        Movie
                                    </option>
                                     <option>
                                        HTML
                                    </option>
                            </select>
                                <button type="button" className="btn text-white bg-danger mx-1"><i
                                    className="fas fa-times"/></button>
                            </span>
    </div>
    <div className = "form-group">
    <input className = "form-control my-3" placeholder = "Heading text" type = "text"/>
    <select className = "form-control my-3">
        <option>Heading 1</option>
        <option>Heading 2</option>
        <option>Heading 3</option>
    </select>
<input className="form-control my-3" placeholder="Widget text" type="text"/>
<h4>Preview</h4>
<h1>Heading text</h1>
</div>
<button className="btn nav-link bg-danger text-white mx-2 float-right wbdv-add-widget" href="#">+</button>
</div>
export default WidgetForm