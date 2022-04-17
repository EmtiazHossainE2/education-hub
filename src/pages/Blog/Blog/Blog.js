import React from 'react';
import './Blog.css'
import { GiThink } from 'react-icons/gi';
const Blog = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>Welcome to my blog section</h1>
            <div className='container mb-5 '>
                <h4 className='text-primary'> <GiThink /> Difference between authorization and authentication ? </h4>
                <p>From hosting and database, through static storage, messaging, analytics, and app distribution to cloud functions and machine learning, Firebase is truly an all-in-one solution.Firebase API is simply a pleasure to work with.When using NPM, everything is structured into modules, which can then be imported when needed. <br />
                    An important detail that boosts the API usability is of course good documentation. And here, Firebase also doesn't let down.Firebase is a de-facto standard and go-to choice for the vast majority of serverless apps.

                </p>
            </div>
            <div className='container mb-5'>
                <h4 className='text-primary'> <GiThink /> Why are you using firebase? What other options do you have to implement authentication? </h4>
                <p>In simple terms, authentication is the process of verifying who I am, while authorization is the process of granting permission to cloudHQ to access my cloud accounts (copy files, restore emails, etc.) on my behalf.Authentication is about validating my credentials like User Name/User ID and password to verify my identity. We use the OpenID Connect protocol for that. On the other hand, occurs after my identity is successfully authenticated by cloudHQ. Then i can give permission to cloudHQ to access the resources such as files, emails. This is handled with the OAuth2 protocol.So,authorization gives our system the ability to access our data in the cloud. <br />
                    Others options like Single-Factor/Primary Authentication ,Two-Factor Authentication (2FA) , Single Sign-On (SSO) ,Password Authentication Protocol (PAP) ,Certificate-based authentication,Extensible Authentication Protocol (EAP) options I can implement for authentication.
                </p>
            </div>
            <div className='container'>
                <h4 className='text-primary'> <GiThink /> What other services does firebase provide other than authentication
                </h4>
                <p>
                    Parse – Open Source Backend Platform;
                    Back4app – Parse Hosting Platform;
                    Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
                    Backendless – Mobile Backend and API Services Platform;
                    Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;
                    Pubnub – Real-time APIs and Global Messaging;
                    Kumulos – App Performance Management;
                    Game Sparks – Game Backend Platform;
                    Hoodie – Generic backend with a client API for Offline First applications;
                    Appwrite – Open-Source backend for Flutter developers
                    Deployd – Simple core library, with a modular API for your application;
                    NHost – Accelerates development and provides full control;
                    Amplify JS – Open-source Javascript framework;
                    Heroku – Platform as a service backed by Salesforce.
                </p>
            </div>

        </div>
    );
};

export default Blog;