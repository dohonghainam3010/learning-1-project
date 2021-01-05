const HomeComponent = {
  render: () => {
    return `
    <section>
        <h1>Home</h1>
        <p>This is just a home component</p>
      </section>`
  }
}

const TestComponent = {
  render: () => {
    return `
    <section>
        <h1>Home</h1>
        <p>This is just a test component</p>
      </section>`
  }
}

const ErrorComponent = {
  render: () => {
    return `
    <section>
        <h1>Home</h1>
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
