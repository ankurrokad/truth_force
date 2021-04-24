import { useState, useEffect } from 'react'
import {  post } from 'axios'
import { BASE_URL } from '../../constants/common';
import ProgressBar from '../../Components/ProgressBar'

export const Home2 = (props) => {

    const [loader, setLoader] = useState(false)
    const [news, setNews] = useState("")
    const [result, setResult] = useState("")

    const handleClick = (e) => {
        setLoader(true)
        post(BASE_URL + 'predict', {
            news: news
        }).then(res => {
            setLoader(false)
            if (res) {
                console.log('res', res.data)
                let result = res.data.rd_result
                if (result == 0) {
                    result = "Fake"
                } else {
                    result = "Truth"
                }
                setResult(result)
                setLoader(false)
            }
        })
    }

    useEffect(() => {
       
    }, [])




    return (
        <div className="bgimg-1" >
            <div className="container">
                <div className="comment">
                    {/* <textarea
                        className="textinput"
                        placeholder="Enter news here..."
                      
                    ></textarea>
                     */}

                    <div className="form__group field">
                        <input
                            type="text  "
                            className="form__field"
                            placeholder="Enter news here..."
                            required
                            onInput={(e) => setNews(e.target.value)}
                            value={news} />

                        <button
                            className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
                            onClick={(e) => handleClick(e)}
                        >
                            Submit </button>
                    </div>

                    {loader ? <ProgressBar /> : <></>}

                    {!loader && result ? <p className="predicted-result">Predicted Result : <b>{result}</b></p> : <></>}

                </div>
            </div>

        </div>
    )
}

