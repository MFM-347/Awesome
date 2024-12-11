# Contributing to Awesome

Thank you for considering contributing to Awesome! 🎉  
Your contributions, whether big or small, are essential to the success of this project. We welcome **bug reports**, **feature requests**, **documentation updates**, and **code improvements**.

## Contribution Guide

### Step 1: Fork the Repository

1. Navigate to the [Awesome repository](https://github.com/MFM-347/Awesome).
2. Click the **Fork** button in the top-right corner to create your own copy of the repository.

### Step 2: Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/<your-username>/Awesome.git
cd Awesome
```

### Step 3: Set Up Your Environment

Install the required dependencies:

```bash
npm install
```

Ensure everything is working by running the project locally:

```bash
npm run dev
```

### Step 4: Create a Branch

Create a descriptive branch name based on your contribution:

```bash
git checkout -b <branch-name>
```

Examples:

- `fix-typo-in-readme`
- `feature-add-dark-mode`
- `enhance-error-handling`

### Step 5: Make Your Changes

- Update the code, fix bugs, or implement new features in the `src` folder.
- Ensure your changes:
  - Are properly documented.
  - Adhere to coding best practices and project conventions.
  - Are accompanied by relevant test cases, if applicable.

### Step 6: Build the Project

After making your changes, rebuild the project to generate updated files:

```bash
npm run build
```

### Step 7: Test Your Changes

- Thoroughly test your changes to ensure they work as expected.
- Use the local development server (`npm run dev`) to verify functionality.
- If applicable, run automated tests to confirm your changes don’t break existing functionality.

### Step 8: Commit Your Work

Commit your changes with a clear and descriptive commit message:

```bash
git add .
git commit -m "feat: Add dark mode toggle"
```

Use [Conventional Commits](https://www.conventionalcommits.org/) format for consistency:

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation updates
- `style`: Code style changes (non-functional)
- `refactor`: Code refactoring
- `test`: Adding or updating tests

### Step 9: Push and Submit a Pull Request

Push your branch to your fork:

```bash
git push origin <branch-name>
```

Then, navigate to the **original Awesome repository** and submit a pull request.  
Include the following in your PR description:

- A summary of changes.
- Related issue IDs (e.g., "Closes #123").
- Screenshots or videos (if applicable).

## Reporting Issues

Encountered a bug or have a great idea for a new feature? Create an issue [here](https://github.com/MFM-347/Awesome/issues).

### Guidelines for Issues:

- **Bug Reports**:  
  Include:

  - Steps to reproduce the issue.
  - Expected vs. actual behavior.
  - Relevant screenshots or logs (if available).

- **Feature Requests**:  
  Describe:
  - The feature and its use case.
  - Any benefits or improvements it will bring.

## Code Standards

To maintain a high-quality codebase, please follow these guidelines:

1. **Coding Style**:

   - Use clean, consistent, and readable code.
   - Follow the existing project conventions.

2. **Commit Practices**:

   - Keep commits small and focused.
   - Write clear and meaningful commit messages.

3. **Documentation**:

   - Update documentation for any changes that impact the project’s functionality or usage.

4. **Testing**:
   - Add or update tests for your changes where applicable.
   - Ensure all tests pass before submitting your PR.

## Need Help?

If you’re unsure about something or need guidance:

- Start a [discussion](https://github.com/MFM-347/Awesome/discussions).
- Join our community for support and collaboration.

Thank you ✨ for contributing to Awesome! Your effort makes this project better for everyone.
