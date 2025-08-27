()-> helps to create route groups , this helps to organize data without the name of the group coming in the route url , eg. (main)

page.js is the main page for any route and layout.js is the layout that applies to all the children , so layout.js is useful for navbars , headers etc. as it helps to provide that layout to all the pages present in the folder, while pag.jsx helps to write the content of that particular page

client component-it is necessary to make a file client componenet so as to ensure the usage of recat features , to use hooks and other features we need to make our page client component , add at top  "use client" . we cannot use async functions in client component.

any page by default in js is a server component