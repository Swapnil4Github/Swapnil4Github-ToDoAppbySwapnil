<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://cdn.pixabay.com/photo/2017/01/31/11/48/checklist-2023731_1280.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Tasker : Create your Task</h3>

  <p align="center">
    An awesome todo app which will save your tasks for making your life easier !!
    <br />
    <br />
    <br />
    </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
         <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Tasker is simple and awesome app to organize your tasks with very easy to use interface. Tasker can help you to make list of your tasks. We believe that we only focus on our Today and Tomorrow tasks, which is most important

### Built With

* Node.js: Node.js is a platform built on Chrome’s JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.


* MongoDB: MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.


* Express : Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.


* CRUD: CRUD stands for Create, Read, Update and Delete. Which are the basic operations that a simple web app would be designed to achieve.


* Rest: If you didn’t hear about REST before, you can read more about it here.

Pre-requirements :
VS Code installed or other editor you may like.
<!-- FEATURES -->

### Feautres
 <a href="https://cdn.pixabay.com/photo/2021/04/01/20/56/20-56-16-6_1280.jpg">
    <img src="https://cdn.pixabay.com/photo/2021/04/01/20/56/20-56-16-6_1280.jpg">
  </a>


1) Create a Task

2) Edit Older Task

3) Delete Older Task

4) Auto Delete Task after Duration Ended

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```


<!-- ROADMAP -->
## Roadmap

* I build the basic GUI and backend functionality with help of Node.js and used MongoDB for database.
 
 * For deleting the created task automatically after the it's time duration is expired i have implemented CRON job for this purpose
So what is CRON job !!
CRON job used for scheduling tasks to be executed sometime in the future. This is normally used to schedule a job that is executed periodically – for example, to send out a notice every morning.
and in our scenario we want to delete the tasks whose time are expired
So i wrote the code inside CRON job that runs every second and get all the tasks and then it checks all tasks expiry date one by one and if there is any task whose expiry date is less then the current time so it means the task duration has been passed/ended if so then delete that task.

<!-- CONTRIBUTING -->
## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Open Source 



<!-- CONTACT -->
## Contact

Instagram : https://www.instagram.com/swapnilsrivastava3014/
Youtube : https://www.youtube.com/channel/UCQKlwjBiPLztTCqbzKmV5eQ

Project Link: https://github.com/Swapnil4Github/Swapnil4Github-ToDoAppbySwapnil



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [NodeJs Documentation](https://nodejs.org/en/docs/)
* [MongoDB Documentation](https://nodejs.org/en/docs/)
