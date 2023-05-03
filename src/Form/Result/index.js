import { Div } from "./style";

const Result = ({ result }) => (

    <Div>
        {result !== undefined && (
            <> Otrzymasz: {result.newResult.toFixed(2)} {result.shortName}
            </>

        )} </Div>
)

export default Result;

