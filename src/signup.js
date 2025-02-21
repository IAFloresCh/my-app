import RegisterView from "./registerView";
import RegisterViewModel from "./registerViewModel";

const view = new RegisterView();
const viewModel = new RegisterViewModel(view);

view.viewModel = viewModel;

export default view;
