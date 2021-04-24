import { useState, useEffect } from 'react'
import { get, post } from 'axios'
import { BASE_URL } from '../../constants/common';
import ProgressBar from '../../Components/ProgressBar'
// import TextArea from '../../Components/TextArea';
import SubmitButton from '../../Components/Button';

function Home() {

    const [initialData, setInitialData] = useState([{}])
    const [loader, setLoader] = useState(false)
    const [news, setNews] = useState("hous dem aid even see comey letter jason chaffetz tweet darrel lucu octob subscrib jason chaffetz stump american fork utah imag courtesi michael jolley avail creativ common licens apolog keith olbermann doubt worst person world week fbi director jame comey accord hous democrat aid look like also know second worst person well turn comey sent infam letter announc fbi look email may relat hillari clinton email server rank democrat relev committe hear comey found via tweet one republican committe chairmen know comey notifi republican chairmen democrat rank member hous intellig judiciari oversight committe agenc review email recent discov order see contain classifi inform long letter went oversight committe chairman jason chaffetz set polit world ablaz tweet fbi dir inform fbi learn exist email appear pertin investig case reopen jason chaffetz jasoninthehous octob cours know case comey actual say review email light unrel case know anthoni weiner sext teenag appar littl thing fact matter chaffetz utah republican alreadi vow initi raft investig hillari win least two year worth possibl entir term worth appar chaffetz thought fbi alreadi work result tweet briefli roil nation cooler head realiz dud accord senior hous democrat aid misread letter may least chaffetz sin aid told shareblu boss democrat even know comey letter time found check twitter democrat rank member relev committe receiv comey letter republican chairmen fact democrat rank member receiv chairman oversight govern reform committe jason chaffetz tweet made public let see got right fbi director tell chaffetz gop committe chairmen major develop potenti polit explos investig neither chaffetz colleagu courtesi let democrat counterpart know instead accord aid made find twitter alreadi talk daili ko comey provid advanc notic letter chaffetz republican give time turn spin machin may make good theater noth far even suggest case noth far suggest comey anyth grossli incompet tone deaf suggest howev chaffetz act way make dan burton darrel issa look like model respons bipartisanship even decenc notifi rank member elijah cum someth explos trampl basic standard fair know grant like chaffetz answer sit ridicul republican district anchor provo orem cook partisan vote index r gave mitt romney punish percent vote moreov republican hous leadership given full support chaffetz plan fish expedit mean turn hot light textbook exampl hous becom republican control also second worst person world darrel lucu darrel someth graduat univers north carolina consid journalist old school attempt turn member religi right colleg succeed turn religi right worst nightmar charismat christian unapologet liber desir stand scare silenc increas surviv abus three year marriag may know daili ko christian dem nc follow twitter darrelllucu connect facebook click buy darrel mello yello connect")
    const [result, setResult] = useState("")

    const handleClick = (e) => {
        setLoader(true)
        post(BASE_URL + 'predict', {
            news: news
        }).then(res => {
            setLoader(false)
            if (res) {
                console.log('res', res.data)
                if (res.data == 0) {
                    res.data = "Fake"
                } else {
                    res.data = "Truth"
                }
                setResult(res.data)
                setLoader(false)
            }
        })
    }

    useEffect(() => {
        get(BASE_URL).then(data => {
            console.log(data)
            setInitialData(data.data)
        })
    }, [])



    return (
        <div className="App">
            <h1>
                {initialData.title}
            </h1>
            <h2>
                User : {initialData.user}
            </h2>
            <div>
                {/* <TextArea /> */}
                {/* <p>Year : </p>
                <input
                    type="number"
                    onInput={(e) => setYear(e.target.value)}
                    value={year}
                />
                <p>Km : </p>
                <input
                    type="number"
                    onInput={(e) => setKm(e.target.value)}
                    value={km}
                />
                <p>Seats : </p>
                <input
                    type="number"
                    onInput={(e) => setSeats(e.target.value)}
                    value={seats}
                /> */}

                <input
                    type="text"
                    onInput={(e) => setNews(e.target.value)}
                    value={news}
                />

            </div>
            <div>
                <SubmitButton
                    name="Submit"
                    onClick={(e) => handleClick(e)}
                />
                {loader ? <ProgressBar /> : <></>}

                {result ? <p>Predicted Result : {result}</p> : <></>}
            </div>
        </div>
    );
}

export default Home;
