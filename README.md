# Custom Mechanics

This is the frontend for the Custom Mechanics website. It was built with React and Vite and includes the main website, service pages, marketplace, accessories and booking pages.

The site also uses GSAP for animations and Swiper where sliders/carousels are required.

## Running the project

The easiest way to run the project is with Docker.

Make sure Docker Desktop is installed and running, then open a terminal inside the project folder and run:

```bash
docker compose up --build
```

The first build can take a little longer because Docker needs to download the Node image and install the project dependencies.

Once it starts, the website will be available at:

```text
http://localhost:5173/
```

After the first build, you can normally start it again with:

```bash
docker compose up
```

To stop it:

```bash
docker compose down
```

## Running without Docker

The project can also be run normally with Node and npm.

The environment I used during development was:

- Node.js 24.19.0
- npm 11.17.0

Install the dependencies:

```bash
npm ci
```

Then start the development server:

```bash
npm run dev
```

The site will run at:

```text
http://localhost:5173/
```

## Main packages

The main packages used in the project are:

- React
- React Router
- Vite
- GSAP 3.15.0
- Swiper 14.2.0

All required dependencies and their versions are already recorded in `package.json` and `package-lock.json`, so there is no need to install GSAP, Swiper or the other packages separately.

## Production build

To create the production version of the website, run:

```bash
npm run build
```

Vite will generate the final build inside the `dist` folder.

The files inside `dist` are generated automatically. This is why images, videos, JavaScript and CSS files appear again inside `dist/assets`.

Vite also adds hashes to some filenames for caching and optimization. This is normal.

Do not edit anything inside `dist` manually. If something needs to be changed, change it in the source files and run the build again.

## Linting

To check the project for linting issues:

```bash
npm run lint
```

## Project structure

The main application code is inside `src`.

The project is organised into pages, components and assets. Individual service pages have their own components and styling where required.

The main routes include:

```text
/
/marketplace
/accessories
/tcdtesting
/accidentrepair
/batteryreplacement
/brakerepair
/carburetorandoil
/enginerepair
/booknow
```

There is also a 404 page for unknown routes and redirects for some of the older route names.

## Assets

Images and videos used by the website are kept with the source project.

Some of the media files are fairly large, so the first Docker build may take longer while the project is being copied into the Docker build environment.

When adding new images or videos, it is better to optimize them first so they do not unnecessarily increase the website size.

## Docker setup

Docker is included mainly to make the handover easier and to avoid differences between development environments.

The Docker environment currently uses:

```text
Node.js 24.19.0
npm 11.17.0
```

The project has been tested inside the container with:

```text
GSAP 3.15.0
Swiper 14.2.0
```

If you want to verify these inside the running container:

```bash
docker compose exec frontend node -v
docker compose exec frontend npm -v
docker compose exec frontend npm list gsap swiper
```

## A few important notes

Please keep `package-lock.json` with the project. It helps make sure the same dependency versions are installed on another machine.

There is no need to transfer `node_modules`. It can be recreated with `npm ci` or automatically through Docker.

The `dist` folder is also generated and can always be recreated with:

```bash
npm run build
```

If a dependency is added or changed, rebuild the Docker image with:

```bash
docker compose up --build
```

## Handover

The complete source code and required assets are included in the project.

For a fresh setup, the recommended process is simply:

```bash
docker compose up --build
```

Then open:

```text
http://localhost:5173/
```

If Docker is not being used:

```bash
npm ci
npm run dev
```

For the final production build:

```bash
npm run build
```

That's it. The project should then be ready for further development or deployment.