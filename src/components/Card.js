import React from 'react'

function Card() {
    return (
        <div>
            <div>
                <div class="card mt-3 " style={{ "width": "18rem",border:"1px solid gray" }}>
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is some sample.</p>
                        <div className="container w-100">
                            <select className="m-2 h-100 bg-success rounded border border-none">
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}> {i + 1} </option>
                                        )
                                    })
                                }
                            </select>
                            <select className="m-2 h-100 bg-success rounded border border-none" >
                                <option value="half">Half</option>
                                <option value="full">Full</option>

                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>

                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Card