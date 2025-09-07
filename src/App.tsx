import { useState } from 'react'


import Header from './components/Header'
import goalsImg from './assets/goals.jpg'
import CourseGoals from './components/CourseGoals'
import NewGoal from './components/NewGoal'


function App() {
  const [goals , setGoals] = useState(
     [{
        
          id : 1,
          title : "goal 1",
          description : "do hw"
        },

        {
          id : 2,
          title : "goal 2",
          description : "do dishes"
     
        }
      ])

      function handleDelete(id : number){

        setGoals((goal) =>
          goal.filter((goal) => goal.id != id)
        )
      }

        function handleAdd(text:string , summary: string){
        setGoals((prevGoals) => prevGoals.concat({ id: Math.random() , title:text , description : summary}))
        }


      


  return (
    <>
     <Header image = {{src :  goalsImg  , alt : "list of goals"}} > 
     <h1 >List Of Goals</h1>
     </Header>
     <NewGoal onAdd = {handleAdd}/>
     <CourseGoals goals = {goals} handleDelete={handleDelete}  />
     
      
     </>
    
  )
}

export default App
