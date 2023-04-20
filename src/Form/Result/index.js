import "./style.css"

const Result = ({ result }) => (

    <p className="paragraph">
        {result !== undefined && (
            <> Otrzymasz: {result.newResult.toFixed(2)} {result.shortName}
            </>

        )}</p>
)

export default Result;

