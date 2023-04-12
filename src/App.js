import "animate.css/animate.min.css";
import "../node_modules/animate.css/animate.min.css";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AnimationOnScroll
        animateIn="fadeInUp"
        delay={200}
        initiallyVisible={true}
      >
        <h1>Welcome to My Website</h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="fadeIn" delay={400}>
        <p>This is a demo of react-animation-on-scroll.</p>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="fadeIn" delay={600}>
        <div className="row">
          <div className="column">
            <img src="https://via.placeholder.com/250x250" alt="Placeholder" />
          </div>
          <div className="column">
            <h2>About Me</h2>
            <p>Here's some information about me...</p>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__tada">
        <h2>Look what i am doing</h2>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <h5>Look me too.</h5>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateIn="animate__shakeY"
        animateOut="animate__bounceOutRight"
      >
        <h2>Look what i am doing</h2>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateIn="animate__shakeY"
        animateOut="animate__bounceOutRight"
      >
        <h2>Look what i am doing</h2>
      </AnimationOnScroll>

      <AnimationOnScroll initiallyVisible={true} animateIn="animate__flip">
        <h2>Look what i am doing</h2>
      </AnimationOnScroll>

      <AnimationOnScroll
        initiallyVisible={true}
        duration={5}
        animateIn="animate__swing"
      >
        <h2>Look what i am doing</h2>
      </AnimationOnScroll>

      <AnimationOnScroll
        initiallyVisible={true}
        delay={2000}
        animateIn="animate__wobble"
      >
        <h2>Look what i am doing</h2>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__rubberBand">
        <h2>Look what i am doing</h2>
      </AnimationOnScroll>
    </div>
  );
}

export default App;
