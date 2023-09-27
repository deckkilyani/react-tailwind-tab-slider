import React from "react"
import TabSlider from "./TabSlider"
import FourtabSlider from "./FourtabSlider"
import ThreetabSlider from "./ThreetabSlider"
import MultitabSlider from "./MultitabSlider"
import FivetabSlider from "./FivetabSlider"
import SixtabSlider from "./SixtabSlider"
import SeventabSlider from "./SeventabSlider"
import RoundedMultitabSlider from "./RoundedMultitabSlider"


function App() {

  return (
    <React.Fragment>
      <TabSlider />
      <ThreetabSlider/>
      <FourtabSlider/>
      <FivetabSlider/>
      <SixtabSlider/>
      {/* <SeventabSlider/> */}
      <MultitabSlider numTabs={6}/>
      <RoundedMultitabSlider numTabs={5}/>
    </React.Fragment>
  )
}

export default App
