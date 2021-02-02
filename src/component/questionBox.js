import React ,{useState}from "react"


const QuestionBox = ({question, option, selected}) =>{
   const [answer,setAnswe]= useState(option);

    return(
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text,index)=>(
                <button
                    key={index}
                    className="answerbtw"
                    onClick={()=>{
                        setAnswe([text ]);
                        selected(text);
                    }}
                >
                    {text}

                </button>
            ))}
        </div>
    )
}

export default QuestionBox;
