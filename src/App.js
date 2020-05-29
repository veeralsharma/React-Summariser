import React,{  useState}  from 'react';
import './App.css';
import Axios from 'axios';





function App() {

  const [state,setState]=useState({
   body:"",
   sentences:0,
   answer:""
  })

  function onChange(e){
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }

  function onSubmit(e){
    e.preventDefault()
    const requesturl=`http://api.meaningcloud.com/summarization-1.0?key=5b010983da00a0390799715beb211336&txt=${state.body}&sentences=${state.sentences}`
    Axios.get(requesturl).then((res) => {
      setState({
        body:"",
        sentences:0,
        answer:res.data.summary
      })
    })
    
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5 mx-auto">
            <form noValidate onSubmit={onSubmit}>
              <h1 className="h1 mb-3 font-weight-normal main-heading">React Summarizer</h1>
              <div className="form-group">
                <label htmlFor="email">Enter text</label>
                <textarea
                  rows="10"
                  type="text"
                  className="form-control"
                  name="body"
                  placeholder="Enter paragraph essay you want the summary for"
                  value={state.body}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">number of sentences</label>
                <input
                  type="number"
                  className="form-control"
                  name="sentences"
                  placeholder="number of sentences you want in your summary"
                  value={state.sentences}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Get Summary
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="answer-div">
        <p>{state.answer}</p>
      </div>
    </div>
  );
}

export default App;

