```bash
# HTML
export default function App() {
  return (
    <>
      <header>Header</header>
      <div class="outer-contianer">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}


# Styles

body {
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  display: flex;
  flex-direction: column;
}

* {
  box-sizing: border-box;
}

header,
nav,
main,
aside,
footer {
  padding: 12px;
}

header {
  background-color: tomato;
  height: 60px;
}

.outer-contianer {
  display: flex;
  flex: 1;
}

nav {
  background-color: coral;
  width: 100px;
}

main {
  background-color: moccasin;
  flex: 1;
}

aside {
  background-color: sandybrown;
  width: 100px;
}

footer {
  background-color: slategray;
  height: 100px;
}

```
