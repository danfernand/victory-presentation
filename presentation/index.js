// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import D3Bar from "../assets/d3/bar"
import ReactHighchartsBar from "../assets/react-highcharts/bar"
import VictoryBar from "../assets/victory/bar"

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  yay: require("../assets/yay.jpg"),
  impressive: require("../assets/impressive.png"),
  city: require("../assets/city.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
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
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Traditional D3 in React rendering
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/d3/bar.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="js"
              source={require("raw!../assets/d3/bar.cont.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Text bold caps textColor="tertiary" lineHeight={1}>
              Result!
            </Text>
            <D3Bar />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
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
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} fit={ true } caps lineHeight={1} textColor="black">
              Highcharts and React (using react-highcharts)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/react-highcharts/bar.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Text bold caps textColor="tertiary" lineHeight={1}>
              Result!
            </Text>
            <ReactHighchartsBar />
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
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
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.yay.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Time for the Victory way!
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
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
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
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

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
