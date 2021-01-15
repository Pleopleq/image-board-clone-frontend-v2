import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Feed from "./components/Feed";
import Register from "./components/Register";
import Login from "./components/Login"

const App = () => {
/*   const posts = useSelector((state) => state.posts.posts)
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(state)
  const onAddPost = (post) => {
    dispatch(addPost(post))
  }

  const onSave = () => {
    dispatch(savePost())
  }

  const onLoad = () => {
    dispatch(fetchPosts());
  };

  useEffect(() => {
      onLoad()
  }, [])

  const FeedWrapper = () => {
    return <Feed posts={posts} addPost={onAddPost} onSavePost={onSave}></Feed>
  } */
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Feed}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router> 
    </>
  );
}

export default App;
