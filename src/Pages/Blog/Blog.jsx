import React from 'react';

const Blog = () => {
    return (
        <div className='px-20'>
            <h1 className='text-4xl font-semibold text-yellow-600 text-start mt-4'>Some FAQ,,</h1>
            <div className='my-8'>
                <h1 className='text-2xl'>What are the different ways to manage a state in a React application?</h1>
                <p><span className='underline'>Ans:</span> There are four main types of state you need to properly manage in your React apps: <br />
                    1.Local state <br />
                    2.Global state <br />
                    3.Server state <br />
                    4.URL state
                </p>
            </div>
            <div className='my-8'>
                <h1 className='text-2xl'>How does prototypical inheritance work?</h1>
                <p><span className='underline'>Ans:</span>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
            </div>
            <div className='my-8'>
                <h1 className='text-2xl'>What is a unit test? Why should we write unit tests?</h1>
                <p><span className='underline'>Ans:</span>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>
            <div className='my-8'>
                <h1 className='text-2xl'>React vs. Angular vs. Vue?</h1>
                <p><span className='underline'>Ans:</span>
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                </p>
            </div>
        </div>
    );
};

export default Blog;