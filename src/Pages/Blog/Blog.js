import React from 'react';
import Header from '../Shared/Header/Header';

const Blog = () => {
    return (
        <div >
            <Header></Header>
            <div className='ms-5 me-5'>
            <h3 className='text-white bg-info py-3 rounded mt-2'>What is the difference between Javascript and Nodejs?</h3>
            <p className='p-3 rounded text-white bg-secondary pb-3'>Node js: Node js is a cross-platform and opensourse javascript runtive environment that allows the javascript to be run 
            on the server-side. Nodejs allows javascript code to run on the server and outside of the browser. Nodejs comes with a lot of modules and mostly user in web development.

            Javascript: javascript is a scripting language or programming language. It is mostly abbreviated as js. It can be said that javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of oops but it is basede on prototype inheritance.</p>

            <h2 className='text-white bg-info py-3 rounded mt-2'>When should you use node js and when should you use mongodb?</h2>
            <p className='p-3 rounded text-white bg-secondary pb-3'>Node js is a javascript runtime it runs the js code. most commonly it is used to create the server that can respond to web request. MongoDB is a database. A database is the place whare we store website data. MongoDB offers an API library that runs within a Nodejs application to give your programativ access to MongoDB so you ca create database and then add, query update or delet form tha mongoDB database.These two technologies are for different parts to a typican web server system. you don't need to substitute one for the othser. Instead, you can use them together.</p>

            <h2 className='text-white bg-info py-3 rounded mt-2'>What is Differences between SQL and NoSQL?</h2>
            <p className='p-3 rounded text-white bg-secondary pb-3'>  <span className='bg-danger rounded p-2'>Sql database: </span>
                1.sql is table with fixed rows and columns
                2. sql is a relational database management system.
                3.  sql database have fixed schema
                4. sql is not suitable for hierarchical data store
                5. sql database are best suitable for complex queries
                6. sql is vertically scalable
            </p>
            <p className='p-3 rounded text-white bg-secondary pb-3'>  <span className='bg-danger rounded p-2'>NoSql database: </span>
                1. nosql is document (JSON documents, key-value ) type.
                2. nosql is non-relational database system
                3. nosql databases have dynamic schema
                4. nosql databse are best suited for hierarchical data storage
                5. nosql database are not so good for complex queries
                6. nosql is horixontally scalable
            </p>

            <h2 className='text-white bg-info py-3 rounded mt-2'>what is jwt and how does it work?</h2>
            <p className='p-3 rounded text-white bg-secondary pb-3'><span className='bg-danger rounded p-2'>What is JSON Web Token? </span> JSON wb token(jwt) is an open standard that defines a compact and self-contained way for securely transmittion betwwen parties as a JSON object. This information can be varified and trusted because it is digitally signed.</p>
            <p className='p-3 rounded text-white bg-secondary pb-3'><span className='bg-danger rounded p-2'>How jwt works? </span> basically the identity provider generates a jwt certifying user identity and resourse server decodes and varifies the authenticity of the token using public key

            1. user sign-in using username and password or soical media.
            2. Authentication server varifies the credentials and issues a jwt signed using either a public key.
            3. user's client uses the jwt to access protected resources by passign the jwt in HTTP authorization header.
            4. resource server then varifies the authenticity of the token using the public key
            </p>

            </div>
        </div>
    );
};

export default Blog;