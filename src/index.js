import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/style.css";
import  quizService from "./quizService";
import questionBox from "./component/questionBox";
import QuestionBox from "./component/questionBox";
import Result from "./component/result";

class Quizeebee extends Component{
    state={
      questionBank:[],
        score:0,
        responses:0
    };
    getQuestion =()=>{
        quizService().then(question =>{
            this.setState({
                questionBank :question
            });
        });
    };

    computeAnswer = (answers, correctAnswer) =>{
        if (answers===correctAnswer){
            this.setState({
                score: this.state.score+1
            })
        }
        this.setState({
            responses: this.state.responses<5 ? this.state.responses+1:5
        })
    }

    playagain = () =>{
        this.getQuestion();
        this.setState({
            score:0,
            responses:0
        })
    }
    componentDidMount() {
        this.getQuestion();
    }

    render() {
        return(
            <div className="container">
                <div className="title">Quizeebee</div>
                {this.state.questionBank.length>0 &&
                    this.state.responses<5 &&
                    this.state.questionBank.map(
                    ({question,answers,correct ,questionId}) => (
                        <QuestionBox
                            question={question}
                            option={answers}
                            key={questionId}
                            selected={answers => this.computeAnswer(answers,correct)}
                        />
                    )
                )}
                {this.state.responses===5?(<Result  score={this.state.score} playagain={this.playagain}/>):null}
            </div>
        );
    }
}
ReactDOM.render(
  <React.StrictMode>
    <Quizeebee />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
