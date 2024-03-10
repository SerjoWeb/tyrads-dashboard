# Tyrads.com | dashboard test assessment

Test task for Tyrads.com company.

Used tech: `React.js` `Tailwind.css`

```bash
Design: Laptop and Tablet version are supported
```

Mini app functionality: Basic `local storage` authorization, global state as `Zustand`

## Installation

Clone repository

```bash
git clone <repository_path>
```

Install dependencies

```bash
npm install
```

Runn project: Project will run on `http://localhost:5173/`

```bash
npm run dev
```

## Usage

To login into the system use `MOCK` data

```bash
{
  "users": [
    {
      "id": 1,
      "fullname": "Katty Smith",
      "email": "kattysmith@mail.com",
      "password": "Aa12@3456",
      "admin": true,
      "image": "/user-1.png",
      "created": "2024-03-09T23:46:09.860Z",
      "last_modified": "2024-03-09T23:46:09.860Z"
    },
    {
      "id": 2,
      "fullname": "Betty Dern",
      "email": "bettydern@mail.com",
      "password": "Aa12@3456",
      "admin": false,
      "image": "/user-2.png",
      "created": "2024-03-09T23:46:24.006Z",
      "last_modified": "2024-03-09T23:46:24.006Z"
    }
  ]
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)