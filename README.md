Hi dev!

# Begin

The main thing you need to know is what is the adonis project version you are in. 
Thats depend of the node version. Please open a terminal and write "node -v".

In this case, is a API who needs a version above 20.6 (https://docs.adonisjs.com/guides/getting-started/installation)

# Run

To run your project you just need to use 'npm run dev', but by default the config in the file package.json does not have the --watch attribute to always look the changes in real time. For that goto "dev" and make sure to have this: "node ace serve --watch".

Adonis can work perfectly with a relational DB. It's the same thing is you use Sql Server or MySql for instance. In this case I configured .env with:

TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=PaKS-vusj6tvpc3aKNWJss7-e0_KpJwU
NODE_ENV=development
DB_HOST=127.0.0.1
DB_PORT=3307
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis

You may change to Sql Server, but remember changing the requirements for that.


# What this API consist of?

An user can create task, edit and delete them. Some specific routes are protected 
with authentication. The user who create the different tasks is the only one who may manipulate them. If you try to manipulate a task that does not belongs to you is result on an error (you are not allowed).


# Routes

If you want to see the routes name just tip in your terminal the command "node ace list:routes".

# who to manipulate this API.

The most single way is using PostMan. 
