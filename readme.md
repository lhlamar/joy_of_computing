install node on your computer. once node is installed and you have cloned the repo, run npm install inside of the project directory,
the neccessary packages will be automatically installed. once you
have done this. do npm run dev and a preview will come up

the "index.html" is the entry point for the application. meaning when you run 'npm run dev' it
looks for index.html and runs from there. that means don't rename or move index.html 
or it'll break stuff

the src directory will house all of the javascript code, html(other than index) and the css
styling

the index.html will be the home page of our project since it will be what loads upon
starting the application

the public folder is where all of the resources that the app uses go(non-code) 
such as images or .txt files or whatever else our app might need to use.

package.json details some scripts and idk what package-lock.json does but we shouldn't 
need to change either of these files

node_modules directory has all the modules that node.js currently has installed for our project
i don't know too much about any of them specifically but feel free to do more research
if ya'll want to use any of them we totally can do that.