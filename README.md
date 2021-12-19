# InertiaJS Starter Kit

This application uses Laraval 8, Vue 3, Tailwind 3 and Storybook 6 and InertiaJS.

## Installation

Clone the repo locally:

```sh
git clone https://github.com/benitoanagua/inertiajs-starter-kit.git
cd inertiajs-starter-kit
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
yarn
```

Build assets:

```sh
yarn dev
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.

```sh
touch database/database.sqlite
```

Run database migrations:

```sh
php artisan migrate
```

Run the dev server (the output will give the address):

```sh
php artisan serve
```

Run to explore the components

```sh
yarn storybook
```
