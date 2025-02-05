# Angular_first_App

First project to learn the basic using of Angular ( version 19 )

## To start the project you need to firstly install some dependencies

- Install Angular by using the command : npm install -g @angular/cli

-look at the version of your angular by using : ng version

-Secondly creating an angular project by using the following command : ng new name_of_the_project

-Finaly enter in your project and strat it by using the command : ng serve

## Add the firs style of my app, let stating by the button style

-to do this you need to install a library that is 'anular material' by typing : npm install --save @angular/material @angular/cdk @angular/animations

-Then you need to import your library in your folder : src/.../app.components.ts

import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';

-After this your need to make the precision of impoted libraries in @component {} -> in Imports : [outerOutlet, CommonModule, MatButtonModule, MatDividerModule, MatIconModule]

-At the end of these steps , get in your app.component.html to use it .

### EXEMPLE :
![image](https://github.com/user-attachments/assets/d93f649f-9af0-45f5-83aa-5901a8bf809a)

-Run "ng server" you will notice :
![image](https://github.com/user-attachments/assets/3756e5fb-ce3c-4a38-a49d-509b0fd2e3a5)
NB: here there is pink color back to our <h1>Hello World</h1> because of a css property that i put.


