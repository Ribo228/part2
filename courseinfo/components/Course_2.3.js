const Header = ({course})=>{
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

const Part = ({part}) =>{    
    return (
        <div>
        {part.name}:{part.exercises}
        </div>
    )
}

const Total =({course}) =>{
    return(
       <div>
        total: {course.parts.reduce(
    (a, b)=> a + b.exercises,
    0, ) }
        </div> 
    )
}


const Course = ({course}) =>{
    return (
      <div>
       
        <Header course={course}/>     
     
        {course.parts.map(part=>
        <Part key={part.id}
            part={part} />  
            
       )} 
       <Total course={course}/>
       
      </div>
    )
  }
    
    export default Course