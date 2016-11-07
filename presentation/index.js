// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import D3Bar from "../assets/d3/bar"
import ReactHighchartsBar from "../assets/react-highcharts/bar"
import VictoryBar from "../assets/victory/bar"
import VictoryLineAndScatter from '../assets/victory/line-scatter'
import VictoryLineWithArea from '../assets/victory/line-area'
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  yay: require("../assets/yay.jpg"),
  impressive: require("../assets/impressive.png"),
  livedemo: require("../assets/livedemo.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#4fb7f5"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Victory JS
            </Heading>
            <Heading size={1} fit caps>
              Composable, testable and multi-platform Vizualizations
            </Heading>
            <Link href="https://github.com/danfernand/victory-presentation">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={2} fit={ false } caps lineHeight={1} textColor="black">
              About me
            </Heading>
            <Text bold caps textColor="tertiary" lineHeight={1}>
              Senior Front-end Engineer at <Link href="http://help.com">Help.com</Link>
            </Text>
            <Text bold caps textColor="tertiary" lineHeight={2}>
              Twitter <Link href="https://twitter.com/danielHeartsJS">@danielHeartsJS</Link>
            </Text>
            <Text bold caps textColor="tertiary" lineHeight={1}>
              This is my first presentation!
            </Text>
          </Slide>
          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Before Victory
            </Heading>
            <List>
              <Appear><ListItem>D3 and React</ListItem></Appear>
              <Appear><ListItem>Highcharts and React</ListItem></Appear>
              <Appear><ListItem>Chart JS</ListItem></Appear>
              <Appear><ListItem>Many many others</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>D3 manipulates DOM</li><li>Victory uses D3 scales and other minor modules</li></ul>">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Traditional D3 in React rendering
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/d3/bar.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <CodePane
              lang="js"
              source={require("raw!../assets/d3/bar.cont.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>missing tooltip, that's extra</li><li>Not responsive</li></ul>">
            <Text bold caps textColor="tertiary" lineHeight={1}>
              Result!
            </Text>
            <D3Bar />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Not too bad, but...
            </Heading>
            <List>
              <Appear><ListItem>High learning curve for D3</ListItem></Appear>
              <Appear><ListItem>After onComponentDidMount D3 runs the show</ListItem></Appear>
              <Appear><ListItem>Testing gets a little odd</ListItem></Appear>
              <Appear><ListItem>Very little re-usable parts from chart to chart</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Highcharts and React (using react-highcharts)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/react-highcharts/bar.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide notes="<ul><li>Highcharts has pretty good docs</li><li>Config has a bunch of great defaults</li></ul>">
            <Text bold caps textColor="tertiary" lineHeight={1}>
              Result!
            </Text>
            <ReactHighchartsBar />
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              That was easy, but...
            </Heading>
            <List>
              <Appear><ListItem>Not free :(</ListItem></Appear>
              <Appear><ListItem>Not very composable</ListItem></Appear>
              <Appear><ListItem>Not open source</ListItem></Appear>
              <Appear><ListItem>What about native?</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.yay.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Time for the Victory way!
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit={ false } caps lineHeight={1} textColor="black">
              Victory JS
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/victory/bar.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Text bold caps textColor="tertiary" lineHeight={1}>
              Result!
            </Text>
            <VictoryBar />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.impressive.replace("/", "")} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit={ false } caps lineHeight={1} textColor="black">
              But why Victory?
            </Heading>
            <List>
              <Appear><ListItem>Composable</ListItem></Appear>
              <Appear><ListItem>Open Source</ListItem></Appear>
              <Appear><ListItem>Testable</ListItem></Appear>
              <Appear><ListItem>Compatible (can render svg and victory components side-by-side)</ListItem></Appear>
              <Appear><ListItem>Victory Native!</ListItem></Appear>
              <Appear><ListItem>Docs are great and only getting better</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>you can compose Components with default styles</li></ul>">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              What do you mean composable?
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/victory/line-scatter.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Text bold caps textColor="tertiary" lineHeight={1}>
              Result!
            </Text>
            <VictoryLineAndScatter />
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit={ false } caps lineHeight={1} textColor="black">
              Open Source Repos
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/FormidableLabs?utf8=%E2%9C%93&query=victory">
                  Repos are limited to one element of a chart or functionality
                </Link>
              </ListItem>
              <ListItem>
                Victory native and Victory are the repos you interact with
              </ListItem>
              <ListItem>
                Issues are answered quickly by the FormidableLabs team!
              </ListItem>
              <ListItem>
                <Link href="http://formidable.com/open-source/victory/docs/victory-chart/">Docs</Link> are all in one place
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Test Interface Not Functionality
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/victory/sample-snapshot.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "slide"]} bgColor="primary" notes="<ul><li>set stanalone to false on the emcompasing VictoryGroup or VictoryChat</li></ul>">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              We Can Sender svg and Victory Components in the Same Visualization
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/victory/line-area.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Text bold caps textColor="tertiary" lineHeight={1}>
              Result!
            </Text>
            <VictoryLineWithArea />
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="<ul><li>You can clone victory-native and play with it</li><li>It uses react-native-svg to shim svg</li></ul>">
            <Image src={images.livedemo.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Lets demo Victory Native!
            </Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit={ false } caps lineHeight={1} textColor="white">
              Questions?!?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
