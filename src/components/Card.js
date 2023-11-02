import React from 'react'

function Card() {
    return (
        <div>
            <div>
                <div class="card mt-3" style={{ "width": "18rem" }}>
                    <img src="..." class="card-img-top" alt="..." />
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