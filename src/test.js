const HomeComponent = {
  render: () => {
    return `
    <section>
        <h1>Home</h1>
        <p>Home component</p>
      </section>`
  }
}

const TestComponent = {
  render: () => {
    return `
    <section>
        <h1>Test</h1>
        <p>Test component</p>
      </section>`
  }
}

const InfoComponent = {
  render: () => {
    return `
    <section>
        <h1>Info</h1>
        <p>Info component</p>
      </section>`
  }
}

const HelpComponent = {
  render: () => {
    return `
    <section>
        <h1>Help</h1>
        <p>Help Component</p>
      </section>`
  }
}

const ErrorComponent = {
  render: () => {
    return `
    <section>
        <h1>Error</h1>
        <p>This is just a error component</p>
      </section>`
  }
}

const routes = [
  {
    path: "/", component: HomeComponent
  },
  {
    path: "/test", component: TestComponent
  },
  {
    path: "/info", component: InfoComponent
  },
  {
    path: "/help", component: HelpComponent
  }
]

const findComponentPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const router = () => {
  const path = parseLocation();
  const { component = ErrorComponent } = findComponentPath(path, routes ) || {};
  document.getElementById('app').innerHTML = component.render()
}

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';


window.addEventListener('hashchange', router)
window.addEventListener('load', router)
