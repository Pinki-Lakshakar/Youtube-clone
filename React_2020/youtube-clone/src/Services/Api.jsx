/*const { get } = require("jquery");*/

 import axios from "axios";
const KEY="AIzaSyArXw59rgrRj-c32UrSLFH16ASKH0rxVig";
 //AXIOS LIBRARY
 //Promise Based library to perform https request like get,PUT,POST,PATCH,DELETE,
 export const baseParams={
    part:"snippet",
    maxResult:10,
    key:KEY,
 };
 export default axios.create({
     baseURL:"https://www.googleapis.com/youtube/v3/search",
 })