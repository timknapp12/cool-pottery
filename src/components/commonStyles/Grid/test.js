import React from "react";
import Grid from "./index";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("renders with required props without crashing", () => {
  const wrapper = mount(
    <Grid>
      <div>Some text</div>
      <div>Some text</div>
      <div>Some text</div>
      <div>Some text</div>
    </Grid>
  );
  const exists = wrapper.exists();

  expect(exists).toBe(true);
});

test("passes along all unknown props to the outermost component", () => {
  const someFunction = () => {};
  const wrapper = mount(
    <Grid className="some-class" onClick={someFunction}>
      <div>Some text</div>
      <div>Some text</div>
      <div>Some text</div>
      <div>Some text</div>
    </Grid>
  );
  const className = wrapper.children().prop("className");
  const onClick = wrapper.children().prop("onClick");

  expect(className).toBe("some-class");
  expect(onClick).toBe(someFunction);
});
