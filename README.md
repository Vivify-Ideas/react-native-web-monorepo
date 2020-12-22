# React Native [Web] + Monorepo

Tech Stack: React Native v0.63, Next.js v10 
Prettier and ESLint are also configured as pre-commit hooks.

![article-cover](https://user-images.githubusercontent.com/619186/64933790-1fc27680-d81d-11e9-8077-64a1066b7c17.png)

### How to setup

- `$ yarn`
- Web
  - [Next.js] `$ yarn workspace web-nextjs dev`
- Mobile
  - [iOS]
    - `$ cd packages/mobile/ios && pod update && pod install && cd -`
    - [CLI]
      - `$ yarn ios`
    - [Xcode]
      - `$ yarn workspace mobile start`
      - `yarn xcode`
      - Press the Run button
  - [Android]
    - [CLI]
      - `$ yarn android`
    - [Android Studio]
      - `$ yarn workspace mobile start`
      - `yarn studio`
      - Press the Run button