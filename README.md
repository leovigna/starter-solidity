# Solidity Starter Project

Solidity starter project.

## Getting Started

### Installing

Save storage with [pnpm](https://pnpm.js.org/). You can also use regular NPM or Yarn.

```
pnpm install
```

### Cloning

To clone this starter repo and add it as an upstream folow below:

```
git clone https://github.com/leovigna/solidity-starter.git myproject
cd myproject
git remote set-url origin git@github.com/leovigna/myproject.git
git remote add upstream https://github.com/leovigna/solidity-starter.git
git push origin master
git push --all
```

Then to sync any new changes form this repo to the new repo follow these [instructions](https://help.github.com/en/articles/syncing-a-fork).

```
git fetch upstream
git checkout master
git merge upstream/master
```

### Testing

```
npm run test
```

### Codestyle

```
npm run lint
```

## Contributing

To contribute code, feel free to fork this repo.

## License

2020 Leo Vigna
MIT License.
