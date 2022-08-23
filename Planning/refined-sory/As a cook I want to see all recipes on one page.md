# As a cook I want to see all recipes on one page

A detailed list of tasks required to setup the first POC.

## List of tasks

- [x] setup a new project with nextjs, react, prisma, ..
      in ubuntu we initialised a project by using create-t3-app
      to run the tool run this command:
      `pnpm dlx create-t3-app@latest`
      answer the questions
      `? What will your project be called? recipe-app ? Will you be using JavaScript or TypeScript? TypeScript Good choice! Using TypeScript! ? Which packages would you like to enable? prisma, tailwind ? Initialize a new git repository? No Sounds good! You can come back and run git init later. ? Would you like us to run pnpm install? Yes Alright. We'll install the dependencies for you!`

- [x] setup database (install & configure)
      just run `pnpm prisma db push`
      because creat-t3-app tool adds the correct settings
      running this command will automatically creat an sqlite database
- [x] ~~connect to DB~~ already done by create-t3-app
- [x] create table schema
      add the model of recipe below to the schema
      `model recipe { id Int @id @default(autoincrement()) title String description String ingredients String instructions String }`
- [x] create recipes table
      run ` pnpm prisma db push` again to aply the model in the new datatbase

- [x] eplore db if everything is setup
      run `pnpm prisma studio`
- [x] add first recipe in database
      in prisma studio select the recipe table and click add new record and add new a new recipe
- [x] querie recipes table to get the data
- [x] write the html list of recipes card
- [x] insert data into html
