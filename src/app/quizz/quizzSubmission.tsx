import{ useEffect } from "react";
import Bar from "@/components/bar";
import Image from "next/image";
import { useReward } from "react-rewards";
import {Button} from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChevronLeft, X } from "lucide-react";

type Props = {
    scorePercentage: number,
    score: number,
    totalQuestions: number
}

const QuizzSubmission = (props: Props) => {
    const { scorePercentage, score, totalQuestions} = props;
    const {reward } = useReward('rewardID', 'confetti');
    const router = useRouter();

    useEffect(() => {
        if(scorePercentage === 100) {
            reward();
        }
    }, [scorePercentage, reward])

    const onHandleBack = () => {
        router.back();
    }


    return(
        <div className="flex flex-col flex-1">

<div className="position-sticky top-0 z-10 shadow-md py-4 w-full">
        <header className="flex items-center justify-end py-2 gap-2">

          <Button onClick={onHandleBack} size="icon" variant="outline">
            <X />
          </Button>
        </header>
      </div>

            <main className="py-11 flex flex-col gap-5 items-center flex-1 mt-24">
                <h2 className="text-3xl font-bold">Quiz Complete!</h2>
                <p>You scored: {scorePercentage}%</p>
                {scorePercentage === 100 ? 
                <div className="flex flex-col items-center">
                    <p>Congratulations 🎉</p>
                    <div className="flex justify-center">
                        <Image src = "/images/DALL_E_2024-08-11_17.16.09_-_A_minimalistic__cartoon-style_character_for_a_quiz_webpage_themed_around_AI._The_character_should_be_the_same_cute__cartoonish_robot_or_digital_brain_-removebg-preview.png" alt="Jumping robot" width = {400} height = {400} />
                    </div>
                    <span id = "rewardID"/>
                </div>
                :
                <>
                <div className="flex flex-row gap-8 mt-6">
                    <Bar percentage={scorePercentage} color = "green" />
                    <Bar percentage={100 - scorePercentage} color = "red" />
                    
                    
                </div>
                <div className="flex flex-row gap-8">
                    <p>{score} Correct</p>
                    <p>{totalQuestions - score} Incorrect</p>
                </div>
                </>}
            </main>
        </div>
    )
}

export default QuizzSubmission