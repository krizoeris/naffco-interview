import Advantages from './components/advantages'
import Banner from './components/banner'
import Card from './components/card'
import Description from './components/description'
import DisinfectingProcedure from './components/disinfectingProcedure'
import Footer from './components/footer'
import Message from './components/message'
import Social from './components/social'
import Video from './components/video'

function App() {
  return (
      <>
        <Banner />
        <Description />
        <Video />
        <DisinfectingProcedure />
        <Advantages />
        <Card />
        <Social />
        <Message />
        <Footer />
      </>
  );
}

export default App;
