# Sphere

Welcome to **Sphere**, a web application where users can upload and read blogs and articles. This README will guide you through the setup and usage of the project.

## Table of Contents

- Features: Upload your articles and blogs and read other's
- Usage: User can browse between their interests.
- Contributing
- License
- Contact

## Features

- User authentication and authorization
- Create, read, update, and delete (CRUD) operations for blogs and articles usinf cloud based database "Firebase".
- Rich text editor for writing blogs
- Categories and tags for better content organization
- Search functionality
- Responsive design

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/sphere.git
    cd sphere
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```env
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

    The app will be running on `http://localhost:3000`.

## Usage

- **Sign Up / Log In:** Create an account or log in to access the full features of the app.
- **Create a Blog:** Use the rich text editor to write and publish your blog.
- **Browse Blogs:** Explore blogs by categories or tags, and use the search functionality to find specific content.
- **Edit / Delete Blogs:** Manage your own blogs with edit and delete options.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions or suggestions, feel free to reach out to us at your-email@example.com.

---

Thank you for using Sphere! We hope you enjoy creating and reading amazing content.
