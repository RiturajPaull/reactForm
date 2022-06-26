import React from 'react'
import './Search.css'
import Gold from '../../assets/gold.png'
function Search() {

    const HandlerRAA = (e) => {
        e.preventDefault()
    }
    return (
        <div className='search'>
            <div className='container'>
                <div className='left'>
                    <h2>LUXURY INCLUDED FOR TWO PEOPLE</h2>
                    <p>loremsdkjfhskjdhfjksdhfjkshfkj sdfjkashfjksdfhjk sdfjkasdhfjks loremsdkjfhskjdhfjksdhfjkshfkj sdfjkashfjksdfhjk sdfjkasdhfjks dfkjsdfjksjkdfhjksad fkjsdfkjasdjfkasjkfhjksa dfjksa dfjk hsdjkfsjkadfjkasdfjkshfjksahdfjkhsd fsdfkjashdfjk sdfhskjdfhjksadhf sadf kjsad fjksadhfjksadhfjkasdhfjkashdfjksadfhkjashdfksiudfhajksdfb sfkkjsdhfiowe3r wekfhsjdfb safhioipoqwejqwe euiowerj wer wr qwer hwer qwer  dfkjsdfjksjkdfhjksad fkjsdfkjasdjfkasjkfhjksa dfjksa dfjk hsdjkfsjkadfjkasdfjkshfjksahdfjkhsd fsdfkjashdfjk sdfhskjdfhjksadhf sadf kjsad fjksadhfjksadhfjkasdhfjkashdfjksadfhkjashdfksiudfhajksdfb sfkkjsdhfiowe3r wekfhsjdfb safhioipoqwejqwe euiowerj wer wr qwer hwer qwer owe riqwe rgqwerjbjwe r hwiuerguwerjhwejrqwerghwerjgwerjhwrg</p>
                    <div className='search-col-2'>
                        <div className='box'>
                            <div>
                                <img src={Gold} alt='' style={{ marginRight: '1rem' }}></img>
                            </div>
                            <div>
                                <h3>WORLDS LEADING</h3>
                                <p>ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div>
                                <h3>NO-ONE INCLUDES ONE</h3>
                                <p>ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Progress</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='right'>
                    <div className='promo'>
                        <h4 className='save'>GET ADDTION AL 7% OFF</h4>
                        <p className='timer'>12HRS LEFT</p>
                        <p className='offers'>VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form className='form'>
                        <div className='input-wrap'>
                            <label>Destination</label>
                            <select>
                                <option value='1'>Grande Antigua</option>
                                <option value='1'>Grande Antigua</option>
                                <option value='1'>Grande Antigua</option>
                                <option value='1'>Grande Antigua</option>
                                <option value='1'>Grande Antigua</option>
                                <option value='1'>Grande Antigua</option>
                                <option value='1'>Grande Antigua</option>
                            </select>
                        </div>
                        <div className='date'>
                            <div className='input-wrap'>
                                <label>CHECK-In</label>
                                <input type='date'></input>
                            </div>
                            <div className='input-wrap'>
                                <label>CHECK-OUT</label>
                                <input type='date'></input>
                            </div>
                        </div>
                        <button onClick={HandlerRAA}>Rates And Availabilities</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search