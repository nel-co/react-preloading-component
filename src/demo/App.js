import React from 'react';
import Wave from '../lib/components/PreLoader/Wave/Wave';
import Pulse from '../lib/components/PreLoader/Pulse/Pulse';
import Pop from '../lib/components/PreLoader/Pop/Pop';
import Spinner from '../lib/components/PreLoader/Spinner/Spinner';
import Grow from '../lib/components/PreLoader/Grow/Grow';
import Bounce from '../lib/components/PreLoader/Bounce/Bounce';
import Grid from '../lib/components/PreLoader/Grid/Grid';
import Scan from '../lib/components/PreLoader/Scan/Scan';
import Lines from '../lib/components/PreLoader/Lines/Lines';
import Progress from '../lib/components/PreLoader/Progress/Progress';
import Triple from '../lib/components/PreLoader/Triple/Triple';
import Text from '../lib/components/PreLoader/Text/Text';

const App = () => (
  <div style={demoWrapper}>
    <h1>React-Preloading-Components Demo </h1>
    <div style={demoSection}>
      <Bounce />
      <Grid />
      <Grow />
      <Lines />
      <Pop />
      <Progress />
      <Pulse />
      <Scan />
      <Spinner />
      <Text />
      <Triple />
      <Wave />
    </div>
  </div>
);

export default App;

const demoWrapper = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'sans-serif'
}

const demoSection = {
  paddingTop: 50,
  width: '80%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridColumnGap: 80,
  gridRowGap: 160
}