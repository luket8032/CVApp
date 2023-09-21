import '../styles/print.css'

function Print({onPrint}) {
    function printResume() {
        onPrint();
    }
    return (
        <div className="print-wrapper">
            <div className="print-text">
                <img src="/printer.svg" alt="print icon" />
                <h2>Save and print your resume!</h2>
            </div>
            <button onClick={printResume}>Save as PDF</button>
        </div>
    )
}

export default Print;