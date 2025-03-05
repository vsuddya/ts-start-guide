# ts start guide

1. Init new application
```
npm init -y
```

2. Install **ts-jest**
```
npm i -D ts-jest @types/jest
```

3. Create initial configuration for typescript
```
tsc --init
```

4. Create initial configuration for jest
```
npx ts-jest config:init
```

5. Modify ***package.json***
```
{
    "scrits": {
        "test": "jest"
    }
}
```

6. Run test
```
npm test
```

7. For CLI - Modify ***package.json***
```
{
    "bin": {
        "tsg": "index.js"
    }
}
```

8. To install (uninstall) CLI globally use
```
npm install -g .
npm list -g
npm uninstall -g tsg
```


Usefull links
+ https://www.npmjs.com/package/ts-jest
+ https://jestjs.io/docs/getting-started
+ https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html