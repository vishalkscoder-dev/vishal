# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Contact form backend

The React contact form posts to the Django REST API at `POST /api/contact/`. The Django project is in `backend/` and is configured for MySQL only, with no SQLite fallback.

1. Install Python 3.10+ and MySQL, then create the MySQL database and user.
2. Copy `backend/.env.example` to `backend/.env`, replacing every placeholder with your MySQL credentials and a strong Django secret key.
3. In `backend/`, create and activate a virtual environment, install `requirements.txt`, then run `python manage.py migrate` and `python manage.py createsuperuser`.
4. Start Django with `python manage.py runserver`, then start the frontend using `npm run dev`.

For a deployed frontend, set `VITE_API_BASE_URL` to the Django origin and add that exact origin to `CORS_ALLOWED_ORIGINS` in `backend/.env`. Contact records are available at `/admin/` under Contacts.
