# Explore React PNPM Monorepo

## What is this?
A simple monorepo for me to try out small concepts in React. Why not using tools like CodeSandbox or Stackblitz? Simple, just because.
Also, it's easier to iterate on local rather than having to open Internet to try out new things!

## Some useful commands

### Add workspace-wide deps
```bash
pnpm add <package-name> -w
```

### Add project-specific deps
```bash
pnpm add <package-name> --filter @monorepo/react-optimistic
```

### Running App
Put app's name in the root `package.json`, give it an alias. Then you can run it with this command
```bash
pnpm dev:alias-name
```

For example to run the `react-optimistic` project
```bash
pnpm dev:optimistic
```

## Copyright
Muhammad Arifin - 2024
