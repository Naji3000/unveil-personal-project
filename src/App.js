import React from 'react';
import './App.css'
import routes from './routes'
import Nav from './components/Nav'


function App (){

  return (
    <>
      
      {/* <Nav /> */}
      {routes}
    </>
  );
}
export default App;



































// import React, { Component } from 'react';
// import CommentBox from './components/CommentBox'
// import Comments from './components/Comments'
// import routes from './routes'

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       comments: []
//     }
//   }
//   handleAddComment= (comment) =>{
//     this.setState(prevState => {
//       return {
//         comments: prevState.comments.concat(comment)
//       };
//     });
//   }

//   render() {
//     return (
//       <section className="section">
//         <div className="container">
//           <div className="columns">
//             <div className="column is-half is-offset-one-quarter">
//             <CommentBox handleAddComment={this.handleAddComment} />
//               <Comments comments={this.state.comments} />
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default App;