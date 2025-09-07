import type { FormEvent } from "react";
import { useRef } from "react";

interface NewGoalProps {

            onAdd: (text : string , summary : string) => void


        }

export default function NewGoal ({onAdd} : NewGoalProps){



    const goalRef = useRef<HTMLInputElement>(null)
    const summaryRef = useRef<HTMLInputElement>(null)


    function handleSubmit(event : FormEvent<HTMLFormElement>){

        event.preventDefault()

        const enteredGoal = goalRef.current!.value
        const enteredSummary = summaryRef.current!.value
        onAdd(enteredGoal , enteredSummary)

        

    }
    return (
        
            <form onSubmit={handleSubmit}>

            <p>

                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goalRef}/>

                </p>

                <p>

                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" ref={summaryRef}/>

                <button >Add Button</button>

                </p>



            </form>
        
    )
}