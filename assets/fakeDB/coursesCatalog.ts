import { Course } from 'src/app/course-catalog/course.model';

export class CourseCatalogFakeDB
{
    public static coursesCatalog: Course[] = [
    {
        id:1,
        name:"Data Science Course 2019", 
        description:"Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep Learning.",
        price:50,
        level:"Beginner",
        imagePath:"https://i.udemycdn.com/course/750x422/1754098_e0df_3.jpg"
    },
    {
        id:2,
        name:"Microsoft Excel", 
        description:'<ul class="audience__list"><li>This Microsoft Excel courses will take you through 4 levels of Microsoft Excel topics (Beginner, Intermediate, Advanced and Macros/VBA).</li><li>If your looking to take your Excel skills from beginner to advanced level and beyond, then this course is for you.</li></ul>',
        price:30,
        level:"Beginner",
        imagePath:"https://i.udemycdn.com/course/750x422/47156_c7f1_6.jpg"
    },
    {
        id:3,
        name:"Firebase Masterclass", 
        description:'<p>If you are looking for the&nbsp;<strong>best backend to go along with Angular</strong>, or even better if you are looking to do as little server-side development as possible and&nbsp;<em>focus mostly on the frontend</em>, then look no further: Firebase is the right choice for you.</p>',
        price:80,
        level:"Advanced",
        imagePath:"https://i.udemycdn.com/course/240x135/2038962_5db3.jpg"
    },
    {
        id:4,
        name:"Learn Ethical Hacking", 
        description:'<p>Welcome this comprehensive course&nbsp;on Ethical Hacking! This course assumes&nbsp;you have&nbsp;<strong>NO&nbsp;prior knowledge</strong>&nbsp;in hacking and by the end of it youll be able to&nbsp;&nbsp;<strong>hack systems like black-hat hackers</strong>&nbsp;and&nbsp;<strong>secure them like security experts!</strong></p>',
        price:95,
        level:"Beginner",
        imagePath:"https://i.udemycdn.com/course/240x135/857010_8239_2.jpg"
    },
    {
        id:5,
        name:"The Complete SQL Bootcamp", 
        description:'<p>Youll learn how to read and write complex queries to a database using one of the most in demand skills - PostgreSQL. These skills are also applicable to any other major SQL database, such&nbsp;as MySQL, Microsoft SQL Server, Amazon Redshift, Oracle, and much more.</p>',
        price:80,
        level:"Beginner",
        imagePath:"https://i.udemycdn.com/course/240x135/762616_7693_3.jpg"
    },
    {
        id:6,
        name:"Advanced iOS & Firebase", 
        description:'<p>Welcome to&nbsp;advanced iOS &amp; Firebase&nbsp;development. In this course youll learn advanced development&nbsp;skills by&nbsp;building a polished&nbsp;full stack and&nbsp;fully functional&nbsp;Uber clone app.&nbsp;We start from the ground up and teach you everything you need to know&nbsp;from UI design and frontend and backend development.</p>',
        price:100,
        level:"Advanced",
        imagePath:"https://i.udemycdn.com/course/240x135/1315552_6471_2.jpg"
    }
    ]
}