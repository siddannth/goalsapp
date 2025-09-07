type goal = {

    id : number,
    title : string ,
    description : string
    



}

interface GoalProps {

goals : goal[]
handleDelete : (id : number) => void
    
}





export default function CourseGoals({goals , handleDelete} : GoalProps){

    return (
        <ul>
            {goals.map(goal=> 
                <li key={goal.id}>
                    <div>
                    <h1>{goal.title}</h1>
                    <p>{goal.description}</p>
                    <button onClick={()=> handleDelete(goal.id)}>delete</button>
                    </div>
                </li>
                
                
            )}
        </ul>
    )
}