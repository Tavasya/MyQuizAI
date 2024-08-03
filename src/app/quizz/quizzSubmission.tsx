import Bar from "@/components/bar";

type Props = {
    scorePercentage: number,
    score: number,
    totalQuestions: number
}

const QuizzSubmission = (props: Props) => {
    const { scorePercentage, score, totalQuestions} = props;
    return(
        <div className="flex flex-col flex-1">
            <main className="py-11 flex flex-col gap-5 items-center flex-1 mt-24">
                <h2 className="text-3xl font-bold">Quiz Complete!</h2>
                <p>You scored: {scorePercentage}%</p>
                <>
                <div>
                    <Bar percentage={scorePercentage} color = "green" />
                    <Bar percentage={100 - scorePercentage} color = "red" />
                    
                    
                </div>
                <div className="flex flex-row gap-8">
                    <p>{score} Correct</p>
                    <p>{totalQuestions - score} Incorrect</p>
                </div>
                </>
            </main>
        </div>
    )
}

export default QuizzSubmission