import renderer from "react-test-renderer";
import MemberList from "./MemberListComplex";

const INIT_LIST = {
  team: {
    currentMembers: [
      {id: 0, name: 'Badrock'},
      {id: 1, name: 'Vogue'},
    ]   
  }
}

test("Displays List", () => {
  const component = renderer.create(<MemberList initList={INIT_LIST} />);
  expect(component.root.findAllByProps({ className: "list-item" })[0].children[0]).toBe(
      "Badrock"
    );
});
